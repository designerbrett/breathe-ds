# Breathe Design System Documentation

## Quick Links

### 🎨 Design Tokens

| Document | What's Inside |
|----------|---------------|
| **[Design Tokens Overview](./design-tokens-overview.md)** | Complete reference for all 10 token categories |
| **[Token Coverage](./token-coverage.md)** | Detailed breakdown of all 300+ tokens available |
| **[Color Usage Guide](./color-usage-guide.md)** | How to use color tokens in code |
| **[Color Quick Reference](./color-quick-reference.md)** | Cheat sheet for common color tokens |

### 🎭 Figma Setup

| Document | What's Inside |
|----------|---------------|
| **[Complete Figma Tokens Guide](./figma-all-tokens-guide.md)** | ⭐ Setup ALL tokens in Figma (colors, typography, spacing, etc.) |
| **[Figma Color Variables Guide](./figma-variables-guide.md)** | Detailed color variable setup |
| **[Figma Exports README](../figma-exports/README.md)** | How to import color JSON files |

### 📱 Platform Support

| Document | What's Inside |
|----------|---------------|
| **[React Native Integration Guide](./react-native-guide.md)** | ⭐ Complete RN setup with numeric values, shadows, examples |

### 📝 Additional Resources

| Document | What's Inside |
|----------|---------------|
| **[Token Simplification Proposal](./token-simplification-proposal.md)** | Background on token structure decisions |
| **[Color Token Proposal](./color-token-proposal.md)** | Design thinking behind color system |

---

## Getting Started

### For Web Developers

1. **Install the package:**
   ```bash
   npm install @breathe-ds/core
   ```

2. **Import tokens:**
   ```typescript
   import {
     tokens,      // Semantic color tokens
     typography,  // Font tokens
     spacing,     // Spacing tokens
     border,      // Border width
     radius,      // Border radius
     height,      // Height tokens
     shadows,     // Shadow tokens
   } from '@breathe-ds/core';
   ```

### For React Native Developers

1. **Install the package:**
   ```bash
   npm install @breathe-ds/core
   ```

2. **Import RN tokens** (automatic or explicit):
   ```typescript
   // Automatic - uses RN values when in RN environment
   import { tokens, spacing, fontSize } from '@breathe-ds/core';

   // Explicit - always use RN values
   import { ReactNative } from '@breathe-ds/core';
   const { tokens, spacing, fontSize } = ReactNative;
   ```

3. **Read the guide:**
   - See [React Native Integration Guide](./react-native-guide.md) for complete setup

3. **Use in your code:**
   ```typescript
   const Button = styled.button`
     background: ${tokens.action.primary};
     color: ${tokens.text.inverse};
     font-family: ${typography.fontFamily.body};
     font-size: ${typography.external.fontSize.button};
     padding: ${spacing.external.md} ${spacing.external.xl};
     border-radius: ${radius.button.external};
     min-height: ${height.button.large};
     box-shadow: ${shadows.button.default};
   `;
   ```

4. **Read the docs:**
   - Start with [Design Tokens Overview](./design-tokens-overview.md)
   - Check [Token Coverage](./token-coverage.md) for complete list
   - Use [Color Quick Reference](./color-quick-reference.md) as cheat sheet

### For Designers

1. **Set up Figma:**
   - Follow [Complete Figma Tokens Guide](./figma-all-tokens-guide.md)
   - For colors only: Use [Figma Color Variables Guide](./figma-variables-guide.md)
   - Import color JSONs: See [Figma Exports README](../figma-exports/README.md)

2. **View tokens in Storybook:**
   ```bash
   npm run storybook
   ```
   Navigate to: **Foundation → Design Tokens**

3. **Use in designs:**
   - Apply color variables to fills and strokes
   - Apply spacing variables to auto-layout
   - Apply radius variables to corner radius
   - Apply height variables to min-height
   - Apply shadow effect styles
   - Apply opacity variables to layer opacity

---

## Token Categories

### Essential Categories

