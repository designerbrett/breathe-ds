import React from 'react';
import styles from './Select.module.css';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  /** Select label */
  label?: string;
  /** Helper text shown below select */
  helperText?: string;
  /** Error message (shows error state) */
  error?: string;
  /** Select options */
  options: SelectOption[];
  /** Placeholder option */
  placeholder?: string;
  /** Select size variant */
  size?: 'default' | 'large';
  /** Optional className for customization */
  className?: string;
}

/**
 * Select dropdown component optimized for mobile (65+ audience)
 * - Large touch targets (56px default)
 * - High contrast
 * - Clear labels and options
 * - Accessible error states
 */
export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      helperText,
      error,
      options,
      placeholder,
      size = 'default',
      className,
      id,
      disabled,
      required,
      ...props
    },
    ref
  ) => {
    const selectId = id || `select-${React.useId()}`;
    const helperTextId = `${selectId}-helper`;
    const errorId = `${selectId}-error`;

    const hasError = !!error;

    return (
      <div className={[styles.wrapper, className].filter(Boolean).join(' ')}>
        {label && (
          <label htmlFor={selectId} className={styles.label}>
            {label}
            {required && <span className={styles.required}> *</span>}
          </label>
        )}

        <div className={styles.selectWrapper}>
          <select
            ref={ref}
            id={selectId}
            disabled={disabled}
            required={required}
            aria-invalid={hasError}
            aria-describedby={
              error ? errorId : helperText ? helperTextId : undefined
            }
            className={[
              styles.select,
              styles[`size-${size}`],
              hasError && styles.error,
              disabled && styles.disabled,
            ]
              .filter(Boolean)
              .join(' ')}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option
                key={option.value}
                value={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </option>
            ))}
          </select>

          <div className={styles.chevron}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
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

Select.displayName = 'Select';
