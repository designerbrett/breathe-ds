# Color Token Structure Proposal

## Overview
This proposal restructures the Breathe DS color tokens following industry best practices for design token naming, based on the two-tier token system (primitives + semantic tokens).

## Current Issues
1. Mixed naming approaches (descriptive vs semantic)
2. No clear separation between primitive values and usage-based tokens
3. Unclear usage intent from token names
4. Difficult to maintain consistency across platforms

## Proposed Two-Tier System

### Tier 1: Primitive Tokens (Foundation Colors)
**What they ARE** - Raw color values with descriptive names and numerical scales

```typescript
export const primitives = {
  // Primary Brand - Kivo Blue
  blue: {
    50: '#E8F2FA',   // Lightest
    100: '#C1DCEF',
    200: '#9AC6E5',
    300: '#73B0DA',
    400: '#4C9AD0',
    500: '#2B79B9',  // Base Kivo Blue (main brand color)
    600: '#1F5A8E',  // Darker
    700: '#153F63',
    800: '#0C2A42',
    900: '#051421',  // Darkest
  },

  // Neutral Palette
  neutral: {
    0: '#FFFFFF',    // Pure white
    50: '#FAFBFC',   // Page background
    100: '#F8FAFB',  // Soft backgrounds
    200: '#E8EDF2',  // Borders, dividers
    300: '#A8B5C2',  // Placeholder text
    400: '#7B8A99',  // Tertiary text
    500: '#5A6C7D',  // Body text
    600: '#2D4A5F',  // Secondary text
    700: '#1A2B3D',  // Primary text, headers
    800: '#121A24',  // Darkest text (if needed)
  },

  // Success - Green
  green: {
    50: '#E8F8F5',
    100: '#C1E8DC',
    200: '#9AD8C3',
    300: '#73C8AA',
    400: '#4CB891',
    500: '#27AE60',  // Base success green
    600: '#1E8449',
    700: '#155A32',
    800: '#0C301B',
    900: '#051810',
  },

  // Warning - Orange
  orange: {
    50: '#FFF4E6',
    100: '#FFE5CC',
    200: '#FFD6B3',
    300: '#FFC799',
    400: '#FFB880',
    500: '#E67E22',  // Base warning orange
    600: '#CC6619',
    700: '#B34E11',
    800: '#993608',
    900: '#661E00',
  },

  // Error - Red
  red: {
    50: '#FFEBEE',
    100: '#FFCDD2',
    200: '#EF9A9A',
    300: '#E57373',
    400: '#EF5350',
    500: '#E74C3C',  // Base error red
    600: '#D32F2F',
    700: '#C62828',
    800: '#B71C1C',
    900: '#8B0000',
  },

  // Info - Blue (lighter than brand blue)
  lightBlue: {
    50: '#E3F2FD',
    100: '#BBDEFB',
    200: '#90CAF9',
    300: '#64B5F6',
    400: '#42A5F5',
    500: '#2980B9',  // Base info blue
    600: '#1E88E5',
    700: '#1976D2',
    800: '#1565C0',
    900: '#0D47A1',
  },

  // Accent - Gold
  gold: {
    50: '#FFF9E6',
    100: '#FFF0CC',
    200: '#FFE7B3',
    300: '#FFDE99',
    400: '#FFD580',
    500: '#F4B942',  // Base celebration gold
    600: '#F39C12',
    700: '#E67E22',
    800: '#D35400',
    900: '#BA4A00',
  },

  // Accent - Peach
  peach: {
    50: '#FFF3ED',
    100: '#FFE5D6',
    200: '#FFD8BF',
    300: '#FFCAA8',
    400: '#FFBC91',
    500: '#FFB088',  // Base warm peach
    600: '#FF9A6C',
    700: '#FF8450',
    800: '#FF6E34',
    900: '#E65100',
  },

  // Data Visualization - Purple
  purple: {
    50: '#F3E5F5',
    100: '#E1BEE7',
    200: '#CE93D8',
    300: '#BA68C8',
    400: '#AB47BC',
    500: '#9B59B6',  // Base purple
    600: '#8E44AD',
    700: '#7B1FA2',
    800: '#6A1B9A',
    900: '#4A148C',
  },

  // Data Visualization - Teal
  teal: {
    50: '#E0F2F1',
    100: '#B2DFDB',
    200: '#80CBC4',
    300: '#4DB6AC',
    400: '#26A69A',
    500: '#16A085',  // Base teal
    600: '#00897B',
    700: '#00796B',
    800: '#00695C',
    900: '#004D40',
  },

  // Data Visualization - Yellow
  yellow: {
    50: '#FFFDE7',
    100: '#FFF9C4',
    200: '#FFF59D',
    300: '#FFF176',
    400: '#FFEE58',
    500: '#F39C12',  // Base yellow
    600: '#FDD835',
    700: '#FBC02D',
    800: '#F9A825',
    900: '#F57F17',
  },

  // Data Visualization - Pink
  pink: {
    50: '#FCE4EC',
    100: '#F8BBD0',
    200: '#F48FB1',
    300: '#F06292',
    400: '#EC407A',
    500: '#E91E63',  // Base pink
    600: '#D81B60',
    700: '#C2185B',
    800: '#AD1457',
    900: '#880E4F',
  },

  // Data Visualization - Cyan
  cyan: {
    50: '#E0F7FA',
    100: '#B2EBF2',
    200: '#80DEEA',
    300: '#4DD0E1',
    400: '#26C6DA',
    500: '#3498DB',  // Base cyan
    600: '#00ACC1',
    700: '#0097A7',
    800: '#00838F',
    900: '#006064',
  },

  // Data Visualization - Lime
  lime: {
    50: '#F1F8E9',
    100: '#DCEDC8',
    200: '#C5E1A5',
    300: '#AED581',
    400: '#9CCC65',
    500: '#2ECC71',  // Base lime
    600: '#7CB342',
    700: '#689F38',
    800: '#558B2F',
    900: '#33691E',
  },
};
```

