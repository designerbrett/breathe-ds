import React from 'react';
import styles from './Toast.module.css';

export interface ToastProps {
  /** Toast message content */
  children: React.ReactNode;
  /** Visual variant */
  variant?: 'info' | 'success' | 'warning' | 'error';
  /** Optional title */
  title?: string;
  /** Optional icon */
  icon?: React.ReactNode;
  /** Duration in ms before auto-dismiss (0 = no auto-dismiss) */
  duration?: number;
  /** Whether the toast can be manually dismissed */
  dismissible?: boolean;
  /** Callback when toast is dismissed */
  onDismiss?: () => void;
  /** Optional action button */
  action?: React.ReactNode;
  /** Position of the toast */
  position?: 'top-right' | 'top-center' | 'top-left' | 'bottom-right' | 'bottom-center' | 'bottom-left';
  /** Additional CSS classes */
  className?: string;
}

/**
 * Toast component for temporary notifications
 * - Auto-dismisses after specified duration
 * - Multiple variants (info, success, warning, error)
 * - Configurable positioning
 * - Optional manual dismiss
 * - Accessible with proper ARIA roles
 */
export const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
  (
    {
      children,
      variant = 'info',
      title,
      icon,
      duration = 5000,
      dismissible = true,
      onDismiss,
      action,
      position = 'top-right',
      className,
      ...props
    },
    ref
  ) => {
    const [visible, setVisible] = React.useState(true);
    const [isAnimatingOut, setIsAnimatingOut] = React.useState(false);

    React.useEffect(() => {
      if (duration > 0) {
        const timer = setTimeout(() => {
          handleDismiss();
        }, duration);

        return () => clearTimeout(timer);
      }
    }, [duration]);

    const handleDismiss = () => {
      setIsAnimatingOut(true);
      setTimeout(() => {
        setVisible(false);
        onDismiss?.();
      }, 300); // Match animation duration
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
        aria-atomic="true"
        className={[
          styles.toast,
          styles[variant],
          styles[position],
          isAnimatingOut ? styles.exit : styles.enter,
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
            aria-label="Dismiss notification"
          >
            ✕
          </button>
        )}

        {duration > 0 && (
          <div
            className={styles.progressBar}
            style={{
              animationDuration: `${duration}ms`,
            }}
          />
        )}
      </div>
    );
  }
);

Toast.displayName = 'Toast';
