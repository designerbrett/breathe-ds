import React from 'react';
import styles from './LoadingIndicator.module.css';

export interface LoadingIndicatorProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Size of the loading indicator */
  size?: 'small' | 'default' | 'large';
  /** Optional label text */
  label?: string;
  /** Optional className for customization */
  className?: string;
}

/**
 * Loading indicator component
 * - Clear visual feedback
 * - Smooth animation
 * - Optional accessible label
 */
export const LoadingIndicator = React.forwardRef<HTMLDivElement, LoadingIndicatorProps>(
  ({ size = 'default', label, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="status"
        aria-live="polite"
        aria-label={label || 'Loading'}
        className={[styles.wrapper, className].filter(Boolean).join(' ')}
        {...props}
      >
        <div className={[styles.spinner, styles[`size-${size}`]].filter(Boolean).join(' ')}>
          <div className={styles.spinnerCircle} />
        </div>
        {label && <div className={styles.label}>{label}</div>}
        <span className={styles.visuallyHidden}>{label || 'Loading'}</span>
      </div>
    );
  }
);

LoadingIndicator.displayName = 'LoadingIndicator';
