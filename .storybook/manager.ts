import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

const breatheTheme = create({
  base: 'light',
  brandTitle: 'Breathe Design System',
  brandUrl: 'https://kivohealth.com',
  brandImage: undefined,
  brandTarget: '_self',

  colorPrimary: '#2B79B9',
  colorSecondary: '#2B79B9',

  // UI
  appBg: '#FAFBFC',
  appContentBg: '#FFFFFF',
  appBorderColor: '#E8EDF2',
  appBorderRadius: 8,

  // Typography
  fontBase: "'Inter', sans-serif",
  fontCode: "'Courier New', monospace",

  // Text colors
  textColor: '#1A2B3D',
  textInverseColor: '#FFFFFF',

  // Toolbar default and active colors
  barTextColor: '#5A6C7D',
  barSelectedColor: '#2B79B9',
  barBg: '#FFFFFF',

  // Form colors
  inputBg: '#FFFFFF',
  inputBorder: '#E8EDF2',
  inputTextColor: '#1A2B3D',
  inputBorderRadius: 6,
});

addons.setConfig({
  theme: breatheTheme,
});
