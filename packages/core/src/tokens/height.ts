/**
 * Breathe Design System - Height Tokens
 * Min-height and height values for components
 */

// Foundation height values
export const foundationHeight = {
  0: '0px',
  100: '24px',
  200: '32px',
  300: '36px',
  400: '40px',
  500: '44px',   // Minimum touch target (accessibility)
  600: '48px',
  700: '56px',   // Comfortable touch target
  800: '64px',
  900: '72px',
  1000: '80px',
} as const;

// Semantic height tokens
export const height = {
  // Touch targets (interactive elements)
  touchTarget: {
    minimum: foundationHeight[500],      // 44px - WCAG minimum
    comfortable: foundationHeight[700],  // 56px - preferred for mobile
  },

  // Buttons
  button: {
    small: foundationHeight[300],        // 36px - compact (internal)
    medium: foundationHeight[500],       // 44px - default
    large: foundationHeight[700],        // 56px - mobile/external
  },

  // Form inputs
  input: {
    small: foundationHeight[300],        // 36px - compact (internal)
    medium: foundationHeight[500],       // 44px - default
    large: foundationHeight[700],        // 56px - mobile/external
  },

  // Select dropdowns
  select: {
    small: foundationHeight[300],        // 36px
    medium: foundationHeight[500],       // 44px
    large: foundationHeight[700],        // 56px
  },

  // Table rows
  table: {
    compact: foundationHeight[300],      // 36px - dense tables
    default: foundationHeight[500],      // 44px - standard
    comfortable: foundationHeight[700],  // 56px - spacious
  },

  // Navigation
  header: foundationHeight[800],         // 64px - site header
  tabBar: foundationHeight[600],         // 48px - tab navigation
  bottomNav: foundationHeight[700],      // 56px - bottom navigation (mobile)

  // Cards & containers (min-height)
  card: {
    small: '120px',
    medium: '200px',
    large: '300px',
  },

  // Utility
  none: foundationHeight[0],
  full: '100%',
  screen: '100vh',
  min: 'min-content',
  max: 'max-content',
  fit: 'fit-content',
} as const;

export type FoundationHeight = typeof foundationHeight;
export type Height = typeof height;
