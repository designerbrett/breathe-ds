import type { Meta, StoryObj } from '@storybook/react';
import { Alert, Stack } from '@mantine/core';
import { MantineProvider } from '@mantine/core';
import { Info as InfoIcon, CheckCircle, AlertTriangle, XCircle, Calendar, AlertCircle } from 'lucide-react';
import { breatheMantineTheme } from '../theme';
import '@mantine/core/styles.css';

const meta = {
  title: 'Internal/Mantine/Alert',
  component: Alert,
  decorators: [
    (Story) => (
      <MantineProvider theme={breatheMantineTheme}>
        <div style={{ maxWidth: '600px' }}>
          <Story />
        </div>
      </MantineProvider>
    ),
  ],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Mantine Alert (Banner) with Breathe theme. Important page-level messages for desktop applications.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Important Information',
    children: 'This is a default alert message.',
  },
};

export const Info: Story = {
  args: {
    variant: 'light',
    color: 'blue',
    title: 'Information',
    children: 'Here is some helpful information for you to know.',
  },
};

export const Success: Story = {
  args: {
    variant: 'light',
    color: 'green',
    title: 'Success',
    children: 'Your changes have been saved successfully.',
  },
};

export const Warning: Story = {
  args: {
    variant: 'light',
    color: 'yellow',
    title: 'Warning',
    children: 'Please review your information before proceeding.',
  },
};

export const Error: Story = {
  args: {
    variant: 'light',
    color: 'red',
    title: 'Error',
    children: 'An error occurred while processing your request.',
  },
};

export const AllVariants: Story = {
  render: () => (
    <Stack gap="md">
      <Alert variant="light" color="blue" title="Info">
        This is an informational message
      </Alert>
      <Alert variant="light" color="green" title="Success">
        Operation completed successfully
      </Alert>
      <Alert variant="light" color="yellow" title="Warning">
        Please be cautious with this action
      </Alert>
      <Alert variant="light" color="red" title="Error">
        Something went wrong
      </Alert>
    </Stack>
  ),
};

export const AllStyles: Story = {
  render: () => (
    <Stack gap="md">
      <Alert variant="light" color="blue" title="Light Variant">
        Subtle background with colored text
      </Alert>
      <Alert variant="filled" color="blue" title="Filled Variant">
        Solid background with white text
      </Alert>
      <Alert variant="outline" color="blue" title="Outline Variant">
        Outlined border with colored text
      </Alert>
    </Stack>
  ),
};

export const WithoutTitle: Story = {
  render: () => (
    <Stack gap="md">
      <Alert variant="light" color="blue">
        Simple info message without a title
      </Alert>
      <Alert variant="light" color="green">
        Success message without a title
      </Alert>
      <Alert variant="light" color="red">
        Error message without a title
      </Alert>
    </Stack>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <Stack gap="md">
      <Alert variant="light" color="blue" title="Info" icon={<InfoIcon size={20} />}>
        Important information with an icon
      </Alert>
      <Alert variant="light" color="green" title="Success" icon={<CheckCircle size={20} />}>
        Operation completed successfully
      </Alert>
      <Alert variant="light" color="yellow" title="Warning" icon={<AlertTriangle size={20} />}>
        Please review before continuing
      </Alert>
      <Alert variant="light" color="red" title="Error" icon={<XCircle size={20} />}>
        An error has occurred
      </Alert>
    </Stack>
  ),
};

export const Closable: Story = {
  render: () => {
    const [visible, setVisible] = React.useState(true);

    return visible ? (
      <Alert
        variant="light"
        color="blue"
        title="Dismissible Alert"
        withCloseButton
        onClose={() => setVisible(false)}
      >
        You can close this alert by clicking the X button
      </Alert>
    ) : (
      <div style={{ padding: '20px', textAlign: 'center', color: '#868e96' }}>
        Alert has been dismissed
      </div>
    );
  },
};

export const HealthcareExamples: Story = {
  render: () => (
    <Stack gap="md">
      <Alert variant="light" color="blue" title="Upcoming Appointment" icon={<Calendar size={20} />}>
        Patient John Smith has an appointment scheduled for tomorrow at 2:00 PM
      </Alert>

      <Alert variant="light" color="green" title="Lab Results Ready" icon={<CheckCircle size={20} />}>
        Lab results for Patient #12345 are now available for review
      </Alert>

      <Alert variant="light" color="yellow" title="Missing Information" icon={<AlertTriangle size={20} />}>
        Patient record is incomplete. Please update insurance information
      </Alert>

      <Alert variant="light" color="red" title="Critical Alert" icon={<AlertCircle size={20} />}>
        Patient requires immediate attention. Vital signs outside normal range
      </Alert>

      <Alert variant="filled" color="blue" title="System Maintenance">
        The system will be undergoing scheduled maintenance tonight from 11 PM
        to 2 AM
      </Alert>
    </Stack>
  ),
};

export const PageBanners: Story = {
  render: () => (
    <Stack gap="lg">
      <div>
        <Alert variant="light" color="blue" title="New Feature Available">
          We've added a new patient portal feature. Learn more about sending
          secure messages to your patients.
        </Alert>
      </div>

      <div>
        <Alert variant="light" color="yellow" title="Action Required">
          Your medical license needs to be renewed. Please upload updated
          credentials by end of month.
        </Alert>
      </div>

      <div>
        <Alert variant="light" color="green" title="All Systems Operational" icon={<CheckCircle size={20} />}>
          All services are running normally. Last checked: 2 minutes ago
        </Alert>
      </div>
    </Stack>
  ),
};

export const InlineAlerts: Story = {
  render: () => (
    <Stack gap="md">
      <Alert variant="light" color="blue" withCloseButton>
        Your session will expire in 5 minutes
      </Alert>

      <Alert variant="light" color="yellow" withCloseButton>
        You have 3 pending approvals
      </Alert>

      <Alert variant="light" color="red" withCloseButton>
        Failed to sync data. Retrying...
      </Alert>
    </Stack>
  ),
};
