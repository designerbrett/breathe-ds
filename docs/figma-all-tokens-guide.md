# Complete Figma Variables Setup - All Tokens

## Overview

This guide covers setting up **all** Breathe Design System tokens in Figma, not just colors. We'll create variable collections for every token category.

## Collections to Create

1. **Colors** - Foundation + Semantic
2. **Typography** - Font families, sizes, weights, line heights
3. **Spacing** - External (8px) and Internal (4px) grids
4. **Border Width** - Thin, medium, thick
5. **Border Radius** - 0 to full rounding
6. **Height** - Component heights
7. **Shadows** - Elevation levels
8. **Opacity** - Transparency values
9. **Animation** - Duration and easing

---

## 1. Color Variables (Already Covered)

See the main [Figma Variables Guide](./figma-variables-guide.md) for detailed color setup instructions.

**Quick summary:**
- Collection: "Foundation" (color scales)
- Collection: "Tokens" (semantic colors)
- Variable type: **Color**

---

## 2. Typography Variables

### Collection: Typography

Create number and string variables for typography.

#### Font Families (String variables)

```
typography/family/heading     → "Lexend"
typography/family/body        → "Inter"
typography/family/mono        → "Courier New"
```

**Note:** Figma doesn't directly apply font family variables to text. Use these as reference or in plugins.

#### Font Sizes (Number variables)

**External (Mobile):**
```
typography/external/size/h1          → 40
typography/external/size/h2          → 32
typography/external/size/h3          → 24
typography/external/size/bodyLarge   → 18
typography/external/size/body        → 17
typography/external/size/bodySmall   → 15
typography/external/size/button      → 17
typography/external/size/caption     → 13
```

**Internal (Desktop):**
```
typography/internal/size/300   → 12
typography/internal/size/325   → 13
typography/internal/size/350   → 14
typography/internal/size/400   → 16
typography/internal/size/500   → 20
typography/internal/size/600   → 24
```

#### Font Weights (Number variables)

```
typography/weight/light      → 300
typography/weight/regular    → 400
typography/weight/medium     → 500
typography/weight/semibold   → 600
typography/weight/bold       → 700
```

#### Line Heights (Number variables)

**External:**
```
typography/external/lineHeight/h1          → 48
typography/external/lineHeight/h2          → 42
typography/external/lineHeight/h3          → 34
typography/external/lineHeight/body        → 27
```

**Internal:**
```
typography/internal/lineHeight/300   → 16
typography/internal/lineHeight/350   → 20
typography/internal/lineHeight/400   → 24
typography/internal/lineHeight/500   → 24
typography/internal/lineHeight/600   → 28
```

**Scopes:** Set to appropriate text scopes (FONT_SIZE, LINE_HEIGHT, FONT_WEIGHT)

---

## 3. Spacing Variables

### Collection: Spacing

Create number variables for spacing values.

#### External Mode (8px base)

```
spacing/external/xxs    → 4
spacing/external/xs     → 8
spacing/external/sm     → 12
spacing/external/md     → 16
spacing/external/lg     → 24
spacing/external/xl     → 32
spacing/external/xxl    → 48
spacing/external/xxxl   → 64
```

#### Internal Mode (4px base)

```
spacing/internal/100    → 4
spacing/internal/200    → 8
spacing/internal/300    → 12
spacing/internal/400    → 16
spacing/internal/500    → 20
spacing/internal/600    → 24
spacing/internal/800    → 32
spacing/internal/1000   → 40
spacing/internal/1200   → 48
spacing/internal/1600   → 64
```

**Scopes:** GAP, STROKE (for borders), MIN_WIDTH, MAX_WIDTH, MIN_HEIGHT, MAX_HEIGHT

**Usage in Figma:**
- Apply to padding: Use Auto Layout padding
- Apply to gaps: Use Auto Layout gap
- Apply to margins: Use spacing between elements

---

## 4. Border Width Variables

### Collection: Border

Create number variables for border widths.

```
border/width/none      → 0
border/width/thin      → 1
border/width/medium    → 2
border/width/thick     → 3
border/width/heavy     → 4
```

