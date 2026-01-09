import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton, SkeletonGroup } from './Skeleton';

const meta = {
  title: 'External/Feedback/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['text', 'rectangular', 'circular', 'rounded'],
      description: 'Visual variant of the skeleton',
    },
    animation: {
      control: 'radio',
      options: ['pulse', 'wave', 'none'],
      description: 'Animation type',
    },
    width: {
      control: 'text',
      description: 'Width (CSS value or number for px)',
    },
    height: {
      control: 'text',
      description: 'Height (CSS value or number for px)',
    },
  },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextDefault: Story = {
  args: {
    variant: 'text',
  },
};

export const TextCustomWidth: Story = {
  args: {
    variant: 'text',
    width: '60%',
  },
};

export const Rectangular: Story = {
  args: {
    variant: 'rectangular',
    width: '100%',
    height: 200,
  },
};

export const Circular: Story = {
  args: {
    variant: 'circular',
    width: 64,
    height: 64,
  },
};

export const Rounded: Story = {
  args: {
    variant: 'rounded',
    height: 150,
  },
};

export const WaveAnimation: Story = {
  args: {
    variant: 'rectangular',
    animation: 'wave',
    height: 100,
  },
};

export const NoAnimation: Story = {
  args: {
    variant: 'rectangular',
    animation: 'none',
    height: 100,
  },
};

export const TextGroup: Story = {
  render: () => (
    <SkeletonGroup count={5} spacing="small" />
  ),
};

export const MixedGroup: Story = {
  render: () => (
    <SkeletonGroup spacing="medium">
      <Skeleton variant="text" width="80%" />
      <Skeleton variant="text" width="60%" />
      <Skeleton variant="text" width="90%" />
      <Skeleton variant="rectangular" height={120} />
      <Skeleton variant="text" width="75%" />
    </SkeletonGroup>
  ),
};

export const CardSkeleton: Story = {
  render: () => (
    <div style={{
      border: '1px solid #E8EDF2',
      borderRadius: '12px',
      padding: '24px',
      maxWidth: '400px'
    }}>
      <SkeletonGroup spacing="medium">
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Skeleton variant="circular" width={48} height={48} />
          <div style={{ flex: 1 }}>
            <Skeleton variant="text" width="60%" />
            <Skeleton variant="text" width="40%" height={14} />
          </div>
        </div>
        <Skeleton variant="rectangular" height={200} />
        <Skeleton variant="text" />
        <Skeleton variant="text" width="90%" />
        <Skeleton variant="text" width="70%" />
      </SkeletonGroup>
    </div>
  ),
};

export const ProfileSkeleton: Story = {
  render: () => (
    <div style={{ maxWidth: '600px' }}>
      <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
        <Skeleton variant="circular" width={80} height={80} />
        <div style={{ flex: 1 }}>
          <Skeleton variant="text" width="50%" height={24} />
          <Skeleton variant="text" width="70%" height={16} />
          <div style={{ marginTop: '16px' }}>
            <Skeleton variant="text" width="100%" />
            <Skeleton variant="text" width="85%" />
            <Skeleton variant="text" width="60%" />
          </div>
        </div>
      </div>
    </div>
  ),
};

export const ListSkeleton: Story = {
  render: () => (
    <div style={{ maxWidth: '500px' }}>
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          style={{
            display: 'flex',
            gap: '16px',
            padding: '16px 0',
            borderBottom: index < 3 ? '1px solid #E8EDF2' : 'none'
          }}
        >
          <Skeleton variant="rounded" width={60} height={60} />
          <div style={{ flex: 1 }}>
            <Skeleton variant="text" width="80%" height={18} />
            <Skeleton variant="text" width="60%" height={14} />
            <Skeleton variant="text" width="40%" height={14} />
          </div>
        </div>
      ))}
    </div>
  ),
};

export const TableSkeleton: Story = {
  render: () => (
    <div style={{ width: '100%' }}>
      {/* Header */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '16px', padding: '16px', borderBottom: '2px solid #E8EDF2' }}>
        <Skeleton variant="text" width="60%" height={16} />
        <Skeleton variant="text" width="50%" height={16} />
        <Skeleton variant="text" width="50%" height={16} />
        <Skeleton variant="text" width="50%" height={16} />
      </div>
      {/* Rows */}
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          key={index}
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr 1fr',
            gap: '16px',
            padding: '16px',
            borderBottom: '1px solid #E8EDF2'
          }}
        >
          <Skeleton variant="text" width="80%" />
          <Skeleton variant="text" width="60%" />
          <Skeleton variant="text" width="70%" />
          <Skeleton variant="text" width="50%" />
        </div>
      ))}
    </div>
  ),
};

export const DashboardSkeleton: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={index}
          style={{
            border: '1px solid #E8EDF2',
            borderRadius: '12px',
            padding: '20px'
          }}
        >
          <Skeleton variant="text" width="40%" height={14} />
          <Skeleton variant="text" width="60%" height={32} style={{ marginTop: '8px' }} />
          <Skeleton variant="rectangular" height={80} style={{ marginTop: '16px' }} />
        </div>
      ))}
    </div>
  ),
};
