import type { Meta, StoryObj } from '@storybook/react';
import { LoadingIndicator } from './LoadingIndicator';

const meta = {
  title: 'External/LoadingIndicator',
  component: LoadingIndicator,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Loading indicator with smooth animation and optional label. Accessible with screen reader support.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
      description: 'Size of the spinner',
    },
  },
} satisfies Meta<typeof LoadingIndicator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithLabel: Story = {
  args: {
    label: 'Loading your data...',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Loading...',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Please wait',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '48px', alignItems: 'center' }}>
      <LoadingIndicator size="small" label="Small" />
      <LoadingIndicator size="default" label="Default" />
      <LoadingIndicator size="large" label="Large" />
    </div>
  ),
};

export const InCard: Story = {
  render: () => (
    <div
      style={{
        background: 'white',
        padding: '48px',
        borderRadius: '20px',
        boxShadow: '0 2px 12px rgba(26, 43, 61, 0.06)',
        minWidth: '300px',
        minHeight: '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <LoadingIndicator label="Loading your appointments..." />
    </div>
  ),
};

export const FullPage: Story = {
  render: () => (
    <div
      style={{
        background: '#FAFBFC',
        width: '375px',
        height: '667px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <LoadingIndicator size="large" label="Loading Breathe Health..." />
    </div>
  ),
};

export const MultipleStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '20px' }}>
      <div
        style={{
          background: 'white',
          padding: '32px',
          borderRadius: '20px',
          boxShadow: '0 2px 12px rgba(26, 43, 61, 0.06)',
        }}
      >
        <h3 style={{ margin: '0 0 24px 0', fontSize: '20px', fontWeight: 600 }}>
          Fetching Data
        </h3>
        <LoadingIndicator label="Please wait while we load your information..." />
      </div>

      <div
        style={{
          background: 'white',
          padding: '32px',
          borderRadius: '20px',
          boxShadow: '0 2px 12px rgba(26, 43, 61, 0.06)',
        }}
      >
        <h3 style={{ margin: '0 0 24px 0', fontSize: '20px', fontWeight: 600 }}>
          Processing
        </h3>
        <LoadingIndicator size="small" label="Saving changes..." />
      </div>
    </div>
  ),
};