| Category | Tokens | Documentation |
|----------|--------|---------------|
| **Colors** | 240+ | [Color Usage Guide](./color-usage-guide.md) |
| **Typography** | 50+ | [Design Tokens Overview](./design-tokens-overview.md#2-font-tokens) |
| **Spacing** | 18 | [Design Tokens Overview](./design-tokens-overview.md#3-space-tokens) |
| **Border** | 28 | [Design Tokens Overview](./design-tokens-overview.md#4-border-tokens) |
| **Height** | 21+ | [Token Coverage](./token-coverage.md#6-height-tokens) |
| **Shadow** | 15+ | [Design Tokens Overview](./design-tokens-overview.md#5-shadow-tokens) |

### Supporting Categories

| Category | Tokens | Documentation |
|----------|--------|---------------|
| **Animation** | 11 | [Design Tokens Overview](./design-tokens-overview.md#6-animation-tokens) |
| **Opacity** | 20+ | [Design Tokens Overview](./design-tokens-overview.md#7-opacity-tokens) |
| **Z-Index** | 12 | [Design Tokens Overview](./design-tokens-overview.md#8-z-index-tokens) |

**Total: 400+ design tokens**

---

## File Structure

```
docs/
├── README.md                           ← You are here
├── design-tokens-overview.md           ← Start here for tokens
├── token-coverage.md                   ← Complete token list
├── color-usage-guide.md                ← Color usage examples
├── color-quick-reference.md            ← Color cheat sheet
├── figma-all-tokens-guide.md          ← Complete Figma setup ⭐
├── figma-variables-guide.md            ← Color variables in Figma
├── token-simplification-proposal.md    ← Design decisions
└── color-token-proposal.md             ← Color system design

figma-exports/
├── README.md                           ← JSON import instructions
├── foundation-colors.json              ← Foundation color scales
└── semantic-tokens.json                ← Semantic color tokens
```

---

## Quick Reference

### Colors
```typescript
// Text
tokens.text.primary, tokens.text.secondary, tokens.text.tertiary

// Actions
tokens.action.primary, tokens.action.primaryHover, tokens.action.primaryActive

// Feedback
tokens.feedback.success, tokens.feedback.error, tokens.feedback.warning

// Surfaces
tokens.surface.page, tokens.surface.default, tokens.surface.elevated
```

### Typography
```typescript
// Families
typography.fontFamily.heading  // Lexend
typography.fontFamily.body     // Inter

// Sizes (External - Mobile)
typography.external.fontSize.body   // 17px
typography.external.fontSize.h1     // 40px

// Sizes (Internal - Desktop)
typography.internal.fontSize[350]   // 14px
typography.internal.fontSize[600]   // 24px
```

### Spacing
```typescript
// External (8px grid)
spacing.external.xs    // 8px
spacing.external.md    // 16px
spacing.external.xl    // 32px

// Internal (4px grid)
spacing.internal[400]  // 16px
spacing.internal[800]  // 32px
```

### Other Tokens
```typescript
// Border
border.width.default   // 1px
radius.button.external // 12px

// Height
height.button.large    // 56px
height.touchTarget.minimum // 44px

// Shadows
shadows.elevation[4]   // Raised
shadows.card.external  // Card shadow

// Opacity
opacity.disabled       // 0.4
opacity.hover          // 0.9
```

---

## Need Help?

- **For token usage:** See [Design Tokens Overview](./design-tokens-overview.md)
- **For Figma setup:** See [Complete Figma Tokens Guide](./figma-all-tokens-guide.md)
- **For colors:** See [Color Usage Guide](./color-usage-guide.md)
- **For complete reference:** See [Token Coverage](./token-coverage.md)

---

## Contributing

When adding new tokens:
1. Update token files in `packages/core/src/tokens/`
2. Update exports in `packages/core/src/index.ts`
3. Update themes in `packages/core/src/tokens/themes.ts`
4. Update documentation in `docs/`
5. Update Storybook stories
6. Generate Figma JSON exports (for colors)
7. Update this README if needed
