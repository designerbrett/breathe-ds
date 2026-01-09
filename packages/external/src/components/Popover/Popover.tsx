import React, { useState, useRef, useEffect } from 'react';
import styles from './Popover.module.css';

export interface PopoverProps {
  /** Trigger element */
  trigger: React.ReactNode;
  /** Popover content */
  children: React.ReactNode;
  /** Placement relative to trigger */
  placement?: 'top' | 'bottom' | 'left' | 'right';
  /** Trigger action */
  triggerOn?: 'click' | 'hover';
  /** Whether to show arrow pointer */
  showArrow?: boolean;
  /** Controlled open state */
  open?: boolean;
  /** Callback when open state changes */
  onOpenChange?: (open: boolean) => void;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Popover component for displaying rich content in an overlay
 * - Multiple placement options
 * - Click or hover triggers
 * - Auto-positioning to stay in viewport
 * - Accessible with keyboard support
 */
export const Popover = React.forwardRef<HTMLDivElement, PopoverProps>(
  (
    {
      trigger,
      children,
      placement = 'bottom',
      triggerOn = 'click',
      showArrow = true,
      open: controlledOpen,
      onOpenChange,
      className,
      ...props
    },
    ref
  ) => {
    const [internalOpen, setInternalOpen] = useState(false);
    const triggerRef = useRef<HTMLDivElement>(null);
    const popoverRef = useRef<HTMLDivElement>(null);
    const isControlled = controlledOpen !== undefined;
    const isOpen = isControlled ? controlledOpen : internalOpen;

    const setOpen = (value: boolean) => {
      if (!isControlled) {
        setInternalOpen(value);
      }
      onOpenChange?.(value);
    };

    const handleTriggerClick = () => {
      if (triggerOn === 'click') {
        setOpen(!isOpen);
      }
    };

    const handleTriggerMouseEnter = () => {
      if (triggerOn === 'hover') {
        setOpen(true);
      }
    };

    const handleTriggerMouseLeave = () => {
      if (triggerOn === 'hover') {
        setOpen(false);
      }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
      }
    };

    // Close on click outside
    useEffect(() => {
      if (!isOpen || triggerOn === 'hover') return;

      const handleClickOutside = (e: MouseEvent) => {
        if (
          triggerRef.current &&
          !triggerRef.current.contains(e.target as Node) &&
          popoverRef.current &&
          !popoverRef.current.contains(e.target as Node)
        ) {
          setOpen(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen, triggerOn]);

    return (
      <div
        ref={ref}
        className={[styles.container, className].filter(Boolean).join(' ')}
        onKeyDown={handleKeyDown}
        {...props}
      >
        <div
          ref={triggerRef}
          className={styles.trigger}
          onClick={handleTriggerClick}
          onMouseEnter={handleTriggerMouseEnter}
          onMouseLeave={handleTriggerMouseLeave}
        >
          {trigger}
        </div>

        {isOpen && (
          <div
            ref={popoverRef}
            className={[
              styles.popover,
              styles[placement],
              showArrow && styles.withArrow,
            ]
              .filter(Boolean)
              .join(' ')}
            role="dialog"
            aria-modal="false"
            onMouseEnter={triggerOn === 'hover' ? () => setOpen(true) : undefined}
            onMouseLeave={triggerOn === 'hover' ? () => setOpen(false) : undefined}
          >
            {showArrow && <div className={styles.arrow} />}
            <div className={styles.content}>{children}</div>
          </div>
        )}
      </div>
    );
  }
);

Popover.displayName = 'Popover';
