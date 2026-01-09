import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@mantine/core';
import { MantineProvider } from '@mantine/core';
import { breatheMantineTheme } from '../theme';
import '@mantine/core/styles.css';
import '../button-overrides.css';

const meta = {
  title: 'Internal/Mantine/Button',
  component: Button,
  decorators: [
    (Story) => (
      <MantineProvider theme={breatheMantineTheme}>
        <Story />
      </MantineProvider>
    ),
  ],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Mantine Button with Breathe theme overrides. Compact sizing (36px) for desktop productivity tools.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Save Changes',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <Button>Primary</Button>
      <Button variant="outline">Secondary</Button>
      <Button variant="subtle">Tertiary</Button>
      <Button variant="light">Light</Button>
      <Button color="red" data-button-color="red">Critical</Button>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button size="compact-xs">Compact XS</Button>
      <Button size="compact-sm">Compact SM</Button>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
  },
};

export const AllDisabled: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <Button disabled>Primary</Button>
      <Button variant="outline" disabled>Secondary</Button>
      <Button color="red" data-button-color="red" disabled>Critical</Button>
      <Button variant="subtle" disabled>Tertiary</Button>
      <Button variant="light" disabled>Light</Button>
    </div>
  ),
};
