import type { Meta, StoryObj } from '@storybook/react';
import { Loader, Group, Stack, Text, Center } from '@mantine/core';
import { MantineProvider } from '@mantine/core';
import { breatheMantineTheme } from '../theme';
import '@mantine/core/styles.css';

const meta = {
  title: 'Internal/Mantine/Loader',
  component: Loader,
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
        component: 'Mantine Loader with Breathe theme. Smooth animated loading indicators for desktop applications.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithColor: Story = {
  args: {
    color: 'blue',
  },
};

export const AllColors: Story = {
  render: () => (
    <Group gap="xl">
      <Loader color="blue" />
      <Loader color="green" />
      <Loader color="yellow" />
      <Loader color="red" />
      <Loader color="gray" />
    </Group>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <Group gap="xl" align="center">
      <Loader size="xs" />
      <Loader size="sm" />
      <Loader size="md" />
      <Loader size="lg" />
      <Loader size="xl" />
    </Group>
  ),
};

export const AllTypes: Story = {
  render: () => (
    <Group gap="xl" align="center">
      <div>
        <Text size="xs" mb="xs" ta="center">
          Oval (Default)
        </Text>
        <Loader type="oval" />
      </div>
      <div>
        <Text size="xs" mb="xs" ta="center">
          Bars
        </Text>
        <Loader type="bars" />
      </div>
      <div>
        <Text size="xs" mb="xs" ta="center">
          Dots
        </Text>
        <Loader type="dots" />
      </div>
    </Group>
  ),
};

export const InContext: Story = {
  render: () => (
    <Stack gap="lg" style={{ width: '300px' }}>
      <Center
        h={100}
        style={{ border: '1px solid #e9ecef', borderRadius: '8px' }}
      >
        <Stack align="center" gap="sm">
          <Loader size="md" />
          <Text size="sm" c="dimmed">
            Loading data...
          </Text>
        </Stack>
      </Center>

      <Center
        h={100}
        style={{ border: '1px solid #e9ecef', borderRadius: '8px' }}
      >
        <Group gap="sm">
          <Loader size="sm" />
          <Text size="sm">Processing request</Text>
        </Group>
      </Center>

      <Center
        h={100}
        style={{ border: '1px solid #e9ecef', borderRadius: '8px' }}
      >
        <Stack align="center" gap="xs">
          <Loader color="green" type="dots" />
          <Text size="xs" c="dimmed">
            Saving changes...
          </Text>
        </Stack>
      </Center>
    </Stack>
  ),
};

export const FullPageLoader: Story = {
  render: () => (
    <div
      style={{
        width: '400px',
        height: '300px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
      }}
    >
      <Stack align="center" gap="md">
        <Loader size="lg" />
        <Text size="lg" fw={600}>
          Loading Application
        </Text>
        <Text size="sm" c="dimmed">
          Please wait while we fetch your data...
        </Text>
      </Stack>
    </div>
  ),
};

export const InlineLoader: Story = {
  render: () => (
    <Group gap="sm">
      <Text size="sm">Fetching patient records</Text>
      <Loader size="xs" />
    </Group>
  ),
};
