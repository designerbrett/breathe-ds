# Contributing to Breathe Design System

Thank you for contributing to the Breathe Design System! This guide will help you add new components and maintain consistency.

## Quick Start

### Adding a New External Component (Mobile)

1. **Create component directory**
```bash
mkdir -p packages/external/src/components/YourComponent
cd packages/external/src/components/YourComponent
```

2. **Create component files**
```
YourComponent/
├── YourComponent.tsx        # Component logic
├── YourComponent.module.css # Styles
└── YourComponent.stories.tsx # Storybook stories
```

3. **Update package exports**
```typescript
// packages/external/src/index.ts
export * from './components/YourComponent/YourComponent';
```

4. **Update component inventory**
Update `docs/COMPONENT_INVENTORY.md` status from 📋 to 🚧, then to ✅ when complete.

---

## Component Template: External (Mobile 65+)

### YourComponent.tsx

```typescript
import React from 'react';
import styles from './YourComponent.module.css';

export interface YourComponentProps {
  /** Component description */
  children: React.ReactNode;
  /** Visual variant */
  variant?: 'default' | 'success' | 'warning' | 'error';
  /** Size variant */
  size?: 'default' | 'large';
  /** Optional className for customization */
  className?: string;
}

/**
 * YourComponent - Brief description
 *
 * Optimized for mobile (65+ audience):
 * - Large touch targets
 * - High contrast
 * - Clear visual feedback
 */
export const YourComponent = React.forwardRef<HTMLDivElement, YourComponentProps>(
  ({ children, variant = 'default', size = 'default', className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={[
          styles.component,
          styles[`variant-${variant}`],
          styles[`size-${size}`],
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        {...props}
      >
        {children}
      </div>
    );
  }
);

YourComponent.displayName = 'YourComponent';
```

### YourComponent.module.css

```css
/* Base component styles */
.component {
  display: flex;
  align-items: center;
  padding: 16px;
  font-size: 17px;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  border-radius: 12px;
  transition: all 0.2s ease;

  /* Ensure minimum touch target */
  min-height: 44px;
}

/* Variants */
.variant-default {
  background: #F8FAFB;
  color: #1A2B3D;
  border: 1px solid #E8EDF2;
}

.variant-success {
  background: #E8F8F5;
  color: #27AE60;
  border: 1px solid #27AE60;
}

.variant-warning {
  background: #FFF4E6;
  color: #E67E22;
  border: 1px solid #E67E22;
}

.variant-error {
  background: #FFEBEE;
  color: #E74C3C;
  border: 1px solid #E74C3C;
}

/* Sizes */
.size-default {
  padding: 16px;
  font-size: 17px;
}

.size-large {
  padding: 20px;
  font-size: 18px;
}

/* Focus state for accessibility */
.component:focus-visible {
  outline: 4px solid rgba(43, 121, 185, 0.3);
  outline-offset: 2px;
}
```

### YourComponent.stories.tsx

```typescript
import type { Meta, StoryObj } from '@storybook/react';
import { YourComponent } from './YourComponent';

const meta = {
  title: 'External/YourComponent',
  component: YourComponent,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Brief description of the component and when to use it.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'success', 'warning', 'error'],
      description: 'Visual variant',
    },
    size: {
      control: 'select',
      options: ['default', 'large'],
      description: 'Size variant',
    },
  },
} satisfies Meta<typeof YourComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Default component',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Success state',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <YourComponent variant="default">Default</YourComponent>
      <YourComponent variant="success">Success</YourComponent>
      <YourComponent variant="warning">Warning</YourComponent>
      <YourComponent variant="error">Error</YourComponent>
    </div>
  ),
};
```

---

## Component Template: Internal (Mantine)

For internal components, use Mantine's existing components with custom theming:

### MantineYourComponent.stories.tsx

```typescript
import type { Meta, StoryObj } from '@storybook/react';
import { YourMantineComponent } from '@mantine/core';
import { MantineProvider } from '@mantine/core';
import { breatheMantineTheme } from '../theme';
import '@mantine/core/styles.css';

const meta = {
  title: 'Internal/Mantine/YourComponent',
  component: YourMantineComponent,
  decorators: [
    (Story) => (
      <MantineProvider theme={breatheMantineTheme}>
        <Story />
      </MantineProvider>
    ),
  ],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Mantine component with Breathe theme overrides.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof YourMantineComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Component content',
  },
};
```

---

## Design Guidelines

### External Mode (Mobile 65+)

