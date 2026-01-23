# Figma Variable Import Guide

This folder contains JSON exports of the Breathe Design System color tokens, ready to import into Figma using the **Export/Import Variables** plugin.

## Files

- `foundation-colors.json` - Foundation color scales (raw colors 0-900)
- `semantic-tokens.json` - Semantic tokens (usage-based colors)

## Installation

1. Install the [Export/Import Variables](https://www.figma.com/community/plugin/1256972111705530093) plugin in Figma
2. Open your Figma design file

## Import Steps

### Step 1: Import Foundation Colors

1. Open the **Export/Import Variables** plugin
2. Click **Import** (or drag & drop)
3. Select `foundation-colors.json`
4. Click **Import**
5. A new "Foundation" collection will be created with all color scales

### Step 2: Import Semantic Tokens

1. Keep the plugin open (or reopen it)
2. Click **Import** again
3. Select `semantic-tokens.json`
4. Click **Import**
5. A new "Tokens" collection will be created with all semantic tokens

## Important: Setting Up Variable Aliases

**Due to a plugin limitation**, cross-collection variable references are not preserved during import. This means semantic tokens will have raw hex values instead of references to foundation colors.

### Recommended: Manually Set Up Aliases

After importing both collections, you should manually connect semantic tokens to foundation colors:

1. Open the **Variables** panel in Figma
2. Navigate to the "Tokens" collection
3. For each semantic token:
   - Click on the color value
   - Change from the hex code to reference the appropriate foundation color
   - The description field tells you which foundation color to reference

**Example:**
- `text/primary` currently shows `#1A2B3D`
- Description says: "References: foundation.neutral.700"
- Click the value → Select variable → Choose `neutral/700` from Foundation collection
- Now `text/primary` properly references `foundation.neutral.700`

This ensures that:
- Changing a foundation color updates all semantic tokens that use it
- Your design system stays in sync
- Rebranding is easy (just update foundation colors)

### Alternative: Single Collection Setup

If you prefer not to set up aliases manually, you can use just the `semantic-tokens.json` file with raw hex values. However, you'll lose the benefit of having changes to foundation colors automatically update semantic tokens.

## Variable Scopes

The JSON files include proper scoping for each variable:

- **Text tokens**: `TEXT_FILL` scope
- **Surface tokens**: `FRAME_FILL`, `SHAPE_FILL` scopes
- **Border tokens**: `STROKE_COLOR` scope
- **Multi-purpose tokens**: `ALL_SCOPES`

This helps Figma suggest the right variables when styling elements.

## Updating Variables

To update variables in Figma after making changes to the design system:

1. Export new JSON files from the codebase
2. Open Export/Import Variables plugin
3. Import the JSON file
4. Choose **"Update existing collection"** when prompted
5. The plugin will match variables by name and update their values

## Tips

### Do's
✅ Import foundation colors first, then semantic tokens
✅ Set up variable aliases after import for maintainability
✅ Use semantic tokens in your components (not foundation)
✅ Add descriptions to variables in Figma for clarity

### Don'ts
❌ Don't use foundation colors directly in components
❌ Don't manually change token hex values (use aliases)
❌ Don't rename variables after import (breaks sync)

## Troubleshooting

**Variables not showing up?**
- Make sure you're in the correct file
- Try refreshing the plugin
- Check that the JSON file is valid

**Collections duplicated instead of updated?**
- The plugin creates a new collection if the name doesn't match exactly
- Delete the old collection and rename the new one
- Or choose "Update existing" during import

**Lost variable references?**
- This is expected for cross-collection references
- Follow the "Setting Up Variable Aliases" section above
- References within the same collection are preserved

## Next Steps

After importing:

1. **Create a test component** using semantic tokens
2. **Test aliasing** by changing a foundation color - semantic tokens should update
3. **Document your setup** for your team
4. **Set up a sync workflow** for future updates

## Other Token Types

These JSON files cover **colors only**. For other token types (typography, spacing, borders, height, shadows, etc.), see:

👉 **[Complete Figma Variables Setup - All Tokens](../docs/figma-all-tokens-guide.md)**

That guide includes detailed instructions for setting up:
- Typography variables (fonts, sizes, weights, line heights)
- Spacing variables (8px/4px grids)
- Border variables (width + radius)
- Height variables (components, touch targets)
- Shadow effect styles
- Opacity variables
- Animation variables

---

## Reference

- [Figma Variables Documentation](https://help.figma.com/hc/en-us/articles/15339657135383)
- [Export/Import Variables Plugin](https://www.figma.com/community/plugin/1256972111705530093)
- [Complete Figma Tokens Guide](../docs/figma-all-tokens-guide.md) - **All token types**
- [Figma Color Variables Guide](../docs/figma-variables-guide.md) - Colors only
- [Breathe DS Color Documentation](../docs/color-usage-guide.md)
