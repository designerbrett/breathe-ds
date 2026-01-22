/**
 * Data Visualization Color Palettes
 * Color systems for charts, graphs, and data visualization
 * Based on Breathe Design System
 */

/**
 * Categorical Palette
 * For discrete categories (departments, products, regions) - 10 distinct colors
 * Use for: Pie charts, bar charts comparing categories, line charts with multiple series
 * Colors are perceptually distinct and colorblind-safe
 */
export const CATEGORICAL_PALETTE = {
  primaryBlue: '#2B79B9',
  green: '#27AE60',
  orange: '#E67E22',
  purple: '#9B59B6',
  red: '#E74C3C',
  teal: '#16A085',
  gold: '#F39C12',
  skyBlue: '#3498DB',
  darkRed: '#C0392B',
  violet: '#8E44AD',
} as const;

export const CATEGORICAL_COLORS = Object.values(CATEGORICAL_PALETTE);

/**
 * Sequential Palette - Blue (Low → High)
 * For ordered data showing progression or intensity
 * Use for: Heat maps, choropleth maps, single-metric dashboards
 * Light = low values, Dark = high values
 */
export const SEQUENTIAL_BLUE = [
  '#EBF5FB', // Lightest
  '#AED6F1',
  '#5DADE2',
  '#3498DB',
  '#2E86C1',
  '#2874A6',
  '#1B4F72', // Darkest
] as const;

/**
 * Sequential Palette - Green (Good → Better → Best)
 * For positive progression or success metrics
 */
export const SEQUENTIAL_GREEN = [
  '#E8F8F5', // Lightest
  '#A9DFBF',
  '#52BE80',
  '#27AE60',
  '#229954',
  '#1E8449',
  '#186A3B', // Darkest
] as const;

/**
 * Diverging Palette (Red ← Neutral → Green)
 * For data with meaningful midpoint (positive/negative, above/below target)
 * Use for: Variance analysis, performance vs target, survey responses
 * Always center neutral at the midpoint
 */
export const DIVERGING_PALETTE = {
  worst: '#C0392B',    // Darkest Red
  bad: '#E74C3C',      // Red
  poor: '#EC7063',     // Light Red
  below: '#F5B7B1',    // Very Light Red
  neutral: '#F8F9FA',  // Gray/Neutral
  above: '#A9DFBF',    // Very Light Green
  good: '#52BE80',     // Light Green
  great: '#27AE60',    // Green
  best: '#1E8449',     // Darkest Green
} as const;

export const DIVERGING_COLORS = Object.values(DIVERGING_PALETTE);

/**
 * Trend Colors
 * For indicating positive/negative trends
 */
export const TREND_COLORS = {
  positive: '#27AE60',  // Green
  negative: '#E74C3C',  // Red
  neutral: '#7B8A99',   // Gray
} as const;

/**
 * Gradient Definitions
 * For use in bar charts and area charts
 * Light (left/top) → Normal (right/bottom)
 */
export const GRADIENTS = {
  blue: ['#E3F2FD', '#2B79B9'],      // Very light blue → Primary blue
  green: ['#E8F8F5', '#27AE60'],     // Very light green → Green
  orange: ['#FEF5E7', '#E67E22'],    // Very light orange → Orange
  red: ['#FDEDEC', '#E74C3C'],       // Very light red → Red
  purple: ['#F4ECF7', '#9B59B6'],    // Very light purple → Purple
  teal: ['#E8F8F5', '#16A085'],      // Very light teal → Teal
} as const;

/**
 * Helper function to get a color from the categorical palette by index
 */
export const getCategoricalColor = (index: number): string => {
  return CATEGORICAL_COLORS[index % CATEGORICAL_COLORS.length];
};

/**
 * Helper function to get a gradient color pair
 */
export const getGradient = (name: keyof typeof GRADIENTS): [string, string] => {
  return GRADIENTS[name];
};

/**
 * Helper function to get sequential color based on value (0-1)
 */
export const getSequentialBlue = (value: number): string => {
  const index = Math.floor(value * (SEQUENTIAL_BLUE.length - 1));
  return SEQUENTIAL_BLUE[Math.min(index, SEQUENTIAL_BLUE.length - 1)];
};

/**
 * Helper function to get sequential green color based on value (0-1)
 */
export const getSequentialGreen = (value: number): string => {
  const index = Math.floor(value * (SEQUENTIAL_GREEN.length - 1));
  return SEQUENTIAL_GREEN[Math.min(index, SEQUENTIAL_GREEN.length - 1)];
};

/**
 * Helper function to get diverging color based on value (-1 to 1)
 * -1 = worst (red), 0 = neutral, 1 = best (green)
 */
export const getDivergingColor = (value: number): string => {
  const normalized = Math.max(-1, Math.min(1, value));
  const colors = DIVERGING_COLORS;
  const midpoint = Math.floor(colors.length / 2);

  if (normalized === 0) {
    return colors[midpoint];
  } else if (normalized > 0) {
    const index = midpoint + Math.ceil(normalized * (colors.length - midpoint - 1));
    return colors[index];
  } else {
    const index = Math.floor((1 + normalized) * midpoint);
    return colors[index];
  }
};
