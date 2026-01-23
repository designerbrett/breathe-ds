# Complete Token Coverage

## Overview

The Breathe Design System now has comprehensive token coverage across all essential categories inspired by industry standards (Polaris, Material, etc.).

## ✅ Complete Coverage

### 1. **Color Tokens** ✅
**File:** `colors.ts`

**Foundation Colors** (180+ tokens):
- Blue scale (50-900) - Primary brand
- Neutral scale (0-800) - Grayscale
- Green scale (50-900) - Success
- Orange scale (50-900) - Warning
- Red scale (50-900) - Error
- Light Blue scale (50-900) - Info
- Gold scale (50-900) - Accent
- Peach scale (50-900) - Accent
- Data viz colors: Purple, Teal, Yellow, Pink, Cyan, Lime

**Semantic Tokens** (60+ tokens):
- `tokens.text.*` - Text colors (primary, secondary, tertiary, etc.)
- `tokens.surface.*` - Backgrounds (page, default, elevated, hover, etc.)
- `tokens.border.*` - Border colors (default, strong, subtle, brand, etc.)
- `tokens.action.*` - Interactive elements (primary, hover, active, disabled)
- `tokens.feedback.*` - Status colors (success, warning, error, info)
- `tokens.accent.*` - Accent colors (gold, peach)
- `tokens.gradient.*` - Gradients
- `tokens.dataViz.*` - Data visualization (categorical, sequential, diverging)

**Usage:**
```typescript
import { tokens, foundation } from '@breathe-ds/core';

color: tokens.text.primary
background: tokens.action.primary
border: tokens.border.default
```

---

### 2. **Font Tokens** ✅
**File:** `typography.ts`

**Font Families:**
- `typography.fontFamily.heading` - Lexend
- `typography.fontFamily.body` - Inter
- `typography.fontFamily.mono` - Courier New

**Font Weights:**
- light (300), regular (400), medium (500), semibold (600), bold (700)

**Font Sizes:**
- **External** (Mobile): 13px - 40px (h1, h2, h3, body, bodySmall, caption)
- **Internal** (Desktop): 12px - 24px (300-600 scale)

**Line Heights:**
- Matched to font sizes for optimal readability
- External: 1.2 - 1.6
- Internal: Grid-aligned

**Usage:**
```typescript
import { typography } from '@breathe-ds/core';

fontFamily: typography.fontFamily.body
fontSize: typography.external.fontSize.body      // 17px
fontWeight: typography.fontWeight.semibold       // 600
lineHeight: typography.external.lineHeight.body  // 27px
```

---

### 3. **Space Tokens** ✅
**File:** `spacing.ts`

**External** (8px base grid):
- xxs (4px), xs (8px), sm (12px), md (16px), lg (24px), xl (32px), xxl (48px), xxxl (64px)

**Internal** (4px base grid):
- 100 (4px), 200 (8px), 300 (12px), 400 (16px), 500 (20px), 600 (24px), 800 (32px), 1000 (40px), 1200 (48px), 1600 (64px)

**Usage:**
```typescript
import { spacing } from '@breathe-ds/core';

padding: spacing.external.md    // 16px
margin: spacing.internal[600]   // 24px
gap: spacing.external.lg        // 24px
```

---

### 4. **Border Tokens** ✅
**File:** `radius.ts` (includes both width and radius)

**Border Width:**
- none (0px), thin (1px), medium (2px), thick (3px), heavy (4px)

**Semantic Width:**
- `border.width.default` - 1px
- `border.width.input` - 1px (desktop) / 2px (mobile)
- `border.width.focus` - 2px
- `border.width.divider` - 1px
- `border.width.emphasis` - 3px

**Border Radius:**
- Foundation: 0, 2, 4, 6, 8, 12, 16, 20, 24, full (9999px)

**Semantic Radius:**
- `radius.button.*` - Button rounding (external/internal)
- `radius.input.*` - Input rounding (external/internal)
- `radius.card.*` - Card rounding (external/internal)
- `radius.dialog.*` - Dialog rounding (external/internal)
- `radius.badge` - Pill shape (full)
- `radius.avatar` - Circular (full)
- `radius.chip` - 16px
- `radius.tooltip` - 8px

**Usage:**
```typescript
import { border, borderWidth, radius, foundationRadius } from '@breathe-ds/core';

borderWidth: border.width.default           // 1px
borderWidth: border.width.focus             // 2px
borderRadius: radius.button.external        // 12px
borderRadius: foundationRadius[8]           // 8px
```

---

### 5. **Height Tokens** ✅
**File:** `height.ts`

