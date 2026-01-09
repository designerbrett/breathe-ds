import React from 'react';
import styles from './Checkbox.module.css';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  /** Checkbox label */
  label: string;
  /** Helper text shown below checkbox */
  helperText?: string;
  /** Error message (shows error state) */
  error?: string;
  /** Checkbox size variant */
  size?: 'default' | 'large';
  /** Optional className for customization */
  className?: string;
}

/**
 * Checkbox component optimized for mobile (65+ audience)
 * - Large touch targets (minimum 44px)
 * - High contrast
 * - Clear visual states
 * - Accessible with proper ARIA labels
 */
export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      label,
      helperText,
      error,
      size = 'default',
      className,
      id,
      disabled,
      ...props
    },
    ref
  ) => {
    const checkboxId = id || `checkbox-${React.useId()}`;
    const helperTextId = `${checkboxId}-helper`;
    const errorId = `${checkboxId}-error`;

    const hasError = !!error;

    return (
      <div className={[styles.wrapper, className].filter(Boolean).join(' ')}>
        <div className={styles.checkboxWrapper}>
          <input
            ref={ref}
            type="checkbox"
            id={checkboxId}
            disabled={disabled}
            aria-invalid={hasError}
            aria-describedby={
              error ? errorId : helperText ? helperTextId : undefined
            }
            className={[
              styles.input,
              styles[`size-${size}`],
              hasError && styles.error,
            ]
              .filter(Boolean)
              .join(' ')}
            {...props}
          />
          <label
            htmlFor={checkboxId}
            className={[
              styles.label,
              disabled && styles.disabled,
            ]
              .filter(Boolean)
              .join(' ')}
          >
            {label}
          </label>
        </div>

        {error && (
          <div id={errorId} className={styles.errorText} role="alert">
            {error}
          </div>
        )}

        {helperText && !error && (
          <div id={helperTextId} className={styles.helperText}>
            {helperText}
          </div>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';
