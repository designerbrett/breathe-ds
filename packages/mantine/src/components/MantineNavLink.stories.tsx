import type { Meta, StoryObj } from '@storybook/react';
import { NavLink, Stack } from '@mantine/core';
import { MantineProvider } from '@mantine/core';
import { Users, BarChart3, Lock, FileText, CheckCircle, ClipboardList, Calendar, MessageCircle, TrendingUp, Settings, Home, Inbox, CalendarDays, FolderOpen, Bell, Heart } from 'lucide-react';
import { breatheMantineTheme } from '../theme';
import '@mantine/core/styles.css';

const meta = {
  title: 'Internal/Mantine/NavLink',
  component: NavLink,
  decorators: [
    (Story) => (
      <MantineProvider theme={breatheMantineTheme}>
        <div style={{ maxWidth: '300px' }}>
          <Story />
        </div>
      </MantineProvider>
    ),
  ],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Mantine NavLink with Breathe theme. Primary app navigation for desktop productivity tools.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NavLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Dashboard',
    description: 'Overview of your account',
  },
};

export const WithIcon: Story = {
  args: {
    label: 'Patients',
    description: 'View patient records',
    leftSection: <Users size={16} />,
  },
};

export const Active: Story = {
  args: {
    label: 'Active Page',
    active: true,
    leftSection: <BarChart3 size={16} />,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Coming Soon',
    description: 'Feature in development',
    disabled: true,
    leftSection: <Lock size={16} />,
  },
};

export const AllStates: Story = {
  render: () => (
    <Stack gap={0}>
      <NavLink label="Default State" leftSection={<FileText size={16} />} />
      <NavLink
        label="Active State"
        leftSection={<CheckCircle size={16} />}
        active
      />
      <NavLink
        label="With Description"
        description="Additional context"
        leftSection={<FileText size={16} />}
      />
      <NavLink
        label="Disabled State"
        description="Not available"
        leftSection={<Lock size={16} />}
        disabled
      />
    </Stack>
  ),
};

export const HealthcareSidebar: Story = {
  render: () => {
    const [active, setActive] = React.useState('patients');

    return (
      <Stack gap={0}>
        <NavLink
          label="Dashboard"
          description="Overview and metrics"
          leftSection={<BarChart3 size={16} />}
          active={active === 'dashboard'}
          onClick={() => setActive('dashboard')}
        />
        <NavLink
          label="Patients"
          description="Patient records"
          leftSection={<Users size={16} />}
          active={active === 'patients'}
          onClick={() => setActive('patients')}
        />
        <NavLink
          label="Appointments"
          description="Manage schedule"
          leftSection={<Calendar size={16} />}
          active={active === 'appointments'}
          onClick={() => setActive('appointments')}
        />
        <NavLink
          label="Messages"
          description="Secure messaging"
          leftSection={<MessageCircle size={16} />}
          rightSection="3"
          active={active === 'messages'}
          onClick={() => setActive('messages')}
        />
        <NavLink
          label="Reports"
          description="Analytics and data"
          leftSection={<TrendingUp size={16} />}
          active={active === 'reports'}
          onClick={() => setActive('reports')}
        />
        <NavLink
          label="Settings"
          description="Account preferences"
          leftSection={<Settings size={16} />}
          active={active === 'settings'}
          onClick={() => setActive('settings')}
        />
      </Stack>
    );
  },
};

export const NestedNavigation: Story = {
  render: () => {
    const [opened, setOpened] = React.useState(true);

    return (
      <Stack gap={0}>
        <NavLink
          label="Patients"
          leftSection={<Users size={16} />}
          opened={opened}
          onClick={() => setOpened(!opened)}
        >
          <NavLink label="All Patients" />
          <NavLink label="Active" />
          <NavLink label="Inactive" />
          <NavLink label="New Patients" />
        </NavLink>

        <NavLink
          label="Appointments"
          leftSection={<Calendar size={16} />}
        >
          <NavLink label="Today" active />
          <NavLink label="Upcoming" />
          <NavLink label="Past" />
        </NavLink>

        <NavLink
          label="Reports"
          leftSection={<TrendingUp size={16} />}
        >
          <NavLink label="Financial" />
          <NavLink label="Clinical" />
          <NavLink label="Operational" />
        </NavLink>
      </Stack>
    );
  },
};

export const CompactSidebar: Story = {
  render: () => {
    const [active, setActive] = React.useState('home');

    return (
      <Stack gap={0} style={{ width: '250px' }}>
        <NavLink
          label="Home"
          leftSection={<Home size={16} />}
          active={active === 'home'}
          onClick={() => setActive('home')}
        />
        <NavLink
          label="Inbox"
          leftSection={<Inbox size={16} />}
          rightSection="12"
          active={active === 'inbox'}
          onClick={() => setActive('inbox')}
        />
        <NavLink
          label="Tasks"
          leftSection={<CheckCircle size={16} />}
          rightSection="5"
          active={active === 'tasks'}
          onClick={() => setActive('tasks')}
        />
        <NavLink
          label="Calendar"
          leftSection={<CalendarDays size={16} />}
          active={active === 'calendar'}
          onClick={() => setActive('calendar')}
        />
        <NavLink
          label="Files"
          leftSection={<FolderOpen size={16} />}
          active={active === 'files'}
          onClick={() => setActive('files')}
        />
        <NavLink
          label="Team"
          leftSection={<Users size={16} />}
          active={active === 'team'}
          onClick={() => setActive('team')}
        />
      </Stack>
    );
  },
};

export const WithColors: Story = {
  render: () => (
    <Stack gap={0}>
      <NavLink
        label="Blue (Default)"
        leftSection={<Heart size={16} />}
        active
        color="blue"
      />
      <NavLink
        label="Green"
        leftSection={<Heart size={16} />}
        active
        color="green"
      />
      <NavLink
        label="Red"
        leftSection={<Heart size={16} />}
        active
        color="red"
      />
      <NavLink
        label="Yellow"
        leftSection={<Heart size={16} />}
        active
        color="yellow"
      />
    </Stack>
  ),
};

export const WithBadges: Story = {
  render: () => (
    <Stack gap={0}>
      <NavLink
        label="Messages"
        description="Unread messages"
        leftSection={<MessageCircle size={16} />}
        rightSection="12"
      />
      <NavLink
        label="Notifications"
        description="New alerts"
        leftSection={<Bell size={16} />}
        rightSection="3"
      />
      <NavLink
        label="Tasks"
        description="Pending items"
        leftSection={<CheckCircle size={16} />}
        rightSection="7"
      />
      <NavLink
        label="Updates"
        description="System updates"
        leftSection={<Bell size={16} />}
        rightSection="NEW"
      />
    </Stack>
  ),
};
