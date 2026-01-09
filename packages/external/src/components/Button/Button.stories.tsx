import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
  title: 'External/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Mobile-optimized buttons for 65+ audience. Large touch targets (56px), high contrast, clear visual feedback.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'critical', 'tertiary', 'light'],
      description: 'Button visual variant',
    },
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
      description: 'Button size',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Complete Activity',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Cancel',
  },
};

export const Critical: Story = {
  args: {
    variant: 'critical',
    children: 'Delete Account',
  },
};

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    children: 'Learn More',
  },
};

export const Light: Story = {
  args: {
    variant: 'light',
    children: 'Skip',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="critical">Critical</Button>
      <Button variant="tertiary">Tertiary</Button>
      <Button variant="light">Light</Button>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button size="small">Small (44px)</Button>
      <Button size="default">Default (56px)</Button>
      <Button size="large">Large (64px)</Button>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    children: 'Disabled Button',
    disabled: true,
  },
};

export const AllDisabled: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Button variant="primary" disabled>Primary</Button>
      <Button variant="secondary" disabled>Secondary</Button>
      <Button variant="critical" disabled>Critical</Button>
      <Button variant="tertiary" disabled>Tertiary</Button>
      <Button variant="light" disabled>Light</Button>
    </div>
  ),
};
