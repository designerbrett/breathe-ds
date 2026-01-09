import type { Meta, StoryObj } from '@storybook/react';
import { Radio, Stack } from '@mantine/core';
import { MantineProvider } from '@mantine/core';
import { breatheMantineTheme } from '../theme';
import '@mantine/core/styles.css';

const meta = {
  title: 'Internal/Mantine/Radio',
  component: Radio,
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
        component: 'Mantine Radio with Breathe theme. Custom styled radio buttons for desktop productivity tools.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Single radio option',
    value: 'option1',
  },
};

export const WithDescription: Story = {
  args: {
    label: 'Premium Plan',
    description: '$29/month with all features included',
    value: 'premium',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled option',
    disabled: true,
    value: 'disabled',
  },
};

export const RadioGroup: Story = {
  render: () => {
    const [value, setValue] = React.useState('react');

    return (
      <Radio.Group
        value={value}
        onChange={setValue}
        label="Select your favorite framework"
        description="This will be used for project recommendations"
      >
        <Stack gap="sm" mt="xs">
          <Radio value="react" label="React" />
          <Radio value="vue" label="Vue" />
          <Radio value="angular" label="Angular" />
          <Radio value="svelte" label="Svelte" />
        </Stack>
      </Radio.Group>
    );
  },
};

export const AllStates: Story = {
  render: () => (
    <Stack gap="md">
      <Radio label="Default (unselected)" value="1" />
      <Radio label="Selected" value="2" checked readOnly />
      <Radio label="Disabled" value="3" disabled />
      <Radio label="Disabled & Selected" value="4" disabled checked readOnly />
      <Radio
        label="With Description"
        description="Additional context for this option"
        value="5"
      />
    </Stack>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <Stack gap="md">
      <Radio label="Extra Small" size="xs" value="xs" />
      <Radio label="Small" size="sm" value="sm" />
      <Radio label="Medium (Default)" size="md" value="md" />
      <Radio label="Large" size="lg" value="lg" />
      <Radio label="Extra Large" size="xl" value="xl" />
    </Stack>
  ),
};

export const WithError: Story = {
  render: () => (
    <Radio.Group
      label="Select payment method"
      description="Choose how you want to pay"
      error="Please select a payment method"
    >
      <Stack gap="sm" mt="xs">
        <Radio value="credit" label="Credit Card" />
        <Radio value="debit" label="Debit Card" />
        <Radio value="paypal" label="PayPal" />
      </Stack>
    </Radio.Group>
  ),
};

export const HealthcareExample: Story = {
  render: () => {
    const [appointmentType, setAppointmentType] = React.useState('');
    const [priority, setPriority] = React.useState('normal');

    return (
      <Stack gap="xl" style={{ maxWidth: '500px' }}>
        <Radio.Group
          value={appointmentType}
          onChange={setAppointmentType}
          label="Appointment Type"
          description="Select the type of appointment you need"
          required
        >
          <Stack gap="sm" mt="xs">
            <Radio
              value="checkup"
              label="Annual Check-up"
              description="Routine health screening"
            />
            <Radio
              value="followup"
              label="Follow-up Visit"
              description="Review previous treatment"
            />
            <Radio
              value="urgent"
              label="Urgent Care"
              description="Immediate medical attention needed"
            />
            <Radio
              value="specialist"
              label="Specialist Consultation"
              description="See a medical specialist"
            />
          </Stack>
        </Radio.Group>

        <Radio.Group
          value={priority}
          onChange={setPriority}
          label="Priority Level"
          description="How urgent is your appointment?"
        >
          <Stack gap="sm" mt="xs">
            <Radio value="urgent" label="Urgent - Within 24 hours" />
            <Radio value="high" label="High - Within 3 days" />
            <Radio value="normal" label="Normal - Within 2 weeks" />
            <Radio value="low" label="Low - Flexible timing" />
          </Stack>
        </Radio.Group>
      </Stack>
    );
  },
};

export const PreferenceSelection: Story = {
  render: () => {
    const [communication, setCommunication] = React.useState('email');
    const [language, setLanguage] = React.useState('en');

    return (
      <Stack gap="xl" style={{ maxWidth: '500px' }}>
        <Radio.Group
          value={communication}
          onChange={setCommunication}
          label="Preferred Communication Method"
          description="How would you like us to contact you?"
        >
          <Stack gap="sm" mt="xs">
            <Radio value="email" label="Email" />
            <Radio value="phone" label="Phone Call" />
            <Radio value="sms" label="Text Message" />
            <Radio value="portal" label="Patient Portal" />
          </Stack>
        </Radio.Group>

        <Radio.Group
          value={language}
          onChange={setLanguage}
          label="Preferred Language"
        >
          <Stack gap="sm" mt="xs">
            <Radio value="en" label="English" />
            <Radio value="es" label="Español (Spanish)" />
            <Radio value="zh" label="中文 (Chinese)" />
            <Radio value="other" label="Other" />
          </Stack>
        </Radio.Group>
      </Stack>
    );
  },
};
