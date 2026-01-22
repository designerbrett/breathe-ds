# Color Token Usage Guide

## Quick Start

The Breathe Design System now uses a two-tier color token system:

1. **Foundation** - Raw color scales (blue/500, neutral/700)
2. **Tokens** - Semantic, usage-based tokens (text.primary, action.primary)

### Recommended Approach

**Always use semantic tokens (`tokens`) in your components** for self-documenting, maintainable code.

```typescript
import { tokens } from '@breathe-ds/core';

// ✅ GOOD - Clear semantic meaning
const Button = styled.button`
  background: ${tokens.action.primary};
  color: ${tokens.text.inverse};
  border: 1px solid ${tokens.border.brand};

  &:hover {
    background: ${tokens.action.primaryHover};
  }

  &:disabled {
    background: ${tokens.action.primaryDisabled};
    color: ${tokens.text.disabled};
  }
`;
```

## Import Options

```typescript
// Import everything
import { foundation, tokens, colors } from '@breathe-ds/core';

// Import specific parts
import { tokens } from '@breathe-ds/core';
import { foundation } from '@breathe-ds/core';

// From theme
import { externalTheme, internalTheme } from '@breathe-ds/core';
const { tokens } = externalTheme;
```

## Token Categories

### 1. Text Colors (`tokens.text`)

For all text content - labels, body copy, headings, links.

```typescript
// Primary text - headlines, main content
color: ${tokens.text.primary}        // #1A2B3D (deepNavy)

// Secondary text - subheadings, descriptions
color: ${tokens.text.secondary}      // #2D4A5F (slate)

// Tertiary text - captions, helper text
color: ${tokens.text.tertiary}       // #5A6C7D (gray)

// Disabled text
color: ${tokens.text.disabled}       // #7B8A99 (grayLight)

// Placeholder text in inputs
color: ${tokens.text.placeholder}    // #A8B5C2 (grayLighter)

// Text on dark backgrounds
color: ${tokens.text.inverse}        // #FFFFFF (white)

// Brand-colored text
color: ${tokens.text.brand}          // #2B79B9 (blue)

// Links
color: ${tokens.text.link}           // #2B79B9 (blue)
color: ${tokens.text.linkHover}      // #1F5A8E (darker blue)
```

**Example:**
```tsx
const Card = () => (
  <div>
    <h2 style={{ color: tokens.text.primary }}>Heading</h2>
    <p style={{ color: tokens.text.secondary }}>Description text</p>
    <small style={{ color: tokens.text.tertiary }}>Helper text</small>
  </div>
);
```

### 2. Surface/Background Colors (`tokens.surface`)

For backgrounds, cards, containers, and surfaces.

```typescript
// Page background
background: ${tokens.surface.page}       // #FAFBFC

// Default card/surface background
background: ${tokens.surface.default}    // #FFFFFF

// Elevated elements (modals, popovers)
background: ${tokens.surface.elevated}   // #F8FAFB

// Hover state background
background: ${tokens.surface.hover}      // #F8FAFB

// Pressed/active state
background: ${tokens.surface.pressed}    // #E8EDF2

// Selected state
background: ${tokens.surface.selected}   // #E8F2FA (light blue)

// Disabled background
background: ${tokens.surface.disabled}   // #F8FAFB

// Modal overlay/backdrop
background: ${tokens.surface.overlay}    // rgba(26, 43, 61, 0.6)
```

**Example:**
```tsx
const Card = styled.div`
  background: ${tokens.surface.default};
  border: 1px solid ${tokens.border.default};

  &:hover {
    background: ${tokens.surface.hover};
  }
`;

const Page = styled.main`
  background: ${tokens.surface.page};
  min-height: 100vh;
`;
```

### 3. Border Colors (`tokens.border`)

For borders, dividers, and outlines.

```typescript
// Default borders
border: 1px solid ${tokens.border.default}    // #E8EDF2

// Strong/emphasized borders
border: 1px solid ${tokens.border.strong}     // #A8B5C2

// Subtle/de-emphasized borders
border: 1px solid ${tokens.border.subtle}     // #F8FAFB

// Brand-colored borders
border: 1px solid ${tokens.border.brand}      // #2B79B9

// Disabled borders
border: 1px solid ${tokens.border.disabled}   // #E8EDF2

// Focus state
border: 2px solid ${tokens.border.focus}      // #2B79B9

// Error state
border: 1px solid ${tokens.border.error}      // #E74C3C
```

**Example:**
```tsx
const Input = styled.input`
  border: 1px solid ${tokens.border.default};

  &:focus {
    outline: none;
    border: 2px solid ${tokens.border.focus};
  }

  &:disabled {
    border: 1px solid ${tokens.border.disabled};
  }

  &.error {
    border: 1px solid ${tokens.border.error};
  }
