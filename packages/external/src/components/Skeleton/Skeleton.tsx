import React from 'react';
import styles from './Skeleton.module.css';

export interface SkeletonProps {
  /** Variant of the skeleton */
  variant?: 'text' | 'rectangular' | 'circular' | 'rounded';
  /** Width of the skeleton */
  width?: string | number;
  /** Height of the skeleton */
  height?: string | number;
  /** Animation type */
  animation?: 'pulse' | 'wave' | 'none';
  /** Additional CSS classes */
  className?: string;
}

/**
 * Skeleton component for loading states
 * - Provides visual feedback during content loading
 * - Multiple variants for different content types
 * - Smooth animations for better UX
 */
export const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  (
    {
      variant = 'text',
      width,
      height,
      animation = 'pulse',
      className,
      ...props
    },
    ref
  ) => {
    const style: React.CSSProperties = {
      width: typeof width === 'number' ? `${width}px` : width,
      height: typeof height === 'number' ? `${height}px` : height,
    };

    return (
      <div
        ref={ref}
        className={[
          styles.skeleton,
          styles[variant],
          animation !== 'none' && styles[`animation-${animation}`],
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        style={style}
        aria-busy="true"
        aria-live="polite"
        {...props}
      />
    );
  }
);

Skeleton.displayName = 'Skeleton';

export interface SkeletonGroupProps {
  /** Number of skeleton items to render */
  count?: number;
  /** Spacing between skeleton items */
  spacing?: 'small' | 'medium' | 'large';
  /** Children skeleton elements */
  children?: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

/**
 * SkeletonGroup for rendering multiple skeleton items
 */
export const SkeletonGroup = React.forwardRef<HTMLDivElement, SkeletonGroupProps>(
  ({ count = 3, spacing = 'medium', children, className, ...props }, ref) => {
    if (children) {
      return (
        <div
          ref={ref}
          className={[styles.group, styles[`spacing-${spacing}`], className]
            .filter(Boolean)
            .join(' ')}
          {...props}
        >
          {children}
        </div>
      );
    }

    return (
      <div
        ref={ref}
        className={[styles.group, styles[`spacing-${spacing}`], className]
          .filter(Boolean)
          .join(' ')}
        {...props}
      >
        {Array.from({ length: count }).map((_, index) => (
          <Skeleton key={index} />
        ))}
      </div>
    );
  }
);

SkeletonGroup.displayName = 'SkeletonGroup';
