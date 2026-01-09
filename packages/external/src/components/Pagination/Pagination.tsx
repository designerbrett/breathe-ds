import React from 'react';
import styles from './Pagination.module.css';

export interface PaginationProps {
  /** Current page (1-indexed) */
  currentPage: number;
  /** Total number of pages */
  totalPages: number;
  /** Callback when page changes */
  onPageChange: (page: number) => void;
  /** Number of page buttons to show */
  siblingCount?: number;
  /** Whether to show first/last buttons */
  showFirstLast?: boolean;
  /** Whether to show previous/next text */
  showPrevNextText?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Pagination component for navigating large datasets
 * - Touch-friendly buttons (56px)
 * - Keyboard navigation
 * - Smart page number display
 * - Accessible with ARIA attributes
 */
export const Pagination = React.forwardRef<HTMLElement, PaginationProps>(
  (
    {
      currentPage,
      totalPages,
      onPageChange,
      siblingCount = 1,
      showFirstLast = true,
      showPrevNextText = true,
      disabled = false,
      className,
      ...props
    },
    ref
  ) => {
    // Generate page numbers to display
    const getPageNumbers = (): (number | 'ellipsis')[] => {
      const pages: (number | 'ellipsis')[] = [];

      // Always show first page
      pages.push(1);

      // Calculate range around current page
      const leftSibling = Math.max(2, currentPage - siblingCount);
      const rightSibling = Math.min(totalPages - 1, currentPage + siblingCount);

      // Add left ellipsis if needed
      if (leftSibling > 2) {
        pages.push('ellipsis');
      }

      // Add pages around current
      for (let i = leftSibling; i <= rightSibling; i++) {
        if (i !== 1 && i !== totalPages) {
          pages.push(i);
        }
      }

      // Add right ellipsis if needed
      if (rightSibling < totalPages - 1) {
        pages.push('ellipsis');
      }

      // Always show last page (if more than 1 page)
      if (totalPages > 1) {
        pages.push(totalPages);
      }

      return pages;
    };

    const handlePageClick = (page: number) => {
      if (disabled || page === currentPage) return;
      if (page >= 1 && page <= totalPages) {
        onPageChange(page);
      }
    };

    const handleKeyDown = (e: React.KeyboardEvent, page: number) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handlePageClick(page);
      }
    };

    const pageNumbers = getPageNumbers();

    return (
      <nav
        ref={ref}
        role="navigation"
        aria-label="Pagination"
        className={[styles.pagination, disabled && styles.disabled, className]
          .filter(Boolean)
          .join(' ')}
        {...props}
      >
        {/* First button */}
        {showFirstLast && (
          <button
            className={[
              styles.button,
              styles.controlButton,
              currentPage === 1 && styles.buttonDisabled,
            ]
              .filter(Boolean)
              .join(' ')}
            onClick={() => handlePageClick(1)}
            disabled={disabled || currentPage === 1}
            aria-label="Go to first page"
          >
            ««
          </button>
        )}

        {/* Previous button */}
        <button
          className={[
            styles.button,
            styles.controlButton,
            currentPage === 1 && styles.buttonDisabled,
          ]
            .filter(Boolean)
            .join(' ')}
          onClick={() => handlePageClick(currentPage - 1)}
          disabled={disabled || currentPage === 1}
          aria-label="Go to previous page"
        >
          {showPrevNextText ? '← Previous' : '‹'}
        </button>

        {/* Page numbers */}
        {pageNumbers.map((page, index) => {
          if (page === 'ellipsis') {
            return (
              <span key={`ellipsis-${index}`} className={styles.ellipsis}>
                ···
              </span>
            );
          }

          return (
            <button
              key={page}
              className={[
                styles.button,
                styles.pageButton,
                page === currentPage && styles.active,
              ]
                .filter(Boolean)
                .join(' ')}
              onClick={() => handlePageClick(page)}
              onKeyDown={(e) => handleKeyDown(e, page)}
              disabled={disabled}
              aria-label={`Go to page ${page}`}
              aria-current={page === currentPage ? 'page' : undefined}
            >
              {page}
            </button>
          );
        })}

        {/* Next button */}
        <button
          className={[
            styles.button,
            styles.controlButton,
            currentPage === totalPages && styles.buttonDisabled,
          ]
            .filter(Boolean)
            .join(' ')}
          onClick={() => handlePageClick(currentPage + 1)}
          disabled={disabled || currentPage === totalPages}
          aria-label="Go to next page"
        >
          {showPrevNextText ? 'Next →' : '›'}
        </button>

        {/* Last button */}
        {showFirstLast && (
          <button
            className={[
              styles.button,
              styles.controlButton,
              currentPage === totalPages && styles.buttonDisabled,
            ]
              .filter(Boolean)
              .join(' ')}
            onClick={() => handlePageClick(totalPages)}
            disabled={disabled || currentPage === totalPages}
            aria-label="Go to last page"
          >
            »»
          </button>
        )}
      </nav>
    );
  }
);

Pagination.displayName = 'Pagination';
