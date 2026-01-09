import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Toggle } from './Toggle';

const meta = {
  title: 'External/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Toggle switch for binary on/off states. Large touch targets, smooth animation, clear visual feedback.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['default', 'large'],
      description: 'Toggle size',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    checked: {
      control: 'boolean',
      description: 'Checked state',
    },
  },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Enable notifications',
  },
};

export const Checked: Story = {
  args: {
    label: 'Email notifications',
    checked: true,
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'SMS reminders',
    helperText: 'Receive text message reminders for appointments',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled option',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Disabled checked',
    disabled: true,
    checked: true,
  },
};

export const LargeSize: Story = {
  args: {
    label: 'Large toggle',
    size: 'large',
  },
};

export const Interactive: Story = {
  render: () => {
    const [enabled, setEnabled] = useState(true);

    return (
      <div style={{ width: '350px' }}>
        <Toggle
          label="Notifications"
          helperText={enabled ? 'You will receive notifications' : 'Notifications are disabled'}
          checked={enabled}
          onChange={(e) => setEnabled(e.target.checked)}
        />
      </div>
    );
  },
};

export const SettingsGroup: Story = {
  render: () => {
    const [settings, setSettings] = useState({
      email: true,
      sms: false,
      push: true,
      newsletter: false,
    });

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '350px', padding: '20px' }}>
        <h3 style={{ margin: 0, fontSize: '20px', fontWeight: 600 }}>
          Notification Settings
        </h3>

        <Toggle
          label="Email notifications"
          helperText="Receive appointment reminders via email"
          checked={settings.email}
          onChange={(e) => setSettings({ ...settings, email: e.target.checked })}
        />

        <Toggle
          label="SMS reminders"
          helperText="Get text message reminders 24 hours before"
          checked={settings.sms}
          onChange={(e) => setSettings({ ...settings, sms: e.target.checked })}
        />

        <Toggle
          label="Push notifications"
          helperText="Receive notifications on your mobile device"
          checked={settings.push}
          onChange={(e) => setSettings({ ...settings, push: e.target.checked })}
        />

        <div style={{ borderTop: '1px solid #E8EDF2', paddingTop: '24px' }}>
          <Toggle
            label="Monthly newsletter"
            helperText="Health tips and wellness information"
            checked={settings.newsletter}
            onChange={(e) => setSettings({ ...settings, newsletter: e.target.checked })}
          />
        </div>

        <div style={{ marginTop: '16px', padding: '16px', background: '#F8FAFB', borderRadius: '12px', fontSize: '14px' }}>
          <strong>Active:</strong>{' '}
          {Object.entries(settings)
            .filter(([_, value]) => value)
            .map(([key]) => key)
            .join(', ') || 'None'}
        </div>
      </div>
    );
  },
};

export const PrivacySettings: Story = {
  render: () => {
    const [privacy, setPrivacy] = useState({
      shareData: true,
      analytics: false,
      marketing: false,
    });

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '350px' }}>
        <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 600 }}>
          Privacy Preferences
        </h3>

        <Toggle
          label="Share data with care team"
          helperText="Allow your healthcare providers to access your health data"
          checked={privacy.shareData}
          onChange={(e) => setPrivacy({ ...privacy, shareData: e.target.checked })}
        />

        <Toggle
          label="Usage analytics"
          helperText="Help us improve the app with anonymous usage data"
          checked={privacy.analytics}
          onChange={(e) => setPrivacy({ ...privacy, analytics: e.target.checked })}
        />

        <Toggle
          label="Marketing communications"
          helperText="Receive information about new services and features"
          checked={privacy.marketing}
          onChange={(e) => setPrivacy({ ...privacy, marketing: e.target.checked })}
        />
      </div>
    );
  },
};