`;
```

### 4. Action Colors (`tokens.action`)

For interactive elements - buttons, clickable items.

```typescript
// Primary actions (main CTA buttons)
background: ${tokens.action.primary}              // #2B79B9
background: ${tokens.action.primaryHover}         // #1F5A8E
background: ${tokens.action.primaryActive}        // #153F63
background: ${tokens.action.primaryDisabled}      // #A8B5C2

// Subtle primary actions (light backgrounds)
background: ${tokens.action.primarySubtle}        // #E8F2FA
background: ${tokens.action.primarySubtleHover}   // #C1DCEF

// Secondary actions
background: ${tokens.action.secondary}            // #2D4A5F
background: ${tokens.action.secondaryHover}       // #1A2B3D
background: ${tokens.action.secondaryActive}      // #121A24

// Tertiary/ghost actions (transparent)
background: ${tokens.action.tertiary}             // transparent
background: ${tokens.action.tertiaryHover}        // #F8FAFB
background: ${tokens.action.tertiaryActive}       // #E8EDF2
```

**Example:**
```tsx
// Primary button
const PrimaryButton = styled.button`
  background: ${tokens.action.primary};
  color: ${tokens.text.inverse};
  border: none;

  &:hover:not(:disabled) {
    background: ${tokens.action.primaryHover};
  }

  &:active:not(:disabled) {
    background: ${tokens.action.primaryActive};
  }

  &:disabled {
    background: ${tokens.action.primaryDisabled};
    color: ${tokens.text.disabled};
  }
`;

// Ghost button
const GhostButton = styled.button`
  background: ${tokens.action.tertiary};
  color: ${tokens.text.brand};
  border: none;

  &:hover {
    background: ${tokens.action.tertiaryHover};
  }

  &:active {
    background: ${tokens.action.tertiaryActive};
  }
`;

// Subtle button (light background)
const SubtleButton = styled.button`
  background: ${tokens.action.primarySubtle};
  color: ${tokens.text.brand};
  border: none;

  &:hover {
    background: ${tokens.action.primarySubtleHover};
  }
`;
```

### 5. Feedback Colors (`tokens.feedback`)

For alerts, notifications, validation states.

```typescript
// Success
background: ${tokens.feedback.success}         // #27AE60
background: ${tokens.feedback.successSubtle}   // #E8F8F5
border: ${tokens.feedback.successBorder}       // #27AE60
color: ${tokens.feedback.successText}          // #155A32

// Warning
background: ${tokens.feedback.warning}         // #E67E22
background: ${tokens.feedback.warningSubtle}   // #FFF4E6
border: ${tokens.feedback.warningBorder}       // #E67E22
color: ${tokens.feedback.warningText}          // #993608

// Error
background: ${tokens.feedback.error}           // #E74C3C
background: ${tokens.feedback.errorSubtle}     // #FFEBEE
border: ${tokens.feedback.errorBorder}         // #E74C3C
color: ${tokens.feedback.errorText}            // #C62828

// Info
background: ${tokens.feedback.info}            // #2980B9
background: ${tokens.feedback.infoSubtle}      // #E3F2FD
border: ${tokens.feedback.infoBorder}          // #2980B9
color: ${tokens.feedback.infoText}             // #1976D2
```

**Example:**
```tsx
// Success alert
const SuccessAlert = styled.div`
  background: ${tokens.feedback.successSubtle};
  border: 1px solid ${tokens.feedback.successBorder};
  color: ${tokens.feedback.successText};
  padding: 16px;
  border-radius: 8px;
`;

// Error message
const ErrorMessage = styled.span`
  color: ${tokens.feedback.errorText};
  font-size: 14px;
`;

// Input validation
const Input = styled.input<{ error?: boolean }>`
  border: 1px solid ${props =>
    props.error ? tokens.feedback.errorBorder : tokens.border.default
  };

  &:focus {
    border-color: ${props =>
      props.error ? tokens.feedback.errorBorder : tokens.border.focus
    };
  }
`;
```

### 6. Accent Colors (`tokens.accent`)

Use sparingly for celebration, special emphasis.

```typescript
background: ${tokens.accent.gold}         // #F4B942
background: ${tokens.accent.goldSubtle}   // #FFF9E6
background: ${tokens.accent.peach}        // #FFB088
background: ${tokens.accent.peachSubtle}  // #FFF3ED
```

**Example:**
```tsx
const CelebrationBanner = styled.div`
  background: ${tokens.accent.goldSubtle};
  border: 2px solid ${tokens.accent.gold};
  color: ${tokens.text.primary};
