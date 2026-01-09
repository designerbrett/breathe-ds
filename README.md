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

### Installation for Development

```bash
npm install
```

### Installation for Consuming Apps

**Which package should you use?**
- **External/Mobile apps** (patient-facing, 65+ audience): Use `@breathe-ds/external`
- **Internal/Desktop apps** (staff productivity tools): Use `@breathe-ds/mantine`
- **Design tokens only**: Use `@breathe-ds/core`

There are several ways to install these packages:

#### Option 1: Install from GitHub (Recommended for Testing)

Install directly from the GitHub repository:

```bash
# For external/mobile apps
npm install @breathe-ds/external@github:brettanderson/breathe-ds#main

# For internal/desktop apps
npm install @breathe-ds/mantine@github:brettanderson/breathe-ds#main

# Design tokens (used by both)
npm install @breathe-ds/core@github:brettanderson/breathe-ds#main
```

#### Option 2: Install from npm (Once Published)

After publishing to npm, users can install normally:

```bash
npm install @breathe-ds/external
npm install @breathe-ds/mantine
npm install @breathe-ds/core
```

#### Option 3: Local Development/Testing with npm link

For local testing before installation:

```bash
# In the breathe-ds repo
cd packages/core && npm link
cd ../external && npm link
cd ../mantine && npm link

# In your consuming project
npm link @breathe-ds/core @breathe-ds/external @breathe-ds/mantine
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
- Button (primary, secondary, critical, tertiary, light variants)

### @breathe-ds/mantine

Mantine theme overrides for internal desktop tools:

```tsx
import { MantineProvider } from '@mantine/core';
import { breatheMantineTheme } from '@breathe-ds/mantine';
import '@mantine/core/styles.css';
import '@breathe-ds/mantine/button-overrides.css'; // Import button styles
import '@breathe-ds/mantine/card-overrides.css'; // Import card styles

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
- Button, Table, Form, Modal, Card, Stack, Grid, etc.

**Default Spacing (automatically applied via CSS):**
- `Card`: 24px padding, 8px radius (automatically applied)
- `Stack` / `Group`: 16px gap between children (default)
- `Grid`: 16px gutter between columns (default)
- `Modal`: 24px padding (default), medium radius
- `Paper`: Use `padding="md"` (16px), `radius="md"` (8px)
- `Tabs` / `Accordion`: medium radius (default)

**Usage Example:**
```tsx
import { Card, Stack, Text } from '@mantine/core';

// Cards automatically have 24px padding from CSS overrides
<Card shadow="sm">
  <Stack> {/* gap="md" is default */}
    <Text fw={600}>Title</Text>
    <Text>Content here</Text>
  </Stack>
</Card>

// Override padding if needed
<Card padding="xl" shadow="sm">
  <Text>Larger padding</Text>
</Card>
```

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

## Button Variants

### External Buttons (Mobile-Optimized)

All buttons maintain 56px height (default) with large touch targets:

```jsx
import { Button } from '@breathe-ds/external';

// Primary - Blue gradient with darker hover (#236199)
<Button variant="primary">Complete Activity</Button>

// Secondary - Light gray background (rgba(250, 250, 250, 1)) with hover
<Button variant="secondary">Cancel</Button>

// Critical - Red gradient for destructive actions, darker red hover (#C7392D)
<Button variant="critical">Delete Account</Button>

// Tertiary - Transparent with blue text (#2B79B9), gray hover (#F0F0F0)
<Button variant="tertiary">Learn More</Button>

// Light - Transparent with gray text (#5C5F62), gray hover (#F0F0F0)
<Button variant="light">Skip</Button>

// Disabled states (all variants support disabled)
<Button variant="primary" disabled>Disabled</Button>
```

### Internal Buttons (Mantine)

Compact 36px buttons for desktop productivity:

```jsx
import { Button } from '@mantine/core';
import { MantineProvider } from '@mantine/core';
import { breatheMantineTheme } from '@breathe-ds/mantine';
import '@mantine/core/styles.css';
import '@breathe-ds/mantine/button-overrides.css';
import '@breathe-ds/mantine/card-overrides.css';

// Wrap your app with MantineProvider
<MantineProvider theme={breatheMantineTheme}>
  {/* Primary (default) - Blue gradient with darker hover */}
  <Button>Save Changes</Button>

  {/* Secondary (outline) - Light gray with hover */}
  <Button variant="outline">Cancel</Button>

  {/* Critical - Red button (requires data-button-color attribute) */}
  <Button color="red" data-button-color="red">Delete</Button>

  {/* Tertiary (subtle) - Transparent with blue text */}
  <Button variant="subtle">Learn More</Button>

  {/* Light - Transparent with gray text */}
  <Button variant="light">Skip</Button>

  {/* Disabled states */}
  <Button disabled>Disabled</Button>
</MantineProvider>
```

**Note:** For critical buttons in Mantine, you must include both `color="red"` and `data-button-color="red"` to ensure proper hover styling.

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

### Phase 1 Components - ✅ COMPLETE
Priority 0 (P0) components for basic functionality:
- [x] Button (External & Internal)
- [x] Text Field / Input
- [x] Card
- [x] Badge / Status Indicator
- [x] Loading Indicator
- [x] Modal / Dialog
- [x] Data Table (Internal with Mantine)

### Phase 2 Components - ✅ COMPLETE
Form controls and feedback (P0-P1):
- [x] Select Dropdown
- [x] Checkbox
- [x] Radio Buttons
- [x] Toggle Switch
- [x] Progress Bar

**Total: 12 production-ready components**

See the [Component Inventory](./docs/COMPONENT_INVENTORY.md) for the full roadmap.

### Future Enhancements
- [ ] Visual regression testing (Chromatic)
- [ ] CI/CD pipeline for automated builds
- [ ] Publish packages to npm (when ready)
- [ ] Dark mode support

## Publishing to npm

When ready to publish these packages to npm:

### 1. One-time Setup

```bash
# Create npm account at https://www.npmjs.com/signup
# Login to npm
npm login
```

### 2. Build All Packages

```bash
npm run build
```

### 3. Publish Each Package

```bash
# Publish core first (other packages depend on it)
cd packages/core
npm publish --access public

# Then publish external and mantine
cd ../external
npm publish --access public

cd ../mantine
npm publish --access public
```

### Alternative: GitHub Packages

To publish to GitHub Packages instead of npm:

1. Create `.npmrc` in the root:
```
@breathe-ds:registry=https://npm.pkg.github.com
```

2. Add to each `package.json`:
```json
{
  "publishConfig": {
    "registry": "https://npm.pkg.github.com"
  }
}
```

3. Authenticate and publish:
```bash
npm login --registry=https://npm.pkg.github.com
npm publish
```

Users would then need to configure their `.npmrc`:
```
@breathe-ds:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```

## License

Copyright © 2026 Kivo Health. All rights reserved.
