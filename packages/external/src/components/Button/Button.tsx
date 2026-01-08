import React from 'react';
import styles from './Button.module.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Button visual variant */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  /** Button size */
  size?: 'small' | 'default' | 'large';
  /** Button content */
  children: React.ReactNode;
}

/**
 * Button component optimized for mobile (65+ audience)
 * - Large touch targets (56px default, 64px large)
 * - High contrast
 * - Clear visual feedback
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'default', className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={[
          styles.btn,
          styles[`btn-${variant}`],
          styles[`btn-${size}`],
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
