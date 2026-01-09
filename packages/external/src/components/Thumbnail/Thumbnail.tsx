import React from 'react';
import styles from './Thumbnail.module.css';

export interface ThumbnailProps {
  /** Image source URL */
  src: string;
  /** Alt text for accessibility */
  alt: string;
  /** Size variant */
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  /** Shape variant */
  shape?: 'square' | 'rounded' | 'circle';
  /** Optional click handler */
  onClick?: () => void;
  /** Whether the thumbnail is clickable/interactive */
  interactive?: boolean;
  /** Loading state */
  loading?: 'lazy' | 'eager';
  /** Additional CSS classes */
  className?: string;
}

/**
 * Thumbnail component for displaying small preview images
 * - Multiple size and shape variants
 * - Accessible with proper alt text
 * - Optional interactive/clickable state
 * - Optimized image loading
 */
export const Thumbnail = React.forwardRef<HTMLDivElement, ThumbnailProps>(
  (
    {
      src,
      alt,
      size = 'medium',
      shape = 'rounded',
      onClick,
      interactive = false,
      loading = 'lazy',
      className,
      ...props
    },
    ref
  ) => {
    const isInteractive = Boolean(onClick || interactive);

    const handleClick = () => {
      if (onClick && !props['aria-disabled']) {
        onClick();
      }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (isInteractive && (e.key === 'Enter' || e.key === ' ')) {
        e.preventDefault();
        handleClick();
      }
    };

    return (
      <div
        ref={ref}
        className={[
          styles.thumbnail,
          styles[size],
          styles[shape],
          isInteractive && styles.interactive,
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        onClick={isInteractive ? handleClick : undefined}
        onKeyDown={isInteractive ? handleKeyDown : undefined}
        role={isInteractive ? 'button' : undefined}
        tabIndex={isInteractive ? 0 : undefined}
        {...props}
      >
        <img
          src={src}
          alt={alt}
          loading={loading}
          className={styles.image}
          draggable={false}
        />
      </div>
    );
  }
);

Thumbnail.displayName = 'Thumbnail';
