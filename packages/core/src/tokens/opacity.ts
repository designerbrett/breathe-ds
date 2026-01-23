/**
 * Breathe Design System - Opacity Tokens
 */

// Foundation opacity values
export const foundationOpacity = {
  0: '0',       // Fully transparent
  5: '0.05',    // Barely visible
  10: '0.1',    // Very subtle
  20: '0.2',    // Subtle
  30: '0.3',    // Light
  40: '0.4',    // Medium light
  50: '0.5',    // Half
  60: '0.6',    // Medium heavy
  70: '0.7',    // Heavy
  80: '0.8',    // Very heavy
  90: '0.9',    // Almost opaque
  100: '1',     // Fully opaque
} as const;

// Semantic opacity tokens
export const opacity = {
  // Disabled states
  disabled: foundationOpacity[40],        // 0.4 - clearly disabled
  disabledSubtle: foundationOpacity[60],  // 0.6 - slightly disabled

  // Hover states
  hover: foundationOpacity[90],           // 0.9 - slight fade on hover
  hoverOverlay: foundationOpacity[5],     // 0.05 - subtle overlay

  // Active/pressed states
  active: foundationOpacity[80],          // 0.8 - pressed appearance

  // Overlay backgrounds
  overlay: foundationOpacity[60],         // 0.6 - modal backdrop
  overlayLight: foundationOpacity[40],    // 0.4 - light backdrop
  overlayHeavy: foundationOpacity[80],    // 0.8 - heavy backdrop

  // Loading states
  loading: foundationOpacity[50],         // 0.5 - loading skeleton
  loadingPulse: foundationOpacity[20],    // 0.2 - pulse effect

  // Dividers and borders
  divider: foundationOpacity[10],         // 0.1 - subtle divider
  dividerStrong: foundationOpacity[20],   // 0.2 - visible divider

  // Decorative elements
  decorative: foundationOpacity[30],      // 0.3 - subtle decoration
  accent: foundationOpacity[70],          // 0.7 - visible accent

  // Interactive feedback
  focus: foundationOpacity[25],           // 0.25 - focus ring
  selected: foundationOpacity[10],        // 0.1 - selected background

  // Utility
  transparent: foundationOpacity[0],      // 0 - fully transparent
  opaque: foundationOpacity[100],         // 1 - fully opaque
} as const;

export type FoundationOpacity = typeof foundationOpacity;
export type Opacity = typeof opacity;
