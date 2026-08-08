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

/** Deterministic 91-99% match from the title, so SSR and client agree. */
function matchFromTitle(title: string): number {
  let hash = 0;
  for (let i = 0; i < title.length; i++) {
    hash = (hash * 31 + title.charCodeAt(i)) >>> 0;
  }
  return 91 + (hash % 9);
}

const NetflixCard = forwardRef<HTMLDivElement, NetflixCardProps>(({
  title,
  subtitle,
  description,
  imageUrl,
  rating,
  duration,
  tags = [],
  href,
  isFocused = false,
  isActive = false,
  onFocus,
  onMouseEnter,
  onKeyDown,
  cardIndex,
  imagePosition = 5
}, ref) => {
  // Convert position (1-10) to CSS percentage (100%-0%)
  const clampedPosition = Math.max(1, Math.min(10, imagePosition));
  const positionPercent = ((10 - clampedPosition) / 9) * 100;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const internalRef = useRef<HTMLDivElement>(null);
  const cardRef = (ref as React.RefObject<HTMLDivElement>) || internalRef;

  const match = matchFromTitle(title);
  const isHighlighted = isActive || isFocused;

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (onKeyDown) {
      onKeyDown(e);
    }
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
    if (onMouseEnter) {
      onMouseEnter();
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
        className={`netflix-card ${isHighlighted ? 'highlighted' : ''} ${isActive ? 'active' : ''}`}
        onKeyDown={handleKeyDown}
        onFocus={handleFocus}
        onMouseEnter={handleMouseEnter}
        onClick={() => setIsModalOpen(true)}
        tabIndex={0}
        role="button"
        aria-label={`${title}${subtitle ? ` - ${subtitle}` : ''}. Press Enter for details`}
        data-card-index={cardIndex}
      >
        {/* Artwork */}
        <div className="netflix-card-image">
          <Image
            src={imageUrl}
            alt={title}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            style={{ objectFit: 'cover', objectPosition: `center ${positionPercent}%` }}
          />
          <span className="netflix-card-logo" aria-hidden="true">G</span>
          <div className="netflix-card-scrim" aria-hidden="true" />
          <span className="netflix-card-name">{title}</span>
        </div>

        {/* Slide-up info panel (hover / keyboard focus) */}
        <div className="netflix-card-panel" aria-hidden="true">
          <div className="netflix-card-actions">
            {href ? (
              <a
                href={href}
                className="card-btn card-btn-play"
                onClick={(e) => e.stopPropagation()}
                target={/^(https?:|mailto:)/.test(href) ? '_blank' : undefined}
                rel={/^(https?:|mailto:)/.test(href) ? 'noopener noreferrer' : undefined}
                aria-label={`Open ${title}`}
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M6 4l15 8-15 8z" /></svg>
              </a>
            ) : (
              <button
                className="card-btn card-btn-play"
                onClick={(e) => { e.stopPropagation(); setIsModalOpen(true); }}
                tabIndex={-1}
                aria-label={`View ${title}`}
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M6 4l15 8-15 8z" /></svg>
              </button>
            )}
            <button
              className="card-btn card-btn-more"
              onClick={(e) => { e.stopPropagation(); setIsModalOpen(true); }}
              tabIndex={-1}
              aria-label={`More info about ${title}`}
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
          </div>
          <div className="netflix-card-panel-meta">
            <span className="netflix-card-match">{match}% Match</span>
            {subtitle && <span className="netflix-card-panel-subtitle">{subtitle}</span>}
          </div>
          {tags.length > 0 && (
            <div className="netflix-card-panel-tags">
              {tags.slice(0, 3).map((tag, index) => (
                <span key={index}>{tag}</span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Jumbo modal */}
      {isModalOpen && (
        <div className="netflix-modal-overlay" onClick={closeModal}>
          <div className="netflix-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="netflix-modal-close"
              onClick={closeModal}
              aria-label="Close modal"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" /></svg>
            </button>

            <div className="netflix-modal-hero">
              <Image
                src={imageUrl}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, 850px"
                style={{ objectFit: 'cover', objectPosition: `center ${positionPercent}%` }}
                priority
              />
              <div className="netflix-modal-hero-fade" aria-hidden="true" />
              <div className="netflix-modal-hero-content">
                <h1 className="netflix-modal-title">{title}</h1>
                <div className="netflix-modal-actions">
                  {href && (
                    <a
                      href={href}
                      className="bb-btn bb-btn-play netflix-modal-play"
                      target={/^(https?:|mailto:)/.test(href) ? '_blank' : undefined}
                      rel={/^(https?:|mailto:)/.test(href) ? 'noopener noreferrer' : undefined}
                    >
                      <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M6 4l15 8-15 8z" /></svg>
                      View More
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className="netflix-modal-body">
              <div className="netflix-modal-main">
                <div className="netflix-modal-matchline">
                  <span className="netflix-modal-match">{match}% Match</span>
                  {rating && <span>{rating}</span>}
                  {duration && <span>{duration}</span>}
                  <span className="netflix-modal-hd">HD</span>
                </div>
                {subtitle && <p className="netflix-modal-subtitle">{subtitle}</p>}
                <p className="netflix-modal-description">{description}</p>
              </div>
              {tags.length > 0 && (
                <div className="netflix-modal-side">
                  <p>
                    <span className="netflix-modal-label">Vibes: </span>
                    {tags.join(', ')}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
});

NetflixCard.displayName = 'NetflixCard';

export default NetflixCard;
