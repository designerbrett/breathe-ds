# React Native Integration Guide

## Overview

The Breathe Design System provides full React Native support with platform-specific token values. React Native requires numeric values instead of CSS strings, and this package handles that conversion automatically.

## Installation

```bash
npm install @breathe-ds/core
```

## Quick Start

### Option 1: Automatic React Native Resolution (Recommended)

When you import from `@breathe-ds/core` in a React Native project, it automatically uses the RN-optimized exports:

```typescript
// This automatically uses React Native tokens
import { tokens, spacing, fontSize, borderRadius } from '@breathe-ds/core';

// Values are numbers, not strings!
const styles = StyleSheet.create({
  container: {
    padding: spacing.external.md,        // 16 (number)
    borderRadius: borderRadius[12],      // 12 (number)
  },
  text: {
    color: tokens.text.primary,          // "#1A2B3D" (string)
    fontSize: fontSize.external.body,    // 17 (number)
  },
});
```

### Option 2: Explicit React Native Import

You can also explicitly import React Native tokens:

```typescript
import { ReactNative } from '@breathe-ds/core';

const { tokens, spacing, fontSize, typography, shadows } = ReactNative;

const styles = StyleSheet.create({
  button: {
    backgroundColor: tokens.action.primary,
    paddingVertical: spacing.external.md,
    paddingHorizontal: spacing.external.xl,
    borderRadius: ReactNative.radius.button.external,
  },
});
```

## Key Differences from Web

### 1. Numeric Values

**Web (CSS strings):**
```typescript
padding: "16px"
fontSize: "17px"
borderRadius: "12px"
```

**React Native (numbers):**
```typescript
padding: 16
fontSize: 17
borderRadius: 12
```

### 2. Font Weights

**Web:**
```typescript
fontWeight: 600
```

**React Native:**
```typescript
fontWeight: "600"  // String in RN
```

### 3. Shadows

**Web (CSS box-shadow):**
```typescript
boxShadow: "0 2px 8px rgba(26, 43, 61, 0.08)"
```

**React Native (separate properties):**
```typescript
// iOS
shadowColor: "#1A2B3D"
shadowOffset: { width: 0, height: 2 }
shadowOpacity: 0.08
shadowRadius: 8

// Android
elevation: 4
```

## Token Categories

### Colors

Colors work identically in React Native:

```typescript
import { tokens, foundation } from '@breathe-ds/core';

const styles = StyleSheet.create({
  container: {
    backgroundColor: tokens.surface.default,   // "#FFFFFF"
  },
  text: {
    color: tokens.text.primary,               // "#1A2B3D"
  },
  button: {
    backgroundColor: tokens.action.primary,   // "#2B79B9"
  },
  border: {
    borderColor: tokens.border.default,       // "#E8EDF2"
  },
});
```

### Typography

```typescript
import { fontFamily, fontSize, fontWeight, lineHeight } from '@breathe-ds/core';

const styles = StyleSheet.create({
  heading: {
    fontFamily: fontFamily.heading,           // "Lexend"
    fontSize: fontSize.external.h1,           // 40
    fontWeight: fontWeight.bold,              // "700"
    lineHeight: lineHeight.external.h1,       // 48
  },
  body: {
    fontFamily: fontFamily.body,              // "Inter"
    fontSize: fontSize.external.body,         // 17
    fontWeight: fontWeight.regular,           // "400"
    lineHeight: lineHeight.external.body,     // 27
  },
});
```

**Important:** Make sure fonts are properly linked in your React Native project:
- iOS: Add fonts to Xcode project and Info.plist
- Android: Add fonts to `android/app/src/main/assets/fonts/`

### Spacing

```typescript
import { spacing } from '@breathe-ds/core';

const styles = StyleSheet.create({
  container: {
    padding: spacing.external.md,              // 16
    paddingHorizontal: spacing.external.xl,    // 32
    gap: spacing.external.sm,                  // 12 (for flexbox gap)
  },
  margin: {
    marginTop: spacing.internal[400],          // 16
    marginBottom: spacing.internal[800],       // 32
  },
});
```

### Border Width & Radius

```typescript
import { borderWidth, borderRadius, radius } from '@breathe-ds/core';

const styles = StyleSheet.create({
  container: {
    borderWidth: borderWidth.thin,             // 1
    borderRadius: borderRadius[12],            // 12
  },
  button: {
    borderWidth: borderWidth.medium,           // 2
    borderRadius: radius.button.external,      // 12
  },
  badge: {
    // For fully rounded, use half of width/height
    width: 32,
    height: 32,
    borderRadius: 16,  // width/2 for perfect circle
  },
});
```

### Height

```typescript
import { height } from '@breathe-ds/core';

const styles = StyleSheet.create({
  button: {
    minHeight: height.button.large,            // 56
  },
  input: {
    height: height.input.medium,               // 44
  },
  touchTarget: {
    minHeight: height.touchTarget.minimum,     // 44 (WCAG)
  },
  header: {
    height: height.header,                     // 64
  },
});
```

