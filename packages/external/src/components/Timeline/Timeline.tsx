import React from 'react';
import styles from './Timeline.module.css';

export interface TimelineItemProps {
  /** Title of the timeline item */
  title: string;
  /** Optional description */
  description?: React.ReactNode;
  /** Timestamp or date */
  timestamp?: string;
  /** Custom icon */
  icon?: React.ReactNode;
  /** Color variant for the marker */
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
}

export interface TimelineProps {
  /** Timeline items */
  items: TimelineItemProps[];
  /** Position of the timeline line */
  position?: 'left' | 'center' | 'right';
  /** Additional CSS classes */
  className?: string;
}

/**
 * Timeline component for displaying chronological events
 * - Supports custom icons and colors
 * - Accessible with semantic HTML
 * - Responsive layout
 */
export const Timeline = React.forwardRef<HTMLDivElement, TimelineProps>(
  ({ items, position = 'left', className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={[styles.timeline, styles[`position-${position}`], className]
          .filter(Boolean)
          .join(' ')}
        {...props}
      >
        {items.map((item, index) => (
          <div key={index} className={styles.item}>
            <div
              className={[
                styles.marker,
                item.variant && styles[`marker-${item.variant}`],
              ]
                .filter(Boolean)
                .join(' ')}
            >
              {item.icon || (
                <div className={styles.dot} aria-hidden="true" />
              )}
            </div>
            <div className={styles.content}>
              {item.timestamp && (
                <time className={styles.timestamp}>{item.timestamp}</time>
              )}
              <h4 className={styles.title}>{item.title}</h4>
              {item.description && (
                <div className={styles.description}>{item.description}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }
);

Timeline.displayName = 'Timeline';
