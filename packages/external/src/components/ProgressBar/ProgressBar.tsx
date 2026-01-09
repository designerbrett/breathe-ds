import React from 'react';
import styles from './ProgressBar.module.css';

export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Progress value (0-100) */
  value: number;
  /** Maximum value (default: 100) */
  max?: number;
  /** Show percentage label */
  showLabel?: boolean;
  /** Optional label text */
  label?: string;
  /** Progress bar size */
  size?: 'default' | 'large';
  /** Visual variant */
  variant?: 'default' | 'success' | 'warning' | 'error';
  /** Optional className for customization */
  className?: string;
}

/**
 * Progress bar component for showing completion status
 * - Clear visual feedback
 * - Optional percentage label
 * - Accessible with ARIA attributes
 * - Color variants for different states
 */
export const ProgressBar = React.forwardRef<HTMLDivElement, ProgressBarProps>(
  (
    {
      value,
      max = 100,
      showLabel = false,
      label,
      size = 'default',
      variant = 'default',
      className,
      ...props
    },
    ref
  ) => {
    const percentage = Math.min(100, Math.max(0, (value / max) * 100));

    return (
      <div
        ref={ref}
        className={[styles.wrapper, className].filter(Boolean).join(' ')}
        {...props}
      >
        {(label || showLabel) && (
          <div className={styles.labelWrapper}>
            {label && <span className={styles.label}>{label}</span>}
            {showLabel && (
              <span className={styles.percentage}>{Math.round(percentage)}%</span>
            )}
          </div>
        )}

        <div
          className={[styles.track, styles[`size-${size}`]]
            .filter(Boolean)
            .join(' ')}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={max}
          aria-label={label}
        >
          <div
            className={[styles.fill, styles[`variant-${variant}`]]
              .filter(Boolean)
              .join(' ')}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    );
  }
);

ProgressBar.displayName = 'ProgressBar';
