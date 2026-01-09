import type { Meta, StoryObj } from '@storybook/react';
import { Card, Text, Button, Group } from '@mantine/core';
import { MantineProvider } from '@mantine/core';
import { breatheMantineTheme } from '../theme';
import '@mantine/core/styles.css';
import '../card-overrides.css';

const meta = {
  title: 'Internal/Mantine/Card',
  component: Card,
  decorators: [
    (Story) => (
      <MantineProvider theme={breatheMantineTheme}>
        <div style={{ maxWidth: '500px' }}>
          <Story />
        </div>
      </MantineProvider>
    ),
  ],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Mantine Card with Breathe theme. Compact spacing (20px padding) with 12px border radius for desktop layouts.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    padding: 'lg', // 24px padding
    radius: 'md', // 8px radius
    shadow: 'sm', // Small shadow
    children: (
      <>
        <Text fw={600} size="lg" mb="xs">
          Default Card
        </Text>
        <Text c="dimmed" size="sm">
          A basic card component with default settings. Perfect for grouping related content.
        </Text>
      </>
    ),
  },
};

export const WithShadow: Story = {
  args: {
    shadow: 'sm',
    padding: 'lg',
    radius: 'md',
    withBorder: true,
    children: (
      <>
        <Text fw={600} size="lg" mb="xs">
          Card with Shadow
        </Text>
        <Text c="dimmed" size="sm">
          Enhanced visual hierarchy with subtle shadow and border.
        </Text>
      </>
    ),
  },
};

export const WithSections: Story = {
  render: () => (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section withBorder inheritPadding py="xs">
        <Text fw={600}>Patient Summary</Text>
      </Card.Section>

      <Card.Section inheritPadding py="md">
        <Text size="sm" c="dimmed" mb="xs">
          Name: John Smith
        </Text>
        <Text size="sm" c="dimmed" mb="xs">
          DOB: 01/15/1955
        </Text>
        <Text size="sm" c="dimmed">
          Last Visit: 12/20/2025
        </Text>
      </Card.Section>

      <Card.Section withBorder inheritPadding py="xs">
        <Group justify="flex-end">
          <Button variant="subtle" size="sm">
            View Details
          </Button>
        </Group>
      </Card.Section>
    </Card>
  ),
};

export const Interactive: Story = {
  render: () => (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      style={{ cursor: 'pointer' }}
    >
      <Text fw={600} size="lg" mb="xs">
        Clickable Card
      </Text>
      <Text c="dimmed" size="sm" mb="md">
        This card can be used as a clickable element for navigation.
      </Text>
      <Group justify="space-between">
        <Text size="xs" c="dimmed">
          Updated 2 hours ago
        </Text>
        <Button variant="light" size="xs">
          Open →
        </Button>
      </Group>
    </Card>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '500px' }}>
      <Card padding="lg" radius="md" withBorder>
        <Text fw={600} mb="xs">
          With Border
        </Text>
        <Text size="sm" c="dimmed">
          Simple card with a border
        </Text>
      </Card>

      <Card padding="lg" radius="md" shadow="sm" withBorder>
        <Text fw={600} mb="xs">
          With Shadow & Border
        </Text>
        <Text size="sm" c="dimmed">
          Enhanced visual separation
        </Text>
      </Card>

      <Card shadow="md" padding="xl" radius="lg" withBorder>
        <Text fw={600} mb="xs">
          Large Padding & Radius
        </Text>
        <Text size="sm" c="dimmed">
          More prominent appearance
        </Text>
      </Card>
    </div>
  ),
};

export const DataCard: Story = {
  render: () => (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Group justify="space-between" mb="md">
        <Text fw={600} size="lg">
          Active Users
        </Text>
        <Text size="xs" c="dimmed">
          Last 24 hours
        </Text>
      </Group>

      <Text size="32px" fw={700} c="blue">
        1,234
      </Text>

      <Text size="sm" c="green" mt="xs">
        ↑ 12% from yesterday
      </Text>
    </Card>
  ),
};
