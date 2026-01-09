import React from 'react';
import styles from './Breadcrumbs.module.css';

export interface BreadcrumbItem {
  /** Display label for the breadcrumb */
  label: string;
  /** Optional href for navigation */
  href?: string;
  /** Optional click handler */
  onClick?: () => void;
}

export interface BreadcrumbsProps {
  /** Array of breadcrumb items */
  items: BreadcrumbItem[];
  /** Custom separator between items */
  separator?: React.ReactNode;
  /** Maximum items to show before collapsing */
  maxItems?: number;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Breadcrumbs component for hierarchical navigation
 * - Shows user's location in the site hierarchy
 * - Accessible with proper ARIA attributes
 * - Supports custom separators and collapsing
 */
export const Breadcrumbs = React.forwardRef<HTMLElement, BreadcrumbsProps>(
  ({ items, separator = '/', maxItems, className, ...props }, ref) => {
    const renderItems = React.useMemo(() => {
      if (!maxItems || items.length <= maxItems) {
        return items;
      }

      // If we need to collapse, show first item, ellipsis, and last few items
      const itemsToShow = maxItems - 1; // Reserve one spot for ellipsis
      const endItems = items.slice(-itemsToShow);

      return [
        items[0],
        { label: '...', href: undefined, onClick: undefined },
        ...endItems,
      ];
    }, [items, maxItems]);

    return (
      <nav
        ref={ref}
        aria-label="Breadcrumb"
        className={[styles.breadcrumbs, className].filter(Boolean).join(' ')}
        {...props}
      >
        <ol className={styles.list}>
          {renderItems.map((item, index) => {
            const isLast = index === renderItems.length - 1;
            const isEllipsis = item.label === '...';

            return (
              <li key={`${item.label}-${index}`} className={styles.item}>
                {!isLast && (
                  <>
                    {item.href || item.onClick ? (
                      <a
                        href={item.href}
                        onClick={item.onClick}
                        className={styles.link}
                        aria-current={isLast ? 'page' : undefined}
                      >
                        {item.label}
                      </a>
                    ) : (
                      <span
                        className={isEllipsis ? styles.ellipsis : styles.link}
                      >
                        {item.label}
                      </span>
                    )}
                    <span className={styles.separator} aria-hidden="true">
                      {separator}
                    </span>
                  </>
                )}
                {isLast && (
                  <span className={styles.current} aria-current="page">
                    {item.label}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    );
  }
);

Breadcrumbs.displayName = 'Breadcrumbs';