**Semantic:**
```
border/width/default   → {border/width/thin}     (alias to 1)
border/width/input     → {border/width/thin}     (alias to 1)
border/width/focus     → {border/width/medium}   (alias to 2)
border/width/divider   → {border/width/thin}     (alias to 1)
```

**Scopes:** STROKE_WEIGHT

---

## 5. Border Radius Variables

### Collection: Border Radius

Create number variables for radius values.

```
radius/0      → 0
radius/2      → 2
radius/4      → 4
radius/6      → 6
radius/8      → 8
radius/12     → 12
radius/16     → 16
radius/20     → 20
radius/24     → 24
radius/full   → 9999
```

**Semantic (with modes for External/Internal):**

Create with two modes: "External" and "Internal"

```
                        External    Internal
radius/button           12          8
radius/input            12          6
radius/card             20          12
radius/dialog           24          16
radius/badge            9999        9999
radius/avatar           9999        9999
radius/chip             16          16
radius/tooltip          8           8
```

**Scopes:** CORNER_RADIUS

---

## 6. Height Variables

### Collection: Height

Create number variables for component heights.

#### Foundation Heights
```
height/0       → 0
height/100     → 24
height/200     → 32
height/300     → 36
height/400     → 40
height/500     → 44
height/600     → 48
height/700     → 56
height/800     → 64
height/900     → 72
height/1000    → 80
```

#### Semantic Heights (with modes)

Create with two modes: "External" and "Internal"

```
                                External    Internal
height/button/small             44          36
height/button/medium            44          44
height/button/large             56          36
height/input/small              44          36
height/input/medium             44          44
height/input/large              56          36
height/touchTarget/minimum      44          44
height/touchTarget/comfortable  56          44
height/header                   64          64
height/tabBar                   48          48
```

**Scopes:** MIN_HEIGHT, MAX_HEIGHT

---

## 7. Shadow Variables

### Collection: Shadows

Shadows are tricky - Figma has built-in shadow effects, but variables work differently.

**Option A: Use Figma's Effect Styles (Recommended)**

Instead of variables, create **Effect Styles** for shadows:

1. Create a rectangle
2. Apply shadow (Effects → Drop Shadow)
3. Configure shadow values
4. Click the style icon → Create style
5. Name it following pattern: `shadow/elevation/0`, `shadow/elevation/2`, etc.

**Shadow values:**

```
shadow/elevation/0     → None
shadow/elevation/1     → X:0, Y:1, Blur:2, Spread:0, Color:#1A2B3D at 4% opacity
shadow/elevation/2     → X:0, Y:1, Blur:3, Spread:0, Color:#1A2B3D at 6% opacity
shadow/elevation/4     → X:0, Y:2, Blur:8, Spread:0, Color:#1A2B3D at 8% opacity
shadow/elevation/8     → X:0, Y:4, Blur:12, Spread:0, Color:#1A2B3D at 10% opacity
shadow/elevation/16    → X:0, Y:8, Blur:24, Spread:0, Color:#1A2B3D at 12% opacity
```

**Component Shadows:**
```
shadow/card/external   → Same as elevation/4
shadow/card/internal   → Same as elevation/2
shadow/modal           → Same as elevation/16
shadow/dropdown        → Same as elevation/8
```

**Focus Shadows:**
```
shadow/focus           → X:0, Y:0, Blur:0, Spread:3, Color:#2B79B9 at 25% opacity
shadow/focusError      → X:0, Y:0, Blur:0, Spread:3, Color:#E74C3C at 25% opacity
shadow/focusSuccess    → X:0, Y:0, Blur:0, Spread:3, Color:#27AE60 at 25% opacity
```

**Option B: String Variables (Advanced)**

If using plugins or design token tools:

```
shadow/elevation/4   → "0 2px 8px rgba(26, 43, 61, 0.08)"
```

Variable type: **String**

---

## 8. Opacity Variables

### Collection: Opacity

Create number variables for opacity values (as decimals 0-1).