`;
```

### 7. Data Visualization (`tokens.dataViz`)

For charts, graphs, and data visualization.

```typescript
// Categorical - distinct colors for categories
const colors = tokens.dataViz.categorical;
// [blue, orange, green, purple, teal, red, yellow, pink, cyan, lime]

// Sequential - ordered data (light to dark)
const blueScale = tokens.dataViz.sequential.blue;
const greenScale = tokens.dataViz.sequential.green;

// Diverging - data with meaningful midpoint
const redToBlue = tokens.dataViz.diverging.redBlue;
```

**Example:**
```tsx
// Pie chart
const PieChart = ({ data }) => (
  <Pie
    data={data.map((item, i) => ({
      ...item,
      color: tokens.dataViz.categorical[i % 10]
    }))}
  />
);

// Heatmap
const Heatmap = ({ values }) => (
  <Grid>
    {values.map((value, i) => (
      <Cell
        key={i}
        style={{
          background: tokens.dataViz.sequential.blue[
            Math.floor((value / max) * 9)
          ]
        }}
      />
    ))}
  </Grid>
);
```

## Using Foundation Colors

Foundation colors should generally **only be used** when:
1. You need direct access to a specific shade
2. You're creating new semantic tokens
3. You're working on data visualizations that need specific scales

```typescript
import { foundation } from '@breathe-ds/core';

// Accessing specific shades
const lightBlue = foundation.blue[100];
const darkBlue = foundation.blue[800];

// Creating custom gradients
const customGradient = `linear-gradient(
  90deg,
  ${foundation.blue[300]} 0%,
  ${foundation.purple[400]} 100%
)`;
```

## Migration from Old Structure

If you're using the old `colors` structure:

```typescript
// OLD (still works, but deprecated)
import { colors } from '@breathe-ds/core';

background: colors.primary.main;
color: colors.neutral.deepNavy;
border: colors.status.success;

// NEW (recommended)
import { tokens } from '@breathe-ds/core';

background: tokens.action.primary;
color: tokens.text.primary;
border: tokens.feedback.successBorder;
```

### Migration Mapping

| Old Token | New Token |
|-----------|-----------|
| `colors.primary.main` | `tokens.action.primary` or `foundation.blue[500]` |
| `colors.primary.dark` | `tokens.action.primaryHover` or `foundation.blue[600]` |
| `colors.primary.light` | `tokens.action.primarySubtle` or `foundation.blue[50]` |
| `colors.neutral.deepNavy` | `tokens.text.primary` or `foundation.neutral[700]` |
| `colors.neutral.slate` | `tokens.text.secondary` or `foundation.neutral[600]` |
| `colors.neutral.gray` | `tokens.text.tertiary` or `foundation.neutral[500]` |
| `colors.neutral.grayLight` | `tokens.text.disabled` or `foundation.neutral[400]` |
| `colors.neutral.grayLighter` | `tokens.text.placeholder` or `foundation.neutral[300]` |
| `colors.neutral.border` | `tokens.border.default` or `foundation.neutral[200]` |
| `colors.neutral.bgSoft` | `tokens.surface.elevated` or `foundation.neutral[100]` |
| `colors.neutral.bgPage` | `tokens.surface.page` or `foundation.neutral[50]` |
| `colors.neutral.white` | `tokens.text.inverse` or `foundation.neutral[0]` |
| `colors.status.success` | `tokens.feedback.success` |
| `colors.statusBg.success` | `tokens.feedback.successSubtle` |
| `colors.accent.gold` | `tokens.accent.gold` |
| `colors.accent.peach` | `tokens.accent.peach` |

## Best Practices

### ✅ DO

1. **Use semantic tokens** for all UI components
   ```typescript
   color: ${tokens.text.primary}
   background: ${tokens.surface.default}
   ```

2. **Use foundation for data viz** or when you need specific shades
   ```typescript
   background: ${foundation.blue[300]}
   ```

3. **Document your color choices** in components
   ```typescript
   // Uses primary text color for readability
   color: ${tokens.text.primary}
   ```

4. **Create component-specific variants**
   ```typescript
   const variants = {
     success: tokens.feedback.success,
     warning: tokens.feedback.warning,
     error: tokens.feedback.error,
   };
   ```

### ❌ DON'T

1. **Don't use hex values directly**
   ```typescript
   // ❌ BAD
   color: '#1A2B3D';

   // ✅ GOOD
   color: ${tokens.text.primary};
   ```

