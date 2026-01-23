/**
 * Breathe Design System - Z-Index Tokens
 * Standardized layering system
 */

export const zIndex = {
  // Base content layers
  base: 0,           // Default page content
  raised: 1,         // Slightly raised content (dropdowns relative to container)

  // Navigation layers
  header: 100,       // Site header/navigation
  sticky: 200,       // Sticky elements (table headers, etc.)

  // Overlay layers
  dropdown: 1000,    // Dropdown menus, popovers
  tooltip: 1100,     // Tooltips
  popover: 1200,     // Popovers, flyouts

  // Modal layers
  overlay: 1300,     // Modal backdrops
  modal: 1400,       // Modal dialogs
  drawer: 1500,      // Side drawers

  // Notification layers
  notification: 1600, // Toast notifications, alerts

  // Critical layers
  toast: 1700,       // Toast messages (highest priority notifications)

  // Debug/dev tools (should be highest)
  debug: 9999,       // Development tools, debugging overlays
} as const;

export type ZIndex = typeof zIndex;
