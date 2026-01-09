import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip, Button, Group, Text } from '@mantine/core';
import { MantineProvider } from '@mantine/core';
import { ClipboardList, Calendar, MessageCircle, Lock, Trash2, Download, Link, Printer, Edit } from 'lucide-react';
import { breatheMantineTheme } from '../theme';
import '@mantine/core/styles.css';

const meta = {
  title: 'Internal/Mantine/Tooltip',
  component: Tooltip,
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
        component: 'Mantine Tooltip with Breathe theme. Hover/focus contextual help with touch support for desktop.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tooltip label="This is a tooltip">
      <Button>Hover me</Button>
    </Tooltip>
  ),
};

export const AllPositions: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '60px', alignItems: 'center' }}>
      <Group gap="xl">
        <Tooltip label="Top" position="top">
          <Button>Top</Button>
        </Tooltip>
        <Tooltip label="Top Start" position="top-start">
          <Button>Top Start</Button>
        </Tooltip>
        <Tooltip label="Top End" position="top-end">
          <Button>Top End</Button>
        </Tooltip>
      </Group>

      <Group gap="xl">
        <Tooltip label="Left" position="left">
          <Button>Left</Button>
        </Tooltip>
        <Tooltip label="Right" position="right">
          <Button>Right</Button>
        </Tooltip>
      </Group>

      <Group gap="xl">
        <Tooltip label="Bottom" position="bottom">
          <Button>Bottom</Button>
        </Tooltip>
        <Tooltip label="Bottom Start" position="bottom-start">
          <Button>Bottom Start</Button>
        </Tooltip>
        <Tooltip label="Bottom End" position="bottom-end">
          <Button>Bottom End</Button>
        </Tooltip>
      </Group>
    </div>
  ),
};

export const AllColors: Story = {
  render: () => (
    <Group gap="md">
      <Tooltip label="Blue (Default)" color="blue">
        <Button>Blue</Button>
      </Tooltip>
      <Tooltip label="Green" color="green">
        <Button>Green</Button>
      </Tooltip>
      <Tooltip label="Yellow" color="yellow">
        <Button>Yellow</Button>
      </Tooltip>
      <Tooltip label="Red" color="red">
        <Button>Red</Button>
      </Tooltip>
      <Tooltip label="Gray" color="gray">
        <Button>Gray</Button>
      </Tooltip>
    </Group>
  ),
};

export const WithArrow: Story = {
  render: () => (
    <Tooltip label="Tooltip with arrow" withArrow>
      <Button>Hover me</Button>
    </Tooltip>
  ),
};

export const MultilineTooltip: Story = {
  render: () => (
    <Tooltip
      label="This is a longer tooltip that spans multiple lines. It provides more detailed information about the element."
      multiline
      width={220}
      withArrow
    >
      <Button>Hover for detailed info</Button>
    </Tooltip>
  ),
};

export const DelayedTooltip: Story = {
  render: () => (
    <Group gap="md">
      <Tooltip label="Opens after 500ms" openDelay={500}>
        <Button>Slow open</Button>
      </Tooltip>
      <Tooltip label="Opens after 1000ms" openDelay={1000}>
        <Button>Slower open</Button>
      </Tooltip>
    </Group>
  ),
};

export const OnText: Story = {
  render: () => (
    <div>
      <Text>
        Hover over{' '}
        <Tooltip label="This is an abbreviation" withArrow>
          <Text component="span" c="blue" style={{ cursor: 'help', textDecoration: 'underline dotted' }}>
            TLA
          </Text>
        </Tooltip>
        {' '}to see what it means.
      </Text>
    </div>
  ),
};

export const HealthcareExamples: Story = {
  render: () => (
    <Group gap="lg">
      <Tooltip label="View patient's complete medical history" withArrow>
        <Button variant="light" leftSection={<ClipboardList size={16} />}>History</Button>
      </Tooltip>

      <Tooltip
        label="Schedule a new appointment for this patient"
        withArrow
        position="top"
      >
        <Button variant="light" leftSection={<Calendar size={16} />}>Schedule</Button>
      </Tooltip>

      <Tooltip
        label="Send a secure message to the patient"
        withArrow
        position="top"
      >
        <Button variant="light" leftSection={<MessageCircle size={16} />}>Message</Button>
      </Tooltip>

      <Tooltip
        multiline
        width={250}
        label="Requires two-factor authentication. Contact IT support if you need assistance enabling this feature."
        withArrow
        position="top"
      >
        <Button variant="light" leftSection={<Lock size={16} />}>Secure Access</Button>
      </Tooltip>
    </Group>
  ),
};

export const IconButtons: Story = {
  render: () => (
    <Group gap="md">
      <Tooltip label="Edit patient record" withArrow>
        <Button variant="subtle" size="sm">
          <Edit size={16} />
        </Button>
      </Tooltip>

      <Tooltip label="Delete record" withArrow color="red">
        <Button variant="subtle" size="sm" color="red">
          <Trash2 size={16} />
        </Button>
      </Tooltip>

      <Tooltip label="Download PDF" withArrow>
        <Button variant="subtle" size="sm">
          <Download size={16} />
        </Button>
      </Tooltip>

      <Tooltip label="Share with team" withArrow>
        <Button variant="subtle" size="sm">
          <Link size={16} />
        </Button>
      </Tooltip>

      <Tooltip label="Print document" withArrow>
        <Button variant="subtle" size="sm">
          <Printer size={16} />
        </Button>
      </Tooltip>
    </Group>
  ),
};

export const StatusIndicators: Story = {
  render: () => (
    <Group gap="lg" align="center">
      <Tooltip label="System operational - All services running normally">
        <div
          style={{
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            backgroundColor: '#27AE60',
            cursor: 'help',
          }}
        />
      </Tooltip>

      <Tooltip label="Warning - Some services experiencing delays">
        <div
          style={{
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            backgroundColor: '#E67E22',
            cursor: 'help',
          }}
        />
      </Tooltip>

      <Tooltip label="Error - Service unavailable">
        <div
          style={{
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            backgroundColor: '#E74C3C',
            cursor: 'help',
          }}
        />
      </Tooltip>
    </Group>
  ),
};

export const DisabledElements: Story = {
  render: () => (
    <Group gap="md">
      <Tooltip label="This action is currently unavailable">
        <Button disabled>Disabled Button</Button>
      </Tooltip>

      <Tooltip label="Complete previous steps first">
        <div>
          <Button disabled>Next Step</Button>
        </div>
      </Tooltip>
    </Group>
  ),
};