2. **Don't use foundation tokens for UI elements**
   ```typescript
   // ❌ BAD - unclear purpose
   background: ${foundation.blue[500]};

   // ✅ GOOD - clear semantic meaning
   background: ${tokens.action.primary};
   ```

3. **Don't create custom color variations**
   ```typescript
   // ❌ BAD - breaks system consistency
   color: rgba(43, 121, 185, 0.5);

   // ✅ GOOD - use lighter shade
   background: ${tokens.action.primarySubtle};
   ```

4. **Don't mix old and new structures**
   ```typescript
   // ❌ BAD - inconsistent
   background: ${colors.primary.main};
   color: ${tokens.text.inverse};

   // ✅ GOOD - consistent approach
   background: ${tokens.action.primary};
   color: ${tokens.text.inverse};
   ```

## TypeScript Support

Full TypeScript support with autocomplete:

```typescript
import { tokens, foundation, Tokens, Foundation } from '@breathe-ds/core';

// Type-safe usage
const textColor: string = tokens.text.primary;
const blueScale: string = foundation.blue[500];

// Type for component props
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'tertiary';
}

const Button: React.FC<ButtonProps> = ({ variant }) => {
  const getBackground = () => {
    switch (variant) {
      case 'primary': return tokens.action.primary;
      case 'secondary': return tokens.action.secondary;
      case 'tertiary': return tokens.action.tertiary;
    }
  };

  return <button style={{ background: getBackground() }} />;
};
```

## Component Examples

### Button Component

```tsx
import { tokens } from '@breathe-ds/core';
import styled from 'styled-components';

const StyledButton = styled.button<{ variant: 'primary' | 'secondary' | 'ghost' }>`
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.2s;

  ${({ variant }) => {
    switch (variant) {
      case 'primary':
        return `
          background: ${tokens.action.primary};
          color: ${tokens.text.inverse};
          border: none;

          &:hover:not(:disabled) {
            background: ${tokens.action.primaryHover};
          }

          &:active:not(:disabled) {
            background: ${tokens.action.primaryActive};
          }
        `;

      case 'secondary':
        return `
          background: ${tokens.action.secondary};
          color: ${tokens.text.inverse};
          border: none;

          &:hover:not(:disabled) {
            background: ${tokens.action.secondaryHover};
          }

          &:active:not(:disabled) {
            background: ${tokens.action.secondaryActive};
          }
        `;

      case 'ghost':
        return `
          background: ${tokens.action.tertiary};
          color: ${tokens.text.brand};
          border: 1px solid ${tokens.border.default};

          &:hover:not(:disabled) {
            background: ${tokens.action.tertiaryHover};
          }

          &:active:not(:disabled) {
            background: ${tokens.action.tertiaryActive};
          }
        `;
    }
  }}

  &:disabled {
    background: ${tokens.action.primaryDisabled};
    color: ${tokens.text.disabled};
    cursor: not-allowed;
  }
`;
```

### Alert Component

```tsx
import { tokens } from '@breathe-ds/core';
import styled from 'styled-components';

type AlertVariant = 'success' | 'warning' | 'error' | 'info';

const StyledAlert = styled.div<{ variant: AlertVariant }>`
  padding: 16px;
  border-radius: 8px;
  border: 1px solid;

  ${({ variant }) => `
    background: ${tokens.feedback[`${variant}Subtle`]};
    border-color: ${tokens.feedback[`${variant}Border`]};
    color: ${tokens.feedback[`${variant}Text`]};
  `}
`;

const Alert: React.FC<{ variant: AlertVariant; children: React.ReactNode }> = ({
  variant,
  children
}) => (
  <StyledAlert variant={variant}>
    {children}
  </StyledAlert>
);
```

### Card Component

```tsx
import { tokens } from '@breathe-ds/core';
import styled from 'styled-components';

const Card = styled.div<{ interactive?: boolean }>`
  background: ${tokens.surface.default};
  border: 1px solid ${tokens.border.default};
  border-radius: 12px;
  padding: 24px;
  transition: all 0.2s;

  ${({ interactive }) => interactive && `
    cursor: pointer;

    &:hover {
      background: ${tokens.surface.hover};
      border-color: ${tokens.border.strong};
    }

    &:active {
      background: ${tokens.surface.pressed};
    }
  `}
`;

const CardTitle = styled.h3`
  color: ${tokens.text.primary};
  margin: 0 0 8px 0;
`;

const CardDescription = styled.p`
  color: ${tokens.text.secondary};
  margin: 0;
`;
```

## Questions?

- Unsure which token to use? Check the token name - it should describe the usage
- Need a color not in the semantic tokens? Check if foundation has what you need
- Still not sure? Consider if we need a new semantic token for your use case
