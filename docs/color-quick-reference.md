# Color Token Quick Reference

## Import

```typescript
import { tokens, foundation } from '@breathe-ds/core';
```

## Common Use Cases

### Text

```typescript
// Headings, main content
color: tokens.text.primary          // #1A2B3D

// Subheadings, descriptions
color: tokens.text.secondary        // #2D4A5F

// Captions, helper text
color: tokens.text.tertiary         // #5A6C7D

// Placeholder text
color: tokens.text.placeholder      // #A8B5C2

// Text on dark backgrounds
color: tokens.text.inverse          // #FFFFFF

// Links
color: tokens.text.link             // #2B79B9
```

### Backgrounds

```typescript
// Page background
background: tokens.surface.page       // #FAFBFC

// Card/container
background: tokens.surface.default    // #FFFFFF

// Hover state
background: tokens.surface.hover      // #F8FAFB

// Selected state
background: tokens.surface.selected   // #E8F2FA
```

### Borders

```typescript
// Default border
border: 1px solid tokens.border.default   // #E8EDF2

// Focus state
border: 2px solid tokens.border.focus     // #2B79B9

// Error state
border: 1px solid tokens.border.error     // #E74C3C
```

### Buttons

```typescript
// Primary button
background: tokens.action.primary           // #2B79B9
background: tokens.action.primaryHover      // #1F5A8E (hover)
color: tokens.text.inverse                  // #FFFFFF

// Secondary button
background: tokens.action.secondary         // #2D4A5F
background: tokens.action.secondaryHover    // #1A2B3D (hover)

// Ghost button
background: tokens.action.tertiary          // transparent
background: tokens.action.tertiaryHover     // #F8FAFB (hover)
color: tokens.text.brand                    // #2B79B9
```

### Alerts & Feedback

```typescript
// Success
background: tokens.feedback.successSubtle   // #E8F8F5
border: tokens.feedback.successBorder       // #27AE60
color: tokens.feedback.successText          // #155A32

// Error
background: tokens.feedback.errorSubtle     // #FFEBEE
border: tokens.feedback.errorBorder         // #E74C3C
color: tokens.feedback.errorText            // #C62828

// Warning
background: tokens.feedback.warningSubtle   // #FFF4E6
border: tokens.feedback.warningBorder       // #E67E22
color: tokens.feedback.warningText          // #993608

// Info
background: tokens.feedback.infoSubtle      // #E3F2FD
border: tokens.feedback.infoBorder          // #2980B9
color: tokens.feedback.infoText             // #1976D2
```

### Charts & Data Viz

```typescript
// Categorical colors (10 distinct colors)
const colors = tokens.dataViz.categorical;
// [blue, orange, green, purple, teal, red, yellow, pink, cyan, lime]

// Sequential (light to dark)
const scale = tokens.dataViz.sequential.blue;
// [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]

// Diverging (red to blue)
const diverging = tokens.dataViz.diverging.redBlue;
```

## All Token Categories

| Category | Usage |
|----------|-------|
| `tokens.text` | All text content |
| `tokens.surface` | Backgrounds, cards |
| `tokens.border` | Borders, dividers |
| `tokens.action` | Buttons, interactive |
| `tokens.feedback` | Alerts, validation |
| `tokens.accent` | Special emphasis |
| `tokens.gradient` | Gradient backgrounds |
| `tokens.dataViz` | Charts, graphs |

## Foundation Scales

Use when you need direct access to specific shades:

```typescript
foundation.blue       // 50, 100, 200, ..., 900
foundation.neutral    // 0, 50, 100, ..., 800
foundation.green      // 50, 100, 200, ..., 900
foundation.orange     // 50, 100, 200, ..., 900
foundation.red        // 50, 100, 200, ..., 900
foundation.gold       // 50, 100, 200, ..., 900
foundation.peach      // 50, 100, 200, ..., 900
foundation.purple     // 50, 100, 200, ..., 900
foundation.teal       // 50, 100, 200, ..., 900
foundation.yellow     // 50, 100, 200, ..., 900
foundation.pink       // 50, 100, 200, ..., 900
foundation.cyan       // 50, 100, 200, ..., 900
foundation.lime       // 50, 100, 200, ..., 900
```

## Scale Reference

| Scale | Usage |
|-------|-------|
| 50 | Lightest - backgrounds |
| 100-200 | Light - hover states |
| 300-400 | Medium light - disabled |
| 500 | **Base** - primary usage |
| 600-700 | Dark - hover/active |
| 800-900 | Darkest - emphasis |

## Component Patterns

### Interactive Element Pattern
```typescript
// Default
background: tokens.action.primary
// Hover
background: tokens.action.primaryHover
// Active/Pressed
background: tokens.action.primaryActive
// Disabled
background: tokens.action.primaryDisabled
```

### Feedback Pattern
```typescript
// Icon/indicator
color: tokens.feedback.success
// Background
background: tokens.feedback.successSubtle
// Border
border: tokens.feedback.successBorder
// Text
color: tokens.feedback.successText
```

## Rule of Thumb

1. **UI elements** → Use `tokens.*`
2. **Specific shades** → Use `foundation.*`
3. **Unsure?** → Use `tokens.*` (more descriptive)

## Old → New Migration

| Old | New |
|-----|-----|
| `colors.primary.main` | `tokens.action.primary` |
| `colors.neutral.deepNavy` | `tokens.text.primary` |
| `colors.neutral.border` | `tokens.border.default` |
| `colors.status.success` | `tokens.feedback.success` |
| `colors.statusBg.success` | `tokens.feedback.successSubtle` |
