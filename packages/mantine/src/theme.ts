import { MantineThemeOverride } from '@mantine/core';
import { mantineColors } from '@breathe-ds/core';

/**
 * Breathe Design System - Mantine Theme Override
 * Applies Breathe tokens to Mantine components
 */
export const breatheMantineTheme: MantineThemeOverride = {
  // Primary color
  primaryColor: 'blue',

  // Custom color palette
  colors: {
    blue: mantineColors.blue,
  },

  // Typography
  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  headings: {
    fontFamily: "'Lexend', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    fontWeight: '600',
    sizes: {
      h1: { fontSize: '24px', lineHeight: '28px' },
      h2: { fontSize: '20px', lineHeight: '24px' },
      h3: { fontSize: '16px', lineHeight: '24px' },
    },
  },

  // Spacing (4px base grid)
  spacing: {
    xs: 8,
    sm: 12,
    md: 16,
    lg: 24,
    xl: 32,
  },

  // Border radius
  radius: {
    xs: 4,
    sm: 6,
    md: 8,
    lg: 12,
    xl: 16,
  },

  // Component defaults
  defaultRadius: 'md',

  // Global styles
  components: {
    Button: {
      defaultProps: {
        size: 'md',
        radius: 8,
      },
      styles: (theme, props) => {
        const baseStyles = {
          fontWeight: 500,
          fontSize: '14px',
          lineHeight: '20px',
          transition: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
          border: 'none',
        };

        // Primary (filled) button - blue with gradient overlay
        if (props.variant === 'filled' || !props.variant) {
          // Critical/error variant
          if (props.color === 'red') {
            return {
              root: {
                ...baseStyles,
                background: 'linear-gradient(180deg, rgba(48, 48, 48, 0.00) 63.53%, rgba(255, 255, 255, 0.15) 100%), #E74C3C',
                boxShadow: '0 -1px 0 1px rgba(183, 60, 47, 0.80) inset, 0 0 0 1px rgba(204, 66, 52, 0.80) inset, 0 0.5px 0 1.5px rgba(247, 128, 134, 0.64) inset',
                '&:hover:not(:disabled):not([data-disabled])': {
                  background: 'linear-gradient(180deg, rgba(48, 48, 48, 0.00) 63.53%, rgba(255, 255, 255, 0.15) 100%), #C7392D',
                },
                '&:active:not(:disabled)': {
                  background: 'linear-gradient(180deg, rgba(48, 48, 48, 0.00) 63.53%, rgba(255, 255, 255, 0.15) 100%), #C33F32',
                  boxShadow: '0 -1px 0 1px rgba(163, 50, 39, 0.80) inset, 0 0 0 1px rgba(184, 56, 44, 0.80) inset, 0 0.5px 0 1.5px rgba(227, 108, 114, 0.64) inset',
                },
                '&:disabled, &[data-disabled]': {
                  opacity: 0.5,
                  cursor: 'not-allowed',
                  background: 'linear-gradient(180deg, rgba(48, 48, 48, 0.00) 63.53%, rgba(255, 255, 255, 0.15) 100%), #E74C3C',
                  boxShadow: '0 -1px 0 1px rgba(183, 60, 47, 0.80) inset, 0 0 0 1px rgba(204, 66, 52, 0.80) inset, 0 0.5px 0 1.5px rgba(247, 128, 134, 0.64) inset',
                },
              },
            };
          }
          // Default primary blue
          return {
            root: {
              ...baseStyles,
              background: 'linear-gradient(180deg, rgba(48, 48, 48, 0.00) 63.53%, rgba(255, 255, 255, 0.15) 100%), #2B79B9',
              boxShadow: '0 -1px 0 1px #1D517C inset, 0 0 0 1px #1D517C inset, 0 0.5px 0 1.5px rgba(255, 255, 255, 0.25) inset',
              '&:hover:not(:disabled):not([data-disabled])': {
                background: 'linear-gradient(180deg, rgba(48, 48, 48, 0.00) 63.53%, rgba(255, 255, 255, 0.15) 100%), #236199',
              },
              '&:active:not(:disabled)': {
                background: 'linear-gradient(180deg, rgba(48, 48, 48, 0.00) 63.53%, rgba(255, 255, 255, 0.15) 100%), #1F6BA4',
                boxShadow: '0 -1px 0 1px #164466 inset, 0 0 0 1px #164466 inset, 0 0.5px 0 1.5px rgba(255, 255, 255, 0.15) inset',
              },
              '&:disabled, &[data-disabled]': {
                opacity: 0.5,
                cursor: 'not-allowed',
                background: 'linear-gradient(180deg, rgba(48, 48, 48, 0.00) 63.53%, rgba(255, 255, 255, 0.15) 100%), #2B79B9',
                boxShadow: '0 -1px 0 1px #1D517C inset, 0 0 0 1px #1D517C inset, 0 0.5px 0 1.5px rgba(255, 255, 255, 0.25) inset',
              },
            },
          };
        }

        // Tertiary (subtle) button - primary blue text, no background, light gray hover
        if (props.variant === 'subtle') {
          return {
            root: {
              ...baseStyles,
              background: 'transparent',
              color: '#2B79B9',
              '&:hover:not(:disabled):not([data-disabled])': {
                background: '#F0F0F0',
              },
              '&:active:not(:disabled)': {
                background: '#E0E0E0',
              },
              '&:disabled, &[data-disabled]': {
                opacity: 0.5,
                cursor: 'not-allowed',
                background: 'transparent',
                color: '#2B79B9',
              },
            },
          };
        }

        // Light button - no background, dark gray text, light gray hover
        if (props.variant === 'light') {
          return {
            root: {
              ...baseStyles,
              background: 'transparent',
              color: '#5C5F62',
              '&:hover:not(:disabled):not([data-disabled])': {
                background: '#F0F0F0',
              },
              '&:active:not(:disabled)': {
                background: '#E0E0E0',
              },
              '&:disabled, &[data-disabled]': {
                opacity: 0.5,
                cursor: 'not-allowed',
                background: 'transparent',
                color: '#5C5F62',
              },
            },
          };
        }

        // Secondary (outline) button - light gray with border
        if (props.variant === 'outline') {
          return {
            root: {
              ...baseStyles,
              background: 'rgba(250, 250, 250, 1)',
              boxShadow: '0 -1px 0 0 #B5B5B5 inset, 0 0 0 1px rgba(0, 0, 0, 0.10) inset, 0 0.5px 0 1.5px rgba(255, 255, 255, 0.8) inset',
              color: '#202223',
              '&:hover:not(:disabled):not([data-disabled])': {
                background: '#F0F0F0',
              },
              '&:active:not(:disabled)': {
                background: '#E8E8E8',
                boxShadow: '0 -1px 0 0 #A0A0A0 inset, 0 0 0 1px rgba(0, 0, 0, 0.15) inset, 0 0.5px 0 1.5px rgba(245, 245, 245, 0.8) inset',
              },
              '&:disabled, &[data-disabled]': {
                opacity: 0.5,
                cursor: 'not-allowed',
                background: 'rgba(250, 250, 250, 1)',
                boxShadow: '0 -1px 0 0 #B5B5B5 inset, 0 0 0 1px rgba(0, 0, 0, 0.10) inset, 0 0.5px 0 1.5px rgba(255, 255, 255, 0.8) inset',
              },
            },
          };
        }

        return { root: baseStyles };
      },
    },
    TextInput: {
      styles: {
        input: {
          fontSize: '14px',
          minHeight: '36px',
        },
      },
    },
    Select: {
      styles: {
        input: {
          fontSize: '14px',
          minHeight: '36px',
        },
      },
    },
  },
};