**Foundation Heights:**
- 0, 100 (24px), 200 (32px), 300 (36px), 400 (40px), 500 (44px), 600 (48px), 700 (56px), 800 (64px), 900 (72px), 1000 (80px)

**Touch Targets:**
- `height.touchTarget.minimum` - 44px (WCAG minimum)
- `height.touchTarget.comfortable` - 56px (preferred)

**Components:**
- **Buttons:** small (36px), medium (44px), large (56px)
- **Inputs:** small (36px), medium (44px), large (56px)
- **Select:** small (36px), medium (44px), large (56px)
- **Table rows:** compact (36px), default (44px), comfortable (56px)

**Navigation:**
- `height.header` - 64px
- `height.tabBar` - 48px
- `height.bottomNav` - 56px

**Cards:**
- small (120px), medium (200px), large (300px)

**Usage:**
```typescript
import { height, foundationHeight } from '@breathe-ds/core';

minHeight: height.button.large         // 56px
minHeight: height.input.medium         // 44px
minHeight: height.touchTarget.minimum  // 44px (accessibility)
height: height.header                  // 64px
```

---

### 6. **Shadow Tokens** ✅
**File:** `shadows.ts`

**Elevation Levels:**
- 0 (none), 1 (xs), 2 (sm), 4 (md), 6 (lg), 8 (xl), 12 (xxl), 16 (2xl), 24 (3xl)

**Component Shadows:**
- `shadows.card.*` - Card shadows (external/internal)
- `shadows.button.*` - Button shadows (default, hover, active)
- `shadows.dropdown` - Dropdown menus
- `shadows.modal` - Modal dialogs
- `shadows.popover` - Popovers
- `shadows.tooltip` - Tooltips
- `shadows.drawer` - Side drawers

**Focus Shadows:**
- `shadows.focus` - Blue glow
- `shadows.focusError` - Red glow
- `shadows.focusSuccess` - Green glow

**Usage:**
```typescript
import { shadows } from '@breathe-ds/core';

boxShadow: shadows.elevation[4]      // Raised
boxShadow: shadows.card.external     // Card shadow (mobile)
boxShadow: shadows.modal             // Modal shadow
boxShadow: shadows.focus             // Focus glow
```

---

### 7. **Text/Typography Composition** ✅
**File:** `typography.ts`

Text tokens are compositions of font properties for common use cases.

**External (Mobile):**
- h1, h2, h3 - Headings
- bodyLarge, body, bodySmall - Body text
- button - Button text
- caption - Caption text

**Internal (Desktop):**
- 300-600 scale for different text sizes

**Usage:**
```typescript
import { typography } from '@breathe-ds/core';

// Complete text style
fontSize: typography.external.fontSize.h1
lineHeight: typography.external.lineHeight.h1
fontFamily: typography.fontFamily.heading
fontWeight: typography.fontWeight.bold
```

---

## Additional Tokens (Bonus)

### 8. **Animation/Motion Tokens** ✅
**File:** `animation.ts`

- Duration: instant, fast, normal, slow, slower, slowest
- Easing: linear, ease variants, custom curves
- Semantic animations: hover, focus, fade, slide, scale, collapse
- Quick transitions: all, colors, opacity, transform, shadow

### 9. **Opacity Tokens** ✅
**File:** `opacity.ts`

- Foundation: 0-100 scale
- Semantic: disabled, hover, active, overlay, loading, divider, focus

### 10. **Z-Index Tokens** ✅
**File:** `z-index.ts`

- Layering system: base, header, dropdown, modal, toast, etc.
- Values: 0 - 1700 (with gaps for flexibility)

---

## Token Category Summary

| Category | File | Foundation | Semantic | Mode-Aware |
|----------|------|-----------|----------|------------|
| **Color** ✅ | `colors.ts` | 180+ scales | 60+ tokens | ❌ |
| **Font** ✅ | `typography.ts` | Families, weights | Sizes by mode | ✅ |
| **Space** ✅ | `spacing.ts` | Grid scales | Named sizes | ✅ |
| **Border** ✅ | `radius.ts` | Width + Radius | Components | ✅ |
| **Height** ✅ | `height.ts` | 0-1000 scale | Components | ✅ |
| **Shadow** ✅ | `shadows.ts` | Elevation 0-24 | Components | ✅ |
| **Text** ✅ | `typography.ts` | - | Compositions | ✅ |
| **Motion** ✅ | `animation.ts` | Duration, easing | Animations | ❌ |
| **Opacity** ✅ | `opacity.ts` | 0-100 | States | ❌ |
| **Z-Index** ✅ | `z-index.ts` | - | Layers | ❌ |

---

## Complete Usage Example