### Shadows

Use the helper function for cross-platform shadows:

```typescript
import { getShadow } from '@breathe-ds/core';

const styles = StyleSheet.create({
  card: {
    ...getShadow('elevation4'),
    // Spreads both iOS and Android shadow properties
    // iOS: shadowColor, shadowOffset, shadowOpacity, shadowRadius
    // Android: elevation
  },
});
```

Or use shadows directly:

```typescript
import { shadows } from '@breathe-ds/core';
import { Platform } from 'react-native';

const styles = StyleSheet.create({
  card: Platform.select({
    ios: shadows.ios.elevation4,
    android: shadows.android.elevation4,
  }),
});
```

### Opacity

```typescript
import { opacity } from '@breathe-ds/core';

const styles = StyleSheet.create({
  overlay: {
    opacity: opacity.overlay,        // 0.6
  },
  disabled: {
    opacity: opacity.disabled,       // 0.4
  },
  hover: {
    opacity: opacity.hover,          // 0.9
  },
});
```

### Animation

```typescript
import { Animated, Easing } from 'react-native';
import { animationDuration } from '@breathe-ds/core';

// Fade in animation
const fadeAnim = new Animated.Value(0);

Animated.timing(fadeAnim, {
  toValue: 1,
  duration: animationDuration.normal,  // 250ms
  easing: Easing.ease,
  useNativeDriver: true,
}).start();
```

## Complete Component Example

### Button Component

```typescript
import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {
  tokens,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  spacing,
  radius,
  height,
  getShadow,
  opacity,
} from '@breathe-ds/core';

interface ButtonProps {
  onPress: () => void;
  children: string;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  onPress,
  children,
  variant = 'primary',
  disabled = false,
  loading = false,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={opacity.active}
      style={[
        styles.base,
        variant === 'primary' && styles.primary,
        variant === 'secondary' && styles.secondary,
        (disabled || loading) && styles.disabled,
        !disabled && styles.shadow,
      ]}
    >
      {loading ? (
        <ActivityIndicator
          color={variant === 'primary' ? tokens.text.inverse : tokens.text.primary}
        />
      ) : (
        <Text
          style={[
            styles.text,
            variant === 'primary' && styles.textPrimary,
            variant === 'secondary' && styles.textSecondary,
          ]}
        >
          {children}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    minHeight: height.button.large,
    paddingHorizontal: spacing.external.xl,
    paddingVertical: spacing.external.md,
    borderRadius: radius.button.external,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  primary: {
    backgroundColor: tokens.action.primary,
  },
  secondary: {
    backgroundColor: tokens.action.secondary,
  },
  disabled: {
    backgroundColor: tokens.action.primaryDisabled,
    opacity: opacity.disabled,
  },
  shadow: {
    ...getShadow('elevation2'),
  },
  text: {
    fontFamily: fontFamily.body,
    fontSize: fontSize.external.button,
    fontWeight: fontWeight.semibold,
    lineHeight: lineHeight.external.button,
  },
  textPrimary: {
    color: tokens.text.inverse,
  },
  textSecondary: {
    color: tokens.text.inverse,
  },
});
```

### Card Component

```typescript
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  tokens,
  spacing,
  radius,
  borderWidth,
  fontSize,
  fontFamily,
  fontWeight,
  lineHeight,
  getShadow,
} from '@breathe-ds/core';

interface CardProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ title, description, children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: tokens.surface.default,
    borderRadius: radius.card.external,
    borderWidth: borderWidth.thin,
    borderColor: tokens.border.default,
    padding: spacing.external.lg,
    ...getShadow('elevation4'),
  },
  title: {
    fontFamily: fontFamily.heading,
    fontSize: fontSize.external.h3,
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight.external.h3,
    color: tokens.text.primary,
    marginBottom: spacing.external.xs,
  },
  description: {
    fontFamily: fontFamily.body,
    fontSize: fontSize.external.body,
    fontWeight: fontWeight.regular,
    lineHeight: lineHeight.external.body,
    color: tokens.text.secondary,
  },
});
```

### Input Component

```typescript
import React from 'react';
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  TextInputProps,
} from 'react-native';
import {
  tokens,
  fontFamily,
  fontSize,
  fontWeight,
  spacing,
  radius,
  borderWidth,
  height,
} from '@breathe-ds/core';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  ...props
}) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={[styles.input, error && styles.inputError]}
        placeholderTextColor={tokens.text.placeholder}
        {...props}
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.external.md,
  },
  label: {
    fontFamily: fontFamily.body,
    fontSize: fontSize.external.bodySmall,
    fontWeight: fontWeight.semibold,
    color: tokens.text.primary,
    marginBottom: spacing.external.xs,
  },
  input: {
    height: height.input.large,
    borderWidth: borderWidth.medium,
    borderColor: tokens.border.default,
    borderRadius: radius.input.external,
    paddingHorizontal: spacing.external.md,
    fontFamily: fontFamily.body,
    fontSize: fontSize.external.body,
    color: tokens.text.primary,
    backgroundColor: tokens.surface.default,
  },
  inputError: {
    borderColor: tokens.border.error,
  },
  error: {
    fontFamily: fontFamily.body,
    fontSize: fontSize.external.caption,
    color: tokens.feedback.errorText,
    marginTop: spacing.external.xs,
  },
});
```

