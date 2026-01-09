import React from 'react';
import styles from './DropdownMenu.module.css';

export interface DropdownMenuItem {
  /** Menu item label */
  label: string;
  /** Optional icon */
  icon?: React.ReactNode;
  /** Click handler */
  onClick?: () => void;
  /** Disabled state */
  disabled?: boolean;
  /** Visual variant */
  variant?: 'default' | 'danger';
  /** Divider after this item */
  divider?: boolean;
}

export interface DropdownMenuProps {
  /** Trigger element */
  trigger: React.ReactElement;
  /** Menu items */
  items: DropdownMenuItem[];
  /** Position of menu relative to trigger */
  position?: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';
  /** Additional CSS classes */
  className?: string;
}

/**
 * DropdownMenu component for action menus
 * - Touch-friendly with 44px minimum targets
 * - Keyboard accessible
 * - Click outside to close
 * - Configurable positioning
 * - Optimized for 65+ audience
 */
export const DropdownMenu = React.forwardRef<HTMLDivElement, DropdownMenuProps>(
  (
    {
      trigger,
      items,
      position = 'bottom-left',
      className,
      ...props
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const menuRef = React.useRef<HTMLDivElement>(null);
    const triggerRef = React.useRef<HTMLElement>(null);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    const closeMenu = () => {
      setIsOpen(false);
    };

    const handleItemClick = (item: DropdownMenuItem) => {
      if (!item.disabled && item.onClick) {
        item.onClick();
        closeMenu();
      }
    };

    // Close menu when clicking outside
    React.useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          menuRef.current &&
          !menuRef.current.contains(event.target as Node) &&
          triggerRef.current &&
          !triggerRef.current.contains(event.target as Node)
        ) {
          closeMenu();
        }
      };

      if (isOpen) {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }
    }, [isOpen]);

    // Close menu on Escape key
    React.useEffect(() => {
      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          closeMenu();
        }
      };

      if (isOpen) {
        document.addEventListener('keydown', handleEscape);
        return () => {
          document.removeEventListener('keydown', handleEscape);
        };
      }
    }, [isOpen]);

    // Clone trigger and add click handler
    const enhancedTrigger = React.cloneElement(trigger, {
      ref: triggerRef,
      onClick: (e: React.MouseEvent) => {
        e.stopPropagation();
        toggleMenu();
        trigger.props.onClick?.(e);
      },
      'aria-expanded': isOpen,
      'aria-haspopup': 'menu',
    });

    return (
      <div
        ref={ref}
        className={[styles.dropdownWrapper, className].filter(Boolean).join(' ')}
        {...props}
      >
        {enhancedTrigger}

        {isOpen && (
          <div
            ref={menuRef}
            role="menu"
            className={[
              styles.menu,
              styles[position],
            ]
              .filter(Boolean)
              .join(' ')}
          >
            {items.map((item, index) => (
              <React.Fragment key={index}>
                <button
                  role="menuitem"
                  disabled={item.disabled}
                  onClick={() => handleItemClick(item)}
                  className={[
                    styles.menuItem,
                    item.variant === 'danger' && styles.danger,
                    item.disabled && styles.disabled,
                  ]
                    .filter(Boolean)
                    .join(' ')}
                >
                  {item.icon && (
                    <span className={styles.icon}>{item.icon}</span>
                  )}
                  <span className={styles.label}>{item.label}</span>
                </button>
                {item.divider && <div className={styles.divider} />}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    );
  }
);

DropdownMenu.displayName = 'DropdownMenu';
