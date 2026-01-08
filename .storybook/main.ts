import type { StorybookConfig } from '@storybook/react-vite';
import { join, dirname } from 'path';

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')));
}

const config: StorybookConfig = {
  stories: [
    '../packages/**/*.mdx',
    '../packages/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-interactions'),
  ],
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  viteFinal: async (config) => {
    // Ensure workspace packages resolve correctly
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@breathe-ds/core': join(__dirname, '../packages/core/src'),
        '@breathe-ds/external': join(__dirname, '../packages/external/src'),
        '@breathe-ds/mantine': join(__dirname, '../packages/mantine/src'),
      };
    }
    return config;
  },
};

export default config;
