'use client';

import React, { useCallback, useEffect, useRef, useState, useId } from 'react';
import { useNavigation } from './NavigationProvider';

interface NavSectionProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
  id?: string;
}

export default function NavSection({ children, title, className = '', id }: NavSectionProps) {
  const uniqueId = useId();
  const sectionIndexRef = useRef<number | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const { registerSection, unregisterSection, activeCard, setActiveCardFromMouse } = useNavigation();

  const updatePaddles = useCallback(() => {
    const grid = gridRef.current;
    if (!grid) return;
    setCanScrollLeft(grid.scrollLeft > 4);
    setCanScrollRight(grid.scrollLeft + grid.clientWidth < grid.scrollWidth - 4);
  }, []);

  useEffect(() => {
    updatePaddles();
    const grid = gridRef.current;
    if (!grid) return;
    grid.addEventListener('scroll', updatePaddles, { passive: true });
    window.addEventListener('resize', updatePaddles);
    return () => {
      grid.removeEventListener('scroll', updatePaddles);
      window.removeEventListener('resize', updatePaddles);
    };
  }, [updatePaddles]);

  const scrollByPage = (direction: 1 | -1) => {
    const grid = gridRef.current;
    if (!grid) return;
    grid.scrollBy({ left: direction * grid.clientWidth * 0.9, behavior: 'smooth' });
  };

  // Count cards in this section
  const cardCount = React.Children.count(
    React.Children.toArray(children).filter(
      (child) => React.isValidElement(child)
    )
  );

  useEffect(() => {
    sectionIndexRef.current = registerSection(uniqueId, cardCount);
    
    return () => {
      if (sectionIndexRef.current !== null) {
        unregisterSection(sectionIndexRef.current);
      }
    };
  }, [uniqueId, cardCount, registerSection, unregisterSection]);

  // Mouse hover - uses the mouse-specific setter that checks for actual movement
  const handleCardHover = (cardIndex: number) => {
    if (sectionIndexRef.current !== null) {
      setActiveCardFromMouse({ sectionIndex: sectionIndexRef.current, cardIndex });
    }
  };

  const isCardActive = (cardIndex: number) => {
    return (
      activeCard !== null &&
      sectionIndexRef.current !== null &&
      activeCard.sectionIndex === sectionIndexRef.current &&
      activeCard.cardIndex === cardIndex
    );
  };

  return (
    <div
      className={`netflix-section ${className}`}
      id={id}
      data-nav-section={sectionIndexRef.current ?? undefined}
    >
      {title && <h2 className="netflix-section-title">{title}</h2>}
      <div className="netflix-row">
        <button
          type="button"
          className={`row-paddle row-paddle-left ${canScrollLeft ? '' : 'hidden'}`}
          aria-label="Scroll row left"
          tabIndex={-1}
          onClick={() => scrollByPage(-1)}
        >
          <svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <path d="M15 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <div className="netflix-grid netflix-grid-medium" ref={gridRef}>
          {React.Children.map(children, (child, index) => {
            if (React.isValidElement(child)) {
              return React.cloneElement(child as React.ReactElement<{
                isActive?: boolean;
                onMouseEnter?: () => void;
                cardIndex?: number;
              }>, {
                isActive: isCardActive(index),
                onMouseEnter: () => handleCardHover(index),
                cardIndex: index
              });
            }
            return child;
          })}
        </div>
        <button
          type="button"
          className={`row-paddle row-paddle-right ${canScrollRight ? '' : 'hidden'}`}
          aria-label="Scroll row right"
          tabIndex={-1}
          onClick={() => scrollByPage(1)}
        >
          <svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}

