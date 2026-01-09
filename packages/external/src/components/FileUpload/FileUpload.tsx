import React, { useState, useRef } from 'react';
import styles from './FileUpload.module.css';

export interface FileUploadProps {
  /** Callback when files are selected */
  onFilesChange?: (files: File[]) => void;
  /** Accepted file types (e.g., "image/*", ".pdf") */
  accept?: string;
  /** Allow multiple file selection */
  multiple?: boolean;
  /** Maximum file size in bytes */
  maxSize?: number;
  /** Maximum number of files */
  maxFiles?: number;
  /** Disabled state */
  disabled?: boolean;
  /** Helper text to display */
  helperText?: string;
  /** Error message */
  error?: string;
  /** Additional CSS classes */
  className?: string;
}

/**
 * FileUpload component with drag-and-drop support
 * - Visual drag-and-drop area
 * - File validation (type, size, count)
 * - Accessible with keyboard support
 * - Mobile-friendly file selection
 */
export const FileUpload = React.forwardRef<HTMLDivElement, FileUploadProps>(
  (
    {
      onFilesChange,
      accept,
      multiple = false,
      maxSize,
      maxFiles = multiple ? 10 : 1,
      disabled = false,
      helperText,
      error,
      className,
      ...props
    },
    ref
  ) => {
    const [isDragging, setIsDragging] = useState(false);
    const [files, setFiles] = useState<File[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);

    const validateFiles = (fileList: FileList | File[]): File[] => {
      const filesArray = Array.from(fileList);
      const validFiles: File[] = [];

      for (const file of filesArray) {
        // Check file count
        if (validFiles.length + files.length >= maxFiles) {
          break;
        }

        // Check file size
        if (maxSize && file.size > maxSize) {
          console.warn(`File ${file.name} exceeds maximum size`);
          continue;
        }

        validFiles.push(file);
      }

      return validFiles;
    };

    const handleFiles = (fileList: FileList | File[]) => {
      if (disabled) return;

      const validFiles = validateFiles(fileList);
      const newFiles = multiple ? [...files, ...validFiles] : validFiles;

      setFiles(newFiles);
      onFilesChange?.(newFiles);
    };

    const handleDragEnter = (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      if (!disabled) {
        setIsDragging(true);
      }
    };

    const handleDragLeave = (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);
    };

    const handleDragOver = (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
    };

    const handleDrop = (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);

      if (disabled) return;

      const droppedFiles = e.dataTransfer.files;
      if (droppedFiles.length > 0) {
        handleFiles(droppedFiles);
      }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length > 0) {
        handleFiles(e.target.files);
      }
    };

    const handleClick = () => {
      if (!disabled) {
        inputRef.current?.click();
      }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if ((e.key === 'Enter' || e.key === ' ') && !disabled) {
        e.preventDefault();
        handleClick();
      }
    };

    const removeFile = (index: number) => {
      const newFiles = files.filter((_, i) => i !== index);
      setFiles(newFiles);
      onFilesChange?.(newFiles);
    };

    const formatFileSize = (bytes: number): string => {
      if (bytes === 0) return '0 Bytes';
      const k = 1024;
      const sizes = ['Bytes', 'KB', 'MB', 'GB'];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
    };

    return (
      <div
        ref={ref}
        className={[styles.container, className].filter(Boolean).join(' ')}
        {...props}
      >
        <div
          className={[
            styles.dropzone,
            isDragging && styles.dragging,
            disabled && styles.disabled,
            error && styles.error,
          ]
            .filter(Boolean)
            .join(' ')}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          role="button"
          tabIndex={disabled ? -1 : 0}
          aria-label="Upload files"
        >
          <input
            ref={inputRef}
            type="file"
            accept={accept}
            multiple={multiple}
            onChange={handleInputChange}
            disabled={disabled}
            className={styles.input}
            aria-hidden="true"
          />
          <div className={styles.content}>
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              className={styles.icon}
            >
              <path
                d="M24 16V32M24 16L18 22M24 16L30 22"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 32V36C8 38.2091 9.79086 40 12 40H36C38.2091 40 40 38.2091 40 36V32"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <p className={styles.title}>
              {isDragging ? 'Drop files here' : 'Drag and drop files here'}
            </p>
            <p className={styles.subtitle}>or click to browse</p>
            {helperText && !error && (
              <p className={styles.helper}>{helperText}</p>
            )}
          </div>
        </div>

        {error && <p className={styles.errorMessage}>{error}</p>}

        {files.length > 0 && (
          <div className={styles.fileList}>
            {files.map((file, index) => (
              <div key={`${file.name}-${index}`} className={styles.fileItem}>
                <div className={styles.fileInfo}>
                  <span className={styles.fileName}>{file.name}</span>
                  <span className={styles.fileSize}>
                    {formatFileSize(file.size)}
                  </span>
                </div>
                <button
                  className={styles.removeButton}
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFile(index);
                  }}
                  aria-label={`Remove ${file.name}`}
                  type="button"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
);

FileUpload.displayName = 'FileUpload';
