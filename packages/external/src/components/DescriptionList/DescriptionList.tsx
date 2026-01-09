import React from 'react';
import styles from './DescriptionList.module.css';

export interface DescriptionListItem {
  /** Term/label for the item */
  term: string;
  /** Description/value for the item */
  description: React.ReactNode;
}

export interface DescriptionListProps {
  /** Array of items to display */
  items: DescriptionListItem[];
  /** Layout orientation */
  orientation?: 'horizontal' | 'vertical';
  /** Whether to show dividers between items */
  dividers?: boolean;
  /** Column layout for horizontal orientation */
  columns?: '1' | '2' | '3';
  /** Additional CSS classes */
  className?: string;
}

/**
 * DescriptionList component for displaying key-value pairs
 * - Supports horizontal and vertical layouts
 * - Accessible with proper semantic HTML
 * - Optimized for readability
 */
export const DescriptionList = React.forwardRef<HTMLDListElement, DescriptionListProps>(
  (
    {
      items,
      orientation = 'horizontal',
      dividers = false,
      columns = '1',
      className,
      ...props
    },
    ref
  ) => {
    return (
      <dl
        ref={ref}
        className={[
          styles.list,
          styles[orientation],
          dividers && styles.dividers,
          styles[`columns-${columns}`],
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        {...props}
      >
        {items.map((item, index) => (
          <div key={index} className={styles.item}>
            <dt className={styles.term}>{item.term}</dt>
            <dd className={styles.description}>{item.description}</dd>
          </div>
        ))}
      </dl>
    );
  }
);

DescriptionList.displayName = 'DescriptionList';
