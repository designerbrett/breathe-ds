import React from 'react';
import styles from './Badge.module.css';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Badge content */
  children: React.ReactNode;
  /** Visual variant */
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
  /** Size variant */
  size?: 'default' | 'large';
  /** Optional className for customization */
  className?: string;
}

/**
 * Badge component for status indicators
 * - High contrast colors
 * - Clear, readable text
 * - Semantic color meanings
 */
export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ children, variant = 'default', size = 'default', className, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={[
          styles.badge,
          styles[`variant-${variant}`],
          styles[`size-${size}`],
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';
