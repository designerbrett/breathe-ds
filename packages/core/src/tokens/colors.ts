/**
 * Breathe Design System - Color Tokens
 * Two-tier token structure: Foundation (color scales) → Semantic (usage-based)
 */

// ============================================================================
// TIER 1: FOUNDATION COLORS
// Raw color values organized in scales (0-900)
// These are the "ingredients" - descriptive names only
// ============================================================================

export const foundation = {
  // Primary Brand - Kivo Blue
  blue: {
    50: '#E8F2FA',   // Lightest
    100: '#C1DCEF',
    200: '#9AC6E5',
    300: '#73B0DA',
    400: '#4C9AD0',
    500: '#2B79B9',  // Base Kivo Blue (main brand color)
    600: '#1F5A8E',  // Darker
    700: '#153F63',
    800: '#0C2A42',
    900: '#051421',  // Darkest
  },

  // Neutral Palette
  neutral: {
    0: '#FFFFFF',    // Pure white
    50: '#FAFBFC',   // Page background
    100: '#F8FAFB',  // Soft backgrounds
    200: '#E8EDF2',  // Borders, dividers
    300: '#A8B5C2',  // Placeholder text
    400: '#7B8A99',  // Tertiary text
    500: '#5A6C7D',  // Body text
    600: '#2D4A5F',  // Secondary text
    700: '#1A2B3D',  // Primary text, headers
    800: '#121A24',  // Darkest text (if needed)
  },

  // Success - Green
  green: {
    50: '#E8F8F5',
    100: '#C1E8DC',
    200: '#9AD8C3',
    300: '#73C8AA',
    400: '#4CB891',
    500: '#27AE60',  // Base success green
    600: '#1E8449',
    700: '#155A32',
    800: '#0C301B',
    900: '#051810',
  },

  // Warning - Orange
  orange: {
    50: '#FFF4E6',
    100: '#FFE5CC',
    200: '#FFD6B3',
    300: '#FFC799',
    400: '#FFB880',
    500: '#E67E22',  // Base warning orange
    600: '#CC6619',
    700: '#B34E11',
    800: '#993608',
    900: '#661E00',
  },

  // Error - Red
  red: {
    50: '#FFEBEE',
    100: '#FFCDD2',
    200: '#EF9A9A',
    300: '#E57373',
    400: '#EF5350',
    500: '#E74C3C',  // Base error red
    600: '#D32F2F',
    700: '#C62828',
    800: '#B71C1C',
    900: '#8B0000',
  },

  // Info - Light Blue
  lightBlue: {
    50: '#E3F2FD',
    100: '#BBDEFB',
    200: '#90CAF9',
    300: '#64B5F6',
    400: '#42A5F5',
    500: '#2980B9',  // Base info blue
    600: '#1E88E5',
    700: '#1976D2',
    800: '#1565C0',
    900: '#0D47A1',
  },

  // Accent - Gold
  gold: {
    50: '#FFF9E6',
    100: '#FFF0CC',
    200: '#FFE7B3',
    300: '#FFDE99',
    400: '#FFD580',
    500: '#F4B942',  // Base celebration gold
    600: '#F39C12',
    700: '#E67E22',
    800: '#D35400',
    900: '#BA4A00',
  },

  // Accent - Peach
  peach: {
    50: '#FFF3ED',
    100: '#FFE5D6',
    200: '#FFD8BF',
    300: '#FFCAA8',
    400: '#FFBC91',
    500: '#FFB088',  // Base warm peach
    600: '#FF9A6C',
    700: '#FF8450',
    800: '#FF6E34',
    900: '#E65100',
  },

  // Data Visualization - Purple
  purple: {
    50: '#F3E5F5',
    100: '#E1BEE7',
    200: '#CE93D8',
    300: '#BA68C8',
    400: '#AB47BC',
    500: '#9B59B6',  // Base purple
    600: '#8E44AD',
    700: '#7B1FA2',
    800: '#6A1B9A',
    900: '#4A148C',
  },

  // Data Visualization - Teal
  teal: {
    50: '#E0F2F1',
    100: '#B2DFDB',
    200: '#80CBC4',
    300: '#4DB6AC',
    400: '#26A69A',
    500: '#16A085',  // Base teal
    600: '#00897B',
    700: '#00796B',
    800: '#00695C',
    900: '#004D40',
  },

  // Data Visualization - Yellow
  yellow: {
    50: '#FFFDE7',
    100: '#FFF9C4',
    200: '#FFF59D',
    300: '#FFF176',
    400: '#FFEE58',
    500: '#F39C12',  // Base yellow
    600: '#FDD835',
    700: '#FBC02D',
    800: '#F9A825',
    900: '#F57F17',
  },

  // Data Visualization - Pink
  pink: {
    50: '#FCE4EC',
    100: '#F8BBD0',
    200: '#F48FB1',
    300: '#F06292',
    400: '#EC407A',
    500: '#E91E63',  // Base pink
    600: '#D81B60',
    700: '#C2185B',
    800: '#AD1457',
    900: '#880E4F',
  },

  // Data Visualization - Cyan
  cyan: {
    50: '#E0F7FA',
    100: '#B2EBF2',
    200: '#80DEEA',
    300: '#4DD0E1',
    400: '#26C6DA',
    500: '#3498DB',  // Base cyan
    600: '#00ACC1',
    700: '#0097A7',
    800: '#00838F',
    900: '#006064',
  },

  // Data Visualization - Lime
  lime: {
    50: '#F1F8E9',
    100: '#DCEDC8',
    200: '#C5E1A5',
    300: '#AED581',
    400: '#9CCC65',
    500: '#2ECC71',  // Base lime
    600: '#7CB342',
    700: '#689F38',
    800: '#558B2F',
    900: '#33691E',
  },
} as const;

