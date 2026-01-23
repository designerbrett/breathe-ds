/**
 * Breathe Design System - Animation & Transition Tokens
 */

// Duration values
export const duration = {
  instant: '0ms',
  fast: '150ms',
  normal: '250ms',
  slow: '350ms',
  slower: '500ms',
  slowest: '700ms',
} as const;

// Easing functions
export const easing = {
  // Standard easings
  linear: 'linear',

  // Ease variants
  ease: 'ease',
  easeIn: 'ease-in',
  easeOut: 'ease-out',
  easeInOut: 'ease-in-out',

  // Custom cubic bezier curves
  standard: 'cubic-bezier(0.4, 0.0, 0.2, 1)',      // Material Design standard
  decelerate: 'cubic-bezier(0.0, 0.0, 0.2, 1)',    // Material Design decelerate
  accelerate: 'cubic-bezier(0.4, 0.0, 1, 1)',      // Material Design accelerate
  sharp: 'cubic-bezier(0.4, 0.0, 0.6, 1)',         // Material Design sharp

  // Expressive easings
  bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)', // Bouncy feel
  smooth: 'cubic-bezier(0.25, 0.1, 0.25, 1)',       // Smooth, natural
} as const;

// Semantic animation tokens
export const animation = {
  // Hover states
  hover: {
    duration: duration.fast,
    easing: easing.easeOut,
    transition: `all ${duration.fast} ${easing.easeOut}`,
  },

  // Active/pressed states
  active: {
    duration: duration.instant,
    easing: easing.easeIn,
    transition: `all ${duration.instant} ${easing.easeIn}`,
  },

  // Focus states
  focus: {
    duration: duration.fast,
    easing: easing.standard,
    transition: `all ${duration.fast} ${easing.standard}`,
  },

  // Fade in/out
  fade: {
    duration: duration.normal,
    easing: easing.easeInOut,
    transition: `opacity ${duration.normal} ${easing.easeInOut}`,
  },

  // Slide animations
  slide: {
    duration: duration.normal,
    easing: easing.standard,
    transition: `transform ${duration.normal} ${easing.standard}`,
  },

  // Scale animations (modals, popovers)
  scale: {
    duration: duration.normal,
    easing: easing.decelerate,
    transition: `transform ${duration.normal} ${easing.decelerate}`,
  },

  // Collapse/expand
  collapse: {
    duration: duration.normal,
    easing: easing.standard,
    transition: `height ${duration.normal} ${easing.standard}, opacity ${duration.fast} ${easing.easeOut}`,
  },

  // Page transitions
  pageTransition: {
    duration: duration.slow,
    easing: easing.standard,
    transition: `all ${duration.slow} ${easing.standard}`,
  },

  // Loading states
  loading: {
    duration: duration.slower,
    easing: easing.linear,
    transition: `transform ${duration.slower} ${easing.linear}`,
  },
} as const;

// Transition utilities
export const transition = {
  // Common properties
  all: `all ${duration.normal} ${easing.standard}`,
  colors: `background-color ${duration.fast} ${easing.easeOut}, color ${duration.fast} ${easing.easeOut}, border-color ${duration.fast} ${easing.easeOut}`,
  opacity: `opacity ${duration.normal} ${easing.easeInOut}`,
  transform: `transform ${duration.normal} ${easing.standard}`,
  shadow: `box-shadow ${duration.fast} ${easing.easeOut}`,

  // No transition
  none: 'none',
} as const;

export type Duration = typeof duration;
export type Easing = typeof easing;
export type Animation = typeof animation;
export type Transition = typeof transition;
