'use client';

import React, { useState, useRef, useEffect, ReactNode, useCallback } from 'react';

interface NetflixGridProps {
  children: ReactNode;
  className?: string;
  cols?: number;
  gridType?: 'small' | 'medium' | 'large';
}

export default function NetflixGrid({ 
  children, 
  className = '', 
  cols = 4,
  gridType = 'medium'
}: NetflixGridProps) {
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const totalCards = React.Children.count(children);

  // Calculate actual columns based on grid type for navigation
  const getActualCols = useCallback(() => {
    if (typeof window === 'undefined') return cols;
    const gridElement = gridRef.current;
    if (!gridElement) return cols;
    
    const gridStyle = window.getComputedStyle(gridElement);
    const columnCount = gridStyle.getPropertyValue('grid-template-columns').split(' ').length;
    return columnCount || cols;
  }, [cols]);

  const navigateToCard = useCallback((newIndex: number) => {
    if (newIndex >= 0 && newIndex < totalCards) {
      setFocusedIndex(newIndex);
      cardRefs.current[newIndex]?.focus();
    }
  }, [totalCards]);

  const handleCardFocus = useCallback((index: number) => {
    setFocusedIndex(index);
  }, []);

  const handleCardKeyDown = useCallback((e: React.KeyboardEvent, index: number) => {
    // Let the card handle its own key events first
    if (e.key === 'Enter' || e.key === ' ' || e.key === 'i' || e.key === 'I') {
      return; // Let the card handle these
    }

    const actualCols = getActualCols();
    let newIndex = index;

    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault();
        newIndex = Math.max(0, index - 1);
        break;
      case 'ArrowRight':
        e.preventDefault();
        newIndex = Math.min(totalCards - 1, index + 1);
        break;
      case 'ArrowUp':
        e.preventDefault();
        newIndex = Math.max(0, index - actualCols);
        break;
      case 'ArrowDown':
        e.preventDefault();
        newIndex = Math.min(totalCards - 1, index + actualCols);
        break;
      case 'Home':
        e.preventDefault();
        newIndex = 0;
        break;
      case 'End':
        e.preventDefault();
        newIndex = totalCards - 1;
        break;
      case 'Tab':
        // Allow natural tab navigation but update our state
        if (e.shiftKey) {
          newIndex = Math.max(0, index - 1);
        } else {
          newIndex = Math.min(totalCards - 1, index + 1);
        }
        setFocusedIndex(newIndex);
        return; // Don't prevent default, let tab work naturally
      default:
        return;
    }

    if (newIndex !== index) {
      navigateToCard(newIndex);
    }
  }, [totalCards, getActualCols, navigateToCard]);

  return (
    <div 
      ref={gridRef}
      className={`netflix-grid netflix-grid-${gridType} ${className}`}
      role="grid"
      aria-label="Content grid - use arrow keys to navigate"
    >
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<{
            isFocused?: boolean;
            onFocus?: () => void;
            onKeyDown?: (e: React.KeyboardEvent) => void;
            ref?: (el: HTMLDivElement | null) => void;
            cardIndex?: number;
          }>, {
            isFocused: index === focusedIndex,
            onFocus: () => handleCardFocus(index),
            onKeyDown: (e: React.KeyboardEvent) => handleCardKeyDown(e, index),
            ref: (el: HTMLDivElement | null) => {
              cardRefs.current[index] = el;
            },
            cardIndex: index
          });
        }
        return child;
      })}
    </div>
  );
}