```
opacity/0      → 0
opacity/5      → 0.05
opacity/10     → 0.1
opacity/20     → 0.2
opacity/30     → 0.3
opacity/40     → 0.4
opacity/50     → 0.5
opacity/60     → 0.6
opacity/70     → 0.7
opacity/80     → 0.8
opacity/90     → 0.9
opacity/100    → 1
```

**Semantic:**
```
opacity/disabled        → {opacity/40}
opacity/hover           → {opacity/90}
opacity/active          → {opacity/80}
opacity/overlay         → {opacity/60}
opacity/overlayLight    → {opacity/40}
opacity/overlayHeavy    → {opacity/80}
opacity/divider         → {opacity/10}
opacity/loading         → {opacity/50}
```

**Scopes:** OPACITY

---

## 9. Animation Variables

### Collection: Animation

Create number variables for animation durations (in milliseconds).

#### Duration
```
animation/duration/instant   → 0
animation/duration/fast      → 150
animation/duration/normal    → 250
animation/duration/slow      → 350
animation/duration/slower    → 500
animation/duration/slowest   → 700
```

#### Easing (String variables)

```
animation/easing/linear      → "linear"
animation/easing/easeIn      → "ease-in"
animation/easing/easeOut     → "ease-out"
animation/easing/easeInOut   → "ease-in-out"
animation/easing/standard    → "cubic-bezier(0.4, 0.0, 0.2, 1)"
```

**Note:** Figma doesn't directly support transition timing, but these are useful for documentation and plugin use.

---

## Setting Up Modes

Some collections benefit from modes for External vs Internal themes:

### Collections with Modes:

1. **Typography** - External / Internal modes
2. **Spacing** - External / Internal modes
3. **Border Radius** (semantic) - External / Internal modes
4. **Height** (semantic) - External / Internal modes

### How to Add Modes:

1. Open Variables panel
2. Select collection
3. Click mode dropdown (default: "Mode 1")
4. Click "+" to add mode
5. Rename modes:
   - Mode 1 → "External"
   - Mode 2 → "Internal"
6. Set different values per mode

---

## Variable Organization Tips

### Naming Convention

Use `/` separators for hierarchy:
```
category/subcategory/variant
```

Examples:
- `spacing/external/md`
- `typography/family/heading`
- `border/radius/button`
- `height/button/large`

### Descriptions

Add descriptions to important variables:
- "External: Mobile/patient-facing (65+ audience)"
- "Internal: Desktop/admin tools"
- "WCAG minimum touch target size"
- "Aliases to foundation/blue/500"

### Scopes

Set appropriate scopes so Figma suggests the right variables:
- **Text scopes:** FONT_SIZE, FONT_WEIGHT, LINE_HEIGHT
- **Layout scopes:** GAP, MIN_WIDTH, MAX_WIDTH, MIN_HEIGHT, MAX_HEIGHT
- **Visual scopes:** CORNER_RADIUS, OPACITY, STROKE_WEIGHT
- **Color scopes:** ALL_FILLS, ALL_STROKES, TEXT_FILL, etc.

---

## Complete Setup Checklist

- [ ] **Colors**
  - [ ] Foundation collection (180+ color scales)
  - [ ] Tokens collection (60+ semantic colors)
  - [ ] Set up color aliasing

- [ ] **Typography**
  - [ ] Font families (string variables)
  - [ ] Font sizes with External/Internal modes
  - [ ] Font weights
  - [ ] Line heights with External/Internal modes

- [ ] **Spacing**
  - [ ] External spacing (8px grid)
  - [ ] Internal spacing (4px grid)
  - [ ] Set up spacing modes

- [ ] **Border Width**
  - [ ] Foundation widths (0-4px)
  - [ ] Semantic widths with aliases

- [ ] **Border Radius**
  - [ ] Foundation radius (0-9999)
  - [ ] Semantic radius with External/Internal modes

- [ ] **Height**
  - [ ] Foundation heights (0-1000)
  - [ ] Component heights with External/Internal modes
  - [ ] Touch target sizes

