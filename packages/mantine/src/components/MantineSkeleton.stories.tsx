import type { Meta, StoryObj } from '@mantine/core';
import { Skeleton, Stack } from '@mantine/core';
import { MantineProvider } from '@mantine/core';
import { breatheMantineTheme } from '../theme';
import '@mantine/core/styles.css';

const meta = {
  title: 'Internal/Mantine/Skeleton',
  component: Skeleton,
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
        component: 'Mantine Skeleton with Breathe theme. Content placeholders for desktop applications.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    height: 50,
    width: '100%',
  },
};

export const AllSizes: Story = {
  render: () => (
    <Stack gap="md">
      <Skeleton height={20} width="30%" />
      <Skeleton height={40} width="50%" />
      <Skeleton height={60} width="70%" />
      <Skeleton height={80} width="100%" />
    </Stack>
  ),
};

export const Circle: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Skeleton height={50} circle />
      <Skeleton height={70} circle />
      <Skeleton height={100} circle />
    </div>
  ),
};

export const CardSkeleton: Story = {
  render: () => (
    <div style={{ border: '1px solid #e9ecef', borderRadius: '8px', padding: '16px' }}>
      <Stack gap="md">
        <Skeleton height={12} width="40%" />
        <Skeleton height={8} width="100%" />
        <Skeleton height={8} width="90%" />
        <Skeleton height={8} width="80%" />
        <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
          <Skeleton height={28} width={80} radius="md" />
          <Skeleton height={28} width={80} radius="md" />
        </div>
      </Stack>
    </div>
  ),
};

export const PatientCardSkeleton: Story = {
  render: () => (
    <div style={{ border: '1px solid #e9ecef', borderRadius: '8px', padding: '16px' }}>
      <Stack gap="md">
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <Skeleton height={50} circle />
          <div style={{ flex: 1 }}>
            <Skeleton height={14} width="60%" mb="xs" />
            <Skeleton height={10} width="40%" />
          </div>
        </div>
        <Skeleton height={1} />
        <Skeleton height={10} width="100%" />
        <Skeleton height={10} width="90%" />
        <Skeleton height={10} width="70%" />
      </Stack>
    </div>
  ),
};

export const TableSkeleton: Story = {
  render: () => (
    <Stack gap="xs">
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          key={index}
          style={{
            display: 'flex',
            gap: '12px',
            padding: '12px',
            borderBottom: '1px solid #e9ecef',
          }}
        >
          <Skeleton height={40} circle />
          <Skeleton height={40} width="30%" />
          <Skeleton height={40} width="20%" />
          <Skeleton height={40} width="40%" />
        </div>
      ))}
    </Stack>
  ),
};

export const Animated: Story = {
  render: () => (
    <Stack gap="md">
      <Skeleton height={50} animate />
      <Skeleton height={50} animate />
      <Skeleton height={50} animate />
    </Stack>
  ),
};
