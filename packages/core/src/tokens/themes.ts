import { colors } from './colors';
import { typography } from './typography';
import { spacing } from './spacing';

/**
 * Breathe Design System - Theme Configurations
 */

export const externalTheme = {
  name: 'External',
  description: 'Patient-facing mobile apps (65+ audience)',
  colors: colors,
  typography: typography.external,
  spacing: spacing.external,

  // Component-specific tokens
  components: {
    button: {
      minHeight: '56px',
      fontSize: '17px',
      padding: '16px 32px',
      borderRadius: '12px',
      fontWeight: 600,
    },
    input: {
      minHeight: '56px',
      fontSize: '17px',
      padding: '16px',
      borderRadius: '12px',
      borderWidth: '2px',
    },
    card: {
      borderRadius: '20px',
      padding: '24px',
      shadow: '0 2px 12px rgba(26, 43, 61, 0.06)',
    },
  },

  // Accessibility
  a11y: {
    minTouchTarget: '44px',
    recommendedTouchTarget: '56px',
    minContrast: 4.5,
  },
} as const;

export const internalTheme = {
  name: 'Internal',
  description: 'Dashboards & admin tools (desktop)',
  colors: colors,
  typography: typography.internal,
  spacing: spacing.internal,

  // Component-specific tokens
  components: {
    button: {
      minHeight: '36px',
      fontSize: '14px',
      padding: '8px 16px',
      borderRadius: '8px',
      fontWeight: 600,
    },
    input: {
      minHeight: '36px',
      fontSize: '14px',
      padding: '8px 12px',
      borderRadius: '6px',
      borderWidth: '1px',
    },
    card: {
      borderRadius: '12px',
      padding: '20px',
      shadow: '0 1px 3px rgba(26, 43, 61, 0.04)',
    },
  },

  // Base unit for internal spacing
  baseUnit: 4, // 4px base grid
} as const;

export type ExternalTheme = typeof externalTheme;
export type InternalTheme = typeof internalTheme;
