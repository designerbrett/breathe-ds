import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumbs, Anchor } from '@mantine/core';
import { MantineProvider } from '@mantine/core';
import { Home, Users, ClipboardList } from 'lucide-react';
import { breatheMantineTheme } from '../theme';
import '@mantine/core/styles.css';

const meta = {
  title: 'Internal/Mantine/Breadcrumbs',
  component: Breadcrumbs,
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
        component: 'Mantine Breadcrumbs with Breathe theme. Page hierarchy navigation for desktop applications.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const items = [
      { title: 'Home', href: '#' },
      { title: 'Patients', href: '#' },
      { title: 'John Smith', href: '#' },
    ].map((item, index) => (
      <Anchor href={item.href} key={index} size="sm">
        {item.title}
      </Anchor>
    ));

    return <Breadcrumbs>{items}</Breadcrumbs>;
  },
};

export const CustomSeparator: Story = {
  render: () => {
    const items = [
      { title: 'Dashboard', href: '#' },
      { title: 'Settings', href: '#' },
      { title: 'Account', href: '#' },
    ].map((item, index) => (
      <Anchor href={item.href} key={index} size="sm">
        {item.title}
      </Anchor>
    ));

    return <Breadcrumbs separator="→">{items}</Breadcrumbs>;
  },
};

export const AllSeparators: Story = {
  render: () => {
    const items = [
      { title: 'Home', href: '#' },
      { title: 'Products', href: '#' },
      { title: 'Details', href: '#' },
    ].map((item, index) => (
      <Anchor href={item.href} key={index} size="sm">
        {item.title}
      </Anchor>
    ));

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Breadcrumbs separator="/">{items}</Breadcrumbs>
        <Breadcrumbs separator=">">{items}</Breadcrumbs>
        <Breadcrumbs separator="→">{items}</Breadcrumbs>
        <Breadcrumbs separator="•">{items}</Breadcrumbs>
        <Breadcrumbs separator="|">{items}</Breadcrumbs>
      </div>
    );
  },
};

export const HealthcarePatient: Story = {
  render: () => {
    const items = [
      { title: 'Dashboard', href: '#' },
      { title: 'Patients', href: '#' },
      { title: 'Active Patients', href: '#' },
      { title: 'John Smith (#12345)', href: '#' },
    ].map((item, index) => (
      <Anchor href={item.href} key={index} size="sm">
        {item.title}
      </Anchor>
    ));

    return <Breadcrumbs>{items}</Breadcrumbs>;
  },
};

export const HealthcareAppointment: Story = {
  render: () => {
    const items = [
      { title: 'Dashboard', href: '#' },
      { title: 'Appointments', href: '#' },
      { title: 'Today', href: '#' },
      { title: 'Appointment #5432', href: '#' },
    ].map((item, index) => (
      <Anchor href={item.href} key={index} size="sm">
        {item.title}
      </Anchor>
    ));

    return <Breadcrumbs separator="→">{items}</Breadcrumbs>;
  },
};

export const HealthcareMedicalRecord: Story = {
  render: () => {
    const items = [
      { title: 'Home', href: '#', icon: <Home size={14} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }} /> },
      { title: 'Patients', href: '#', icon: <Users size={14} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }} /> },
      { title: 'John Smith', href: '#' },
      { title: 'Medical Records', href: '#', icon: <ClipboardList size={14} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }} /> },
      { title: 'Lab Results', href: '#' },
    ].map((item, index) => (
      <Anchor href={item.href} key={index} size="sm">
        {item.icon}{item.title}
      </Anchor>
    ));

    return <Breadcrumbs>{items}</Breadcrumbs>;
  },
};

export const DeepNavigation: Story = {
  render: () => {
    const items = [
      { title: 'Dashboard', href: '#' },
      { title: 'Settings', href: '#' },
      { title: 'User Management', href: '#' },
      { title: 'Roles', href: '#' },
      { title: 'Healthcare Providers', href: '#' },
      { title: 'Edit Role', href: '#' },
    ].map((item, index) => (
      <Anchor href={item.href} key={index} size="sm">
        {item.title}
      </Anchor>
    ));

    return <Breadcrumbs>{items}</Breadcrumbs>;
  },
};

export const WithCurrentPage: Story = {
  render: () => {
    const items = [
      <Anchor href="#" key="1" size="sm">
        Dashboard
      </Anchor>,
      <Anchor href="#" key="2" size="sm">
        Patients
      </Anchor>,
      <span key="3" style={{ fontSize: '14px', color: '#868e96' }}>
        John Smith
      </span>,
    ];

    return <Breadcrumbs>{items}</Breadcrumbs>;
  },
};

export const ReportNavigation: Story = {
  render: () => {
    const items = [
      { title: 'Reports', href: '#' },
      { title: 'Financial', href: '#' },
      { title: 'Q4 2025', href: '#' },
      { title: 'Revenue Summary', href: '#' },
    ].map((item, index) => (
      <Anchor href={item.href} key={index} size="sm">
        {item.title}
      </Anchor>
    ));

    return <Breadcrumbs separator=">">{items}</Breadcrumbs>;
  },
};

export const AdminNavigation: Story = {
  render: () => {
    const items = [
      { title: 'Admin', href: '#' },
      { title: 'System Settings', href: '#' },
      { title: 'Integration', href: '#' },
      { title: 'API Keys', href: '#' },
    ].map((item, index) => (
      <Anchor href={item.href} key={index} size="sm">
        {item.title}
      </Anchor>
    ));

    return <Breadcrumbs separator="/">{items}</Breadcrumbs>;
  },
};

export const CompactStyle: Story = {
  render: () => {
    const items = [
      { title: 'Home', href: '#' },
      { title: 'Products', href: '#' },
      { title: 'Category', href: '#' },
      { title: 'Item', href: '#' },
    ].map((item, index) => (
      <Anchor href={item.href} key={index} size="xs" c="dimmed">
        {item.title}
      </Anchor>
    ));

    return <Breadcrumbs separator="•">{items}</Breadcrumbs>;
  },
};
