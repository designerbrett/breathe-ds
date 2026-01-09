import React from 'react';
import styles from './TextArea.module.css';

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** TextArea label */
  label?: string;
  /** Helper text shown below textarea */
  helperText?: string;
  /** Error message (shows error state) */
  error?: string;
  /** Success message (shows success state) */
  success?: string;
  /** Show character count (max characters) */
  maxLength?: number;
  /** Show current character count */
  showCharacterCount?: boolean;
  /** Auto-resize textarea to fit content */
  autoResize?: boolean;
  /** Minimum rows to display */
  minRows?: number;
  /** Maximum rows before scrolling */
  maxRows?: number;
  /** Optional className for customization */
  className?: string;
}

/**
 * TextArea component optimized for mobile (65+ audience)
 * - Large touch targets with comfortable padding
 * - High contrast
 * - Clear labels and helper text
 * - Accessible error states
 * - Optional auto-resize and character count
 */
export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      label,
      helperText,
      error,
      success,
      maxLength,
      showCharacterCount = false,
      autoResize = false,
      minRows = 3,
      maxRows,
      className,
      id,
      disabled,
      required,
      value,
      onChange,
      ...props
    },
    ref
  ) => {
    const [charCount, setCharCount] = React.useState(0);
    const textareaRef = React.useRef<HTMLTextAreaElement | null>(null);
    const inputId = id || `textarea-${React.useId()}`;
    const helperTextId = `${inputId}-helper`;
    const errorId = `${inputId}-error`;

    const hasError = !!error;
    const hasSuccess = !!success && !error;

    // Handle auto-resize
    const adjustHeight = React.useCallback(() => {
      const textarea = textareaRef.current;
      if (!textarea || !autoResize) return;

      textarea.style.height = 'auto';
      const scrollHeight = textarea.scrollHeight;

      const lineHeight = parseInt(getComputedStyle(textarea).lineHeight);
      const minHeight = minRows * lineHeight;
      const maxHeight = maxRows ? maxRows * lineHeight : Infinity;

      const newHeight = Math.min(Math.max(scrollHeight, minHeight), maxHeight);
      textarea.style.height = `${newHeight}px`;
    }, [autoResize, minRows, maxRows]);

    // Update character count and adjust height
    React.useEffect(() => {
      const currentValue = typeof value === 'string' ? value : textareaRef.current?.value || '';
      setCharCount(currentValue.length);
      adjustHeight();
    }, [value, adjustHeight]);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setCharCount(e.target.value.length);
      adjustHeight();
      onChange?.(e);
    };

    const setRefs = React.useCallback(
      (element: HTMLTextAreaElement | null) => {
        textareaRef.current = element;
        if (typeof ref === 'function') {
          ref(element);
        } else if (ref) {
          ref.current = element;
        }
      },
      [ref]
    );

    const showCount = showCharacterCount || (maxLength !== undefined && maxLength > 0);
    const isNearLimit = maxLength && charCount > maxLength * 0.9;
    const isOverLimit = maxLength && charCount > maxLength;

    return (
      <div className={[styles.wrapper, className].filter(Boolean).join(' ')}>
        {label && (
          <label htmlFor={inputId} className={styles.label}>
            {label}
            {required && <span className={styles.required}> *</span>}
          </label>
        )}

        <div className={styles.textareaWrapper}>
          <textarea
            ref={setRefs}
            id={inputId}
            disabled={disabled}
            required={required}
            maxLength={maxLength}
            rows={autoResize ? minRows : props.rows || minRows}
            aria-invalid={hasError}
            aria-describedby={
              error ? errorId : helperText ? helperTextId : undefined
            }
            className={[
              styles.textarea,
              hasError && styles.error,
              hasSuccess && styles.success,
              disabled && styles.disabled,
              autoResize && styles.autoResize,
            ]
              .filter(Boolean)
              .join(' ')}
            value={value}
            onChange={handleChange}
            {...props}
          />
        </div>

        {showCount && (
          <div
            className={[
              styles.characterCount,
              isOverLimit && styles.overLimit,
              isNearLimit && !isOverLimit && styles.nearLimit,
            ]
              .filter(Boolean)
              .join(' ')}
          >
            {charCount}
            {maxLength && ` / ${maxLength}`}
          </div>
        )}

        {error && (
          <div id={errorId} className={styles.errorText} role="alert">
            {error}
          </div>
        )}

        {success && !error && (
          <div className={styles.successText}>{success}</div>
        )}

        {helperText && !error && !success && (
          <div id={helperTextId} className={styles.helperText}>
            {helperText}
          </div>
        )}
      </div>
    );
  }
);

TextArea.displayName = 'TextArea';
