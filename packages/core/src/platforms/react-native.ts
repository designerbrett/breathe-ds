/**
 * Breathe Design System - React Native Platform Tokens
 *
 * React Native requires numeric values instead of CSS strings.
 * This file provides platform-specific token exports.
 */

import { foundation as webFoundation, tokens as webTokens } from '../tokens/colors';
import { typography as webTypography } from '../tokens/typography';
import { spacing as webSpacing } from '../tokens/spacing';
import { foundationRadius as webFoundationRadius, borderWidth as webBorderWidth } from '../tokens/radius';
import { foundationHeight as webFoundationHeight } from '../tokens/height';
import { foundationOpacity as webFoundationOpacity } from '../tokens/opacity';

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Convert CSS pixel string to number
 * "16px" -> 16
 * "1.5" -> 1.5
 * "9999px" -> 9999
 */
const pxToNumber = (value: string): number => {
  return parseFloat(value.replace('px', ''));
};

/**
 * Convert object of CSS strings to numbers
 */
const convertToNumbers = <T extends Record<string, string>>(obj: T): { [K in keyof T]: number } => {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    acc[key] = pxToNumber(value);
    return acc;
  }, {} as any);
};

// ============================================================================
// COLORS (Same for RN and Web)
// ============================================================================

/**
 * Colors work the same in React Native
 * Hex codes like "#2B79B9" are supported
 */
export const foundation = webFoundation;
export const tokens = webTokens;

// ============================================================================
// TYPOGRAPHY
// ============================================================================

/**
 * Font families for React Native
 * Note: These need to match installed fonts in your RN project
 */
export const fontFamily = {
  heading: 'Lexend',          // Make sure font is linked in RN
  body: 'Inter',              // Make sure font is linked in RN
  mono: 'Courier',            // System font
};

/**
 * Font weights for React Native
 * Can be string ("400", "600") or number (400, 600)
 * Using strings for consistency with iOS/Android
 */
export const fontWeight = {
  light: '300',
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
} as const;

/**
 * Font sizes as numbers (no "px" suffix)
 */
export const fontSize = {
  // External (Mobile - 65+ audience)
  external: {
    h1: 40,
    h2: 32,
    h3: 24,
    bodyLarge: 18,
    body: 17,
    bodySmall: 15,
    button: 17,
    caption: 13,
  },

  // Internal (Desktop/Tablet)
  internal: {
    300: 12,
    325: 13,
    350: 14,
    400: 16,
    500: 20,
    600: 24,
  },
} as const;

/**
 * Line heights as numbers
 */
export const lineHeight = {
  // External
  external: {
    h1: 48,
    h2: 42,
    h3: 34,
    bodyLarge: 29,
    body: 27,
    bodySmall: 24,
    button: 24,
    caption: 18,
  },

  // Internal
  internal: {
    300: 16,
    325: 16,
    350: 20,
    400: 24,
    500: 24,
    600: 28,
  },
} as const;

/**
 * Typography object combining all font tokens
 */
export const typography = {
  fontFamily,
  fontWeight,
  fontSize,
  lineHeight,
} as const;

// ============================================================================
// SPACING
// ============================================================================

/**
 * Spacing as numbers (no "px" suffix)
 */
export const spacing = {
  // External (8px base grid)
  external: convertToNumbers(webSpacing.external),

  // Internal (4px base grid)
  internal: convertToNumbers(webSpacing.internal),
} as const;

// ============================================================================
// BORDER WIDTH
// ============================================================================

/**
 * Border widths as numbers
 */
export const borderWidth = convertToNumbers(webBorderWidth);

// ============================================================================
// BORDER RADIUS
// ============================================================================

/**
 * Border radius as numbers
 */
export const borderRadius = {
  ...convertToNumbers(webFoundationRadius),
  // Note: 'full' in RN is typically achieved with borderRadius = width/2 or height/2
  // We keep 9999 here as a convention, but you should calculate actual radius in component
} as const;

// Semantic radius helpers
export const radius = {
  button: {
    external: 12,
    internal: 8,
  },
  input: {
    external: 12,
    internal: 6,
  },
  card: {
    external: 20,
    internal: 12,
  },
  dialog: {
    external: 24,
    internal: 16,
  },
  badge: 9999,  // Use with width/2 or height/2
  avatar: 9999, // Use with width/2 or height/2
  chip: 16,
  tooltip: 8,
} as const;

// ============================================================================
// HEIGHT
// ============================================================================

/**
 * Height values as numbers
 */
export const height = {
  // Foundation heights
  foundation: convertToNumbers(webFoundationHeight),

  // Touch targets
  touchTarget: {
    minimum: 44,
    comfortable: 56,
  },

  // Components
  button: {
    small: 36,
    medium: 44,
    large: 56,
  },

  input: {
    small: 36,
    medium: 44,
    large: 56,
  },

  // Navigation
  header: 64,
  tabBar: 48,
  bottomNav: 56,
} as const;

// ============================================================================
// SHADOWS
// ============================================================================

