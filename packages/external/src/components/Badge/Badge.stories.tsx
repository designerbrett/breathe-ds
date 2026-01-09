import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta = {
  title: 'External/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Badge component for status indicators. High contrast colors with clear semantic meanings.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'success', 'warning', 'error', 'info'],
      description: 'Visual variant',
    },
    size: {
      control: 'select',
      options: ['default', 'large'],
      description: 'Size variant',
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Active',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Completed',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'Pending',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    children: 'Critical',
  },
};

export const Info: Story = {
  args: {
    variant: 'info',
    children: 'In Progress',
  },
};

export const Large: Story = {
  args: {
    variant: 'success',
    size: 'large',
    children: 'Completed',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <Badge variant="default">Default</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="info">Info</Badge>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Badge size="default">Default Size</Badge>
      <Badge size="large">Large Size</Badge>
    </div>
  ),
};

export const StatusExamples: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <span style={{ fontWeight: 600, minWidth: '120px' }}>Appointment:</span>
        <Badge variant="success">Confirmed</Badge>
      </div>

      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <span style={{ fontWeight: 600, minWidth: '120px' }}>Lab Results:</span>
        <Badge variant="warning">Pending Review</Badge>
      </div>

      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <span style={{ fontWeight: 600, minWidth: '120px' }}>Medication:</span>
        <Badge variant="error">Refill Needed</Badge>
      </div>

      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <span style={{ fontWeight: 600, minWidth: '120px' }}>Status:</span>
        <Badge variant="info">Active Patient</Badge>
      </div>

      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <span style={{ fontWeight: 600, minWidth: '120px' }}>Account:</span>
        <Badge variant="default">Standard</Badge>
      </div>
    </div>
  ),
};

export const InCard: Story = {
  render: () => (
    <div style={{
      background: 'white',
      padding: '24px',
      borderRadius: '20px',
      boxShadow: '0 2px 12px rgba(26, 43, 61, 0.06)',
      maxWidth: '350px',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <h3 style={{ margin: 0, fontSize: '20px', fontWeight: 600 }}>Dr. Smith Appointment</h3>
        <Badge variant="success">Confirmed</Badge>
      </div>
      <p style={{ margin: 0, color: '#5A6C7D', fontSize: '17px' }}>
        Annual checkup scheduled for tomorrow at 2:00 PM
      </p>
    </div>
  ),
};

export const MultipleBadges: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', maxWidth: '350px' }}>
      <Badge variant="info">Cardiology</Badge>
      <Badge variant="success">Insured</Badge>
      <Badge variant="default">65+</Badge>
      <Badge variant="warning">Follow-up Required</Badge>
    </div>
  ),
};
