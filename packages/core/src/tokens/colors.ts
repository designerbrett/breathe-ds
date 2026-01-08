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
