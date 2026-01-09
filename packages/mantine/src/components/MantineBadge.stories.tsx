import type { Meta, StoryObj } from '@storybook/react';
import { Badge, Group } from '@mantine/core';
import { MantineProvider } from '@mantine/core';
import { breatheMantineTheme } from '../theme';
import '@mantine/core/styles.css';

const meta = {
  title: 'Internal/Mantine/Badge',
  component: Badge,
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
        component: 'Mantine Badge with Breathe theme. High contrast status indicators for desktop productivity tools.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Default',
  },
};

export const StatusColors: Story = {
  render: () => (
    <Group gap="md">
      <Badge color="blue">Active</Badge>
      <Badge color="green">Success</Badge>
      <Badge color="yellow">Warning</Badge>
      <Badge color="red">Error</Badge>
      <Badge color="gray">Inactive</Badge>
    </Group>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Group gap="md">
        <Badge variant="filled">Filled</Badge>
        <Badge variant="light">Light</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="dot">Dot</Badge>
      </Group>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <Group gap="md" align="center">
      <Badge size="xs">Extra Small</Badge>
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
      <Badge size="xl">Extra Large</Badge>
    </Group>
  ),
};

export const WithRadius: Story = {
  render: () => (
    <Group gap="md">
      <Badge radius="xs">XS Radius</Badge>
      <Badge radius="sm">SM Radius</Badge>
      <Badge radius="md">MD Radius</Badge>
      <Badge radius="lg">LG Radius</Badge>
      <Badge radius="xl">XL Radius</Badge>
    </Group>
  ),
};

export const StatusExamples: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Group gap="md">
        <Badge color="green" variant="light">
          Completed
        </Badge>
        <Badge color="blue" variant="light">
          In Progress
        </Badge>
        <Badge color="yellow" variant="light">
          Pending
        </Badge>
        <Badge color="red" variant="light">
          Failed
        </Badge>
      </Group>

      <Group gap="md">
        <Badge color="green" variant="filled">
          Approved
        </Badge>
        <Badge color="orange" variant="filled">
          Under Review
        </Badge>
        <Badge color="red" variant="filled">
          Rejected
        </Badge>
      </Group>

      <Group gap="md">
        <Badge color="blue" variant="dot">
          Active User
        </Badge>
        <Badge color="gray" variant="dot">
          Inactive User
        </Badge>
        <Badge color="green" variant="dot">
          Online
        </Badge>
        <Badge color="red" variant="dot">
          Offline
        </Badge>
      </Group>
    </div>
  ),
};

export const HealthcareStatuses: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <div style={{ fontSize: '12px', marginBottom: '8px', fontWeight: 600 }}>
          Appointment Statuses
        </div>
        <Group gap="sm">
          <Badge color="blue" variant="light">
            Scheduled
          </Badge>
          <Badge color="yellow" variant="light">
            Checked In
          </Badge>
          <Badge color="green" variant="light">
            Completed
          </Badge>
          <Badge color="red" variant="light">
            Cancelled
          </Badge>
          <Badge color="gray" variant="light">
            No Show
          </Badge>
        </Group>
      </div>

      <div>
        <div style={{ fontSize: '12px', marginBottom: '8px', fontWeight: 600 }}>
          Priority Levels
        </div>
        <Group gap="sm">
          <Badge color="red" variant="filled">
            Urgent
          </Badge>
          <Badge color="orange" variant="filled">
            High
          </Badge>
          <Badge color="blue" variant="filled">
            Normal
          </Badge>
          <Badge color="gray" variant="filled">
            Low
          </Badge>
        </Group>
      </div>

      <div>
        <div style={{ fontSize: '12px', marginBottom: '8px', fontWeight: 600 }}>
          Patient Status
        </div>
        <Group gap="sm">
          <Badge color="green" variant="dot">
            Active
          </Badge>
          <Badge color="blue" variant="dot">
            New
          </Badge>
          <Badge color="gray" variant="dot">
            Inactive
          </Badge>
          <Badge color="yellow" variant="dot">
            Follow-up Required
          </Badge>
        </Group>
      </div>
    </div>
  ),
};
