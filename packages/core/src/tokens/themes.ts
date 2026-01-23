import { colors, foundation, tokens } from './colors';
import { typography } from './typography';
import { spacing } from './spacing';
import { radius, foundationRadius, border, borderWidth } from './radius';
import { shadows, foundationShadows } from './shadows';
import { height, foundationHeight } from './height';
import { animation, duration, easing, transition } from './animation';
import { opacity, foundationOpacity } from './opacity';
import { zIndex } from './z-index';

/**
 * Breathe Design System - Theme Configurations
 */

export const externalTheme = {
  name: 'External',
  description: 'Patient-facing mobile apps (65+ audience)',

  // Colors
  colors: colors,         // Legacy structure (backward compatible)
  foundation: foundation, // Foundation color scales
  tokens: tokens,         // Semantic color tokens

  // Typography
  typography: typography.external,
  fontFamily: typography.fontFamily,
  fontWeight: typography.fontWeight,

  // Spacing
  spacing: spacing.external,

  // Border
  border: {
    width: {
      default: border.width.default,
      input: border.width.inputExternal,  // 2px for mobile
      focus: border.width.focus,
      divider: border.width.divider,
      emphasis: border.width.emphasis,
    },
    radius: {
      button: radius.button.external,
      input: radius.input.external,
      card: radius.card.external,
      dialog: radius.dialog.external,
      badge: radius.badge,
      avatar: radius.avatar,
      chip: radius.chip,
      tooltip: radius.tooltip,
    },
  },
  borderWidth,
  foundationRadius,

  // Height
  height: {
    button: height.button.large,           // 56px for mobile
    input: height.input.large,             // 56px for mobile
    touchTarget: height.touchTarget.comfortable, // 56px
    header: height.header,                 // 64px
    tabBar: height.tabBar,                 // 48px
    bottomNav: height.bottomNav,           // 56px
  },
  foundationHeight,

  // Shadows
  shadows: {
    card: shadows.card.external,
    button: shadows.button,
    dropdown: shadows.dropdown,
    modal: shadows.modal,
    popover: shadows.popover,
    tooltip: shadows.tooltip,
    drawer: shadows.drawer,
    focus: shadows.focus,
    focusError: shadows.focusError,
    focusSuccess: shadows.focusSuccess,
    elevation: shadows.elevation,
  },

  // Animation
  animation,
  duration,
  easing,
  transition,

  // Opacity
  opacity,
  foundationOpacity,

  // Z-index
  zIndex,

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

  // Colors
  colors: colors,         // Legacy structure (backward compatible)
  foundation: foundation, // Foundation color scales
  tokens: tokens,         // Semantic color tokens

  // Typography
  typography: typography.internal,
  fontFamily: typography.fontFamily,
  fontWeight: typography.fontWeight,

  // Spacing
  spacing: spacing.internal,

  // Border
  border: {
    width: {
      default: border.width.default,
      input: border.width.input,          // 1px for desktop
      focus: border.width.focus,
      divider: border.width.divider,
      emphasis: border.width.emphasis,
    },
    radius: {
      button: radius.button.internal,
      input: radius.input.internal,
      card: radius.card.internal,
      dialog: radius.dialog.internal,
      badge: radius.badge,
      avatar: radius.avatar,
      chip: radius.chip,
      tooltip: radius.tooltip,
    },
  },
  borderWidth,
  foundationRadius,

  // Height
  height: {
    button: height.button.small,           // 36px for desktop
    input: height.input.small,             // 36px for desktop
    touchTarget: height.touchTarget.minimum, // 44px
    header: height.header,                 // 64px
    tabBar: height.tabBar,                 // 48px
    table: height.table.default,           // 44px
  },
  foundationHeight,

  // Shadows
  shadows: {
    card: shadows.card.internal,
    button: shadows.button,
    dropdown: shadows.dropdown,
    modal: shadows.modal,
    popover: shadows.popover,
    tooltip: shadows.tooltip,
    drawer: shadows.drawer,
    focus: shadows.focus,
    focusError: shadows.focusError,
    focusSuccess: shadows.focusSuccess,
    elevation: shadows.elevation,
  },

  // Animation
  animation,
  duration,
  easing,
  transition,

  // Opacity
  opacity,
  foundationOpacity,

  // Z-index
  zIndex,

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
