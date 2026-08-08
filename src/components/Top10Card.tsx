'use client';

import { forwardRef } from 'react';
import NetflixCard from './NetflixCard';

interface Top10CardProps {
  rank: number;
  title: string;
  subtitle?: string;
  description: string;
  imageUrl: string;
  tags?: string[];
  href?: string;
  imagePosition?: number;
  isFocused?: boolean;
  isActive?: boolean;
  onFocus?: () => void;
  onMouseEnter?: () => void;
  onKeyDown?: (e: React.KeyboardEvent) => void;
  cardIndex?: number;
}

/** Netflix "Top 10" row item: a giant ranked number tucked behind the card. */
const Top10Card = forwardRef<HTMLDivElement, Top10CardProps>(({ rank, ...cardProps }, ref) => {
  return (
    <div className="top10-item">
      <span className="top10-number" aria-hidden="true">
        {rank}
      </span>
      <NetflixCard ref={ref} {...cardProps} />
    </div>
  );
});

Top10Card.displayName = 'Top10Card';

export default Top10Card;
