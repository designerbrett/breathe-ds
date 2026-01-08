/**
 * Breathe Design System - Spacing Tokens
 * External: 8px base grid
 * Internal: 4px base grid
 */

export const spacing = {
  // External Mode (8px base)
  external: {
    xxs: '4px',
    xs: '8px',
    sm: '12px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
    xxxl: '64px',
  },

  // Internal Mode (4px base grid)
  // space-100 = 4px (1×), space-200 = 8px (2×), etc.
  internal: {
    100: '4px',
    200: '8px',
    300: '12px',
    400: '16px',
    500: '20px',
    600: '24px',
    800: '32px',
    1000: '40px',
    1200: '48px',
    1600: '64px',
  },

  // Mantine spacing (for theme override)
  mantine: {
    xs: 8,
    sm: 12,
    md: 16,
    lg: 24,
    xl: 32,
  },
} as const;

export type Spacing = typeof spacing;