### Tier 2: Semantic Tokens (Usage-Based)
**What they DO** - Token names describe their purpose and usage

```typescript
export const semantic = {
  // TEXT COLORS
  text: {
    primary: primitives.neutral[700],      // Main body text, headings (deepNavy)
    secondary: primitives.neutral[600],    // Secondary text (slate)
    tertiary: primitives.neutral[500],     // De-emphasized text (gray)
    disabled: primitives.neutral[400],     // Disabled text (grayLight)
    placeholder: primitives.neutral[300],  // Placeholder text (grayLighter)
    inverse: primitives.neutral[0],        // Text on dark backgrounds (white)
    brand: primitives.blue[500],           // Brand-colored text
    link: primitives.blue[500],            // Links
    linkHover: primitives.blue[600],       // Link hover state
  },

  // SURFACE/BACKGROUND COLORS
  surface: {
    page: primitives.neutral[50],          // Main page background (bgPage)
    default: primitives.neutral[0],        // Default surface/card background (white)
    elevated: primitives.neutral[100],     // Elevated surface (bgSoft)
    hover: primitives.neutral[100],        // Hover state background
    pressed: primitives.neutral[200],      // Pressed state background
    selected: primitives.blue[50],         // Selected state background
    disabled: primitives.neutral[100],     // Disabled surface background
    overlay: 'rgba(26, 43, 61, 0.6)',     // Modal/overlay backdrop
  },

  // BORDER COLORS
  border: {
    default: primitives.neutral[200],      // Default borders (border)
    strong: primitives.neutral[300],       // Emphasized borders
    subtle: primitives.neutral[100],       // De-emphasized borders
    brand: primitives.blue[500],           // Brand-colored borders
    disabled: primitives.neutral[200],     // Disabled borders
    focus: primitives.blue[500],           // Focus state borders
    error: primitives.red[500],            // Error state borders
  },

  // ACTION/INTERACTIVE COLORS (buttons, links, interactive elements)
  action: {
    // Primary actions
    primary: primitives.blue[500],
    primaryHover: primitives.blue[600],
    primaryActive: primitives.blue[700],
    primaryDisabled: primitives.neutral[300],
    primarySubtle: primitives.blue[50],
    primarySubtleHover: primitives.blue[100],

    // Secondary actions
    secondary: primitives.neutral[600],
    secondaryHover: primitives.neutral[700],
    secondaryActive: primitives.neutral[800],

    // Tertiary/Ghost actions
    tertiary: 'transparent',
    tertiaryHover: primitives.neutral[100],
    tertiaryActive: primitives.neutral[200],
  },

  // FEEDBACK/STATUS COLORS
  feedback: {
    // Success
    success: primitives.green[500],
    successSubtle: primitives.green[50],
    successBorder: primitives.green[500],
    successText: primitives.green[700],

    // Warning
    warning: primitives.orange[500],
    warningSubtle: primitives.orange[50],
    warningBorder: primitives.orange[500],
    warningText: primitives.orange[800],

    // Error
    error: primitives.red[500],
    errorSubtle: primitives.red[50],
    errorBorder: primitives.red[500],
    errorText: primitives.red[700],

    // Info
    info: primitives.lightBlue[500],
    infoSubtle: primitives.lightBlue[50],
    infoBorder: primitives.lightBlue[500],
    infoText: primitives.lightBlue[700],
  },

  // ACCENT COLORS (use sparingly for celebration, emphasis)
  accent: {
    gold: primitives.gold[500],
    goldSubtle: primitives.gold[50],
    peach: primitives.peach[500],
    peachSubtle: primitives.peach[50],
  },

  // GRADIENTS
  gradient: {
    primary: `linear-gradient(90deg, ${primitives.blue[500]} 0%, ${primitives.blue[300]} 100%)`,
    chart: {
      primary: `linear-gradient(180deg, ${primitives.blue[500]} 0%, ${primitives.blue[300]} 100%)`,
      secondary: `linear-gradient(180deg, ${primitives.peach[500]} 0%, ${primitives.peach[600]} 100%)`,
      tertiary: `linear-gradient(180deg, ${primitives.purple[300]} 0%, ${primitives.purple[500]} 100%)`,
    },
  },

  // DATA VISUALIZATION
  dataViz: {
    // Categorical (distinct colors for different categories)
    categorical: [
      primitives.blue[500],     // Primary brand
      primitives.orange[500],   // Warning
      primitives.green[500],    // Success
      primitives.purple[500],   // Purple
      primitives.teal[500],     // Teal
      primitives.red[500],      // Error
      primitives.yellow[500],   // Yellow
      primitives.pink[500],     // Pink
      primitives.cyan[500],     // Cyan
      primitives.lime[500],     // Lime
    ],

    // Sequential (for ordered/quantitative data)
    sequential: {
      blue: [
        primitives.blue[50],
        primitives.blue[100],
        primitives.blue[200],
        primitives.blue[300],
        primitives.blue[400],
        primitives.blue[500],
        primitives.blue[600],
        primitives.blue[700],
        primitives.blue[800],
        primitives.blue[900],
      ],
      green: [
        primitives.green[50],
        primitives.green[100],
        primitives.green[200],
        primitives.green[300],
        primitives.green[400],
        primitives.green[500],
        primitives.green[600],
        primitives.green[700],
        primitives.green[800],
        primitives.green[900],
      ],
    },

    // Diverging (for data with meaningful midpoint)
    diverging: {
      redBlue: [
        primitives.red[500],
        primitives.red[400],
        primitives.red[300],
        primitives.red[200],
        primitives.red[50],
        primitives.blue[50],
        primitives.blue[200],
        primitives.blue[300],
        primitives.blue[400],
        primitives.blue[500],
      ],
    },
  },
};
```

