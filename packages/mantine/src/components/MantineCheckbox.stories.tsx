import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox, Stack, Group } from '@mantine/core';
import { MantineProvider } from '@mantine/core';
import { breatheMantineTheme } from '../theme';
import '@mantine/core/styles.css';

const meta = {
  title: 'Internal/Mantine/Checkbox',
  component: Checkbox,
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
        component: 'Mantine Checkbox with Breathe theme. Custom styled checkbox for desktop productivity tools.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'I agree to terms and conditions',
  },
};

export const WithDescription: Story = {
  args: {
    label: 'Enable notifications',
    description: 'Receive email updates about your account activity',
  },
};

export const Checked: Story = {
  args: {
    label: 'Checked by default',
    defaultChecked: true,
  },
};

export const Indeterminate: Story = {
  args: {
    label: 'Indeterminate state',
    indeterminate: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled checkbox',
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

export const WithError: Story = {
  args: {
    label: 'Accept terms',
    error: 'You must accept the terms to continue',
  },
};

export const AllStates: Story = {
  render: () => (
    <Stack gap="md">
      <Checkbox label="Default (unchecked)" />
      <Checkbox label="Checked" defaultChecked />
      <Checkbox label="Indeterminate" indeterminate />
      <Checkbox label="Disabled" disabled />
      <Checkbox label="Disabled & Checked" disabled checked />
      <Checkbox label="With Error" error="This field is required" />
    </Stack>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <Stack gap="md">
      <Checkbox label="Extra Small" size="xs" />
      <Checkbox label="Small" size="sm" />
      <Checkbox label="Medium (Default)" size="md" />
      <Checkbox label="Large" size="lg" />
      <Checkbox label="Extra Large" size="xl" />
    </Stack>
  ),
};

export const CheckboxGroup: Story = {
  render: () => (
    <Stack gap="lg">
      <div>
        <div style={{ fontSize: '14px', fontWeight: 600, marginBottom: '12px' }}>
          Select Features
        </div>
        <Stack gap="sm">
          <Checkbox label="Email notifications" defaultChecked />
          <Checkbox label="SMS alerts" />
          <Checkbox label="Push notifications" defaultChecked />
          <Checkbox label="Weekly digest" />
        </Stack>
      </div>
    </Stack>
  ),
};

export const HealthcareExample: Story = {
  render: () => (
    <Stack gap="lg" style={{ maxWidth: '500px' }}>
      <div>
        <div style={{ fontSize: '14px', fontWeight: 600, marginBottom: '12px' }}>
          Patient Consent Form
        </div>
        <Stack gap="sm">
          <Checkbox
            label="I consent to receive treatment"
            description="Required to proceed with appointment"
          />
          <Checkbox
            label="I authorize release of medical information"
            description="For insurance and billing purposes"
          />
          <Checkbox
            label="I agree to the privacy policy"
            description="View privacy policy"
          />
          <Checkbox label="I want to receive appointment reminders" />
        </Stack>
      </div>

      <div>
        <div style={{ fontSize: '14px', fontWeight: 600, marginBottom: '12px' }}>
          Medical History
        </div>
        <Stack gap="sm">
          <Checkbox label="Diabetes" />
          <Checkbox label="High Blood Pressure" />
          <Checkbox label="Heart Disease" />
          <Checkbox label="Asthma" />
          <Checkbox label="None of the above" />
        </Stack>
      </div>
    </Stack>
  ),
};

export const SelectAll: Story = {
  render: () => {
    const [checked, setChecked] = React.useState([false, false, false]);

    const allChecked = checked.every(Boolean);
    const indeterminate = checked.some(Boolean) && !allChecked;

    return (
      <Stack gap="md">
        <Checkbox
          label="Select All"
          checked={allChecked}
          indeterminate={indeterminate}
          onChange={() => {
            setChecked(allChecked ? [false, false, false] : [true, true, true]);
          }}
        />
        <Stack gap="sm" ml="xl">
          <Checkbox
            label="Option 1"
            checked={checked[0]}
            onChange={(event) => {
              const newChecked = [...checked];
              newChecked[0] = event.currentTarget.checked;
              setChecked(newChecked);
            }}
          />
          <Checkbox
            label="Option 2"
            checked={checked[1]}
            onChange={(event) => {
              const newChecked = [...checked];
              newChecked[1] = event.currentTarget.checked;
              setChecked(newChecked);
            }}
          />
          <Checkbox
            label="Option 3"
            checked={checked[2]}
            onChange={(event) => {
              const newChecked = [...checked];
              newChecked[2] = event.currentTarget.checked;
              setChecked(newChecked);
            }}
          />
        </Stack>
      </Stack>
    );
  },
};
