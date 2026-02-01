'use client';

import React, { useEffect, useRef, useId } from 'react';
import { useNavigation } from './NavigationProvider';

interface NavSectionProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export default function NavSection({ children, title, className = '' }: NavSectionProps) {
  const uniqueId = useId();
  const sectionIndexRef = useRef<number | null>(null);
  const { registerSection, unregisterSection, activeCard, setActiveCardFromMouse } = useNavigation();

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
      data-nav-section={sectionIndexRef.current ?? undefined}
    >
      {title && <h2 className="netflix-section-title">{title}</h2>}
      <div className="netflix-grid netflix-grid-medium">
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
    </div>
  );
}