- [ ] **Shadows**
  - [ ] Create Effect Styles for elevation levels
  - [ ] Create Focus shadow styles
  - [ ] Create Component shadow styles

- [ ] **Opacity**
  - [ ] Foundation opacity values (0-1)
  - [ ] Semantic opacity with aliases

- [ ] **Animation**
  - [ ] Duration values (milliseconds)
  - [ ] Easing function strings

- [ ] **Documentation**
  - [ ] Create a "Design Tokens" page in Figma
  - [ ] Document all variables with examples
  - [ ] Show usage guidelines

---

## Using Variables in Components

### Button Component Example

1. Create button component with variants (default, hover, pressed, disabled)
2. Apply variables to each variant:

**Default state:**
- Fill: `{tokens/action/primary}` (color variable)
- Text: `{tokens/text/inverse}` (color variable)
- Corner radius: `{radius/button}` (number variable, mode-aware)
- Padding: `{spacing/external/md}` (number variable)
- Min height: `{height/button/large}` (number variable, mode-aware)
- Stroke: `{border/width/default}` (number variable)

**Hover state:**
- Fill: `{tokens/action/primaryHover}`

**Disabled state:**
- Fill: `{tokens/action/primaryDisabled}`
- Text: `{tokens/text/disabled}`
- Opacity: `{opacity/disabled}`

### Card Component Example

- Fill: `{tokens/surface/default}`
- Stroke: `1px {tokens/border/default}`
- Corner radius: `{radius/card}` (mode-aware)
- Padding: `{spacing/external/lg}`
- Drop shadow: Apply `shadow/card` effect style

---

## Publishing & Syncing

### Publishing Variables

1. Open Variables panel
2. Click "Publish"
3. Add change description
4. Publish to make available to other files

### Enabling in Other Files

1. Open file where you want to use variables
2. Assets panel → Libraries tab
3. Enable your library
4. Variables will be available in variable picker

### Keeping in Sync

**From Code → Figma:**
1. Update tokens in codebase
2. Export to JSON (for colors)
3. Re-import using plugin (updates existing variables)
4. Manually update other variable types
5. Publish updates

**From Figma → Code:**
- Use "Export Variables" plugin
- Transform exported JSON to your token format
- Update codebase

---

## Tips & Tricks

### Managing Large Collections

- Use search/filter in Variables panel
- Group related variables with `/` separators
- Hide variables you don't use frequently
- Create separate collections for different concerns

### Performance

- Figma handles 500+ variables well
- If performance degrades, split into multiple libraries
- Only enable libraries you're actively using

### Collaboration

- Document variable usage in component descriptions
- Create a "Token Guide" page in your design file
- Add comments to complex variable setups
- Share variable naming conventions with team

### Common Issues

**Variables not showing in picker?**
- Check scopes are set correctly
- Make sure library is enabled
- Try refreshing Figma

**Can't alias to another collection?**
- Both collections must be in same file
- Use string variables for cross-collection refs (limitation)

**Mode switching not working?**
- Component must support multiple modes
- Set modes at component level, not instance level

---

## Resources

- [Figma Variables Documentation](https://help.figma.com/hc/en-us/articles/15339657135383)
- [Export/Import Variables Plugin](https://www.figma.com/community/plugin/1256972111705530093)
- [Design Tokens Format](https://tr.designtokens.org/format/)
- [Breathe DS Token Documentation](./design-tokens-overview.md)

---

## Summary

You now have a complete setup covering:

✅ **Colors** - 240+ variables (foundation + semantic)
✅ **Typography** - 50+ variables (families, sizes, weights, line heights)
✅ **Spacing** - 18 variables (external + internal grids)
✅ **Border Width** - 9 variables (foundation + semantic)
✅ **Border Radius** - 19 variables (foundation + semantic, mode-aware)
✅ **Height** - 21+ variables (foundation + semantic, mode-aware)
✅ **Shadows** - 15+ effect styles (elevation + focus + components)
✅ **Opacity** - 20+ variables (foundation + semantic)
✅ **Animation** - 11 variables (duration + easing)

**Total: 400+ design tokens** fully integrated in Figma! 🎉