**Must Have:**
- ✅ Minimum 44px touch targets (56px recommended)
- ✅ 17px base font size (18px for important content)
- ✅ High contrast (WCAG AAA: 7:1 for text)
- ✅ Clear visual feedback on all interactions
- ✅ Focus states with 4px outline
- ✅ No hover-only interactions (must work on touch)

**Typography:**
- Font: Inter (body), Lexend (headings)
- Line height: 1.6 minimum
- Avoid all-caps for long text

**Spacing:**
- 8px base grid
- Generous padding (16-24px)
- 8px minimum spacing between interactive elements

**Colors:**
- Primary: Kivo Blue (#2B79B9)
- Text: Deep Navy (#1A2B3D)
- Avoid using color alone for meaning

### Internal Mode (Desktop)

**Must Have:**
- ✅ Minimum 36px interactive elements
- ✅ 14-15px base font size
- ✅ High contrast (WCAG AA: 4.5:1 for text)
- ✅ Efficient use of space

**Spacing:**
- 4px base grid
- Compact padding (12-16px)
- Dense layouts for productivity

**Typography:**
- Font: Inter (body), Lexend (headings)
- Line height: 1.5

---

## Accessibility Checklist

Before marking a component as complete (✅):

### Keyboard Navigation
- [ ] Component is fully keyboard accessible
- [ ] Tab order is logical
- [ ] Focus states are clearly visible
- [ ] Enter/Space work on interactive elements
- [ ] Escape closes overlays/modals

### Screen Reader
- [ ] Proper semantic HTML elements
- [ ] ARIA labels where needed
- [ ] ARIA roles for complex widgets
- [ ] State changes announced
- [ ] Error messages associated with inputs

### Visual
- [ ] Sufficient color contrast
- [ ] Does not rely on color alone
- [ ] Focus indicators visible
- [ ] Text is resizable to 200%
- [ ] No content loss when zoomed

### Touch/Mouse
- [ ] Touch targets meet minimum size
- [ ] Adequate spacing between targets
- [ ] Works without hover (External)
- [ ] Clear pressed/active states

---

## Testing Your Component

### Visual Testing
```bash
npm run storybook
```

1. Open http://localhost:6006
2. Navigate to your component
3. Test all variants and states
4. Use the Mode switcher to test both External and Internal modes
5. Test with browser zoom (100%, 150%, 200%)

### Code Quality
```bash
# Type check
npm run typecheck

# Build
npm run build
```

---

## Common Patterns

### Using Design Tokens

```typescript
import { colors, typography, spacing } from '@breathe-ds/core';

// In CSS-in-JS or styled components
const styles = {
  color: colors.primary.main,
  fontSize: typography.external.fontSize.body,
  padding: spacing.external.md,
};
```

### Using CSS Variables (External)

```css
/* These are defined in packages/external/src/styles/global.css */
.my-component {
  background: var(--breathe-primary);
  color: var(--breathe-neutral-navy);
  padding: var(--breathe-space-md);
  font-family: var(--breathe-font-body);
}
```

### Responsive Design

External components should be mobile-first and work well on small screens:

```css
/* Mobile first (default) */
.component {
  padding: 16px;
  font-size: 17px;
}

/* Larger screens */
@media (min-width: 768px) {
  .component {
    padding: 20px;
  }
}
```

---

## File Organization

```
packages/
├── core/
│   └── src/
│       └── tokens/           # Design tokens only
├── external/
│   └── src/
│       ├── components/       # Custom mobile components
│       │   ├── Button/
│       │   ├── Input/
│       │   └── Card/
│       └── styles/
│           └── global.css    # Global styles and CSS variables
└── mantine/
    └── src/
        ├── theme.ts          # Mantine theme overrides
        └── components/       # Mantine component stories
```

---

## Pull Request Checklist

Before submitting a PR:

- [ ] Component follows External or Internal design guidelines
- [ ] Storybook stories created with all variants
- [ ] Accessibility checklist completed
- [ ] Component added to exports in `src/index.ts`
- [ ] Component inventory updated (`docs/COMPONENT_INVENTORY.md`)
- [ ] TypeScript types properly defined
- [ ] Code builds without errors (`npm run build`)
- [ ] No console errors in Storybook

---

## Questions?

Check the documentation:
- [Component Inventory](./COMPONENT_INVENTORY.md) - Full component list
- [README](../README.md) - Project overview
- Original HTML docs in `docs/html-archive/`

Happy building! 🌬️
