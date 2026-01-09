import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

const meta = {
  title: 'External/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Checkbox component for selection. Large touch targets (44px min), high contrast, clear visual states.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['default', 'large'],
      description: 'Checkbox size',
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
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'I agree to the terms and conditions',
  },
};

export const Checked: Story = {
  args: {
    label: 'Subscribe to newsletter',
    checked: true,
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Remember me',
    helperText: 'Stay logged in for 30 days',
  },
};

export const WithError: Story = {
  args: {
    label: 'I agree to the terms',
    error: 'You must agree to continue',
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
    label: 'Disabled checked option',
    disabled: true,
    checked: true,
  },
};

export const LargeSize: Story = {
  args: {
    label: 'Large checkbox',
    size: 'large',
  },
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '350px' }}>
      <Checkbox label="Unchecked" />
      <Checkbox label="Checked" checked />
      <Checkbox label="With helper text" helperText="This provides additional context" />
      <Checkbox label="With error" error="This field is required" />
      <Checkbox label="Disabled" disabled />
      <Checkbox label="Disabled checked" disabled checked />
    </div>
  ),
};

export const FormExample: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '350px', padding: '20px' }}>
      <h3 style={{ margin: 0, fontSize: '20px', fontWeight: 600 }}>Preferences</h3>

      <Checkbox
        label="Email notifications"
        helperText="Receive updates about your appointments"
      />

      <Checkbox
        label="SMS reminders"
        helperText="Get text reminders 24 hours before appointments"
      />

      <Checkbox
        label="Newsletter subscription"
        helperText="Monthly health tips and news"
      />

      <Checkbox
        label="Share data with care team"
        helperText="Allow your doctors to access your health data"
        checked
      />

      <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid #E8EDF2' }}>
        <Checkbox
          label="I agree to the privacy policy and terms of service"
          error="You must agree to continue"
        />
      </div>
    </div>
  ),
};

export const MultipleSelection: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '350px' }}>
      <h3 style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: 600 }}>
        Select your symptoms
      </h3>

      <Checkbox label="Headache" />
      <Checkbox label="Fever" checked />
      <Checkbox label="Cough" checked />
      <Checkbox label="Fatigue" />
      <Checkbox label="Shortness of breath" />
      <Checkbox label="Loss of taste or smell" />
    </div>
  ),
};
