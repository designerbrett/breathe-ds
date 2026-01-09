/**
 * Breathe Design System - Color Tokens
 * Extracted from HTML documentation
 */

export const colors = {
  // Primary Brand Colors (Kivo Blue)
  primary: {
    main: '#2B79B9',        // Kivo Blue
    dark: '#1F5A8E',        // Blue Dark (hover states)
    light: '#E8F2FA',       // Blue Light (backgrounds)
    gradient: 'linear-gradient(90deg, #2B79B9 0%, #3A8FCC 100%)',
  },

  // Accent Colors (use sparingly)
  accent: {
    gold: '#F4B942',        // Celebration Gold
    peach: '#FFB088',       // Warm Peach
  },

  // Neutral Palette
  neutral: {
    deepNavy: '#1A2B3D',    // Primary text, headers
    slate: '#2D4A5F',       // Secondary text
    gray: '#5A6C7D',        // Body text, descriptions
    grayLight: '#7B8A99',   // Tertiary text
    grayLighter: '#A8B5C2', // Placeholder text
    border: '#E8EDF2',      // Borders, dividers
    bgSoft: '#F8FAFB',      // Soft White - backgrounds
    bgPage: '#FAFBFC',      // Page background
    white: '#FFFFFF',       // Pure White
  },

  // Status Colors
  status: {
    success: '#27AE60',     // Success Green
    warning: '#E67E22',     // Warning Orange
    error: '#E74C3C',       // Error Red
    info: '#2980B9',        // Info Blue
  },

  // Status Backgrounds (light tints)
  statusBg: {
    success: '#E8F8F5',
    warning: '#FFF4E6',
    error: '#FFEBEE',
    info: '#E3F2FD',
  },

  // Data Visualization
  chart: {
    primary: 'linear-gradient(180deg, #2B79B9 0%, #3A8FCC 100%)',
    secondary: 'linear-gradient(180deg, #FFB088 0%, #FF9A6C 100%)',
    tertiary: 'linear-gradient(180deg, #A78BFA 0%, #9F7AEA 100%)',
  },

  // Categorical Palette - 10 distinct colors for charts and data visualization
  // Designed to be distinguishable and accessible (colorblind-friendly)
  categorical: {
    blue: '#2B79B9',       // Primary brand blue
    orange: '#E67E22',     // Warm orange
    green: '#27AE60',      // Success green
    purple: '#9B59B6',     // Rich purple
    teal: '#16A085',       // Teal
    red: '#E74C3C',        // Error red
    yellow: '#F39C12',     // Golden yellow
    pink: '#E91E63',       // Vibrant pink
    cyan: '#3498DB',       // Sky blue
    lime: '#2ECC71',       // Lime green
  },

  // Categorical palette as array for easy iteration
  categoricalArray: [
    '#2B79B9',  // blue
    '#E67E22',  // orange
    '#27AE60',  // green
    '#9B59B6',  // purple
    '#16A085',  // teal
    '#E74C3C',  // red
    '#F39C12',  // yellow
    '#E91E63',  // pink
    '#3498DB',  // cyan
    '#2ECC71',  // lime
  ],

  // Sequential palette - for ordered data (light to dark)
  sequential: {
    blue: [
      '#E8F2FA',  // lightest
      '#C1DCEF',
      '#9AC6E5',
      '#73B0DA',
      '#4C9AD0',
      '#2B79B9',  // main
      '#1F5A8E',
      '#153F63',
      '#0C2A42',
      '#051421',  // darkest
    ],
    green: [
      '#E8F8F5',  // lightest
      '#C1E8DC',
      '#9AD8C3',
      '#73C8AA',
      '#4CB891',
      '#27AE60',  // main
      '#1E8449',
      '#155A32',
      '#0C301B',
      '#051810',  // darkest
    ],
  },

  // Diverging palette - for data with a meaningful midpoint
  diverging: {
    redBlue: [
      '#E74C3C',  // red (low)
      '#EC7063',
      '#F1948A',
      '#F5B7B1',
      '#FADBD8',
      '#EBF5FB',  // neutral midpoint
      '#AED6F1',
      '#85C1E9',
      '#5DADE2',
      '#3498DB',  // blue (high)
    ],
  },
} as const;

// Mantine color array (10 shades)
export const mantineColors = {
  blue: [
    '#E8F2FA',  // 0 - lightest
    '#C1DCEF',  // 1
    '#9AC6E5',  // 2
    '#73B0DA',  // 3
    '#4C9AD0',  // 4
    '#2B79B9',  // 5 - main (Kivo Blue)
    '#1F5A8E',  // 6 - dark
    '#153F63',  // 7
    '#0C2A42',  // 8
    '#051421',  // 9 - darkest
  ],
};

export type Colors = typeof colors;
