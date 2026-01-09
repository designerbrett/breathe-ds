import React from 'react';
import styles from './PageActions.module.css';

export interface PageActionsProps {
  /** Primary action (typically a button) */
  primaryAction?: React.ReactNode;
  /** Secondary actions (buttons or other elements) */
  secondaryActions?: React.ReactNode[];
  /** Whether to stack actions on mobile */
  stackOnMobile?: boolean;
  /** Alignment of actions */
  align?: 'left' | 'right' | 'center';
  /** Additional CSS classes */
  className?: string;
}

/**
 * PageActions component for page header actions
 * - Primary and secondary action support
 * - Mobile-responsive stacking
 * - Accessible action grouping
 * - Flexible alignment options
 */
export const PageActions = React.forwardRef<HTMLDivElement, PageActionsProps>(
  (
    {
      primaryAction,
      secondaryActions = [],
      stackOnMobile = true,
      align = 'right',
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={[
          styles.container,
          styles[`align-${align}`],
          stackOnMobile && styles.stackOnMobile,
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        role="group"
        aria-label="Page actions"
        {...props}
      >
        {secondaryActions.length > 0 && (
          <div className={styles.secondaryActions}>
            {secondaryActions.map((action, index) => (
              <div key={index} className={styles.action}>
                {action}
              </div>
            ))}
          </div>
        )}
        {primaryAction && (
          <div className={styles.primaryAction}>{primaryAction}</div>
        )}
      </div>
    );
  }
);

PageActions.displayName = 'PageActions';
