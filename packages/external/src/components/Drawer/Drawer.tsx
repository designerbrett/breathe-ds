import React from 'react';
import styles from './Drawer.module.css';

export interface DrawerProps {
  /** Whether the drawer is open */
  isOpen: boolean;
  /** Callback when drawer should close */
  onClose: () => void;
  /** Drawer content */
  children: React.ReactNode;
  /** Drawer title */
  title?: string;
  /** Position of the drawer */
  position?: 'left' | 'right';
  /** Size of the drawer */
  size?: 'small' | 'medium' | 'large';
  /** Show close button */
  showCloseButton?: boolean;
  /** Footer content (e.g., action buttons) */
  footer?: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Drawer component for slide-out panels
 * - Slides in from left or right
 * - Click outside or ESC to close
 * - Configurable sizes
 * - Optional header and footer
 * - Accessible with focus trap
 * - Optimized for 65+ audience
 */
export const Drawer = React.forwardRef<HTMLDivElement, DrawerProps>(
  (
    {
      isOpen,
      onClose,
      children,
      title,
      position = 'right',
      size = 'medium',
      showCloseButton = true,
      footer,
      className,
      ...props
    },
    ref
  ) => {
    const drawerRef = React.useRef<HTMLDivElement>(null);

    // Close on Escape key
    React.useEffect(() => {
      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === 'Escape' && isOpen) {
          onClose();
        }
      };

      if (isOpen) {
        document.addEventListener('keydown', handleEscape);
        // Prevent body scroll when drawer is open
        document.body.style.overflow = 'hidden';

        return () => {
          document.removeEventListener('keydown', handleEscape);
          document.body.style.overflow = '';
        };
      }
    }, [isOpen, onClose]);

    // Focus trap
    React.useEffect(() => {
      if (isOpen && drawerRef.current) {
        const focusableElements = drawerRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        const handleTab = (e: KeyboardEvent) => {
          if (e.key === 'Tab') {
            if (e.shiftKey && document.activeElement === firstElement) {
              e.preventDefault();
              lastElement?.focus();
            } else if (!e.shiftKey && document.activeElement === lastElement) {
              e.preventDefault();
              firstElement?.focus();
            }
          }
        };

        document.addEventListener('keydown', handleTab);
        firstElement?.focus();

        return () => {
          document.removeEventListener('keydown', handleTab);
        };
      }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
      <>
        {/* Overlay */}
        <div
          className={styles.overlay}
          onClick={onClose}
          aria-hidden="true"
        />

        {/* Drawer */}
        <div
          ref={(node) => {
            drawerRef.current = node;
            if (typeof ref === 'function') {
              ref(node);
            } else if (ref) {
              ref.current = node;
            }
          }}
          role="dialog"
          aria-modal="true"
          aria-labelledby={title ? 'drawer-title' : undefined}
          className={[
            styles.drawer,
            styles[position],
            styles[size],
            className,
          ]
            .filter(Boolean)
            .join(' ')}
          {...props}
        >
          {/* Header */}
          {(title || showCloseButton) && (
            <div className={styles.header}>
              {title && (
                <h2 id="drawer-title" className={styles.title}>
                  {title}
                </h2>
              )}
              {showCloseButton && (
                <button
                  onClick={onClose}
                  className={styles.closeButton}
                  aria-label="Close drawer"
                >
                  ✕
                </button>
              )}
            </div>
          )}

          {/* Content */}
          <div className={styles.content}>
            {children}
          </div>

          {/* Footer */}
          {footer && (
            <div className={styles.footer}>
              {footer}
            </div>
          )}
        </div>
      </>
    );
  }
);

Drawer.displayName = 'Drawer';
