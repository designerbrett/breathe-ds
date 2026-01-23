# Design Tokens Overview

## What Are Design Tokens?

Design tokens are the visual design atoms of the design system — specifically, they are named entities that store visual design attributes. We use them in place of hard-coded values (like hex codes for color or pixel values for spacing) to ensure consistency and make updates scalable.

## Token Categories

The Breathe Design System includes tokens for:

1. **Colors** - Brand colors, semantic colors, data visualization
2. **Typography** - Font families, sizes, weights, line heights
3. **Spacing** - Margins, padding, gaps
4. **Border Radius** - Corner rounding
5. **Shadows** - Elevation and depth
6. **Animation** - Transitions, durations, easing
7. **Opacity** - Transparency levels
8. **Z-Index** - Layering system

---

## 1. Color Tokens

**Files**: `colors.ts`

### Structure
- **Foundation**: Raw color scales (blue/500, neutral/700)
- **Semantic**: Usage-based tokens (text.primary, action.primary)

### Quick Reference
```typescript
import { tokens, foundation } from '@breathe-ds/core';

// Use semantic tokens for UI
color: tokens.text.primary
background: tokens.action.primary
border: tokens.border.default

// Use foundation for specific shades
background: foundation.blue[300]
```

### Categories
- `tokens.text` - Text colors
- `tokens.surface` - Backgrounds
- `tokens.border` - Borders
- `tokens.action` - Interactive elements
- `tokens.feedback` - Status/alerts
- `tokens.accent` - Decorative
- `tokens.dataViz` - Charts & graphs

[Full color documentation →](./color-usage-guide.md)

---

## 2. Typography Tokens

**File**: `typography.ts`

### Font Families
```typescript
import { typography } from '@breathe-ds/core';

fontFamily: typography.fontFamily.heading  // Lexend
fontFamily: typography.fontFamily.body     // Inter
fontFamily: typography.fontFamily.mono     // Courier New
```

### Font Sizes & Line Heights

**External (Mobile - 65+ audience)**:
- Larger sizes for readability
- Base size: 17px
- Range: 13px (caption) to 40px (h1)

**Internal (Desktop - productivity)**:
- Compact sizes for efficiency
- Base size: 14px (350)
- Range: 12px (300) to 24px (600)

```typescript
// External
fontSize: typography.external.fontSize.body        // 17px
lineHeight: typography.external.lineHeight.body    // 27px

// Internal
fontSize: typography.internal.fontSize[350]        // 14px
lineHeight: typography.internal.lineHeight[350]    // 20px
```

### Font Weights
```typescript
fontWeight: typography.fontWeight.regular   // 400
fontWeight: typography.fontWeight.semibold  // 600
fontWeight: typography.fontWeight.bold      // 700
```

---

## 3. Spacing Tokens

**File**: `spacing.ts`

### External (8px base grid)
```typescript
import { spacing } from '@breathe-ds/core';

padding: spacing.external.md   // 16px
margin: spacing.external.lg    // 24px
gap: spacing.external.xl       // 32px
```

Scales: xxs (4px), xs (8px), sm (12px), md (16px), lg (24px), xl (32px), xxl (48px), xxxl (64px)

### Internal (4px base grid)
```typescript
padding: spacing.internal[400]   // 16px
margin: spacing.internal[600]    // 24px
gap: spacing.internal[800]       // 32px
```

Scales: 100 (4px), 200 (8px), 300 (12px), 400 (16px), 500 (20px), 600 (24px), 800 (32px), 1000 (40px), 1200 (48px), 1600 (64px)

---

## 4. Border Radius Tokens

**File**: `radius.ts`

### Foundation Values
```typescript
import { foundationRadius } from '@breathe-ds/core';

borderRadius: foundationRadius[8]    // 8px
borderRadius: foundationRadius[12]   // 12px
borderRadius: foundationRadius[full] // 9999px (fully rounded)
```

Scales: 0, 2, 4, 6, 8, 12, 16, 20, 24, full

### Semantic Tokens
```typescript
import { radius } from '@breathe-ds/core';

// Buttons (mode-aware)
borderRadius: radius.button.external  // 12px (mobile)
borderRadius: radius.button.internal  // 8px (desktop)

// Cards (mode-aware)
borderRadius: radius.card.external    // 20px (mobile)
borderRadius: radius.card.internal    // 12px (desktop)

// Components
borderRadius: radius.badge            // 9999px (pill)
borderRadius: radius.avatar           // 9999px (circular)
borderRadius: radius.chip             // 16px
borderRadius: radius.tooltip          // 8px
```

---

## 5. Shadow Tokens

**File**: `shadows.ts`

### Elevation Levels
```typescript
import { shadows } from '@breathe-ds/core';

boxShadow: shadows.elevation[0]   // none
boxShadow: shadows.elevation[2]   // subtle
boxShadow: shadows.elevation[4]   // raised
boxShadow: shadows.elevation[8]   // floating
boxShadow: shadows.elevation[16]  // very prominent
```

### Component Shadows
```typescript
// Cards (mode-aware)
boxShadow: shadows.card.external   // Medium shadow
boxShadow: shadows.card.internal   // Subtle shadow

// Interactive elements
boxShadow: shadows.button.default  // none
boxShadow: shadows.button.hover    // subtle
boxShadow: shadows.button.active   // barely visible

// Overlays
boxShadow: shadows.dropdown        // Medium
boxShadow: shadows.modal           // Large
boxShadow: shadows.drawer          // Extra large
```

### Focus Shadows
```typescript
boxShadow: shadows.focus           // Blue glow
boxShadow: shadows.focusError      // Red glow
boxShadow: shadows.focusSuccess    // Green glow
```

