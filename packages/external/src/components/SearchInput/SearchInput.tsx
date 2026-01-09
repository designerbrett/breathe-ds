import React from 'react';
import styles from './SearchInput.module.css';

export interface SearchInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /** Input label */
  label?: string;
  /** Helper text shown below input */
  helperText?: string;
  /** Show clear button when input has value */
  showClearButton?: boolean;
  /** Callback when clear button is clicked */
  onClear?: () => void;
  /** Show search button */
  showSearchButton?: boolean;
  /** Callback when search button is clicked */
  onSearch?: (value: string) => void;
  /** Show loading indicator */
  loading?: boolean;
  /** Optional className for customization */
  className?: string;
}

/**
 * SearchInput component optimized for mobile (65+ audience)
 * - Large touch targets (56px)
 * - Clear button for easy input clearing
 * - Search icon for visual affordance
 * - Optional search button
 * - High contrast and accessible
 */
export const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  (
    {
      label,
      helperText,
      showClearButton = true,
      onClear,
      showSearchButton = false,
      onSearch,
      loading = false,
      className,
      id,
      disabled,
      value,
      onChange,
      onKeyDown,
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = React.useState('');
    const inputId = id || `search-${React.useId()}`;
    const helperTextId = `${inputId}-helper`;

    const isControlled = value !== undefined;
    const currentValue = isControlled ? value : internalValue;
    const hasValue = String(currentValue).length > 0;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!isControlled) {
        setInternalValue(e.target.value);
      }
      onChange?.(e);
    };

    const handleClear = () => {
      if (!isControlled) {
        setInternalValue('');
      }
      onClear?.();

      // Create a synthetic event for controlled components
      if (onChange) {
        const syntheticEvent = {
          target: { value: '' },
          currentTarget: { value: '' },
        } as React.ChangeEvent<HTMLInputElement>;
        onChange(syntheticEvent);
      }
    };

    const handleSearch = () => {
      onSearch?.(String(currentValue));
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' && onSearch) {
        e.preventDefault();
        handleSearch();
      }
      onKeyDown?.(e);
    };

    return (
      <div className={[styles.wrapper, className].filter(Boolean).join(' ')}>
        {label && (
          <label htmlFor={inputId} className={styles.label}>
            {label}
          </label>
        )}

        <div className={styles.inputWrapper}>
          <div className={styles.searchIcon} aria-hidden="true">
            {loading ? (
              <span className={styles.spinner}>⌛</span>
            ) : (
              '🔍'
            )}
          </div>

          <input
            ref={ref}
            id={inputId}
            type="search"
            disabled={disabled}
            value={currentValue}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            aria-describedby={helperText ? helperTextId : undefined}
            className={[
              styles.input,
              disabled && styles.disabled,
              showSearchButton && styles.withButton,
            ]
              .filter(Boolean)
              .join(' ')}
            {...props}
          />

          {showClearButton && hasValue && !disabled && (
            <button
              type="button"
              onClick={handleClear}
              className={styles.clearButton}
              aria-label="Clear search"
              tabIndex={-1}
            >
              ✕
            </button>
          )}

          {showSearchButton && (
            <button
              type="button"
              onClick={handleSearch}
              disabled={disabled || !hasValue}
              className={styles.searchButton}
              aria-label="Search"
            >
              Search
            </button>
          )}
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

SearchInput.displayName = 'SearchInput';
