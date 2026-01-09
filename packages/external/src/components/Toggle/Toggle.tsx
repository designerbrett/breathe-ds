import React from 'react';
import styles from './Toggle.module.css';

export interface ToggleProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  /** Toggle label */
  label: string;
  /** Helper text shown below toggle */
  helperText?: string;
  /** Toggle size variant */
  size?: 'default' | 'large';
  /** Optional className for customization */
  className?: string;
}

/**
 * Toggle switch component optimized for mobile (65+ audience)
 * - Large touch targets (minimum 44px)
 * - Clear on/off states
 * - Smooth animation
 * - High contrast colors
 */
export const Toggle = React.forwardRef<HTMLInputElement, ToggleProps>(
  (
    {
      label,
      helperText,
      size = 'default',
      className,
      id,
      disabled,
      ...props
    },
    ref
  ) => {
    const toggleId = id || `toggle-${React.useId()}`;
    const helperTextId = `${toggleId}-helper`;

    return (
      <div className={[styles.wrapper, className].filter(Boolean).join(' ')}>
        <div className={styles.toggleWrapper}>
          <input
            ref={ref}
            type="checkbox"
            id={toggleId}
            disabled={disabled}
            aria-describedby={helperText ? helperTextId : undefined}
            role="switch"
            className={[styles.input, styles[`size-${size}`]]
              .filter(Boolean)
              .join(' ')}
            {...props}
          />
          <label
            htmlFor={toggleId}
            className={[
              styles.label,
              disabled && styles.disabled,
            ]
              .filter(Boolean)
              .join(' ')}
          >
            <span className={styles.labelText}>{label}</span>
          </label>
        </div>

        {helperText && (
          <div id={helperTextId} className={styles.helperText}>
            {helperText}
          </div>
        )}
      </div>
    );
  }
);

Toggle.displayName = 'Toggle';