## Platform-Specific Helpers

### Safe Area Spacing

```typescript
import { platformSpacing } from '@breathe-ds/core';
import { Platform } from 'react-native';

const styles = StyleSheet.create({
  header: {
    paddingTop: Platform.select({
      ios: platformSpacing.ios.safeAreaTop,      // 44
      android: platformSpacing.android.safeAreaTop, // 24
    }),
  },
});
```

Or use `react-native-safe-area-context` for dynamic safe areas.

## TypeScript Support

Full TypeScript support with auto-complete:

```typescript
import type {
  RNTokens,
  RNTypography,
  RNSpacing,
  RNBorderRadius,
  RNHeight,
  RNShadows,
  RNOpacity,
} from '@breathe-ds/core';

// Type-safe usage
const textColor: string = tokens.text.primary;
const buttonHeight: number = height.button.large;
```

## Font Setup

### iOS

1. Add font files to Xcode project
2. Update `Info.plist`:

```xml
<key>UIAppFonts</key>
<array>
  <string>Lexend-Regular.ttf</string>
  <string>Lexend-SemiBold.ttf</string>
  <string>Lexend-Bold.ttf</string>
  <string>Inter-Regular.ttf</string>
  <string>Inter-SemiBold.ttf</string>
  <string>Inter-Bold.ttf</string>
</array>
```

### Android

1. Create `android/app/src/main/assets/fonts/` directory
2. Add font files to this directory
3. Font names should match exactly (case-sensitive)

### Expo

If using Expo, use `expo-font`:

```typescript
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Lexend': require('./assets/fonts/Lexend-Regular.ttf'),
    'Lexend-SemiBold': require('./assets/fonts/Lexend-SemiBold.ttf'),
    'Lexend-Bold': require('./assets/fonts/Lexend-Bold.ttf'),
    'Inter': require('./assets/fonts/Inter-Regular.ttf'),
    'Inter-SemiBold': require('./assets/fonts/Inter-SemiBold.ttf'),
    'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return <YourApp />;
}
```

## Best Practices

### 1. Use Numeric Tokens

```typescript
// ✅ Good - Uses numeric tokens
const styles = StyleSheet.create({
  container: {
    padding: spacing.external.md,  // 16
  },
});

// ❌ Bad - Don't use web tokens with "px"
const styles = StyleSheet.create({
  container: {
    padding: "16px",  // Won't work in RN
  },
});
```

### 2. Platform-Specific Shadows

```typescript
// ✅ Good - Cross-platform shadows
const styles = StyleSheet.create({
  card: {
    ...getShadow('elevation4'),
  },
});

// ❌ Bad - Won't work in RN
const styles = StyleSheet.create({
  card: {
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
});
```

### 3. Font Weight as String

```typescript
// ✅ Good - String font weight
const styles = StyleSheet.create({
  text: {
    fontWeight: fontWeight.semibold,  // "600"
  },
});

// ⚠️ Works but less compatible
const styles = StyleSheet.create({
  text: {
    fontWeight: 600,  // May not work on all platforms
  },
});
```

## Troubleshooting

### Fonts not showing

- Verify fonts are linked correctly
- Check font file names match exactly
- Rebuild app after adding fonts
- Check font family names in token file

### Shadows not appearing on Android

- Use `elevation` property (included in `getShadow`)
- Android doesn't support `shadowColor`, use elevation instead
- Elevation only works with `backgroundColor` set

### TypeScript errors

- Make sure `@breathe-ds/core` is up to date
- Check TypeScript version >= 5.0
- Verify imports are from correct path

## Migration from Web

If migrating from web tokens:

```typescript
// Before (Web)
import { spacing } from '@breathe-ds/core';
padding: spacing.external.md  // "16px"

// After (React Native)
import { spacing } from '@breathe-ds/core';
padding: spacing.external.md  // 16 (auto-converts when used in RN)
```

The package automatically detects React Native and uses appropriate values!

## Resources

- [React Native Styling Docs](https://reactnative.dev/docs/style)
- [React Native Shadow Guide](https://reactnative.dev/docs/shadow-props)
- [Design Tokens Overview](./design-tokens-overview.md)
- [Token Coverage](./token-coverage.md)

## Summary

✅ **Automatic React Native support** - Just import and use
✅ **Numeric values** - No "px" strings, pure numbers
✅ **Platform-specific shadows** - iOS and Android support
✅ **TypeScript support** - Full type safety
✅ **Same API** - Consistent with web tokens
✅ **Helper functions** - `getShadow()`, `platformSpacing`

Start building with confidence! 🚀
