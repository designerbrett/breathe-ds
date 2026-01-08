import React from 'react';
import styles from './Card.module.css';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Card content */
  children: React.ReactNode;
  /** Visual variant */
  variant?: 'default' | 'elevated' | 'bordered';
  /** Padding size */
  padding?: 'default' | 'large' | 'none';
  /** Optional className for customization */
  className?: string;
  /** Make card interactive (adds hover effects) */
  interactive?: boolean;
  /** Click handler for interactive cards */
  onClick?: () => void;
}

/**
 * Card component optimized for mobile (65+ audience)
 * - Soft shadows and rounded corners
 * - Clear visual hierarchy
 * - Generous padding for readability
 */
export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      variant = 'default',
      padding = 'default',
      className,
      interactive = false,
      onClick,
      ...props
    },
    ref
  ) => {
    const isInteractive = interactive || !!onClick;

    return (
      <div
        ref={ref}
        onClick={onClick}
        role={isInteractive ? 'button' : undefined}
        tabIndex={isInteractive ? 0 : undefined}
        onKeyDown={
          isInteractive
            ? (e) => {
                if ((e.key === 'Enter' || e.key === ' ') && onClick) {
                  e.preventDefault();
                  onClick();
                }
              }
            : undefined
        }
        className={[
          styles.card,
          styles[`variant-${variant}`],
          styles[`padding-${padding}`],
          isInteractive && styles.interactive,
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

Card.displayName = 'Card';

/** Card Header - Optional heading section */
export const CardHeader: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <div className={[styles.cardHeader, className].filter(Boolean).join(' ')}>
      {children}
    </div>
  );
};

CardHeader.displayName = 'CardHeader';

/** Card Title - Styled title for card header */
export const CardTitle: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <h3 className={[styles.cardTitle, className].filter(Boolean).join(' ')}>
      {children}
    </h3>
  );
};

CardTitle.displayName = 'CardTitle';

/** Card Content - Main content area */
export const CardContent: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <div className={[styles.cardContent, className].filter(Boolean).join(' ')}>
      {children}
    </div>
  );
};

CardContent.displayName = 'CardContent';

/** Card Footer - Optional footer section */
export const CardFooter: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <div className={[styles.cardFooter, className].filter(Boolean).join(' ')}>
      {children}
    </div>
  );
};

CardFooter.displayName = 'CardFooter';
