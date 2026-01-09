import type { Meta, StoryObj } from '@storybook/react';
import { Menu, Button, Text } from '@mantine/core';
import { MantineProvider } from '@mantine/core';
import { Edit, Copy, Share, Trash2, File, FolderOpen, Save, Download, BarChart3, DoorOpen, User, ClipboardList, MessageCircle, Phone, Mail, Calendar, FileText, Settings, Bell, HelpCircle, Eye, CheckCircle, XCircle } from 'lucide-react';
import { breatheMantineTheme } from '../theme';
import '@mantine/core/styles.css';

const meta = {
  title: 'Internal/Mantine/Menu',
  component: Menu,
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
        component: 'Mantine Menu with Breathe theme. Action menus with keyboard navigation for desktop applications.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Menu>
      <Menu.Target>
        <Button>Open Menu</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item>Edit</Menu.Item>
        <Menu.Item>Copy</Menu.Item>
        <Menu.Item>Delete</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <Menu>
      <Menu.Target>
        <Button>Actions</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item leftSection={<Edit size={16} />}>Edit</Menu.Item>
        <Menu.Item leftSection={<Copy size={16} />}>Copy</Menu.Item>
        <Menu.Item leftSection={<Share size={16} />}>Share</Menu.Item>
        <Menu.Item leftSection={<Trash2 size={16} />} color="red">
          Delete
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  ),
};

export const WithLabelsAndDividers: Story = {
  render: () => (
    <Menu>
      <Menu.Target>
        <Button>File Menu</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>File Actions</Menu.Label>
        <Menu.Item leftSection={<File size={16} />}>New File</Menu.Item>
        <Menu.Item leftSection={<FolderOpen size={16} />}>Open File</Menu.Item>
        <Menu.Item leftSection={<Save size={16} />}>Save</Menu.Item>

        <Menu.Divider />

        <Menu.Label>Export</Menu.Label>
        <Menu.Item leftSection={<Download size={16} />}>Export as PDF</Menu.Item>
        <Menu.Item leftSection={<BarChart3 size={16} />}>Export as CSV</Menu.Item>

        <Menu.Divider />

        <Menu.Item leftSection={<DoorOpen size={16} />} color="red">
          Close
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  ),
};

export const WithDisabledItems: Story = {
  render: () => (
    <Menu>
      <Menu.Target>
        <Button>Options</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item>Available Action</Menu.Item>
        <Menu.Item disabled>Disabled Action</Menu.Item>
        <Menu.Item>Another Action</Menu.Item>
        <Menu.Item disabled>Also Disabled</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  ),
};

export const AllPositions: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Menu position="bottom">
        <Menu.Target>
          <Button size="sm">Bottom</Button>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item>Option 1</Menu.Item>
          <Menu.Item>Option 2</Menu.Item>
        </Menu.Dropdown>
      </Menu>

      <Menu position="top">
        <Menu.Target>
          <Button size="sm">Top</Button>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item>Option 1</Menu.Item>
          <Menu.Item>Option 2</Menu.Item>
        </Menu.Dropdown>
      </Menu>

      <Menu position="left">
        <Menu.Target>
          <Button size="sm">Left</Button>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item>Option 1</Menu.Item>
          <Menu.Item>Option 2</Menu.Item>
        </Menu.Dropdown>
      </Menu>

      <Menu position="right">
        <Menu.Target>
          <Button size="sm">Right</Button>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item>Option 1</Menu.Item>
          <Menu.Item>Option 2</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
  ),
};

