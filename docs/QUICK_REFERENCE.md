# Breathe Design System - Quick Reference

Fast lookup for common design tokens and component patterns.

## Design Tokens

### Colors

```typescript
import { colors } from '@breathe-ds/core';

// Primary
colors.primary.main       // #2B79B9 - Kivo Blue
colors.primary.dark       // #1F5A8E - Hover states
colors.primary.light      // #E8F2FA - Backgrounds

// Neutrals
colors.neutral.deepNavy   // #1A2B3D - Primary text
colors.neutral.slate      // #2D4A5F - Secondary text
colors.neutral.gray       // #5A6C7D - Body text
colors.neutral.border     // #E8EDF2 - Borders
colors.neutral.bgSoft     // #F8FAFB - Backgrounds
colors.neutral.white      // #FFFFFF

// Status
colors.status.success     // #27AE60
colors.status.warning     // #E67E22
colors.status.error       // #E74C3C
colors.status.info        // #2980B9
```

### Typography

```typescript
import { typography } from '@breathe-ds/core';

// External (Mobile 65+)
typography.external.fontSize.h1        // 40px
typography.external.fontSize.h2        // 32px
typography.external.fontSize.h3        // 24px
typography.external.fontSize.body      // 17px ⭐ Base
typography.external.fontSize.bodySmall // 15px

// Internal (Desktop)
typography.internal.fontSize[600]      // 24px (H1)
typography.internal.fontSize[500]      // 20px (H2)
typography.internal.fontSize[400]      // 16px (H3)
typography.internal.fontSize[350]      // 14px ⭐ Base
typography.internal.fontSize[300]      // 12px (Small)

// Fonts
typography.fontFamily.heading          // Lexend
typography.fontFamily.body             // Inter
```

### Spacing

```typescript
import { spacing } from '@breathe-ds/core';

// External (8px base)
spacing.external.xs      // 8px
spacing.external.sm      // 12px
spacing.external.md      // 16px ⭐ Standard
spacing.external.lg      // 24px
spacing.external.xl      // 32px

// Internal (4px base)
spacing.internal[200]    // 8px
spacing.internal[300]    // 12px
spacing.internal[400]    // 16px ⭐ Standard
spacing.internal[600]    // 24px
spacing.internal[800]    // 32px
```

---

## Component Specs

### External Mode (Mobile 65+)

| Element | Min Height | Font Size | Padding | Border Radius |
|---------|-----------|-----------|---------|---------------|
| Button (Default) | 56px | 17px | 16px 32px | 12px |
| Button (Large) | 64px | 18px | 20px 40px | 16px |
| Button (Small) | 44px | 15px | 12px 24px | 10px |
| Input | 56px | 17px | 16px | 12px |
| Card | - | - | 24px | 20px |
| Touch Target Min | 44px | - | - | - |
| Touch Target Recommended | 56px | - | - | - |

### Internal Mode (Desktop)

| Element | Min Height | Font Size | Padding | Border Radius |
|---------|-----------|-----------|---------|---------------|
| Button | 36px | 14px | 8px 16px | 8px |
| Input | 36px | 14px | 8px 12px | 6px |
| Card | - | - | 20px | 12px |

---

## CSS Variables (External)

Available in `packages/external/src/styles/global.css`:

```css
/* Colors */
--breathe-primary: #2B79B9
--breathe-primary-dark: #1F5A8E
--breathe-primary-light: #E8F2FA

--breathe-neutral-navy: #1A2B3D
--breathe-neutral-slate: #2D4A5F
--breathe-neutral-gray: #5A6C7D
--breathe-neutral-border: #E8EDF2
--breathe-neutral-bg: #F8FAFB

--breathe-success: #27AE60
--breathe-warning: #E67E22
--breathe-error: #E74C3C
--breathe-info: #2980B9

/* Typography */
--breathe-font-heading: 'Lexend', -apple-system, sans-serif
--breathe-font-body: 'Inter', -apple-system, sans-serif

/* Spacing */
--breathe-space-xs: 8px
--breathe-space-sm: 12px
--breathe-space-md: 16px
--breathe-space-lg: 24px
--breathe-space-xl: 32px
```