---

## 6. Animation Tokens

**File**: `animation.ts`

### Duration
```typescript
import { duration } from '@breathe-ds/core';

transitionDuration: duration.fast     // 150ms
transitionDuration: duration.normal   // 250ms
transitionDuration: duration.slow     // 350ms
```

Values: instant (0ms), fast (150ms), normal (250ms), slow (350ms), slower (500ms), slowest (700ms)

### Easing
```typescript
import { easing } from '@breathe-ds/core';

transitionTimingFunction: easing.easeOut     // ease-out
transitionTimingFunction: easing.standard    // cubic-bezier(0.4, 0.0, 0.2, 1)
transitionTimingFunction: easing.bounce      // cubic-bezier(0.68, -0.55, 0.265, 1.55)
```

### Semantic Animations
```typescript
import { animation } from '@breathe-ds/core';

// Hover states
transition: animation.hover.transition  // all 150ms ease-out

// Focus states
transition: animation.focus.transition  // all 150ms standard

// Fade effects
transition: animation.fade.transition   // opacity 250ms ease-in-out

// Scale (modals, popovers)
transition: animation.scale.transition  // transform 250ms decelerate
```

### Quick Transitions
```typescript
import { transition } from '@breathe-ds/core';

transition: transition.all       // all properties
transition: transition.colors    // background, color, border colors
transition: transition.opacity   // opacity only
transition: transition.transform // transform only
transition: transition.shadow    // box-shadow only
```

---

## 7. Opacity Tokens

**File**: `opacity.ts`

### Foundation Values
```typescript
import { foundationOpacity } from '@breathe-ds/core';

opacity: foundationOpacity[0]    // 0 (transparent)
opacity: foundationOpacity[50]   // 0.5 (half)
opacity: foundationOpacity[100]  // 1 (opaque)
```

Scales: 0, 5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100

### Semantic Tokens
```typescript
import { opacity } from '@breathe-ds/core';

// States
opacity: opacity.disabled          // 0.4 - clearly disabled
opacity: opacity.hover             // 0.9 - slight fade
opacity: opacity.active            // 0.8 - pressed

// Overlays
opacity: opacity.overlay           // 0.6 - modal backdrop
opacity: opacity.overlayLight      // 0.4 - light backdrop
opacity: opacity.overlayHeavy      // 0.8 - heavy backdrop

// UI elements
opacity: opacity.divider           // 0.1 - subtle divider
opacity: opacity.loading           // 0.5 - loading skeleton
opacity: opacity.focus             // 0.25 - focus ring
```

---

## 8. Z-Index Tokens

**File**: `z-index.ts`

### Layering System
```typescript
import { zIndex } from '@breathe-ds/core';

// Base content
zIndex: zIndex.base          // 0 - default content
zIndex: zIndex.raised        // 1 - dropdowns relative to container

// Navigation
zIndex: zIndex.header        // 100 - site header
zIndex: zIndex.sticky        // 200 - sticky elements

// Overlays
zIndex: zIndex.dropdown      // 1000 - dropdowns, popovers
zIndex: zIndex.tooltip       // 1100 - tooltips
zIndex: zIndex.popover       // 1200 - popovers

// Modals
zIndex: zIndex.overlay       // 1300 - modal backdrops
zIndex: zIndex.modal         // 1400 - modal dialogs
zIndex: zIndex.drawer        // 1500 - side drawers

// Notifications
zIndex: zIndex.notification  // 1600 - alerts
zIndex: zIndex.toast         // 1700 - toast messages

// Debug
zIndex: zIndex.debug         // 9999 - dev tools
```

---

## Usage in Themes

All tokens are accessible via themes:

```typescript
import { externalTheme, internalTheme } from '@breathe-ds/core';

// External theme (mobile)
const theme = externalTheme;
color: theme.tokens.text.primary
fontSize: theme.typography.fontSize.body
spacing: theme.spacing.md
borderRadius: theme.radius.button
boxShadow: theme.shadows.card

// Internal theme (desktop)
const theme = internalTheme;
color: theme.tokens.text.primary
fontSize: theme.typography.fontSize[350]
spacing: theme.spacing[400]
borderRadius: theme.radius.button
boxShadow: theme.shadows.card
```

---

## Best Practices

### ✅ Do
- Use semantic tokens for UI components
- Use foundation tokens for data visualization
- Reference tokens via imports, not hard-coded values
- Use mode-aware tokens (external/internal) when available
- Document which tokens you're using in components

### ❌ Don't
- Don't use raw values (hex codes, pixel values)
- Don't mix old and new token structures
- Don't create custom variations outside the system
- Don't use foundation colors for UI elements (use semantic)

---

## Viewing Tokens

### In Storybook
Run `npm run storybook` and navigate to:
- **Foundation → Color Tokens** - All color tokens
- **Foundation → All Design Tokens** - Complete overview

### In Figma
Import tokens via JSON:
- See `figma-exports/` folder
- Follow instructions in `figma-exports/README.md`

---

## TypeScript Support

All tokens are fully typed:

```typescript
import type {
  Tokens,
  Foundation,
  Typography,
  Spacing,
  Radius,
  Shadows,
  Animation,
  Opacity,
  ZIndex
} from '@breathe-ds/core';

// Type-safe usage
const textColor: string = tokens.text.primary;
const spacing: string = spacing.external.md;
```

---

## Reference Files

- [Color Usage Guide](./color-usage-guide.md)
- [Color Quick Reference](./color-quick-reference.md)
- [Figma Variables Guide](./figma-variables-guide.md)
- [Figma Exports](../figma-exports/README.md)
