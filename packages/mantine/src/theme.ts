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
              },
            };
          }
          // Default primary blue
          return {
            root: {
              ...baseStyles,
              background: 'linear-gradient(180deg, rgba(48, 48, 48, 0.00) 63.53%, rgba(255, 255, 255, 0.15) 100%), #2B79B9',
              boxShadow: '0 -1px 0 1px #1D517C inset, 0 0 0 1px #1D517C inset, 0 0.5px 0 1.5px rgba(255, 255, 255, 0.25) inset',
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
    Card: {
      defaultProps: {
        padding: 'lg', // 24px from theme.spacing.lg
        radius: 'md', // 8px from theme.radius.md
        shadow: 'sm',
        withBorder: false,
      },
    },
    'Card.Section': {
      defaultProps: {
        padding: 'md', // 16px for card sections
      },
    },
    Stack: {
      defaultProps: {
        gap: 'md', // 16px from theme.spacing.md
      },
    },
    Group: {
      defaultProps: {
        gap: 'md', // 16px from theme.spacing.md
      },
    },
    Grid: {
      defaultProps: {
        gutter: 'md', // 16px from theme.spacing.md
      },
    },
    Modal: {
      defaultProps: {
        padding: 'lg',
        radius: 'md',
      },
    },
    Paper: {
      defaultProps: {
        padding: 'md',
        radius: 'md',
        shadow: 'xs',
      },
    },
    Tabs: {
      defaultProps: {
        radius: 'md',
      },
    },
    Accordion: {
      defaultProps: {
        radius: 'md',
      },
    },
    Menu: {
      defaultProps: {
        radius: 'md',
      },
    },
    'Menu.Dropdown': {
      defaultProps: {
        padding: 'xs', // 8px for dropdown container
      },
    },
    'Menu.Item': {
      defaultProps: {
        padding: 'sm', // 12px for menu items
      },
    },
    'Menu.Label': {
      defaultProps: {
        padding: 'xs', // 8px for labels
      },
    },
  },
};
