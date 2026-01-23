/**
 * Breathe Design System - Border Tokens
 * Includes border width and border radius
 */

// Border Width
export const borderWidth = {
  none: '0px',
  thin: '1px',     // Default border
  medium: '2px',   // Emphasized borders, focus states
  thick: '3px',    // Heavy emphasis
  heavy: '4px',    // Maximum emphasis
} as const;

// Semantic border widths
export const border = {
  width: {
    default: borderWidth.thin,      // 1px - most common
    input: borderWidth.thin,        // 1px - form inputs
    inputExternal: borderWidth.medium, // 2px - mobile inputs (easier to see)
    focus: borderWidth.medium,      // 2px - focus states
    divider: borderWidth.thin,      // 1px - dividers
    emphasis: borderWidth.thick,    // 3px - strong emphasis
  }
} as const;

// Foundation radius values
export const foundationRadius = {
  0: '0px',      // No radius (sharp corners)
  2: '2px',      // Minimal rounding
  4: '4px',      // Subtle rounding
  6: '6px',      // Small rounding
  8: '8px',      // Medium rounding
  12: '12px',    // Large rounding
  16: '16px',    // XL rounding
  20: '20px',    // XXL rounding
  24: '24px',    // Card rounding
  full: '9999px', // Fully rounded (pills, circular)
} as const;

// Semantic radius tokens
export const radius = {
  // Interactive elements
  button: {
    external: foundationRadius[12],  // 12px - larger for mobile touch
    internal: foundationRadius[8],   // 8px - compact for desktop
  },
  input: {
    external: foundationRadius[12],  // 12px - matches buttons
    internal: foundationRadius[6],   // 6px - compact for desktop
  },

  // Containers
  card: {
    external: foundationRadius[20],  // 20px - friendly, approachable
    internal: foundationRadius[12],  // 12px - professional
  },
  dialog: {
    external: foundationRadius[24],  // 24px - prominent modals
    internal: foundationRadius[16],  // 16px - subtle modals
  },

  // UI elements
  badge: foundationRadius.full,      // Fully rounded pill
  avatar: foundationRadius.full,     // Circular
  chip: foundationRadius[16],        // Rounded pill
  tooltip: foundationRadius[8],      // Medium rounding

  // Data visualization
  chartBar: foundationRadius[4],     // Subtle rounding
  chartCard: foundationRadius[12],   // Medium rounding

  // Utility
  none: foundationRadius[0],         // Sharp corners
  sm: foundationRadius[4],           // Small
  md: foundationRadius[8],           // Medium
  lg: foundationRadius[12],          // Large
  xl: foundationRadius[20],          // XL
  full: foundationRadius.full,       // Fully rounded
} as const;

export type BorderWidth = typeof borderWidth;
export type Border = typeof border;
export type FoundationRadius = typeof foundationRadius;
export type Radius = typeof radius;
