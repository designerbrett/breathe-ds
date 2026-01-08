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
      },
      styles: {
        root: {
          fontWeight: 600,
          fontSize: '14px',
        },
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
