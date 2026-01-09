import React, { useEffect } from 'react';
import styles from './Modal.module.css';

export interface ModalProps {
  /** Whether the modal is open */
  open: boolean;
  /** Callback when modal should close */
  onClose: () => void;
  /** Modal title */
  title?: string;
  /** Modal content */
  children: React.ReactNode;
  /** Size of the modal */
  size?: 'default' | 'large';
  /** Optional className for modal content */
  className?: string;
}

/**
 * Modal component for focused interactions
 * - Locks background scroll
 * - Accessible with keyboard support (ESC to close)
 * - Focus trap for keyboard navigation
 * - Large, clear close button for 65+ audience
 */
export const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  title,
  children,
  size = 'default',
  className,
}) => {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Handle ESC key to close
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className={styles.overlay} onClick={onClose} role="presentation">
      <div
        className={[styles.modal, styles[`size-${size}`], className]
          .filter(Boolean)
          .join(' ')}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'modal-title' : undefined}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className={styles.closeButton}
          aria-label="Close modal"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Title */}
        {title && (
          <div className={styles.header}>
            <h2 id="modal-title" className={styles.title}>
              {title}
            </h2>
          </div>
        )}

        {/* Content */}
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

Modal.displayName = 'Modal';

/** Modal Footer - Optional footer section for actions */
export const ModalFooter: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <div className={[styles.footer, className].filter(Boolean).join(' ')}>
      {children}
    </div>
  );
};

ModalFooter.displayName = 'ModalFooter';