```typescript
import {
  // Colors
  tokens,
  foundation,

  // Typography
  typography,

  // Spacing
  spacing,

  // Border
  border,
  borderWidth,
  radius,
  foundationRadius,

  // Height
  height,
  foundationHeight,

  // Shadows
  shadows,

  // Animation
  animation,
  duration,
  easing,
  transition,

  // Opacity
  opacity,

  // Z-Index
  zIndex,

  // Complete themes
  externalTheme,
  internalTheme,
} from '@breathe-ds/core';

// Example Button Component
const Button = styled.button`
  /* Colors */
  background: ${tokens.action.primary};
  color: ${tokens.text.inverse};
  border: ${border.width.default} solid ${tokens.border.brand};

  /* Typography */
  font-family: ${typography.fontFamily.body};
  font-size: ${typography.external.fontSize.button};
  font-weight: ${typography.fontWeight.semibold};
  line-height: ${typography.external.lineHeight.button};

  /* Spacing */
  padding: ${spacing.external.md} ${spacing.external.xl};
  gap: ${spacing.external.xs};

  /* Border */
  border-radius: ${radius.button.external};

  /* Height */
  min-height: ${height.button.large};

  /* Shadow */
  box-shadow: ${shadows.button.default};

  /* Animation */
  transition: ${animation.hover.transition};

  /* Z-Index */
  position: relative;
  z-index: ${zIndex.raised};

  /* States */
  &:hover {
    background: ${tokens.action.primaryHover};
    box-shadow: ${shadows.button.hover};
  }

  &:active {
    background: ${tokens.action.primaryActive};
    box-shadow: ${shadows.button.active};
  }

  &:focus-visible {
    box-shadow: ${shadows.focus};
    outline: none;
  }

  &:disabled {
    background: ${tokens.action.primaryDisabled};
    color: ${tokens.text.disabled};
    opacity: ${opacity.disabled};
    cursor: not-allowed;
  }
`;
```

---

## Accessing via Themes

All tokens are accessible through themes:

```typescript
import { externalTheme, internalTheme } from '@breathe-ds/core';

// External theme (mobile/patient-facing)
const theme = externalTheme;
theme.tokens.text.primary        // Text color
theme.typography.fontSize.body   // Font size
theme.spacing.md                 // Spacing
theme.border.width.input         // Border width (2px for mobile)
theme.border.radius.button       // Border radius (12px for mobile)
theme.height.button              // Button height (56px for mobile)
theme.shadows.card               // Card shadow

// Internal theme (desktop/admin)
const theme = internalTheme;
theme.border.width.input         // Border width (1px for desktop)
theme.border.radius.button       // Border radius (8px for desktop)
theme.height.button              // Button height (36px for desktop)
```

---

## TypeScript Support

All tokens are fully typed:

```typescript
import type {
  // Color types
  Tokens,
  Foundation,
  Colors,

  // Typography types
  Typography,

  // Spacing types
  Spacing,

  // Border types
  Border,
  BorderWidth,
  Radius,
  FoundationRadius,

  // Height types
  Height,
  FoundationHeight,

  // Shadow types
  Shadows,
  FoundationShadows,

  // Animation types
  Animation,
  Duration,
  Easing,
  Transition,

  // Opacity types
  Opacity,
  FoundationOpacity,

  // Z-Index types
  ZIndex,

  // Theme types
  ExternalTheme,
  InternalTheme,
} from '@breathe-ds/core';
```

---

## Viewing Tokens

### In Storybook
Run `npm run storybook` and navigate to:
- **Foundation → Color Tokens** - All color tokens
- **Foundation → All Design Tokens** - Complete overview

### In Figma
Import color tokens via JSON:
- See `figma-exports/` folder
- Follow instructions in `figma-exports/README.md`

---

## Documentation

- [Design Tokens Overview](./design-tokens-overview.md)
- [Color Usage Guide](./color-usage-guide.md)
- [Color Quick Reference](./color-quick-reference.md)
- [Figma Variables Guide](./figma-variables-guide.md)

---

## Summary

✅ **7 Essential Categories Covered:**
1. **Border** - Width + Radius ✅
2. **Color** - Foundation + Semantic ✅
3. **Font** - Families, weights, sizes, line heights ✅
4. **Height** - Touch targets, components, navigation ✅
5. **Shadow** - Elevation levels + components ✅
6. **Space** - 4px/8px grids ✅
7. **Text** - Typography compositions ✅

✅ **Bonus Categories:**
8. **Motion** - Animation tokens
9. **Opacity** - Transparency levels
10. **Z-Index** - Layering system

**Total:** 300+ design tokens covering all essential design decisions!