---

## Accessibility Quick Checks

### External Mode (65+ audience)
- ✅ Text minimum 17px
- ✅ Line height minimum 1.6
- ✅ Touch targets minimum 44px (56px recommended)
- ✅ Contrast ratio 7:1 (WCAG AAA)
- ✅ Focus outline 4px with 2px offset
- ✅ No hover-only interactions

### Internal Mode (Desktop)
- ✅ Text minimum 14px
- ✅ Line height minimum 1.5
- ✅ Interactive elements minimum 36px
- ✅ Contrast ratio 4.5:1 (WCAG AA)
- ✅ Keyboard navigable
- ✅ Screen reader friendly

---

## Common Patterns

### Button Hierarchy

1. **Primary (Filled)** - Main action, one per screen
   ```tsx
   <Button variant="primary">Save Changes</Button>
   ```

2. **Secondary (Outlined)** - Alternative actions
   ```tsx
   <Button variant="secondary">Cancel</Button>
   ```

3. **Tertiary (Ghost)** - Low-priority actions
   ```tsx
   <Button variant="ghost">Skip</Button>
   ```

4. **Critical (Red)** - Destructive actions only
   ```tsx
   <Button variant="primary" color="red">Delete</Button>
   ```

### Form Validation

```tsx
// Error state
<Input
  error="This field is required"
  aria-invalid="true"
/>

// Success state
<Input
  success="Looks good!"
  aria-invalid="false"
/>
```

### Loading States

```tsx
// Button loading
<Button loading>Saving...</Button>

// Skeleton for content
<Skeleton height={100} />

// Spinner for whole page
<LoadingOverlay visible />
```

---

## Breakpoints

```css
/* Mobile first approach */

/* Small phones */
@media (max-width: 374px) { }

/* Default: 375px - 767px (mobile) */

/* Tablets */
@media (min-width: 768px) { }

/* Desktop */
@media (min-width: 1024px) { }

/* Large desktop */
@media (min-width: 1440px) { }
```

---

## Import Cheat Sheet

```typescript
// Design tokens
import { colors, typography, spacing, externalTheme, internalTheme } from '@breathe-ds/core';

// External components (Mobile)
import { Button } from '@breathe-ds/external';
import '@breathe-ds/external/styles';

// Mantine theming (Internal)
import { MantineProvider } from '@mantine/core';
import { breatheMantineTheme } from '@breathe-ds/mantine';
import '@mantine/core/styles.css';

// Mantine components (Internal)
import { Button, Table, Modal } from '@mantine/core';
```

---

## File Structure

```
New Component Checklist:
1. Create component directory in packages/external/src/components/
2. Add YourComponent.tsx (logic)
3. Add YourComponent.module.css (styles)
4. Add YourComponent.stories.tsx (Storybook)
5. Export in packages/external/src/index.ts
6. Update docs/COMPONENT_INVENTORY.md
```

---

## Storybook

```bash
# Start Storybook
npm run dev

# Build static Storybook
npm run build-storybook

# View on:
http://localhost:6006
```

**Mode Switcher**: Use toolbar to toggle External ↔️ Internal

---

## Common Commands

```bash
# Install dependencies
npm install

# Start development
npm run dev

# Type check
npm run typecheck

# Build all packages
npm run build

# Build specific package
npm run build -w @breathe-ds/core

# Clean everything
npm run clean
```

---

## Need More Info?

- [Component Inventory](./COMPONENT_INVENTORY.md) - Full component list
- [Contributing Guide](./CONTRIBUTING.md) - Detailed component creation guide
- [Main README](../README.md) - Project overview
