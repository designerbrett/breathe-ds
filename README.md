# Breathe Design System

A dual-mode design system for Kivo Health, optimized for both patient-facing mobile apps (65+ audience) and internal productivity tools.

## Overview

Breathe DS provides a consistent design language across two distinct modes:

- **External Mode**: Mobile-first components for patient apps (65+ audience)
  - Large touch targets (56px buttons)
  - High contrast, accessible design
  - 17px base font size
  - Generous spacing (8px base grid)

- **Internal Mode**: Desktop-optimized components for staff dashboards
  - Compact sizing (36px buttons)
  - Data-dense layouts
  - 14-15px base font size
  - 4px base grid (desktop-optimized)

## Architecture

This is a monorepo using npm workspaces:

```
breathe-ds/
├── packages/
│   ├── core/           # Design tokens (colors, typography, spacing)
│   ├── external/       # Custom React components for mobile
│   └── mantine/        # Mantine theme overrides for internal tools
└── .storybook/         # Storybook configuration with mode switcher
```

## Getting Started

### Installation

```bash
npm install
```

### Development

Start Storybook to view all components:

```bash
npm run dev
```

This will start Storybook on http://localhost:6006

Use the **Mode** toolbar in Storybook to toggle between External and Internal modes.

### Building

Build all packages:

```bash
npm run build
```

Build a specific package:

```bash
npm run build -w @breathe-ds/core
npm run build -w @breathe-ds/external
npm run build -w @breathe-ds/mantine
```

## Packages

### @breathe-ds/core

Core design tokens extracted from the original HTML documentation:

- **Colors**: Kivo Blue (#2B79B9) primary, neutrals, status colors
- **Typography**: Lexend (headings) + Inter (body)
- **Spacing**: External (8px grid) and Internal (4px grid, desktop-optimized) systems
- **Themes**: `externalTheme` and `internalTheme` configurations

```typescript
import { colors, typography, spacing, externalTheme } from '@breathe-ds/core';
```

### @breathe-ds/external

Custom React components optimized for mobile (65+ audience):

- Large touch targets (56px default)
- High contrast, clear visual feedback
- CSS Modules for styling

```tsx
import { Button } from '@breathe-ds/external';
import '@breathe-ds/external/styles';

<Button variant="primary" size="large">
  Complete Activity
</Button>
```

**Current Components:**
- Button (primary, secondary, outline, ghost variants)

### @breathe-ds/mantine

Mantine theme overrides for internal desktop tools:

```tsx
import { MantineProvider } from '@mantine/core';
import { breatheMantineTheme } from '@breathe-ds/mantine';
import '@mantine/core/styles.css';

function App() {
  return (
    <MantineProvider theme={breatheMantineTheme}>
      {/* Your app */}
    </MantineProvider>
  );
}
```

**Available Mantine Components:**
- All Mantine components themed with Breathe design tokens
- Button, Table, Form, Modal, etc.

## Design Tokens

### Colors

```typescript
import { colors } from '@breathe-ds/core';

colors.primary.main      // #2B79B9 (Kivo Blue)
colors.neutral.deepNavy  // #1A2B3D (primary text)
colors.status.success    // #27AE60
```

### Typography

```typescript
import { typography } from '@breathe-ds/core';

// External mode (mobile)
typography.external.fontSize.body     // 17px
typography.external.fontSize.button   // 17px

// Internal mode (desktop)
typography.internal.fontSize[350]     // 14px (body default)
typography.internal.fontSize[400]     // 16px
```

### Spacing

```typescript
import { spacing } from '@breathe-ds/core';

// External mode (8px base)
spacing.external.md   // 16px
spacing.external.lg   // 24px

// Internal mode (4px base)
spacing.internal[400] // 16px
spacing.internal[600] // 24px
```

## Storybook Features

- **Mode Switcher**: Toggle between External (Mobile) and Internal (Desktop) modes
- **Auto-docs**: Automatically generated documentation from component props
- **Themed UI**: Storybook interface styled with Breathe design tokens
- **Story Categories**: Organized by External/* and Internal/*

## Development Workflow

1. **Start Storybook**: `npm run dev`
2. **Make changes** to components or tokens
3. **See live updates** in Storybook (hot reload enabled)
4. **Build** when ready: `npm run build`

## Technology Stack

- **React 18** + TypeScript
- **Vite** for fast builds
- **Storybook 8.x** for component documentation
- **Mantine 7.x** for internal components
- **CSS Modules** for external component styling
- **npm workspaces** for monorepo management

## Design Principles

### External Mode (Mobile 65+)
- Light & Airy: Generous white space, soft colors
- Accessible First: WCAG AAA contrast, large text
- Calming: Soothing colors that encourage action
- Human & Friendly: Rounded corners, approachable
- Mobile-First: Optimized for thumbs and fingers
- Clarity Over Complexity: Simple, scannable layouts

### Internal Mode (Desktop)
- Efficient: Dense layouts for productivity
- Professional: Clean, organized interfaces
- Data-Focused: Tables, forms, dashboards
- Consistent: Mantine components with Breathe theming

## Contributing

When adding new components:

1. **For External (Mobile)**: Add to `packages/external/src/components/`
   - Use CSS Modules for styling
   - Follow 56px button height, 17px font size patterns
   - Create a `.stories.tsx` file for Storybook

2. **For Internal (Desktop)**: Add to `packages/mantine/src/components/`
   - Use Mantine components with `breatheMantineTheme`
   - Override specific styles if needed
   - Create a `.stories.tsx` file under `Internal/Mantine/*`

3. **For Design Tokens**: Update `packages/core/src/tokens/`
   - Ensure tokens work for both External and Internal modes

## Brand Consistency

Breathe DS maintains brand consistency with kivohealth.com:
- Primary brand color: Kivo Blue (#2B79B9)
- Typography: Lexend (headings) + Inter (body)
- Same color palette across all touchpoints

## Documentation

- **[Component Inventory](./docs/COMPONENT_INVENTORY.md)** - Complete list of all components with implementation status
- **[Contributing Guide](./docs/CONTRIBUTING.md)** - How to add new components
- **[HTML Archive](./docs/html-archive/)** - Original design documentation

## Next Steps

### Current Focus: Phase 1 Components
Priority 0 (P0) components for basic functionality:
- [x] Button (External & Internal)
- [ ] Text Field / Input
- [ ] Card
- [ ] Badge / Status Indicator
- [ ] Loading Indicator
- [ ] Modal / Dialog
- [ ] Data Table (Internal with Mantine)

See the [Component Inventory](./docs/COMPONENT_INVENTORY.md) for the full roadmap.

### Future Enhancements
- [ ] Visual regression testing (Chromatic)
- [ ] CI/CD pipeline for automated builds
- [ ] Publish packages to npm (when ready)
- [ ] Dark mode support

## License

Copyright © 2026 Kivo Health. All rights reserved.
