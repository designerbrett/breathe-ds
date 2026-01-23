# Token Simplification Proposal

## Problem Statement

Our current token system is too complex:
- Two-tier foundation/semantic split for colors
- External/Internal mode split for most tokens
- Inconsistent naming conventions
- Missing key categories (breakpoints)
- Hard to remember what to use when

## Inspiration: Shopify Polaris

Polaris uses a simpler, more intuitive approach:
- Single semantic layer (use-case based)
- Consistent naming: `--p-[category]-[subcategory]-[state]`
- Built-in state modifiers (hover, active, disabled)
- Clear categories: Border, Color, Font, Motion, Shadow, Space, Text, etc.

## Proposed Simplified Structure

### 1. **Color Tokens** (Keep but Simplify)

**Keep:**
- ✅ Foundation scales for data visualization
- ✅ Semantic color tokens

**Simplify:**
- Remove the split - make semantic the primary way
- Consistent naming pattern

```typescript
// Before (complex)
import { foundation, tokens } from '@breathe-ds/core';
background: tokens.action.primary
color: foundation.blue[500]

// After (simple)
import { color } from '@breathe-ds/core';
background: color.bg.brand.primary
background: color.bg.brand.primaryHover
color: color.text.primary
border: color.border.default
```

**Categories:**
- `color.bg.*` - Backgrounds
- `color.text.*` - Text
- `color.border.*` - Borders
- `color.icon.*` - Icons
- `color.data.*` - Data visualization (categorical, sequential)

### 2. **Typography Tokens** (Consolidate)

**Before:** Split by external/internal modes
**After:** Single responsive scale with variants

```typescript
// After (simple)
import { font } from '@breathe-ds/core';

// Font families
fontFamily: font.family.heading  // Lexend
fontFamily: font.family.body     // Inter

// Font sizes (responsive scale)
fontSize: font.size[100]   // 12px (small)
fontSize: font.size[200]   // 14px (default)
fontSize: font.size[300]   // 16px (medium)
fontSize: font.size[400]   // 18px (large)
fontSize: font.size[500]   // 20px (xl)
fontSize: font.size[600]   // 24px (2xl)
fontSize: font.size[700]   // 32px (3xl)
fontSize: font.size[800]   // 40px (4xl)

// Font weights
fontWeight: font.weight.regular   // 400
fontWeight: font.weight.semibold  // 600
fontWeight: font.weight.bold      // 700

// Line heights
lineHeight: font.lineHeight.tight   // 1.2
lineHeight: font.lineHeight.normal  // 1.5
lineHeight: font.lineHeight.relaxed // 1.6
```

### 3. **Spacing Tokens** (Simplify)

**Before:** Split by external/internal
**After:** Single scale (4px base)

```typescript
// After (simple)
import { space } from '@breathe-ds/core';

padding: space[100]   // 4px
padding: space[200]   // 8px
padding: space[300]   // 12px
padding: space[400]   // 16px
padding: space[500]   // 20px
padding: space[600]   // 24px
padding: space[800]   // 32px
padding: space[1000]  // 40px
padding: space[1200]  // 48px
padding: space[1600]  // 64px

// Semantic spacing
padding: space.card      // 24px
padding: space.button    // 16px
gap: space.stack.tight   // 8px
gap: space.stack.default // 16px
gap: space.stack.loose   // 24px
```

### 4. **Border Tokens** (New Combined Category)

```typescript
import { border } from '@breathe-ds/core';

// Border width
borderWidth: border.width.thin    // 1px
borderWidth: border.width.medium  // 2px
borderWidth: border.width.thick   // 3px

// Border radius
borderRadius: border.radius[0]      // 0px (none)
borderRadius: border.radius[100]    // 4px (sm)
borderRadius: border.radius[200]    // 8px (md)
borderRadius: border.radius[300]    // 12px (lg)
borderRadius: border.radius[400]    // 20px (xl)
borderRadius: border.radius.full    // 9999px (pill)

// Semantic
borderRadius: border.radius.button  // 8px
borderRadius: border.radius.card    // 12px
borderRadius: border.radius.input   // 6px
```

### 5. **Shadow Tokens** (Keep, Simplify Naming)

```typescript
import { shadow } from '@breathe-ds/core';

// Elevation levels
boxShadow: shadow[0]    // none
boxShadow: shadow[100]  // xs - subtle
boxShadow: shadow[200]  // sm - slightly raised
boxShadow: shadow[300]  // md - raised
boxShadow: shadow[400]  // lg - elevated
boxShadow: shadow[500]  // xl - floating

// Semantic
boxShadow: shadow.card
boxShadow: shadow.dropdown
boxShadow: shadow.modal

// Focus
boxShadow: shadow.focus.default
boxShadow: shadow.focus.error
boxShadow: shadow.focus.success
```

### 6. **Motion Tokens** (Rename from Animation)