// ============================================================================
// TIER 2: SEMANTIC TOKENS
// Usage-based tokens that reference foundation colors
// These describe PURPOSE (what they're used for)
// ============================================================================

export const tokens = {
  // TEXT COLORS
  text: {
    primary: foundation.neutral[700],      // Main body text, headings
    secondary: foundation.neutral[600],    // Secondary text
    tertiary: foundation.neutral[500],     // De-emphasized text
    disabled: foundation.neutral[400],     // Disabled text
    placeholder: foundation.neutral[300],  // Placeholder text
    inverse: foundation.neutral[0],        // Text on dark backgrounds
    brand: foundation.blue[500],           // Brand-colored text
    link: foundation.blue[500],            // Links
    linkHover: foundation.blue[600],       // Link hover state
  },

  // SURFACE/BACKGROUND COLORS
  surface: {
    page: foundation.neutral[50],          // Main page background
    default: foundation.neutral[0],        // Default surface/card background
    elevated: foundation.neutral[100],     // Elevated surface
    hover: foundation.neutral[100],        // Hover state background
    pressed: foundation.neutral[200],      // Pressed state background
    selected: foundation.blue[50],         // Selected state background
    disabled: foundation.neutral[100],     // Disabled surface background
    overlay: 'rgba(26, 43, 61, 0.6)',     // Modal/overlay backdrop
  },

  // BORDER COLORS
  border: {
    default: foundation.neutral[200],      // Default borders
    strong: foundation.neutral[300],       // Emphasized borders
    subtle: foundation.neutral[100],       // De-emphasized borders
    brand: foundation.blue[500],           // Brand-colored borders
    disabled: foundation.neutral[200],     // Disabled borders
    focus: foundation.blue[500],           // Focus state borders
    error: foundation.red[500],            // Error state borders
  },

  // ACTION/INTERACTIVE COLORS (buttons, links, interactive elements)
  action: {
    // Primary actions
    primary: foundation.blue[500],
    primaryHover: foundation.blue[600],
    primaryActive: foundation.blue[700],
    primaryDisabled: foundation.neutral[300],
    primarySubtle: foundation.blue[50],
    primarySubtleHover: foundation.blue[100],

    // Secondary actions
    secondary: foundation.neutral[600],
    secondaryHover: foundation.neutral[700],
    secondaryActive: foundation.neutral[800],

    // Tertiary/Ghost actions
    tertiary: 'transparent',
    tertiaryHover: foundation.neutral[100],
    tertiaryActive: foundation.neutral[200],
  },

  // FEEDBACK/STATUS COLORS
  feedback: {
    // Success
    success: foundation.green[500],
    successSubtle: foundation.green[50],
    successBorder: foundation.green[500],
    successText: foundation.green[700],

    // Warning
    warning: foundation.orange[500],
    warningSubtle: foundation.orange[50],
    warningBorder: foundation.orange[500],
    warningText: foundation.orange[800],

    // Error
    error: foundation.red[500],
    errorSubtle: foundation.red[50],
    errorBorder: foundation.red[500],
    errorText: foundation.red[700],

    // Info
    info: foundation.lightBlue[500],
    infoSubtle: foundation.lightBlue[50],
    infoBorder: foundation.lightBlue[500],
    infoText: foundation.lightBlue[700],
  },

  // ACCENT COLORS (use sparingly for celebration, emphasis)
  accent: {
    gold: foundation.gold[500],
    goldSubtle: foundation.gold[50],
    peach: foundation.peach[500],
    peachSubtle: foundation.peach[50],
  },

  // GRADIENTS
  gradient: {
    primary: `linear-gradient(90deg, ${foundation.blue[500]} 0%, ${foundation.blue[300]} 100%)`,
    chart: {
      primary: `linear-gradient(180deg, ${foundation.blue[500]} 0%, ${foundation.blue[300]} 100%)`,
      secondary: `linear-gradient(180deg, ${foundation.peach[500]} 0%, ${foundation.peach[600]} 100%)`,
      tertiary: `linear-gradient(180deg, ${foundation.purple[300]} 0%, ${foundation.purple[500]} 100%)`,
    },
  },

  // DATA VISUALIZATION
  dataViz: {
    // Categorical (distinct colors for different categories)
    categorical: [
      foundation.blue[500],     // Primary brand
      foundation.orange[500],   // Warning
      foundation.green[500],    // Success
      foundation.purple[500],   // Purple
      foundation.teal[500],     // Teal
      foundation.red[500],      // Error
      foundation.yellow[500],   // Yellow
      foundation.pink[500],     // Pink
      foundation.cyan[500],     // Cyan
      foundation.lime[500],     // Lime
    ] as const,

    // Sequential (for ordered/quantitative data)
    sequential: {
      blue: [
        foundation.blue[50],
        foundation.blue[100],
        foundation.blue[200],
        foundation.blue[300],
        foundation.blue[400],
        foundation.blue[500],
        foundation.blue[600],
        foundation.blue[700],
        foundation.blue[800],
        foundation.blue[900],
      ] as const,
      green: [
        foundation.green[50],
        foundation.green[100],
        foundation.green[200],
        foundation.green[300],
        foundation.green[400],
        foundation.green[500],
        foundation.green[600],
        foundation.green[700],
        foundation.green[800],
        foundation.green[900],
      ] as const,
    },

    // Diverging (for data with meaningful midpoint)
    diverging: {
      redBlue: [
        foundation.red[500],
        foundation.red[400],
        foundation.red[300],
        foundation.red[200],
        foundation.red[50],
        foundation.blue[50],
        foundation.blue[200],
        foundation.blue[300],
        foundation.blue[400],
        foundation.blue[500],
      ] as const,
    },
  },
} as const;