export const HealthcarePatientMenu: Story = {
  render: () => (
    <Menu>
      <Menu.Target>
        <Button>Patient Actions</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Patient Record</Menu.Label>
        <Menu.Item leftSection={<User size={16} />}>View Profile</Menu.Item>
        <Menu.Item leftSection={<Edit size={16} />}>Edit Details</Menu.Item>
        <Menu.Item leftSection={<ClipboardList size={16} />}>Medical History</Menu.Item>

        <Menu.Divider />

        <Menu.Label>Communication</Menu.Label>
        <Menu.Item leftSection={<MessageCircle size={16} />}>Send Message</Menu.Item>
        <Menu.Item leftSection={<Phone size={16} />}>Call Patient</Menu.Item>
        <Menu.Item leftSection={<Mail size={16} />}>Send Email</Menu.Item>

        <Menu.Divider />

        <Menu.Label>Actions</Menu.Label>
        <Menu.Item leftSection={<Calendar size={16} />}>Schedule Appointment</Menu.Item>
        <Menu.Item leftSection={<FileText size={16} />}>Generate Report</Menu.Item>
        <Menu.Item leftSection={<Download size={16} />}>Export Data</Menu.Item>

        <Menu.Divider />

        <Menu.Item leftSection={<Trash2 size={16} />} color="red">
          Archive Patient
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  ),
};

export const AppointmentMenu: Story = {
  render: () => (
    <Menu>
      <Menu.Target>
        <Button variant="subtle">⋮</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item leftSection={<CheckCircle size={16} />} color="green">
          Mark as Completed
        </Menu.Item>
        <Menu.Item leftSection={<Edit size={16} />}>Reschedule</Menu.Item>
        <Menu.Item leftSection={<User size={16} />}>Change Provider</Menu.Item>
        <Menu.Item leftSection={<FileText size={16} />}>Add Notes</Menu.Item>

        <Menu.Divider />

        <Menu.Item leftSection={<XCircle size={16} />} color="red">
          Cancel Appointment
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  ),
};

export const UserMenu: Story = {
  render: () => (
    <Menu>
      <Menu.Target>
        <Button variant="light">
          Dr. Sarah Johnson ▾
        </Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Account</Menu.Label>
        <Menu.Item leftSection={<User size={16} />}>Profile</Menu.Item>
        <Menu.Item leftSection={<Settings size={16} />}>Settings</Menu.Item>
        <Menu.Item leftSection={<Bell size={16} />}>Notifications</Menu.Item>

        <Menu.Divider />

        <Menu.Label>Support</Menu.Label>
        <Menu.Item leftSection={<HelpCircle size={16} />}>Help Center</Menu.Item>
        <Menu.Item leftSection={<MessageCircle size={16} />}>Contact Support</Menu.Item>

        <Menu.Divider />

        <Menu.Item leftSection={<DoorOpen size={16} />} color="red">
          Sign Out
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  ),
};

export const ContextMenu: Story = {
  render: () => (
    <div>
      <Text size="sm" mb="sm" c="dimmed">
        Right-click the button below
      </Text>
      <Menu trigger="click-hover">
        <Menu.Target>
          <Button>Right-click me</Button>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Item>Cut</Menu.Item>
          <Menu.Item>Copy</Menu.Item>
          <Menu.Item>Paste</Menu.Item>
          <Menu.Divider />
          <Menu.Item color="red">Delete</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
  ),
};

export const TableRowActions: Story = {
  render: () => (
    <div
      style={{
        border: '1px solid #e9ecef',
        borderRadius: '8px',
        padding: '16px',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '12px',
          borderBottom: '1px solid #e9ecef',
        }}
      >
        <div>
          <Text size="sm" fw={500}>
            John Smith - #12345
          </Text>
          <Text size="xs" c="dimmed">
            Last visit: 12/15/2025
          </Text>
        </div>
        <Menu>
          <Menu.Target>
            <Button variant="subtle" size="xs">
              Actions ▾
            </Button>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Item leftSection={<Eye size={16} />}>View Details</Menu.Item>
            <Menu.Item leftSection={<Edit size={16} />}>Edit</Menu.Item>
            <Menu.Item leftSection={<Calendar size={16} />}>Schedule</Menu.Item>
            <Menu.Divider />
            <Menu.Item leftSection={<Trash2 size={16} />} color="red">
              Delete
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </div>
    </div>
  ),
};