```typescript
import { motion } from '@breathe-ds/core';

// Duration
transitionDuration: motion.duration[100]  // 100ms (fast)
transitionDuration: motion.duration[200]  // 200ms (normal)
transitionDuration: motion.duration[300]  // 300ms (slow)
transitionDuration: motion.duration[500]  // 500ms (slower)

// Easing
transitionTimingFunction: motion.ease.in
transitionTimingFunction: motion.ease.out
transitionTimingFunction: motion.ease.inOut
transitionTimingFunction: motion.ease.standard

// Presets
transition: motion.fade     // opacity 200ms ease-out
transition: motion.scale    // transform 200ms standard
transition: motion.slide    // transform 200ms standard
```

### 7. **Breakpoint Tokens** (NEW - Missing!)

```typescript
import { breakpoint } from '@breathe-ds/core';

// Breakpoint values
const breakpoints = {
  xs: '0px',      // Mobile portrait
  sm: '640px',    // Mobile landscape
  md: '768px',    // Tablet
  lg: '1024px',   // Desktop
  xl: '1280px',   // Large desktop
  xxl: '1536px',  // Extra large desktop
};

// Media queries (helpers)
@media ${breakpoint.up('md')} { ... }
@media ${breakpoint.down('lg')} { ... }
@media ${breakpoint.between('md', 'lg')} { ... }
```

### 8. **Z-Index Tokens** (Keep As-Is)

```typescript
import { zIndex } from '@breathe-ds/core';

zIndex: zIndex.dropdown   // 1000
zIndex: zIndex.modal      // 1400
zIndex: zIndex.toast      // 1700
```

### 9. **Opacity Tokens** (Simplify)

```typescript
import { opacity } from '@breathe-ds/core';

opacity: opacity[0]     // 0
opacity: opacity[50]    // 0.5
opacity: opacity[100]   // 1

// Semantic
opacity: opacity.disabled
opacity: opacity.hover
opacity: opacity.overlay
```

## Migration Strategy

### Phase 1: Add Simplified Tokens (Parallel)
- Create new simplified token files
- Keep old tokens for backward compatibility
- Mark old tokens as `@deprecated`

### Phase 2: Update Documentation
- Document new tokens
- Create migration guide
- Update Storybook examples

### Phase 3: Gradual Migration
- Update new components to use new tokens
- Migrate existing components over time
- Remove deprecated tokens in v2.0

## Benefits

✅ **Simpler mental model** - One way to do things
✅ **Easier to remember** - Consistent naming pattern
✅ **Less decision fatigue** - Clear categories
✅ **Better DX** - Autocomplete works better
✅ **Industry standard** - Follows Polaris/Material/etc.
✅ **Responsive by default** - Breakpoints built in
✅ **Smaller API surface** - Fewer exports

## Comparison

| Feature | Current | Proposed |
|---------|---------|----------|
| Color layers | 2 (foundation + semantic) | 1 (semantic with scales) |
| Mode split | External/Internal everywhere | Responsive with breakpoints |
| Token count | ~300+ | ~200 (fewer, more focused) |
| Naming pattern | Mixed | Consistent |
| Breakpoints | ❌ Missing | ✅ Included |
| Learning curve | Steep | Gentle |

## Example: Button Component

### Before (Current - Complex)
```typescript
import { tokens, typography, spacing, radius, shadows, animation } from '@breathe-ds/core';

const Button = styled.button`
  background: ${tokens.action.primary};
  color: ${tokens.text.inverse};
  border: 1px solid ${tokens.border.brand};
  font-family: ${typography.fontFamily.body};
  font-size: ${typography.external.fontSize.button};
  font-weight: ${typography.fontWeight.semibold};
  padding: ${spacing.external.md} ${spacing.external.xl};
  border-radius: ${radius.button.external};
  box-shadow: ${shadows.button.default};
  transition: ${animation.hover.transition};

  &:hover {
    background: ${tokens.action.primaryHover};
  }
`;
```

### After (Proposed - Simple)
```typescript
import { color, font, space, border, shadow, motion } from '@breathe-ds/core';

const Button = styled.button`
  background: ${color.bg.brand.primary};
  color: ${color.text.inverse};
  border: ${border.width.thin} solid ${color.border.brand};
  font-family: ${font.family.body};
  font-size: ${font.size[300]};
  font-weight: ${font.weight.semibold};
  padding: ${space[400]} ${space[800]};
  border-radius: ${border.radius[200]};
  box-shadow: ${shadow[0]};
  transition: ${motion.fade};

  &:hover {
    background: ${color.bg.brand.primaryHover};
    box-shadow: ${shadow[100]};
  }
`;
```

**Simpler imports, clearer naming, easier to understand!**

## Decision Required

Should we:

**Option A: Full Refactor** (Breaking change - v2.0)
- Replace entire token system
- Clean slate, best DX
- Requires migration effort

**Option B: Gradual Migration** (Backward compatible)
- Add new tokens alongside old
- Deprecate old over time
- Longer transition but safer

**Option C: Hybrid** (Recommended)
- Keep color foundation scales (useful for data viz)
- Simplify everything else
- Minimal breaking changes

## Recommendation

**Go with Option C (Hybrid):**
1. Keep `foundation` color scales for data visualization
2. Simplify semantic color tokens with better naming
3. Consolidate typography to single scale
4. Simplify spacing to single scale
5. Add breakpoints
6. Rename animation → motion
7. Combine border width + radius
8. Mark old APIs as deprecated

This gives us 80% of the benefits with 20% of the breaking changes.
