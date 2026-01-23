# Figma Variables Setup Guide - Breathe Design System

## Overview
This comprehensive guide walks through setting up all Breathe Design System tokens as Figma variables, including colors, typography, spacing, borders, height, shadows, and more.

## Quick Start: Import from JSON

**Fastest method for colors:** Import pre-generated JSON files using the [Export/Import Variables plugin](https://www.figma.com/community/plugin/1256972111705530093).

The JSON files are located in `figma-exports/`:
- `foundation-colors.json` - All foundation color scales
- `semantic-tokens.json` - All semantic color tokens

See [figma-exports/README.md](../figma-exports/README.md) for detailed import instructions.

**Note:** Other token types (spacing, typography, etc.) need to be set up manually as Figma variables support different types.

---

## Figma Variable Types

Figma supports 4 variable types:
- **Color** - For colors (hex, RGB, RGBA)
- **Number** - For dimensions, spacing, opacity, etc.
- **String** - For font names, text values
- **Boolean** - For true/false states

Our tokens map to these types:
- Colors → Color variables
- Spacing, Height, Border Width, Border Radius → Number variables
- Shadows → String variables (CSS box-shadow values)
- Typography (font-family) → String variables
- Typography (font-size, line-height, font-weight) → Number variables
- Animation (duration) → Number variables
- Opacity → Number variables

---

## 📖 Complete Token Setup Guide

**This guide covers color variables in detail.**

For comprehensive setup of ALL token types (typography, spacing, borders, height, shadows, opacity, animation), see:

👉 **[Complete Figma Variables Setup - All Tokens](./figma-all-tokens-guide.md)**

That guide includes:
- Typography (font families, sizes, weights, line heights)
- Spacing (8px and 4px grids with modes)
- Border Width & Radius (with External/Internal modes)
- Height (component heights, touch targets)
- Shadows (effect styles for elevation)
- Opacity (transparency values)
- Animation (duration and easing)

---

## Why Use Figma Variables?

Variables in Figma allow you to:
- Create a single source of truth for design tokens
- Reference foundation values in semantic tokens (aliasing)
- Easily rebrand by changing foundation values
- Support multiple themes/modes (External vs Internal)
- Sync design tokens between Figma and code
- Maintain consistency across files

## Two-Tier Variable Structure (Colors)

### Tier 1: Foundation Variables
Raw color values - the "raw ingredients"

### Tier 2: Semantic Variables
Reference foundation colors and describe purpose - the "recipes"

## Color Setup - Step-by-Step

### Step 1: Create Variable Collections

You'll create **3 collections**:

1. **Primitives** - Foundation colors (color scales)
2. **Semantic** - Usage-based tokens
3. **Themes** - Theme-specific overrides (External/Internal)

#### Create Collections:
1. Open your Figma file
2. Click on the variables icon (left sidebar) or press `Ctrl/Cmd + Shift + V`
3. Click "Create collection"
4. Name it "Primitives"
5. Repeat to create "Semantic" and "Themes"

### Step 2: Set Up Primitive Variables

#### Collection: Primitives

Create color groups using the `/` separator for organization:

**Blue Scale:**
```
blue/50   → #E8F2FA
blue/100  → #C1DCEF
blue/200  → #9AC6E5
blue/300  → #73B0DA
blue/400  → #4C9AD0
blue/500  → #2B79B9  ← Base Kivo Blue
blue/600  → #1F5A8E
blue/700  → #153F63
blue/800  → #0C2A42
blue/900  → #051421
```

**Neutral Scale:**
```
neutral/0    → #FFFFFF
neutral/50   → #FAFBFC
neutral/100  → #F8FAFB
neutral/200  → #E8EDF2
neutral/300  → #A8B5C2
neutral/400  → #7B8A99
neutral/500  → #5A6C7D
neutral/600  → #2D4A5F
neutral/700  → #1A2B3D
neutral/800  → #121A24
```

**Green Scale (Success):**
```
green/50   → #E8F8F5
green/100  → #C1E8DC
green/200  → #9AD8C3
green/300  → #73C8AA
green/400  → #4CB891
green/500  → #27AE60  ← Base success
green/600  → #1E8449
green/700  → #155A32
green/800  → #0C301B
green/900  → #051810
```

**Orange Scale (Warning):**
```
orange/50   → #FFF4E6
orange/100  → #FFE5CC
orange/200  → #FFD6B3
orange/300  → #FFC799
orange/400  → #FFB880
orange/500  → #E67E22  ← Base warning
orange/600  → #CC6619
orange/700  → #B34E11
orange/800  → #993608
orange/900  → #661E00
```

**Red Scale (Error):**
```
red/50   → #FFEBEE
red/100  → #FFCDD2
red/200  → #EF9A9A
red/300  → #E57373
red/400  → #EF5350
red/500  → #E74C3C  ← Base error
red/600  → #D32F2F
red/700  → #C62828
red/800  → #B71C1C
red/900  → #8B0000
```

**Light Blue Scale (Info):**
```
lightBlue/50   → #E3F2FD
lightBlue/100  → #BBDEFB
lightBlue/200  → #90CAF9
lightBlue/300  → #64B5F6
lightBlue/400  → #42A5F5
lightBlue/500  → #2980B9  ← Base info
lightBlue/600  → #1E88E5
lightBlue/700  → #1976D2
lightBlue/800  → #1565C0
lightBlue/900  → #0D47A1
```

**Gold Scale (Accent):**
```
gold/50   → #FFF9E6
gold/100  → #FFF0CC
gold/200  → #FFE7B3
gold/300  → #FFDE99
gold/400  → #FFD580
gold/500  → #F4B942  ← Base gold
gold/600  → #F39C12
gold/700  → #E67E22
gold/800  → #D35400
gold/900  → #BA4A00
```

**Peach Scale (Accent):**
```
peach/50   → #FFF3ED
peach/100  → #FFE5D6
peach/200  → #FFD8BF
peach/300  → #FFCAA8
peach/400  → #FFBC91
peach/500  → #FFB088  ← Base peach
peach/600  → #FF9A6C
peach/700  → #FF8450
peach/800  → #FF6E34
peach/900  → #E65100
```

**Data Viz Colors (Purple, Teal, Yellow, Pink, Cyan, Lime):**
```
purple/500  → #9B59B6
teal/500    → #16A085
yellow/500  → #F39C12
pink/500    → #E91E63
cyan/500    → #3498DB
lime/500    → #2ECC71
```

#### Tips for Creating Primitives:
1. Use the `/` separator to create groups (Figma will auto-organize)
2. Add descriptions for important colors (e.g., "Base Kivo Blue - Primary brand color")
3. Set scoping to "All scopes" for primitives
4. Keep primitives in a separate collection to prevent accidental use

### Step 3: Set Up Semantic Variables

#### Collection: Semantic

Now create semantic variables that **reference** your primitives:

**Text Colors:**
```
text/primary      → {blue.500}      (or {neutral.700} for dark text)
text/secondary    → {neutral.600}
text/tertiary     → {neutral.500}
text/disabled     → {neutral.400}
text/placeholder  → {neutral.300}
text/inverse      → {neutral.0}
text/brand        → {blue.500}
text/link         → {blue.500}
text/linkHover    → {blue.600}
```

**Surface/Background Colors:**
```
surface/page              → {neutral.50}
surface/default           → {neutral.0}
surface/elevated          → {neutral.100}
surface/hover             → {neutral.100}
surface/pressed           → {neutral.200}
surface/selected          → {blue.50}
surface/disabled          → {neutral.100}
surface/overlay           → rgba(26,43,61,0.6) ← Note: may need hex approximation
```

**Border Colors:**
```
border/default   → {neutral.200}
border/strong    → {neutral.300}
border/subtle    → {neutral.100}
border/brand     → {blue.500}
border/disabled  → {neutral.200}
border/focus     → {blue.500}
border/error     → {red.500}
```

**Action Colors (Buttons, Interactive):**
```
action/primary                → {blue.500}
action/primaryHover           → {blue.600}
action/primaryActive          → {blue.700}
action/primaryDisabled        → {neutral.300}
action/primarySubtle          → {blue.50}
action/primarySubtleHover     → {blue.100}
action/secondary              → {neutral.600}
action/secondaryHover         → {neutral.700}
action/secondaryActive        → {neutral.800}
action/tertiary               → transparent (or #FFFFFF00)
action/tertiaryHover          → {neutral.100}
action/tertiaryActive         → {neutral.200}
```

**Feedback Colors:**
```
feedback/success          → {green.500}
feedback/successSubtle    → {green.50}
feedback/successBorder    → {green.500}
feedback/successText      → {green.700}

feedback/warning          → {orange.500}
feedback/warningSubtle    → {orange.50}
feedback/warningBorder    → {orange.500}
feedback/warningText      → {orange.800}

feedback/error            → {red.500}
feedback/errorSubtle      → {red.50}
feedback/errorBorder      → {red.500}
feedback/errorText        → {red.700}

feedback/info             → {lightBlue.500}
feedback/infoSubtle       → {lightBlue.50}
feedback/infoBorder       → {lightBlue.500}
feedback/infoText         → {lightBlue.700}
```

**Accent Colors:**
```
accent/gold         → {gold.500}
accent/goldSubtle   → {gold.50}
accent/peach        → {peach.500}
accent/peachSubtle  → {peach.50}
```

**Data Visualization:**
```
dataViz/categorical/1   → {blue.500}
dataViz/categorical/2   → {orange.500}
dataViz/categorical/3   → {green.500}
dataViz/categorical/4   → {purple.500}
dataViz/categorical/5   → {teal.500}
dataViz/categorical/6   → {red.500}
dataViz/categorical/7   → {yellow.500}
dataViz/categorical/8   → {pink.500}
dataViz/categorical/9   → {cyan.500}
dataViz/categorical/10  → {lime.500}
```

#### Tips for Creating Semantic Variables:
1. Always reference primitives (use the dropdown to select)
2. Add clear descriptions explaining when to use each token
3. Set appropriate scoping:
   - Text colors: "Text" scope
   - Surface colors: "Fill" and "Stroke" scopes
   - Border colors: "Stroke" scope
4. Group semantically related tokens together

### Step 4: Create Theme Modes (Optional)

If you want separate themes for External (mobile) vs Internal (dashboard):

#### Collection: Themes

1. In your "Semantic" collection, click the mode dropdown
2. Rename "Mode 1" to "External"
3. Add a new mode called "Internal"
4. For each mode, adjust values that differ:

**Example differences:**
```
External Mode:
  surface/page → {neutral.50}  (warmer background)

Internal Mode:
  surface/page → {neutral.0}   (white background)
```

Most tokens will be the same across themes, but you can override specific ones.

### Step 5: Applying Variables in Designs

#### Using Semantic Variables:
1. Select a text layer
2. In the "Fill" property, click the variable icon
3. Search for and select the appropriate token (e.g., `text/primary`)
4. Same for backgrounds: select fill → choose `surface/page`

#### Button Example:
```
Default State:
- Fill: {action.primary}
- Text: {text.inverse}
- Border: {border.brand}

Hover State (create variant):
- Fill: {action.primaryHover}
- Text: {text.inverse}
- Border: {border.brand}

Disabled State:
- Fill: {action.primaryDisabled}
- Text: {text.disabled}
- Border: {border.disabled}
```

### Step 6: Component Best Practices

#### Creating Components with Variables:
1. Always use semantic tokens, never primitives directly
2. Set default state with base tokens (e.g., `action.primary`)
3. Create variants for interactive states (hover, pressed, disabled)
4. Use conditional logic or separate variants for states
5. Document token usage in component descriptions

#### Alert Component Example:
```
Success Alert:
- Background: {feedback.successSubtle}
- Border: {feedback.successBorder}
- Icon: {feedback.success}
- Text: {feedback.successText}

Error Alert:
- Background: {feedback.errorSubtle}
- Border: {feedback.errorBorder}
- Icon: {feedback.error}
- Text: {feedback.errorText}
```

### Step 7: Documentation in Figma

Create a dedicated "Color Tokens" page in your file:

1. **Primitives Section**: Show all primitive color scales
2. **Semantic Section**: Show all semantic tokens with usage examples
3. **Usage Guidelines**: When to use each semantic token
4. **Do's and Don'ts**: Visual examples of correct/incorrect usage

#### Sample Documentation Structure:
```
Page: Color Tokens
├── Primitives
│   ├── Blue Scale (50-900)
│   ├── Neutral Scale (0-800)
│   ├── Status Scales (Green, Orange, Red)
│   └── Accent Scales (Gold, Peach)
├── Semantic Tokens
│   ├── Text Colors (with examples)
│   ├── Surface Colors (with examples)
│   ├── Border Colors (with examples)
│   ├── Action Colors (button examples)
│   └── Feedback Colors (alert examples)
└── Usage Guidelines
    ├── When to use text.primary vs text.secondary
    ├── Surface elevation hierarchy
    └── Status color usage
```

### Step 8: Publishing Variables

Once set up:

1. Click "Publish" in the variables panel
2. Add a descriptive message (e.g., "Initial color token setup - v1.0")
3. Share with your team
4. Other files can enable your library and use the variables

### Step 9: Syncing with Code

To keep Figma and code in sync:

1. **Manual Method**:
   - Export variables as JSON (Figma → Variables → Export)
   - Use a script to convert to your code format

2. **Automated Method** (recommended):
   - Use Figma Tokens plugin or Token Studio
   - Use style-dictionary to transform tokens
   - Set up CI/CD to sync changes

3. **Simple Export Script** (reference):
   ```javascript
   // Figma plugin to export variables
   const variables = figma.variables.getLocalVariables();
   const collections = figma.variables.getLocalVariableCollections();

   // Export as JSON matching your token structure
   ```

## Maintenance & Updates

### Updating Colors:
1. **Primitive change**: Update the primitive value → all semantic tokens auto-update
2. **Semantic change**: Update the reference or add new semantic token
3. **New color needed**: Add to primitives first, then create semantic token

### Version Control:
1. Use Figma's version history for major changes
2. Document changes in changelog
3. Communicate updates to team
4. Update code tokens to match

## Common Pitfalls to Avoid

1. ❌ **Using primitives directly in components**
   - Use semantic tokens instead
   - Makes rebranding/theming impossible

2. ❌ **Creating too many semantic tokens**
   - Start with core set, add as needed
   - Avoid tokens that are only used once

3. ❌ **Inconsistent naming**
   - Follow the established pattern
   - Use `/` for grouping consistently

4. ❌ **Forgetting to scope variables**
   - Set appropriate scopes (text, fill, stroke)
   - Improves usability in the picker

5. ❌ **Not documenting token usage**
   - Add descriptions to variables
   - Create usage examples in your file

## Quick Reference Checklist

- [ ] Created "Primitives" collection
- [ ] Created "Semantic" collection
- [ ] Created all primitive color scales (blue, neutral, green, orange, red, etc.)
- [ ] Created all semantic token groups (text, surface, border, action, feedback)
- [ ] All semantic tokens reference primitives (no raw hex values)
- [ ] Added descriptions to key tokens
- [ ] Set appropriate scopes for each token type
- [ ] Created documentation page with examples
- [ ] Created component examples using semantic tokens
- [ ] Published variables to library
- [ ] Tested in actual designs
- [ ] Synced with code tokens

## Resources

- [Figma Variables Documentation](https://help.figma.com/hc/en-us/articles/15339657135383-Guide-to-variables-in-Figma)
- [Design Tokens Format](https://tr.designtokens.org/format/)
- [Style Dictionary](https://amzn.github.io/style-dictionary/)
- [Token Studio for Figma](https://tokens.studio/)

## Need Help?

Common issues:
- **Can't reference a primitive**: Make sure both collections are in the same file
- **Variable not showing in picker**: Check scoping settings
- **Changes not appearing**: Make sure to publish variable updates
- **Performance issues**: Consider splitting into multiple collections if you have 500+ variables

## Next Steps

1. Set up primitives in Figma
2. Create a few semantic tokens to test
3. Apply to one component as proof of concept
4. Iterate and expand coverage
5. Document and share with team
6. Set up code sync workflow
