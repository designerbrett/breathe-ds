import React from 'react';
import styles from './Radio.module.css';

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  /** Radio label */
  label: string;
  /** Helper text shown below radio */
  helperText?: string;
  /** Radio size variant */
  size?: 'default' | 'large';
  /** Optional className for customization */
  className?: string;
}

/**
 * Radio button component optimized for mobile (65+ audience)
 * - Large touch targets (minimum 44px)
 * - High contrast
 * - Clear visual states
 * - Part of a radio group (same name attribute)
 */
export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
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
    const radioId = id || `radio-${React.useId()}`;
    const helperTextId = `${radioId}-helper`;

    return (
      <div className={[styles.wrapper, className].filter(Boolean).join(' ')}>
        <div className={styles.radioWrapper}>
          <input
            ref={ref}
            type="radio"
            id={radioId}
            disabled={disabled}
            aria-describedby={helperText ? helperTextId : undefined}
            className={[styles.input, styles[`size-${size}`]]
              .filter(Boolean)
              .join(' ')}
            {...props}
          />
          <label
            htmlFor={radioId}
            className={[styles.label, disabled && styles.disabled]
              .filter(Boolean)
              .join(' ')}
          >
            {label}
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

Radio.displayName = 'Radio';
