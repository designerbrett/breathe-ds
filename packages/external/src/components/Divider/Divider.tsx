import React from 'react';
import styles from './Divider.module.css';

export interface DividerProps {
  /** Orientation of the divider */
  orientation?: 'horizontal' | 'vertical';
  /** Optional label to display in the center */
  label?: string;
  /** Label position when provided */
  labelPosition?: 'left' | 'center' | 'right';
  /** Additional CSS classes */
  className?: string;
  /** Spacing around the divider */
  spacing?: 'small' | 'medium' | 'large';
}

/**
 * Divider component for visual content separation
 * - Supports horizontal and vertical orientations
 * - Optional centered labels
 * - Accessible with proper ARIA roles
 */
export const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  (
    {
      orientation = 'horizontal',
      label,
      labelPosition = 'center',
      className,
      spacing = 'medium',
      ...props
    },
    ref
  ) => {
    const hasLabel = Boolean(label);

    if (orientation === 'vertical') {
      return (
        <div
          ref={ref}
          role="separator"
          aria-orientation="vertical"
          className={[
            styles.divider,
            styles.vertical,
            styles[`spacing-${spacing}`],
            className,
          ]
            .filter(Boolean)
            .join(' ')}
          {...props}
        />
      );
    }

    if (hasLabel) {
      return (
        <div
          ref={ref}
          role="separator"
          aria-orientation="horizontal"
          className={[
            styles.dividerWithLabel,
            styles[`label-${labelPosition}`],
            styles[`spacing-${spacing}`],
            className,
          ]
            .filter(Boolean)
            .join(' ')}
          {...props}
        >
          <span className={styles.label}>{label}</span>
        </div>
      );
    }

    return (
      <hr
        ref={ref as React.Ref<HTMLHRElement>}
        role="separator"
        aria-orientation="horizontal"
        className={[
          styles.divider,
          styles.horizontal,
          styles[`spacing-${spacing}`],
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        {...props}
      />
    );
  }
);

Divider.displayName = 'Divider';
