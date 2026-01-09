import React from 'react';
import styles from './Banner.module.css';

export interface BannerProps {
  /** Banner message content */
  children: React.ReactNode;
  /** Visual variant */
  variant?: 'info' | 'success' | 'warning' | 'error';
  /** Optional title */
  title?: string;
  /** Optional icon */
  icon?: React.ReactNode;
  /** Whether the banner can be dismissed */
  dismissible?: boolean;
  /** Callback when banner is dismissed */
  onDismiss?: () => void;
  /** Optional action button */
  action?: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Banner component for important page-level messages
 * - Multiple variants (info, success, warning, error)
 * - Optional dismissible
 * - Optional action button
 * - Accessible with proper ARIA roles
 */
export const Banner = React.forwardRef<HTMLDivElement, BannerProps>(
  (
    {
      children,
      variant = 'info',
      title,
      icon,
      dismissible = false,
      onDismiss,
      action,
      className,
      ...props
    },
    ref
  ) => {
    const [visible, setVisible] = React.useState(true);

    const handleDismiss = () => {
      setVisible(false);
      onDismiss?.();
    };

    if (!visible) return null;

    const defaultIcons = {
      info: 'ℹ️',
      success: '✓',
      warning: '⚠️',
      error: '✕',
    };

    const displayIcon = icon ?? defaultIcons[variant];

    return (
      <div
        ref={ref}
        role="alert"
        aria-live="polite"
        className={[
          styles.banner,
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
          {title && <div className={styles.title}>{title}</div>}
          <div className={styles.message}>{children}</div>
        </div>

        {action && (
          <div className={styles.action}>
            {action}
          </div>
        )}

        {dismissible && (
          <button
            className={styles.dismissButton}
            onClick={handleDismiss}
            aria-label="Dismiss banner"
          >
            ✕
          </button>
        )}
      </div>
    );
  }
);

Banner.displayName = 'Banner';
