import React from 'react';
import styles from './EmptyState.module.css';

export interface EmptyStateProps {
  /** Icon or illustration to display */
  icon?: React.ReactNode;
  /** Heading text */
  heading: string;
  /** Description text */
  description?: string;
  /** Primary action button */
  action?: React.ReactNode;
  /** Secondary action button or link */
  secondaryAction?: React.ReactNode;
  /** Visual variant */
  variant?: 'default' | 'search' | 'error' | 'success';
  /** Additional CSS classes */
  className?: string;
}

/**
 * EmptyState component for when there's no content to display
 * - Clear messaging with icon/illustration
 * - Optional action buttons
 * - Multiple variants for different scenarios
 * - Optimized for 65+ audience with large text and clear CTAs
 */
export const EmptyState = React.forwardRef<HTMLDivElement, EmptyStateProps>(
  (
    {
      icon,
      heading,
      description,
      action,
      secondaryAction,
      variant = 'default',
      className,
      ...props
    },
    ref
  ) => {
    const defaultIcons = {
      default: '📋',
      search: '🔍',
      error: '⚠️',
      success: '✓',
    };

    const displayIcon = icon ?? defaultIcons[variant];

    return (
      <div
        ref={ref}
        className={[
          styles.emptyState,
          styles[variant],
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        {...props}
      >
        {displayIcon && (
          <div className={styles.icon}>
            {displayIcon}
          </div>
        )}

        <div className={styles.content}>
          <h3 className={styles.heading}>{heading}</h3>
          {description && (
            <p className={styles.description}>{description}</p>
          )}
        </div>

        {(action || secondaryAction) && (
          <div className={styles.actions}>
            {action && (
              <div className={styles.primaryAction}>
                {action}
              </div>
            )}
            {secondaryAction && (
              <div className={styles.secondaryAction}>
                {secondaryAction}
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
);

EmptyState.displayName = 'EmptyState';
