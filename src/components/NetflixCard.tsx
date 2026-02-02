'use client';

import { useState, useRef, useEffect, forwardRef } from 'react';
import Image from 'next/image';

interface NetflixCardProps {
  title: string;
  subtitle?: string;
  description: string;
  imageUrl: string;
  badge?: string;
  rating?: string;
  duration?: string;
  tags?: string[];
  href?: string;
  size?: 'small' | 'medium' | 'large' | 'hero';
  isFocused?: boolean;
  isActive?: boolean;
  onFocus?: () => void;
  onMouseEnter?: () => void;
  onKeyDown?: (e: React.KeyboardEvent) => void;
  cardIndex?: number;
  /** Image vertical position: 10=top, 5=middle (default), 1=bottom */
  imagePosition?: number;
}

const NetflixCard = forwardRef<HTMLDivElement, NetflixCardProps>(({ 
  title, 
  subtitle, 
  description, 
  imageUrl, 
  // badge - extracted but unused, kept in interface for API compatibility
  rating, 
  duration, 
  tags = [], 
  href,
  size = 'medium',
  isFocused = false,
  isActive = false,
  onFocus,
  onMouseEnter,
  onKeyDown,
  cardIndex,
  imagePosition = 5
}, ref) => {
  // Convert position (1-10) to CSS percentage (100%-0%)
  // 10 = top (0%), 5 = middle (~55%), 1 = bottom (100%)
  const clampedPosition = Math.max(1, Math.min(10, imagePosition));
  const positionPercent = ((10 - clampedPosition) / 9) * 100;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const internalRef = useRef<HTMLDivElement>(null);
  const cardRef = (ref as React.RefObject<HTMLDivElement>) || internalRef;

  const sizeClasses = {
    small: 'netflix-card-small',
    medium: 'netflix-card-medium', 
    large: 'netflix-card-large',
    hero: 'netflix-card-hero'
  };

  // Card visual state is determined by isActive prop from NavSection
  // The NavSection handles the logic of keyboard vs mouse priority
  const isHighlighted = isActive || isFocused;

  const handleMoreInfo = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsModalOpen(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    // Pass arrow key events to parent for navigation
    if (onKeyDown) {
      onKeyDown(e);
    }
    
    // Open modal on Enter, Space, or I
    if (e.key === 'Enter' || e.key === ' ' || e.key === 'i' || e.key === 'I') {
      e.preventDefault();
      setIsModalOpen(true);
    }
  };

  const handleFocus = () => {
    if (onFocus) {
      onFocus();
    }
  };

  const handleMouseEnter = () => {
    // Just notify parent - it will decide if this should activate the card
    if (onMouseEnter) {
      onMouseEnter();
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Focus this card when isActive changes
  useEffect(() => {
    if (isActive && cardRef.current) {
      cardRef.current.focus();
    }
  }, [isActive, cardRef]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <>
      <div 
        ref={cardRef}
        className={`netflix-card ${sizeClasses[size]} ${isHighlighted ? 'highlighted' : ''} ${isActive ? 'active' : ''}`}
        onKeyDown={handleKeyDown}
        onFocus={handleFocus}
        onMouseEnter={handleMouseEnter}
        tabIndex={0}
        role="button"
        aria-label={`${title}${subtitle ? ` - ${subtitle}` : ''}`}
        data-card-index={cardIndex}
      >
        {/* Image container */}
        <div className="netflix-card-image">
          <Image
            src={imageUrl}
            alt={title}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            style={{ objectFit: 'cover', objectPosition: `center ${positionPercent}%` }}
          />
          {/* Tags overlay - only shows on hover/focus/active */}
          {tags.length > 0 && (
            <div className="netflix-overlay">
              <div className="netflix-tags">
                {tags.map((tag, index) => (
                  <span key={index} className="netflix-tag">{tag}</span>
                ))}
              </div>
            </div>
          )}
        </div>
        
        {/* Action bar below image */}
        <div className="netflix-card-bar">
          <button 
            className="netflix-btn netflix-btn-info"
            onClick={handleMoreInfo}
          >
            <span>ⓘ</span> More Info
          </button>
        </div>
      </div>

      {/* Modal - shows full details */}
      {isModalOpen && (
        <div className="netflix-modal-overlay" onClick={closeModal}>
          <div className="netflix-modal" onClick={(e) => e.stopPropagation()}>
            <button 
              className="netflix-modal-close" 
              onClick={closeModal}
              aria-label="Close modal"
            >
              ×
            </button>
            <div className="netflix-modal-content">
              <div className="netflix-modal-image">
                <Image
                  src={imageUrl}
                  alt={title}
                  fill
                  sizes="(max-width: 768px) 100vw, 80vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="netflix-modal-info">
                <h1 className="netflix-modal-title">{title}</h1>
                {subtitle && <h2 className="netflix-modal-subtitle">{subtitle}</h2>}
                <p className="netflix-modal-description">{description}</p>
                
                {(rating || duration) && (
                  <div className="netflix-modal-meta">
                    {rating && <span className="netflix-modal-rating">{rating}</span>}
                    {duration && <span className="netflix-modal-duration">{duration}</span>}
                  </div>
                )}
                
                {tags.length > 0 && (
                  <div className="netflix-modal-tags">
                    {tags.map((tag, index) => (
                      <span key={index} className="netflix-modal-tag">{tag}</span>
                    ))}
                  </div>
                )}
                
                {href && (
                  <div className="netflix-modal-actions">
                    <a 
                      href={href}
                      className="netflix-modal-btn netflix-modal-btn-primary"
                    >
                      View More
                    </a>
                    <button 
                      className="netflix-modal-btn netflix-modal-btn-close"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                  </div>
                )}
                {!href && (
                  <div className="netflix-modal-actions">
                    <button 
                      className="netflix-modal-btn netflix-modal-btn-close"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
});

NetflixCard.displayName = 'NetflixCard';

export default NetflixCard; 