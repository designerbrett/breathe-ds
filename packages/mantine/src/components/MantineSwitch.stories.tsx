import type { Meta, StoryObj } from '@storybook/react';
import { Switch, Stack, Group } from '@mantine/core';
import { MantineProvider } from '@mantine/core';
import { breatheMantineTheme } from '../theme';
import '@mantine/core/styles.css';

const meta = {
  title: 'Internal/Mantine/Switch',
  component: Switch,
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
        component: 'Mantine Switch with Breathe theme. Smooth animated toggle switch for desktop productivity tools.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Enable notifications',
  },
};

export const WithDescription: Story = {
  args: {
    label: 'Email notifications',
    description: 'Receive updates about your account activity',
  },
};

export const Checked: Story = {
  args: {
    label: 'Enabled by default',
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled switch',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Disabled and checked',
    disabled: true,
    checked: true,
  },
};

export const WithOnLabel: Story = {
  args: {
    label: 'Wi-Fi',
    onLabel: 'ON',
    offLabel: 'OFF',
  },
};

export const AllStates: Story = {
  render: () => (
    <Stack gap="md">
      <Switch label="Default (off)" />
      <Switch label="Checked (on)" defaultChecked />
      <Switch label="Disabled (off)" disabled />
      <Switch label="Disabled (on)" disabled checked />
      <Switch label="With description" description="Additional context" />
      <Switch
        label="With labels"
        onLabel="ON"
        offLabel="OFF"
      />
    </Stack>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <Stack gap="md">
      <Switch label="Extra Small" size="xs" />
      <Switch label="Small" size="sm" />
      <Switch label="Medium (Default)" size="md" />
      <Switch label="Large" size="lg" />
      <Switch label="Extra Large" size="xl" />
    </Stack>
  ),
};

export const AllColors: Story = {
  render: () => (
    <Stack gap="md">
      <Switch label="Blue (Default)" defaultChecked color="blue" />
      <Switch label="Green" defaultChecked color="green" />
      <Switch label="Red" defaultChecked color="red" />
      <Switch label="Yellow" defaultChecked color="yellow" />
      <Switch label="Gray" defaultChecked color="gray" />
    </Stack>
  ),
};

export const SettingsPanel: Story = {
  render: () => {
    const [emailNotifications, setEmailNotifications] = React.useState(true);
    const [smsAlerts, setSmsAlerts] = React.useState(false);
    const [pushNotifications, setPushNotifications] = React.useState(true);
    const [newsletter, setNewsletter] = React.useState(false);

    return (
      <Stack gap="lg" style={{ maxWidth: '400px' }}>
        <div>
          <div style={{ fontSize: '14px', fontWeight: 600, marginBottom: '12px' }}>
            Notification Preferences
          </div>
          <Stack gap="sm">
            <Switch
              label="Email Notifications"
              description="Receive important updates via email"
              checked={emailNotifications}
              onChange={(event) => setEmailNotifications(event.currentTarget.checked)}
            />
            <Switch
              label="SMS Alerts"
              description="Get text messages for urgent updates"
              checked={smsAlerts}
              onChange={(event) => setSmsAlerts(event.currentTarget.checked)}
            />
            <Switch
              label="Push Notifications"
              description="Browser notifications for activity"
              checked={pushNotifications}
              onChange={(event) => setPushNotifications(event.currentTarget.checked)}
            />
            <Switch
              label="Weekly Newsletter"
              description="Summary of your weekly activity"
              checked={newsletter}
              onChange={(event) => setNewsletter(event.currentTarget.checked)}
            />
          </Stack>
        </div>
      </Stack>
    );
  },
};

export const HealthcareExample: Story = {
  render: () => {
    const [autoReminders, setAutoReminders] = React.useState(true);
    const [shareWithProvider, setShareWithProvider] = React.useState(true);
    const [showHistory, setShowHistory] = React.useState(false);
    const [allowMessages, setAllowMessages] = React.useState(true);

    return (
      <Stack gap="lg" style={{ maxWidth: '500px' }}>
        <div>
          <div style={{ fontSize: '14px', fontWeight: 600, marginBottom: '12px' }}>
            Appointment Settings
          </div>
          <Stack gap="sm">
            <Switch
              label="Automatic Reminders"
              description="Receive reminders 24 hours before appointments"
              checked={autoReminders}
              onChange={(event) => setAutoReminders(event.currentTarget.checked)}
            />
            <Switch
              label="Share Health Data"
              description="Allow provider access to health tracking data"
              checked={shareWithProvider}
              onChange={(event) => setShareWithProvider(event.currentTarget.checked)}
            />
          </Stack>
        </div>

        <div>
          <div style={{ fontSize: '14px', fontWeight: 600, marginBottom: '12px' }}>
            Portal Settings
          </div>
          <Stack gap="sm">
            <Switch
              label="Show Medical History"
              description="Display complete medical history in portal"
              checked={showHistory}
              onChange={(event) => setShowHistory(event.currentTarget.checked)}
            />
            <Switch
              label="Allow Secure Messages"
              description="Enable messaging with healthcare providers"
              checked={allowMessages}
              onChange={(event) => setAllowMessages(event.currentTarget.checked)}
            />
          </Stack>
        </div>
      </Stack>
    );
  },
};

export const CompactGroup: Story = {
  render: () => (
    <Group gap="lg">
      <Switch label="Feature A" size="sm" defaultChecked />
      <Switch label="Feature B" size="sm" />
      <Switch label="Feature C" size="sm" defaultChecked />
    </Group>
  ),
};
