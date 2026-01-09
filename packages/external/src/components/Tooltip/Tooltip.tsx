import React from 'react';
import styles from './Tooltip.module.css';

export interface TooltipProps {
  /** Content to display in the tooltip */
  content: React.ReactNode;
  /** Element that triggers the tooltip */
  children: React.ReactElement;
  /** Position of the tooltip relative to trigger */
  position?: 'top' | 'bottom' | 'left' | 'right';
  /** Delay before showing tooltip (ms) */
  delay?: number;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Tooltip component for contextual help
 * - Shows on hover and focus
 * - Touch-friendly with tap to show/hide
 * - Configurable positioning
 * - Accessible with ARIA attributes
 * - Optimized for 65+ audience with larger text
 */
export const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  position = 'top',
  delay = 200,
  className,
}) => {
  const [visible, setVisible] = React.useState(false);
  const [isTouchDevice, setIsTouchDevice] = React.useState(false);
  const timeoutRef = React.useRef<NodeJS.Timeout>();
  const tooltipId = React.useId();

  React.useEffect(() => {
    // Detect if this is a touch device
    const hasTouchScreen = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(hasTouchScreen);
  }, []);

  const showTooltip = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setVisible(true);
    }, delay);
  };

  const hideTooltip = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setVisible(false);
  };

  const toggleTooltip = () => {
    if (visible) {
      hideTooltip();
    } else {
      setVisible(true);
    }
  };

  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Clone the child element and add event handlers
  const trigger = React.cloneElement(children, {
    onMouseEnter: !isTouchDevice ? showTooltip : undefined,
    onMouseLeave: !isTouchDevice ? hideTooltip : undefined,
    onFocus: showTooltip,
    onBlur: hideTooltip,
    onClick: isTouchDevice ? toggleTooltip : children.props.onClick,
    'aria-describedby': visible ? tooltipId : undefined,
    className: [children.props.className, styles.trigger].filter(Boolean).join(' '),
  });

  return (
    <div className={styles.tooltipWrapper}>
      {trigger}
      {visible && (
        <div
          id={tooltipId}
          role="tooltip"
          className={[
            styles.tooltip,
            styles[position],
            className,
          ]
            .filter(Boolean)
            .join(' ')}
        >
          {content}
          <div className={styles.arrow} />
        </div>
      )}
    </div>
  );
};

Tooltip.displayName = 'Tooltip';