/**
 * Shadow values for React Native
 * RN uses separate properties: shadowColor, shadowOffset, shadowOpacity, shadowRadius
 * Android uses elevation
 */
export const shadows = {
  // iOS shadows
  ios: {
    elevation0: {
      shadowColor: '#1A2B3D',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0,
      shadowRadius: 0,
    },
    elevation1: {
      shadowColor: '#1A2B3D',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.04,
      shadowRadius: 2,
    },
    elevation2: {
      shadowColor: '#1A2B3D',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.06,
      shadowRadius: 3,
    },
    elevation4: {
      shadowColor: '#1A2B3D',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.08,
      shadowRadius: 8,
    },
    elevation8: {
      shadowColor: '#1A2B3D',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 12,
    },
    elevation16: {
      shadowColor: '#1A2B3D',
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.12,
      shadowRadius: 24,
    },
  },

  // Android elevation (simpler)
  android: {
    elevation0: { elevation: 0 },
    elevation1: { elevation: 1 },
    elevation2: { elevation: 2 },
    elevation4: { elevation: 4 },
    elevation8: { elevation: 8 },
    elevation16: { elevation: 16 },
  },
} as const;

// ============================================================================
// OPACITY
// ============================================================================

/**
 * Opacity values as numbers (0-1)
 */
export const opacity = {
  // Foundation
  foundation: convertToNumbers(webFoundationOpacity),

  // Semantic
  disabled: 0.4,
  disabledSubtle: 0.6,
  hover: 0.9,
  hoverOverlay: 0.05,
  active: 0.8,
  overlay: 0.6,
  overlayLight: 0.4,
  overlayHeavy: 0.8,
  loading: 0.5,
  loadingPulse: 0.2,
  divider: 0.1,
  dividerStrong: 0.2,
  decorative: 0.3,
  accent: 0.7,
  focus: 0.25,
  selected: 0.1,
  transparent: 0,
  opaque: 1,
} as const;

// ============================================================================
// ANIMATION
// ============================================================================

/**
 * Animation durations as numbers (milliseconds)
 */
export const animationDuration = {
  instant: 0,
  fast: 150,
  normal: 250,
  slow: 350,
  slower: 500,
  slowest: 700,
} as const;

/**
 * Animation easing (React Native uses different easing functions)
 * Import from 'react-native' Easing module
 */
export const animationEasing = {
  linear: 'linear',
  ease: 'ease',
  easeIn: 'ease-in',
  easeOut: 'ease-out',
  easeInOut: 'ease-in-out',
  // For react-native Animated, use: Easing.linear, Easing.ease, etc.
} as const;

// ============================================================================
// Z-INDEX (Same for RN)
// ============================================================================

/**
 * Z-index values work the same in React Native
 */
export const zIndex = {
  base: 0,
  raised: 1,
  dropdown: 1000,
  tooltip: 1100,
  popover: 1200,
  overlay: 1300,
  modal: 1400,
  drawer: 1500,
  notification: 1600,
  toast: 1700,
} as const;

// ============================================================================
// PLATFORM-SPECIFIC HELPERS
// ============================================================================

/**
 * Get platform-specific shadow
 * Usage: ...getShadow('elevation4')
 */
export const getShadow = (elevation: keyof typeof shadows.ios) => {
  return {
    ...shadows.ios[elevation],
    ...shadows.android[elevation],
  };
};

/**
 * Platform-specific spacing
 */
export const platformSpacing = {
  // iOS typically has more generous spacing
  ios: {
    statusBarHeight: 44,
    safeAreaTop: 44,
    safeAreaBottom: 34,
  },
  // Android
  android: {
    statusBarHeight: 24,
    safeAreaTop: 24,
    safeAreaBottom: 0,
  },
} as const;

// ============================================================================
// TYPESCRIPT TYPES
// ============================================================================

export type RNFoundation = typeof foundation;
export type RNTokens = typeof tokens;
export type RNTypography = typeof typography;
export type RNFontFamily = typeof fontFamily;
export type RNFontWeight = typeof fontWeight;
export type RNFontSize = typeof fontSize;
export type RNLineHeight = typeof lineHeight;
export type RNSpacing = typeof spacing;
export type RNBorderWidth = typeof borderWidth;
export type RNBorderRadius = typeof borderRadius;
export type RNRadius = typeof radius;
export type RNHeight = typeof height;
export type RNShadows = typeof shadows;
export type RNOpacity = typeof opacity;
export type RNAnimationDuration = typeof animationDuration;
export type RNAnimationEasing = typeof animationEasing;
export type RNZIndex = typeof zIndex;

// ============================================================================
// EXPORTS
// ============================================================================

export default {
  // Colors
  foundation,
  tokens,

  // Typography
  typography,
  fontFamily,
  fontWeight,
  fontSize,
  lineHeight,

  // Layout
  spacing,
  height,

  // Visual
  borderWidth,
  borderRadius,
  radius,
  shadows,
  opacity,

  // Animation
  animationDuration,
  animationEasing,

  // Layers
  zIndex,

  // Helpers
  getShadow,
  platformSpacing,
};
