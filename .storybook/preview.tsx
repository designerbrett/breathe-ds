import type { Preview } from '@storybook/react';
import { MantineProvider } from '@mantine/core';
import { breatheMantineTheme } from '../packages/mantine/src/theme';
import '@mantine/core/styles.css';
import '../packages/external/src/styles/global.css';

// Mode switcher toolbar
export const globalTypes = {
  mode: {
    name: 'Mode',
    description: 'Design System Mode',
    defaultValue: 'external',
    toolbar: {
      icon: 'mobile',
      items: [
        { value: 'external', icon: 'mobile', title: 'External (Mobile 65+)' },
        { value: 'internal', icon: 'browser', title: 'Internal (Desktop)' },
      ],
      showName: true,
      dynamicTitle: true,
    },
  },
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'breathe',
      values: [
        {
          name: 'breathe',
          value: '#FAFBFC',
        },
        {
          name: 'white',
          value: '#FFFFFF',
        },
      ],
    },
  },
  decorators: [
    (Story, context) => {
      const mode = context.globals.mode;

      // For Internal mode, wrap with MantineProvider
      if (mode === 'internal' && context.title.startsWith('Internal')) {
        return (
          <MantineProvider theme={breatheMantineTheme}>
            <Story />
          </MantineProvider>
        );
      }

      // For External mode, apply mobile-optimized container
      if (mode === 'external' && context.title.startsWith('External')) {
        return (
          <div
            style={{
              maxWidth: '375px',
              padding: '20px',
              fontFamily: "'Inter', sans-serif",
            }}
          >
            <Story />
          </div>
        );
      }

      return <Story />;
    },
  ],
};

export default preview;
