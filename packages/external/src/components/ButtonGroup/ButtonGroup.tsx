import React from 'react';
import styles from './ButtonGroup.module.css';

export interface ButtonGroupProps {
  /** Button group children */
  children: React.ReactNode;
  /** Orientation of the button group */
  orientation?: 'horizontal' | 'vertical';
  /** Whether buttons should take full width */
  fullWidth?: boolean;
  /** Spacing between buttons */
  spacing?: 'none' | 'small' | 'medium';
  /** Additional CSS classes */
  className?: string;
}

/**
 * ButtonGroup component for grouping related actions
 * - Supports horizontal and vertical layouts
 * - Accessible keyboard navigation
 * - Mobile-optimized touch targets
 */
export const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  (
    {
      children,
      orientation = 'horizontal',
      fullWidth = false,
      spacing = 'small',
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        role="group"
        className={[
          styles.buttonGroup,
          styles[orientation],
          fullWidth && styles.fullWidth,
          styles[`spacing-${spacing}`],
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        {...props}
      >
        {children}
      </div>
    );
  }
);

ButtonGroup.displayName = 'ButtonGroup';
