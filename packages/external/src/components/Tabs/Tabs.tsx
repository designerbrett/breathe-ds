import React, { useState } from 'react';
import styles from './Tabs.module.css';

export interface TabItem {
  /** Unique identifier */
  id: string;
  /** Display label */
  label: string;
  /** Optional icon */
  icon?: React.ReactNode;
  /** Whether this tab is disabled */
  disabled?: boolean;
  /** Tab content */
  content?: React.ReactNode;
}

export interface TabsProps {
  /** Tab items */
  items: TabItem[];
  /** Currently active tab ID */
  activeTab?: string;
  /** Default active tab ID */
  defaultActiveTab?: string;
  /** Callback when active tab changes */
  onTabChange?: (tabId: string) => void;
  /** Variant style */
  variant?: 'default' | 'pills' | 'underline';
  /** Whether tabs should take full width */
  fullWidth?: boolean;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Tabs component for switching between views
 * - Multiple visual variants
 * - Keyboard navigation support
 * - Touch-friendly for mobile
 * - Accessible with ARIA attributes
 */
export const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  (
    {
      items,
      activeTab: controlledActiveTab,
      defaultActiveTab,
      onTabChange,
      variant = 'default',
      fullWidth = false,
      className,
      ...props
    },
    ref
  ) => {
    const [internalActiveTab, setInternalActiveTab] = useState(
      defaultActiveTab || items[0]?.id
    );

    const isControlled = controlledActiveTab !== undefined;
    const activeTab = isControlled ? controlledActiveTab : internalActiveTab;

    const handleTabClick = (tabId: string, disabled?: boolean) => {
      if (disabled) return;

      if (!isControlled) {
        setInternalActiveTab(tabId);
      }
      onTabChange?.(tabId);
    };

    const handleKeyDown = (
      e: React.KeyboardEvent,
      index: number,
      tabId: string,
      disabled?: boolean
    ) => {
      if (disabled) return;

      let nextIndex = index;

      switch (e.key) {
        case 'ArrowRight':
          e.preventDefault();
          nextIndex = (index + 1) % items.length;
          break;
        case 'ArrowLeft':
          e.preventDefault();
          nextIndex = (index - 1 + items.length) % items.length;
          break;
        case 'Home':
          e.preventDefault();
          nextIndex = 0;
          break;
        case 'End':
          e.preventDefault();
          nextIndex = items.length - 1;
          break;
        case 'Enter':
        case ' ':
          e.preventDefault();
          handleTabClick(tabId);
          return;
        default:
          return;
      }

      // Skip disabled tabs
      while (items[nextIndex]?.disabled && nextIndex !== index) {
        nextIndex = nextIndex < index ? nextIndex - 1 : nextIndex + 1;
        if (nextIndex < 0) nextIndex = items.length - 1;
        if (nextIndex >= items.length) nextIndex = 0;
      }

      if (!items[nextIndex]?.disabled) {
        handleTabClick(items[nextIndex].id);
        // Focus the next tab
        const nextButton = document.querySelector(
          `[data-tab-id="${items[nextIndex].id}"]`
        ) as HTMLElement;
        nextButton?.focus();
      }
    };

    const activeItem = items.find((item) => item.id === activeTab);

    return (
      <div
        ref={ref}
        className={[styles.container, className].filter(Boolean).join(' ')}
        {...props}
      >
        <div
          className={[
            styles.tabList,
            styles[variant],
            fullWidth && styles.fullWidth,
          ]
            .filter(Boolean)
            .join(' ')}
          role="tablist"
        >
          {items.map((item, index) => (
            <button
              key={item.id}
              data-tab-id={item.id}
              role="tab"
              aria-selected={item.id === activeTab}
              aria-controls={`tabpanel-${item.id}`}
              aria-disabled={item.disabled}
              tabIndex={item.id === activeTab ? 0 : -1}
              disabled={item.disabled}
              className={[
                styles.tab,
                item.id === activeTab && styles.active,
                item.disabled && styles.disabled,
              ]
                .filter(Boolean)
                .join(' ')}
              onClick={() => handleTabClick(item.id, item.disabled)}
              onKeyDown={(e) => handleKeyDown(e, index, item.id, item.disabled)}
            >
              {item.icon && <span className={styles.icon}>{item.icon}</span>}
              <span className={styles.label}>{item.label}</span>
            </button>
          ))}
        </div>

        {activeItem?.content && (
          <div
            id={`tabpanel-${activeTab}`}
            role="tabpanel"
            aria-labelledby={activeTab}
            className={styles.tabPanel}
          >
            {activeItem.content}
          </div>
        )}
      </div>
    );
  }
);

Tabs.displayName = 'Tabs';
