/**
 * Breathe Design System - Typography Tokens
 */

export const typography = {
  // Font Families
  fontFamily: {
    heading: "'Lexend', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    mono: "'Courier New', monospace",
  },

  // Font Weights
  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  // External Mode (Mobile - 65+ audience)
  external: {
    fontSize: {
      h1: '40px',
      h2: '32px',
      h3: '24px',
      bodyLarge: '18px',
      body: '17px',        // Base font size
      bodySmall: '15px',
      button: '17px',
      caption: '13px',
    },
    lineHeight: {
      h1: '48px',          // 1.2
      h2: '42px',          // 1.3
      h3: '34px',          // 1.4
      bodyLarge: '29px',   // 1.6
      body: '27px',        // 1.6
      bodySmall: '24px',   // 1.6
      button: '24px',      // 1.4
      caption: '18px',
    },
  },

  // Internal Mode (Desktop - productivity tools)
  internal: {
    // Token naming: number represents base size (e.g., 300 = 12px)
    fontSize: {
      300: '12px',         // font-size-300 (captions, table headers)
      325: '13px',         // font-size-325 (body small)
      350: '14px',         // font-size-350 (body default)
      400: '16px',         // font-size-400 (body large, H3)
      500: '20px',         // font-size-500 (H2)
      600: '24px',         // font-size-600 (H1)
    },
    lineHeight: {
      300: '16px',         // 4px grid aligned
      325: '16px',
      350: '20px',
      400: '24px',
      500: '24px',
      600: '28px',
    },
  },
} as const;

export type Typography = typeof typography;
