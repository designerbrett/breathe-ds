import React, { useState } from 'react';
import styles from './CopyToClipboard.module.css';

export interface CopyToClipboardProps {
  /** Text to copy to clipboard */
  text: string;
  /** Optional children to display (defaults to the text) */
  children?: React.ReactNode;
  /** Callback when copy succeeds */
  onCopy?: () => void;
  /** Callback when copy fails */
  onError?: (error: Error) => void;
  /** Success message to display */
  successMessage?: string;
  /** Duration to show success message (ms) */
  successDuration?: number;
  /** Whether to show the text being copied */
  showText?: boolean;
  /** Additional CSS classes */
  className?: string;
}

/**
 * CopyToClipboard component for one-click text copying
 * - Visual feedback on successful copy
 * - Accessible with keyboard support
 * - Fallback for browsers without clipboard API
 */
export const CopyToClipboard = React.forwardRef<HTMLDivElement, CopyToClipboardProps>(
  (
    {
      text,
      children,
      onCopy,
      onError,
      successMessage = 'Copied!',
      successDuration = 2000,
      showText = true,
      className,
      ...props
    },
    ref
  ) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(text);
        } else {
          // Fallback for browsers without clipboard API
          const textArea = document.createElement('textarea');
          textArea.value = text;
          textArea.style.position = 'fixed';
          textArea.style.left = '-999999px';
          document.body.appendChild(textArea);
          textArea.focus();
          textArea.select();
          try {
            document.execCommand('copy');
          } finally {
            document.body.removeChild(textArea);
          }
        }

        setCopied(true);
        onCopy?.();

        setTimeout(() => {
          setCopied(false);
        }, successDuration);
      } catch (error) {
        onError?.(error as Error);
        console.error('Failed to copy text:', error);
      }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleCopy();
      }
    };

    return (
      <div
        ref={ref}
        className={[styles.container, className].filter(Boolean).join(' ')}
        {...props}
      >
        {showText && <span className={styles.text}>{children || text}</span>}
        <button
          className={[styles.button, copied && styles.copied]
            .filter(Boolean)
            .join(' ')}
          onClick={handleCopy}
          onKeyDown={handleKeyDown}
          aria-label={copied ? successMessage : 'Copy to clipboard'}
          title={copied ? successMessage : 'Copy to clipboard'}
        >
          {copied ? (
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.icon}
            >
              <path
                d="M16.6667 5L7.50004 14.1667L3.33337 10"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.icon}
            >
              <path
                d="M13.3333 10.75V14.25C13.3333 14.8023 12.8856 15.25 12.3333 15.25H5.66667C5.11438 15.25 4.66667 14.8023 4.66667 14.25V7.58333C4.66667 7.03105 5.11438 6.58333 5.66667 6.58333H9.16667"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M15.3333 4.75V10.75"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M12.3333 7.75H15.3333"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M10.8333 4.75H15.3333"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
        {copied && <span className={styles.feedback}>{successMessage}</span>}
      </div>
    );
  }
);

CopyToClipboard.displayName = 'CopyToClipboard';
