import React, { useState } from 'react';
import styles from './SideNav.module.css';

export interface NavItem {
  /** Unique identifier */
  id: string;
  /** Display label */
  label: string;
  /** Optional icon */
  icon?: React.ReactNode;
  /** Link href */
  href?: string;
  /** Click handler */
  onClick?: () => void;
  /** Nested items */
  children?: NavItem[];
  /** Whether this item is active */
  active?: boolean;
  /** Whether this item is disabled */
  disabled?: boolean;
}

export interface SideNavProps {
  /** Navigation items */
  items: NavItem[];
  /** Whether the nav is collapsed */
  collapsed?: boolean;
  /** Callback when collapse state changes */
  onCollapseChange?: (collapsed: boolean) => void;
  /** Logo/header content */
  header?: React.ReactNode;
  /** Footer content */
  footer?: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

/**
 * SideNav component for primary app navigation
 * - Collapsible sidebar with toggle
 * - Nested navigation support
 * - Active state indication
 * - Mobile-responsive drawer
 * - Touch-friendly for 65+ audience
 */
export const SideNav = React.forwardRef<HTMLElement, SideNavProps>(
  (
    {
      items,
      collapsed: controlledCollapsed,
      onCollapseChange,
      header,
      footer,
      className,
      ...props
    },
    ref
  ) => {
    const [internalCollapsed, setInternalCollapsed] = useState(false);
    const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

    const isControlled = controlledCollapsed !== undefined;
    const collapsed = isControlled ? controlledCollapsed : internalCollapsed;

    const toggleCollapsed = () => {
      const newState = !collapsed;
      if (!isControlled) {
        setInternalCollapsed(newState);
      }
      onCollapseChange?.(newState);
    };

    const toggleExpanded = (id: string) => {
      setExpandedItems((prev) => {
        const newSet = new Set(prev);
        if (newSet.has(id)) {
          newSet.delete(id);
        } else {
          newSet.add(id);
        }
        return newSet;
      });
    };

    const renderNavItem = (item: NavItem, level: number = 0) => {
      const hasChildren = item.children && item.children.length > 0;
      const isExpanded = expandedItems.has(item.id);

      return (
        <div key={item.id} className={styles.navItemWrapper}>
          <a
            href={!item.disabled ? item.href : undefined}
            onClick={(e) => {
              if (item.disabled) {
                e.preventDefault();
                return;
              }

              if (hasChildren) {
                e.preventDefault();
                toggleExpanded(item.id);
              } else if (item.onClick) {
                e.preventDefault();
                item.onClick();
              }
            }}
            className={[
              styles.navItem,
              item.active && styles.active,
              item.disabled && styles.disabled,
              level > 0 && styles.nested,
            ]
              .filter(Boolean)
              .join(' ')}
            style={{ paddingLeft: `${16 + level * 16}px` }}
            aria-current={item.active ? 'page' : undefined}
            aria-disabled={item.disabled}
          >
            {item.icon && (
              <span className={styles.icon}>{item.icon}</span>
            )}
            {!collapsed && (
              <>
                <span className={styles.label}>{item.label}</span>
                {hasChildren && (
                  <span className={styles.expandIcon}>
                    {isExpanded ? '−' : '+'}
                  </span>
                )}
              </>
            )}
          </a>

          {!collapsed && hasChildren && isExpanded && (
            <div className={styles.childItems}>
              {item.children!.map((child) => renderNavItem(child, level + 1))}
            </div>
          )}
        </div>
      );
    };

    return (
      <nav
        ref={ref}
        className={[
          styles.sideNav,
          collapsed && styles.collapsed,
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        {...props}
      >
        {header && (
          <div className={styles.header}>
            {header}
          </div>
        )}

        <button
          className={styles.toggleButton}
          onClick={toggleCollapsed}
          aria-label={collapsed ? 'Expand navigation' : 'Collapse navigation'}
        >
          {collapsed ? '→' : '←'}
        </button>

        <div className={styles.navItems}>
          {items.map((item) => renderNavItem(item))}
        </div>

        {footer && !collapsed && (
          <div className={styles.footer}>
            {footer}
          </div>
        )}
      </nav>
    );
  }
);

SideNav.displayName = 'SideNav';
