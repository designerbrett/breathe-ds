import React, { useState } from 'react';
import styles from './Accordion.module.css';

export interface AccordionItemProps {
  /** Unique identifier for the accordion item */
  id: string;
  /** Title/header of the accordion item */
  title: string;
  /** Content to display when expanded */
  children: React.ReactNode;
  /** Whether this item is disabled */
  disabled?: boolean;
}

export interface AccordionProps {
  /** Accordion items */
  children: React.ReactNode;
  /** Allow multiple items to be open at once */
  allowMultiple?: boolean;
  /** Default expanded item IDs */
  defaultExpanded?: string[];
  /** Additional CSS classes */
  className?: string;
}

interface AccordionContextValue {
  expandedItems: Set<string>;
  toggleItem: (id: string) => void;
  allowMultiple: boolean;
}

const AccordionContext = React.createContext<AccordionContextValue | null>(null);

/**
 * Accordion component for expandable content sections
 * - Supports single or multiple open items
 * - Accessible with proper ARIA attributes
 * - Smooth animations for expand/collapse
 * - Keyboard navigation support
 */
export const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ children, allowMultiple = false, defaultExpanded = [], className, ...props }, ref) => {
    const [expandedItems, setExpandedItems] = useState<Set<string>>(
      new Set(defaultExpanded)
    );

    const toggleItem = React.useCallback(
      (id: string) => {
        setExpandedItems((prev) => {
          const newSet = new Set(prev);
          if (newSet.has(id)) {
            newSet.delete(id);
          } else {
            if (!allowMultiple) {
              newSet.clear();
            }
            newSet.add(id);
          }
          return newSet;
        });
      },
      [allowMultiple]
    );

    return (
      <AccordionContext.Provider value={{ expandedItems, toggleItem, allowMultiple }}>
        <div
          ref={ref}
          className={[styles.accordion, className].filter(Boolean).join(' ')}
          {...props}
        >
          {children}
        </div>
      </AccordionContext.Provider>
    );
  }
);

Accordion.displayName = 'Accordion';

/**
 * AccordionItem component - individual expandable section
 */
export const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ id, title, children, disabled = false, ...props }, ref) => {
    const context = React.useContext(AccordionContext);

    if (!context) {
      throw new Error('AccordionItem must be used within an Accordion');
    }

    const { expandedItems, toggleItem } = context;
    const isExpanded = expandedItems.has(id);

    const handleToggle = () => {
      if (!disabled) {
        toggleItem(id);
      }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleToggle();
      }
    };

    return (
      <div
        ref={ref}
        className={[
          styles.item,
          isExpanded && styles.expanded,
          disabled && styles.disabled,
        ]
          .filter(Boolean)
          .join(' ')}
        {...props}
      >
        <button
          className={styles.header}
          onClick={handleToggle}
          onKeyDown={handleKeyDown}
          aria-expanded={isExpanded}
          aria-controls={`accordion-content-${id}`}
          id={`accordion-header-${id}`}
          disabled={disabled}
        >
          <span className={styles.title}>{title}</span>
          <span className={styles.icon} aria-hidden="true">
            {isExpanded ? '−' : '+'}
          </span>
        </button>
        <div
          id={`accordion-content-${id}`}
          role="region"
          aria-labelledby={`accordion-header-${id}`}
          className={styles.content}
          hidden={!isExpanded}
        >
          <div className={styles.contentInner}>{children}</div>
        </div>
      </div>
    );
  }
);

AccordionItem.displayName = 'AccordionItem';
