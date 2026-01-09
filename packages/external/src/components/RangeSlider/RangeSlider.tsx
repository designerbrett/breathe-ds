import React, { useState, useRef, useEffect } from 'react';
import styles from './RangeSlider.module.css';

export interface RangeSliderProps {
  /** Minimum value */
  min?: number;
  /** Maximum value */
  max?: number;
  /** Step increment */
  step?: number;
  /** Current value */
  value?: number;
  /** Default value */
  defaultValue?: number;
  /** Callback when value changes */
  onChange?: (value: number) => void;
  /** Callback when dragging ends */
  onChangeCommitted?: (value: number) => void;
  /** Whether to show value label */
  showLabel?: boolean;
  /** Label prefix (e.g., "$") */
  labelPrefix?: string;
  /** Label suffix (e.g., "km") */
  labelSuffix?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** ARIA label */
  'aria-label'?: string;
}

/**
 * RangeSlider component for numeric value selection
 * - Touch-friendly for mobile users
 * - Accessible with keyboard support
 * - Visual feedback during interaction
 * - Customizable min, max, and step values
 */
export const RangeSlider = React.forwardRef<HTMLDivElement, RangeSliderProps>(
  (
    {
      min = 0,
      max = 100,
      step = 1,
      value: controlledValue,
      defaultValue = min,
      onChange,
      onChangeCommitted,
      showLabel = true,
      labelPrefix = '',
      labelSuffix = '',
      disabled = false,
      className,
      'aria-label': ariaLabel = 'Range slider',
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = useState(
      controlledValue ?? defaultValue
    );
    const [isDragging, setIsDragging] = useState(false);
    const sliderRef = useRef<HTMLDivElement>(null);
    const isControlled = controlledValue !== undefined;
    const value = isControlled ? controlledValue : internalValue;

    const percentage = ((value - min) / (max - min)) * 100;

    const updateValue = (newValue: number) => {
      const clampedValue = Math.max(min, Math.min(max, newValue));
      const steppedValue = Math.round(clampedValue / step) * step;

      if (!isControlled) {
        setInternalValue(steppedValue);
      }
      onChange?.(steppedValue);
    };

    const getValueFromPosition = (clientX: number): number => {
      if (!sliderRef.current) return value;

      const rect = sliderRef.current.getBoundingClientRect();
      const position = (clientX - rect.left) / rect.width;
      const newValue = min + position * (max - min);

      return newValue;
    };

    const handleMouseDown = (e: React.MouseEvent) => {
      if (disabled) return;

      setIsDragging(true);
      const newValue = getValueFromPosition(e.clientX);
      updateValue(newValue);
    };

    const handleTouchStart = (e: React.TouchEvent) => {
      if (disabled) return;

      setIsDragging(true);
      const touch = e.touches[0];
      const newValue = getValueFromPosition(touch.clientX);
      updateValue(newValue);
    };

    useEffect(() => {
      if (!isDragging) return;

      const handleMouseMove = (e: MouseEvent) => {
        const newValue = getValueFromPosition(e.clientX);
        updateValue(newValue);
      };

      const handleTouchMove = (e: TouchEvent) => {
        const touch = e.touches[0];
        const newValue = getValueFromPosition(touch.clientX);
        updateValue(newValue);
      };

      const handleEnd = () => {
        setIsDragging(false);
        onChangeCommitted?.(value);
      };

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleEnd);
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleEnd);

      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleEnd);
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleEnd);
      };
    }, [isDragging, value]);

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (disabled) return;

      let newValue = value;

      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowUp':
          e.preventDefault();
          newValue = Math.min(max, value + step);
          break;
        case 'ArrowLeft':
        case 'ArrowDown':
          e.preventDefault();
          newValue = Math.max(min, value - step);
          break;
        case 'Home':
          e.preventDefault();
          newValue = min;
          break;
        case 'End':
          e.preventDefault();
          newValue = max;
          break;
        default:
          return;
      }

      updateValue(newValue);
      onChangeCommitted?.(newValue);
    };

    return (
      <div
        ref={ref}
        className={[styles.container, disabled && styles.disabled, className]
          .filter(Boolean)
          .join(' ')}
        {...props}
      >
        <div
          ref={sliderRef}
          className={styles.slider}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          role="slider"
          aria-label={ariaLabel}
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={value}
          aria-disabled={disabled}
          tabIndex={disabled ? -1 : 0}
          onKeyDown={handleKeyDown}
        >
          <div className={styles.track}>
            <div
              className={styles.trackFilled}
              style={{ width: `${percentage}%` }}
            />
          </div>
          <div
            className={[styles.thumb, isDragging && styles.thumbDragging]
              .filter(Boolean)
              .join(' ')}
            style={{ left: `${percentage}%` }}
          >
            {showLabel && (
              <div className={styles.label}>
                {labelPrefix}
                {value}
                {labelSuffix}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
);

RangeSlider.displayName = 'RangeSlider';
