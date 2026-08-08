'use client';

import Image from 'next/image';

interface BillboardCta {
  text: string;
  href: string;
}

interface BillboardProps {
  title: string;
  tagline?: string;
  description: string;
  imageUrl: string;
  /** Image vertical position: 10=top, 5=middle (default), 1=bottom */
  imagePosition?: number;
  /** e.g. "#1 in Ireland Today" — rendered next to a TOP 10 style plaque */
  badge?: string;
  /** Small maturity-style tag shown on the right edge, e.g. "18+" */
  ratingFlag?: string;
  meta?: string[];
  primaryCta?: BillboardCta;
  secondaryCta?: BillboardCta;
  /** Brand line above the title, e.g. "Series" renders as "G SERIES" */
  seriesLabel?: string;
  /** Put the text block on the right when the photo's subject is on the left */
  contentAlign?: 'left' | 'right';
  /** Green match percentage, e.g. "98% Match" */
  match?: string;
  year?: string;
  /** e.g. "10 Parts" or "26 Seasons" */
  parts?: string;
}

export default function Billboard({
  title,
  tagline,
  description,
  imageUrl,
  imagePosition = 5,
  badge,
  ratingFlag,
  meta = [],
  primaryCta,
  secondaryCta,
  seriesLabel = 'Series',
  contentAlign = 'left',
  match,
  year,
  parts,
}: BillboardProps) {
  const clamped = Math.max(1, Math.min(10, imagePosition));
  const positionPercent = ((10 - clamped) / 9) * 100;

  const isExternal = (href: string) => /^(https?:|mailto:)/.test(href);

  const renderCta = (cta: BillboardCta, variant: 'play' | 'info') => {
    const className = variant === 'play' ? 'bb-btn bb-btn-play' : 'bb-btn bb-btn-info';
    const icon =
      variant === 'play' ? (
        <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true">
          <path d="M6 4l15 8-15 8z" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 8h.01M12 11v5" strokeLinecap="round" />
        </svg>
      );

    return isExternal(cta.href) ? (
      <a href={cta.href} className={className} target="_blank" rel="noopener noreferrer">
        {icon}
        {cta.text}
      </a>
    ) : (
      <a href={cta.href} className={className}>
        {icon}
        {cta.text}
      </a>
    );
  };

  return (
    <section className={`billboard ${contentAlign === 'right' ? 'billboard-right' : ''}`} aria-label={title}>
      <div className="billboard-image">
        <Image
          src={imageUrl}
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: `center ${positionPercent}%` }}
        />
      </div>
      <div className="billboard-vignette" aria-hidden="true" />
      <div className="billboard-fade" aria-hidden="true" />

      <div className="billboard-content">
        {badge && (
          <div className="billboard-badge">
            <span className="billboard-badge-plaque" aria-hidden="true">
              <em>Top</em>
              <strong>10</strong>
            </span>
            <span className="billboard-badge-text">{badge}</span>
          </div>
        )}

        <div className="billboard-series" aria-hidden="true">
          <span className="billboard-series-logo">G</span>
          <span className="billboard-series-label">{seriesLabel}</span>
        </div>
        <h1 className="billboard-title">{title}</h1>
        {(match || year || parts) && (
          <div className="billboard-matchline">
            {match && <span className="billboard-match">{match}</span>}
            {year && <span>{year}</span>}
            {parts && <span>{parts}</span>}
          </div>
        )}
        {tagline && <p className="billboard-tagline">{tagline}</p>}
        <p className="billboard-desc">{description}</p>

        {meta.length > 0 && (
          <div className="billboard-meta">
            {meta.map((m) => (
              <span key={m}>{m}</span>
            ))}
          </div>
        )}

        <div className="billboard-actions">
          {primaryCta && renderCta(primaryCta, 'play')}
          {secondaryCta && renderCta(secondaryCta, 'info')}
        </div>
      </div>

      {ratingFlag && <div className="billboard-rating">{ratingFlag}</div>}
    </section>
  );
}
