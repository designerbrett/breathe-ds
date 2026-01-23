/**
 * Breathe Design System - Shadow/Elevation Tokens
 */

// Foundation shadow values
export const foundationShadows = {
  none: 'none',

  // Subtle shadows (0-4dp elevation)
  xs: '0 1px 2px rgba(26, 43, 61, 0.04)',
  sm: '0 1px 3px rgba(26, 43, 61, 0.06)',

  // Standard shadows (4-8dp elevation)
  md: '0 2px 8px rgba(26, 43, 61, 0.08)',
  lg: '0 4px 12px rgba(26, 43, 61, 0.1)',

  // Elevated shadows (8-16dp elevation)
  xl: '0 8px 24px rgba(26, 43, 61, 0.12)',
  xxl: '0 12px 32px rgba(26, 43, 61, 0.16)',

  // Prominent shadows (16-24dp elevation)
  '2xl': '0 16px 48px rgba(26, 43, 61, 0.2)',
  '3xl': '0 24px 64px rgba(26, 43, 61, 0.24)',

  // Inner shadows
  inner: 'inset 0 2px 4px rgba(26, 43, 61, 0.06)',

  // Focus/Glow effects
  focus: '0 0 0 3px rgba(43, 121, 185, 0.25)',
  focusError: '0 0 0 3px rgba(231, 76, 60, 0.25)',
  focusSuccess: '0 0 0 3px rgba(39, 174, 96, 0.25)',
} as const;

// Semantic shadow tokens
export const shadows = {
  // Elevation levels (Material Design inspired)
  elevation: {
    0: foundationShadows.none,     // Flat, no elevation
    1: foundationShadows.xs,       // Barely raised
    2: foundationShadows.sm,       // Slightly raised
    4: foundationShadows.md,       // Raised
    6: foundationShadows.lg,       // Elevated
    8: foundationShadows.xl,       // Floating
    12: foundationShadows.xxl,     // Prominent
    16: foundationShadows['2xl'],  // Very prominent
    24: foundationShadows['3xl'],  // Maximum elevation
  },

  // Component-specific shadows
  card: {
    external: foundationShadows.md,  // 0 2px 12px - friendly depth
    internal: foundationShadows.sm,  // 0 1px 3px - subtle depth
  },
  button: {
    default: foundationShadows.none,
    hover: foundationShadows.sm,
    active: foundationShadows.xs,
  },
  dropdown: foundationShadows.lg,    // 0 4px 12px
  modal: foundationShadows.xxl,      // 0 12px 32px
  popover: foundationShadows.lg,     // 0 4px 12px
  tooltip: foundationShadows.md,     // 0 2px 8px
  drawer: foundationShadows['2xl'],  // 0 16px 48px

  // Interactive states
  focus: foundationShadows.focus,
  focusError: foundationShadows.focusError,
  focusSuccess: foundationShadows.focusSuccess,

  // Special effects
  inner: foundationShadows.inner,
  none: foundationShadows.none,
} as const;

export type FoundationShadows = typeof foundationShadows;
export type Shadows = typeof shadows;
