# Platform Support

The Breathe Design System supports multiple platforms with optimized token formats for each.

## Supported Platforms

### ✅ Web (Default)

**Token Format:** CSS strings with units
**Usage:** React, Vue, Angular, vanilla JS/CSS

```typescript
import { tokens, spacing, typography } from '@breathe-ds/core';

// CSS-style values
spacing.external.md        // "16px"
typography.external.fontSize.body  // "17px"
borderRadius[12]           // "12px"
```

**Best for:**
- Web applications
- CSS-in-JS libraries (styled-components, emotion)
- CSS Modules
- Sass/Less

---

### ✅ React Native

**Token Format:** Numeric values (no units)
**Usage:** React Native iOS/Android apps

```typescript
import { ReactNative } from '@breathe-ds/core';

// Numeric values
spacing.external.md        // 16
fontSize.external.body     // 17
borderRadius[12]           // 12
```

**Key Features:**
- ✅ Automatic numeric conversion
- ✅ Platform-specific shadows (iOS/Android)
- ✅ String font weights for compatibility
- ✅ Helper functions (`getShadow()`)
- ✅ Platform spacing utilities

**Documentation:** [React Native Integration Guide](./react-native-guide.md)

---

## Feature Comparison

| Feature | Web | React Native |
|---------|-----|--------------|
| **Colors** | ✅ Hex strings | ✅ Hex strings (same) |
| **Spacing** | "16px" | 16 |
| **Typography** | "17px" | 17 |
| **Font Weight** | 600 | "600" (string) |
| **Border Width** | "1px" | 1 |
| **Border Radius** | "12px" | 12 |
| **Height** | "44px" | 44 |
| **Shadows** | CSS box-shadow | iOS/Android objects |
| **Opacity** | "0.4" | 0.4 (same) |
| **Animation** | "250ms" | 250 |

---

## Import Strategies

### Web (Standard Import)

```typescript
import { tokens, spacing, typography } from '@breathe-ds/core';
```

### React Native (Automatic)

```typescript
// Automatically uses RN values when detected
import { tokens, spacing, typography } from '@breathe-ds/core';
```

### React Native (Explicit)

```typescript
// Always use RN values
import { ReactNative } from '@breathe-ds/core';
const { tokens, spacing, typography } = ReactNative;
```

### Universal/Monorepo

```typescript
// Automatically adapts based on environment
import { tokens } from '@breathe-ds/core';

// Manual platform detection if needed
import { Platform } from 'react-native';
import { ReactNative } from '@breathe-ds/core';

const platformTokens = Platform.OS !== 'web'
  ? ReactNative
  : require('@breathe-ds/core');
```

---

## Platform-Specific Features

### React Native Only

#### Shadow Helper
```typescript
import { getShadow } from '@breathe-ds/core';

const styles = StyleSheet.create({
  card: {
    ...getShadow('elevation4'),  // Spreads iOS + Android shadows
  },
});
```

#### Platform Spacing
```typescript
import { platformSpacing } from '@breathe-ds/core';
import { Platform } from 'react-native';

const styles = StyleSheet.create({
  header: {
    paddingTop: Platform.select({
      ios: platformSpacing.ios.safeAreaTop,
      android: platformSpacing.android.safeAreaTop,
    }),
  },
});
```

---

## TypeScript Support

### Web Types
```typescript
import type {
  Tokens,
  Typography,
  Spacing,
  Radius,
  Height,
  Shadows,
} from '@breathe-ds/core';
```

### React Native Types
```typescript
import type {
  RNTokens,
  RNTypography,
  RNSpacing,
  RNBorderRadius,
  RNHeight,
  RNShadows,
} from '@breathe-ds/core';
```

---

## Package Configuration

The package automatically resolves to the correct format based on your environment:

### package.json exports

```json
{
  "exports": {
    ".": {
      "react-native": "./dist/platforms/react-native.js",
      "import": "./dist/index.mjs",
      "require": "./dist/index.js"
    }
  }
}
```

This means:
- React Native projects automatically use RN-optimized tokens
- Web projects use standard CSS token format
- No configuration needed!

---

## Examples

### Button - Web
```typescript
import styled from 'styled-components';
import { tokens, spacing, radius, height } from '@breathe-ds/core';

const Button = styled.button`
  background: ${tokens.action.primary};
  padding: ${spacing.external.md} ${spacing.external.xl};
  border-radius: ${radius.button.external};
  min-height: ${height.button.large};
`;
```

### Button - React Native
```typescript
import { TouchableOpacity, StyleSheet } from 'react-native';
import { tokens, spacing, radius, height } from '@breathe-ds/core';

const styles = StyleSheet.create({
  button: {
    backgroundColor: tokens.action.primary,
    paddingVertical: spacing.external.md,      // 16
    paddingHorizontal: spacing.external.xl,    // 32
    borderRadius: radius.button.external,      // 12
    minHeight: height.button.large,            // 56
  },
});
```

---

## Migration Guide

### Adding React Native to Existing Web Project

1. **Install package** (if not already)
   ```bash
   npm install @breathe-ds/core
   ```

2. **Create RN app** (if needed)
   ```bash
   npx react-native init MyApp
   # or
   npx create-expo-app MyApp
   ```

3. **Import tokens**
   ```typescript
   // Automatically uses RN values
   import { tokens, spacing } from '@breathe-ds/core';
   ```

4. **Update shadow usage**
   ```typescript
   // Before (won't work in RN)
   boxShadow: "0 2px 8px rgba(0,0,0,0.1)"

   // After (works in RN)
   ...getShadow('elevation4')
   ```

5. **Link fonts** (see RN guide)

### Sharing Code Between Web and RN

```typescript
// shared/Button.tsx
import { tokens } from '@breathe-ds/core';

// Platform-agnostic color tokens
const buttonColor = tokens.action.primary;  // Works everywhere!

// Platform-specific styles
// Web: Use styled-components or CSS
// RN: Use StyleSheet.create

export { buttonColor };
```

---

## Future Platforms

Planned support:
- 🔄 Flutter (JSON export)
- 🔄 SwiftUI (native iOS)
- 🔄 Jetpack Compose (native Android)

---

## Resources

- [React Native Integration Guide](./react-native-guide.md) - Complete RN setup
- [Design Tokens Overview](./design-tokens-overview.md) - All tokens
- [Token Coverage](./token-coverage.md) - Complete reference

---

## Summary

✅ **Web Support** - CSS strings, ready to use
✅ **React Native Support** - Numeric values, automatic conversion
✅ **TypeScript Support** - Full type safety for both platforms
✅ **Automatic Detection** - No configuration needed
✅ **Consistent API** - Same imports, different values
✅ **Helper Functions** - Platform-specific utilities

Build once, deploy everywhere! 🚀