## Benefits of This Structure

### 1. Clear Separation of Concerns
- **Primitives**: Only change when adding/updating base colors
- **Semantic**: Only change when usage patterns change
- Easy to maintain and scale

### 2. Self-Documenting
- Token names clearly indicate usage: `text.primary`, `surface.elevated`, `feedback.success`
- No need to remember what "deepNavy" is used for

### 3. Flexibility
- Can rebrand by changing primitive values
- Semantic tokens automatically update
- Example: Change `primitives.blue[500]` and all primary actions, brand text, etc. update

### 4. Platform-Agnostic
- Works in Figma, code, documentation
- Same naming across all platforms
- Easier handoff between design and development

### 5. Scalability
- Easy to add new primitives (e.g., purple[50-900])
- Easy to add new semantic tokens (e.g., `text.onBrand`)
- Supports theming and dark mode

## Migration Path

### Phase 1: Add Primitives Layer
Keep existing colors, add primitives alongside

### Phase 2: Create Semantic Layer
Build semantic tokens that reference either primitives or existing colors

### Phase 3: Update Components
Gradually update components to use semantic tokens

### Phase 4: Deprecate Old Structure
Once all components use new tokens, deprecate old structure

## Naming Conventions

### Primitives
- **Pattern**: `color-scale`
- **Scale**: 0-900 (0=white, 50=lightest, 500=base, 900=darkest)
- **Examples**: `blue-500`, `neutral-700`, `green-50`

### Semantic Tokens
- **Pattern**: `category-variant-state`
- **Categories**: text, surface, border, action, feedback, accent, dataViz
- **Examples**:
  - `text-primary` (category-variant)
  - `action-primaryHover` (category-variant-state)
  - `feedback-errorSubtle` (category-variant-modifier)

## Color Harmony & Accessibility

### Current Colors Analysis
✅ **Good contrast**: Most text colors meet WCAG AA standards
✅ **Colorblind-friendly**: Categorical palette distinguishable
✅ **Brand consistency**: Blue primary well-established

### Recommendations
1. Ensure all text colors meet 4.5:1 contrast ratio (WCAG AA)
2. Use neutral-700 for primary text on white (14.2:1 ratio ✅)
3. Avoid using color alone to convey information
4. Test categorical palette with colorblind simulators

## Usage Examples

### Before (Current)
```typescript
// Not clear what this color is for
backgroundColor: colors.neutral.deepNavy
color: colors.neutral.grayLighter
```

### After (Proposed)
```typescript
// Clear semantic meaning
backgroundColor: semantic.text.primary      // Deep navy used for text
color: semantic.text.placeholder           // Light gray for placeholders
```

## TypeScript Support
Both systems remain strongly typed:

```typescript
type PrimitiveColors = typeof primitives;
type SemanticColors = typeof semantic;
```

## Next Steps
1. Review and approve structure
2. Set up Figma variables (see Figma guide)
3. Implement in codebase
4. Update documentation
5. Migrate components gradually
