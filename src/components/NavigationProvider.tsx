'use client';

import React, { createContext, useContext, useState, useCallback, useEffect, useRef } from 'react';

interface CardPosition {
  sectionIndex: number;
  cardIndex: number;
}

interface NavigationContextType {
  activeCard: CardPosition | null;
  isNavigating: boolean;
  isMouseActive: boolean;
  setActiveCard: (position: CardPosition | null) => void;
  setActiveCardFromMouse: (position: CardPosition | null) => void;
  registerSection: (sectionId: string, cardCount: number) => number;
  unregisterSection: (sectionIndex: number) => void;
  getSectionCardCount: (sectionIndex: number) => number;
  totalSections: number;
}

const NavigationContext = createContext<NavigationContextType | null>(null);

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
}

interface NavigationProviderProps {
  children: React.ReactNode;
}

export function NavigationProvider({ children }: NavigationProviderProps) {
  const [activeCard, setActiveCardState] = useState<CardPosition | null>(null);
  const [isNavigating, setIsNavigating] = useState(false);
  const [isMouseActive, setIsMouseActive] = useState(false);
  const sectionsRef = useRef<Map<number, { id: string; cardCount: number }>>(new Map());
  const sectionCounterRef = useRef(0);
  const [totalSections, setTotalSections] = useState(0);
  
  // Track mouse position to detect actual movement
  const lastMousePosRef = useRef({ x: 0, y: 0 });
  const mouseMovedRef = useRef(false);
  const keyboardActiveRef = useRef(false);

  const registerSection = useCallback((sectionId: string, cardCount: number) => {
    const index = sectionCounterRef.current++;
    sectionsRef.current.set(index, { id: sectionId, cardCount });
    setTotalSections(sectionsRef.current.size);
    return index;
  }, []);

  const unregisterSection = useCallback((sectionIndex: number) => {
    sectionsRef.current.delete(sectionIndex);
    setTotalSections(sectionsRef.current.size);
  }, []);

  const getSectionCardCount = useCallback((sectionIndex: number) => {
    return sectionsRef.current.get(sectionIndex)?.cardCount || 0;
  }, []);

  // Called by keyboard navigation
  const setActiveCard = useCallback((position: CardPosition | null) => {
    keyboardActiveRef.current = true;
    mouseMovedRef.current = false; // Reset mouse moved flag
    setIsMouseActive(false);
    setActiveCardState(position);
    setIsNavigating(position !== null);
  }, []);

  // Called by mouse hover - only works if mouse has actually moved
  const setActiveCardFromMouse = useCallback((position: CardPosition | null) => {
    if (!mouseMovedRef.current) return; // Ignore if mouse hasn't moved
    
    keyboardActiveRef.current = false;
    setIsMouseActive(true);
    setActiveCardState(position);
    setIsNavigating(position !== null);
  }, []);

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const dx = Math.abs(e.clientX - lastMousePosRef.current.x);
      const dy = Math.abs(e.clientY - lastMousePosRef.current.y);
      
      // Only consider it a move if the mouse moved more than 5px
      if (dx > 5 || dy > 5) {
        mouseMovedRef.current = true;
        lastMousePosRef.current = { x: e.clientX, y: e.clientY };
        
        // If keyboard was active, mouse movement takes over
        if (keyboardActiveRef.current) {
          keyboardActiveRef.current = false;
          setIsMouseActive(true);
          
          // Remove keyboard-nav-active class from page
          document.querySelector('.netflix-page')?.classList.remove('keyboard-nav-active');
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Add/remove keyboard-nav-active class based on navigation state
  useEffect(() => {
    const page = document.querySelector('.netflix-page');
    if (!page) return;

    if (isNavigating && !isMouseActive) {
      page.classList.add('keyboard-nav-active');
    } else {
      page.classList.remove('keyboard-nav-active');
    }
  }, [isNavigating, isMouseActive]);

  // Find first visible section on screen
  const findFirstVisibleSection = useCallback(() => {
    const sections = document.querySelectorAll('[data-nav-section]');
    const viewportCenter = window.innerHeight / 2;
    
    for (let i = 0; i < sections.length; i++) {
      const section = sections[i] as HTMLElement;
      const rect = section.getBoundingClientRect();
      
      // Section is visible if any part is in the viewport
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const sectionIndex = parseInt(section.dataset.navSection || '0', 10);
        return sectionIndex;
      }
    }
    return 0;
  }, []);

  // Track current scroll animation so we can cancel it
  const scrollAnimationRef = useRef<number | null>(null);

  // Linear scroll - constant speed, no acceleration
  const smoothScrollTo = useCallback((targetY: number, duration: number = 300) => {
    // Cancel any existing scroll animation
    if (scrollAnimationRef.current !== null) {
      cancelAnimationFrame(scrollAnimationRef.current);
      scrollAnimationRef.current = null;
    }

    const startY = window.scrollY;
    const difference = targetY - startY;
    const startTime = performance.now();
    
    const animateScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Pure linear - no easing function, just direct progress
      window.scrollTo(0, startY + difference * progress);
      
      if (progress < 1) {
        scrollAnimationRef.current = requestAnimationFrame(animateScroll);
      } else {
        scrollAnimationRef.current = null;
      }
    };
    
    scrollAnimationRef.current = requestAnimationFrame(animateScroll);
  }, []);

  // Scroll card to center of screen (vertical) and center in row (horizontal)
  const scrollCardToCenter = useCallback((sectionIndex: number, cardIndex: number) => {
    const card = document.querySelector(
      `[data-nav-section="${sectionIndex}"] [data-card-index="${cardIndex}"]`
    ) as HTMLElement;
    
    if (card) {
      const cardRect = card.getBoundingClientRect();
      const cardCenter = cardRect.top + cardRect.height / 2;
      const viewportCenter = window.innerHeight / 2;
      const scrollOffset = cardCenter - viewportCenter;
      const targetScrollY = window.scrollY + scrollOffset;
      
      // Vertical scroll - only if card is significantly off-center
      if (Math.abs(scrollOffset) > 50) {
        smoothScrollTo(targetScrollY, 350);
      }
      
      // Horizontal scroll within the row
      const row = card.closest('.netflix-grid') as HTMLElement;
      if (row) {
        const rowRect = row.getBoundingClientRect();
        const cardCenterX = cardRect.left + cardRect.width / 2;
        const rowCenterX = rowRect.left + rowRect.width / 2;
        const horizontalOffset = cardCenterX - rowCenterX;
        
        // Scroll the row to center the card
        row.scrollBy({
          left: horizontalOffset,
          behavior: 'smooth'
        });
      }
    }
  }, [smoothScrollTo]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't handle if modal is open or input is focused
      if (document.querySelector('.netflix-modal-overlay')) return;
      if (document.activeElement?.tagName === 'INPUT' || 
          document.activeElement?.tagName === 'TEXTAREA') return;

      const sections = Array.from(sectionsRef.current.entries()).sort((a, b) => a[0] - b[0]);
      if (sections.length === 0) return;

      // Start navigation with Down or Right if not already navigating
      if (!isNavigating && (e.key === 'ArrowDown' || e.key === 'ArrowRight')) {
        e.preventDefault();
        const firstVisibleSection = findFirstVisibleSection();
        const newPosition = { sectionIndex: firstVisibleSection, cardIndex: 0 };
        setActiveCard(newPosition);
        scrollCardToCenter(newPosition.sectionIndex, newPosition.cardIndex);
        
        // Focus the card
        const card = document.querySelector(
          `[data-nav-section="${firstVisibleSection}"] [data-card-index="0"]`
        ) as HTMLElement;
        card?.focus();
        return;
      }

      if (!isNavigating || activeCard === null) return;

      const currentSection = activeCard.sectionIndex;
      const currentCard = activeCard.cardIndex;
      const currentSectionCardCount = getSectionCardCount(currentSection);

      let newPosition: CardPosition | null = null;

      switch (e.key) {
        case 'ArrowRight':
          e.preventDefault();
          // Loop within category
          const nextCard = (currentCard + 1) % currentSectionCardCount;
          newPosition = { sectionIndex: currentSection, cardIndex: nextCard };
          break;

        case 'ArrowLeft':
          e.preventDefault();
          // Loop within category
          const prevCard = currentCard === 0 ? currentSectionCardCount - 1 : currentCard - 1;
          newPosition = { sectionIndex: currentSection, cardIndex: prevCard };
          break;

        case 'ArrowDown':
          e.preventDefault();
          // Find next section
          const sortedSections = sections.map(s => s[0]).sort((a, b) => a - b);
          const currentSectionIdx = sortedSections.indexOf(currentSection);
          if (currentSectionIdx < sortedSections.length - 1) {
            const nextSectionIndex = sortedSections[currentSectionIdx + 1];
            newPosition = { sectionIndex: nextSectionIndex, cardIndex: 0 };
          }
          break;

        case 'ArrowUp':
          e.preventDefault();
          // Find previous section
          const sortedSectionsUp = sections.map(s => s[0]).sort((a, b) => a - b);
          const currentSectionIdxUp = sortedSectionsUp.indexOf(currentSection);
          if (currentSectionIdxUp > 0) {
            const prevSectionIndex = sortedSectionsUp[currentSectionIdxUp - 1];
            newPosition = { sectionIndex: prevSectionIndex, cardIndex: 0 };
          }
          break;

        case 'Escape':
          e.preventDefault();
          setActiveCard(null);
          return;

        case 'Enter':
        case ' ':
          // Let the card handle opening the modal
          return;

        default:
          return;
      }

      if (newPosition) {
        setActiveCard(newPosition);
        scrollCardToCenter(newPosition.sectionIndex, newPosition.cardIndex);
        
        // Focus the new card
        const card = document.querySelector(
          `[data-nav-section="${newPosition.sectionIndex}"] [data-card-index="${newPosition.cardIndex}"]`
        ) as HTMLElement;
        card?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isNavigating, activeCard, getSectionCardCount, findFirstVisibleSection, scrollCardToCenter, setActiveCard]);

  return (
    <NavigationContext.Provider
      value={{
        activeCard,
        isNavigating,
        isMouseActive,
        setActiveCard,
        setActiveCardFromMouse,
        registerSection,
        unregisterSection,
        getSectionCardCount,
        totalSections
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}