// ============================================================================
// BACKWARD COMPATIBILITY
// Maintain old structure for gradual migration
// @deprecated - Use `tokens` instead
// ============================================================================

export const colors = {
  // Primary Brand Colors (Kivo Blue)
  primary: {
    main: foundation.blue[500],
    dark: foundation.blue[600],
    light: foundation.blue[50],
    gradient: tokens.gradient.primary,
  },

  // Accent Colors (use sparingly)
  accent: {
    gold: foundation.gold[500],
    peach: foundation.peach[500],
  },

  // Neutral Palette
  neutral: {
    deepNavy: foundation.neutral[700],
    slate: foundation.neutral[600],
    gray: foundation.neutral[500],
    grayLight: foundation.neutral[400],
    grayLighter: foundation.neutral[300],
    border: foundation.neutral[200],
    bgSoft: foundation.neutral[100],
    bgPage: foundation.neutral[50],
    white: foundation.neutral[0],
  },

  // Status Colors
  status: {
    success: foundation.green[500],
    warning: foundation.orange[500],
    error: foundation.red[500],
    info: foundation.lightBlue[500],
  },

  // Status Backgrounds (light tints)
  statusBg: {
    success: foundation.green[50],
    warning: foundation.orange[50],
    error: foundation.red[50],
    info: foundation.lightBlue[50],
  },

  // Data Visualization
  chart: {
    primary: tokens.gradient.chart.primary,
    secondary: tokens.gradient.chart.secondary,
    tertiary: tokens.gradient.chart.tertiary,
  },

  // Categorical Palette
  categorical: {
    blue: foundation.blue[500],
    orange: foundation.orange[500],
    green: foundation.green[500],
    purple: foundation.purple[500],
    teal: foundation.teal[500],
    red: foundation.red[500],
    yellow: foundation.yellow[500],
    pink: foundation.pink[500],
    cyan: foundation.cyan[500],
    lime: foundation.lime[500],
  },

  // Categorical palette as array
  categoricalArray: tokens.dataViz.categorical,

  // Sequential palette
  sequential: tokens.dataViz.sequential,

  // Diverging palette
  diverging: tokens.dataViz.diverging,
} as const;

// ============================================================================
// MANTINE INTEGRATION
// Color arrays for Mantine theme configuration
// ============================================================================

export const mantineColors = {
  blue: [
    foundation.blue[50],
    foundation.blue[100],
    foundation.blue[200],
    foundation.blue[300],
    foundation.blue[400],
    foundation.blue[500],
    foundation.blue[600],
    foundation.blue[700],
    foundation.blue[800],
    foundation.blue[900],
  ],
  // Can add more color scales as needed for Mantine
} as const;

// ============================================================================
// TYPESCRIPT TYPES
// ============================================================================

export type Foundation = typeof foundation;
export type Tokens = typeof tokens;
export type Colors = typeof colors;
export type MantineColors = typeof mantineColors;

// Helper type for accessing foundation color scales
export type FoundationColor = keyof typeof foundation;
export type FoundationScale = keyof typeof foundation.blue; // 0, 50, 100, ..., 900
