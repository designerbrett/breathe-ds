import type { Meta, StoryObj } from '@storybook/react';
import { Avatar, Group } from '@mantine/core';
import { MantineProvider } from '@mantine/core';
import { breatheMantineTheme } from '../theme';
import '@mantine/core/styles.css';

const meta = {
  title: 'Internal/Mantine/Avatar',
  component: Avatar,
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
        component: 'Mantine Avatar with Breathe theme. Profile pictures with initials for desktop applications.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'JS',
  },
};

export const WithInitials: Story = {
  render: () => (
    <Group gap="md">
      <Avatar color="blue">JS</Avatar>
      <Avatar color="green">AB</Avatar>
      <Avatar color="red">CD</Avatar>
      <Avatar color="yellow">EF</Avatar>
    </Group>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <Group gap="md" align="center">
      <Avatar size="xs">XS</Avatar>
      <Avatar size="sm">SM</Avatar>
      <Avatar size="md">MD</Avatar>
      <Avatar size="lg">LG</Avatar>
      <Avatar size="xl">XL</Avatar>
    </Group>
  ),
};

export const AllColors: Story = {
  render: () => (
    <Group gap="md">
      <Avatar color="blue">JS</Avatar>
      <Avatar color="green">AB</Avatar>
      <Avatar color="red">CD</Avatar>
      <Avatar color="yellow">EF</Avatar>
      <Avatar color="gray">GH</Avatar>
    </Group>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <Group gap="md">
      <Avatar variant="filled">JS</Avatar>
      <Avatar variant="light">JS</Avatar>
      <Avatar variant="outline">JS</Avatar>
    </Group>
  ),
};

export const HealthcareTeam: Story = {
  render: () => (
    <Group gap="md">
      <Avatar color="blue">DS</Avatar>
      <Avatar color="green">SJ</Avatar>
      <Avatar color="purple">MK</Avatar>
      <Avatar color="orange">RW</Avatar>
    </Group>
  ),
};

export const PatientAvatars: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Avatar color="blue" size="md">JS</Avatar>
        <div>
          <div style={{ fontSize: '14px', fontWeight: 600 }}>John Smith</div>
          <div style={{ fontSize: '12px', color: '#868e96' }}>Patient #12345</div>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Avatar color="green" size="md">JD</Avatar>
        <div>
          <div style={{ fontSize: '14px', fontWeight: 600 }}>Jane Doe</div>
          <div style={{ fontSize: '12px', color: '#868e96' }}>Patient #12346</div>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Avatar color="purple" size="md">BJ</Avatar>
        <div>
          <div style={{ fontSize: '14px', fontWeight: 600 }}>Bob Johnson</div>
          <div style={{ fontSize: '12px', color: '#868e96' }}>Patient #12347</div>
        </div>
      </div>
    </div>
  ),
};

export const AvatarGroup: Story = {
  render: () => (
    <Avatar.Group>
      <Avatar>JS</Avatar>
      <Avatar>AB</Avatar>
      <Avatar>CD</Avatar>
      <Avatar>+3</Avatar>
    </Avatar.Group>
  ),
};

export const UserMenu: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
      <Avatar color="blue" size="sm">SJ</Avatar>
      <div style={{ fontSize: '14px' }}>Dr. Sarah Johnson</div>
    </div>
  ),
};
