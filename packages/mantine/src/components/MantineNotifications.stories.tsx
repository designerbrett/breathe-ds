import type { Meta, StoryObj } from '@storybook/react';
import { Button, Stack, Group, Text } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { Info, CheckCircle, AlertTriangle, XCircle, Calendar, TestTube, AlertCircle, Pill } from 'lucide-react';
import { breatheMantineTheme } from '../theme';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';

const meta = {
  title: 'Internal/Mantine/Notifications',
  component: Notifications,
  decorators: [
    (Story) => (
      <MantineProvider theme={breatheMantineTheme}>
        <Notifications />
        <Story />
      </MantineProvider>
    ),
  ],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Mantine Notifications (Toast) with Breathe theme. Temporary notifications with auto-dismiss and positioning.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Notifications>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Button
      onClick={() =>
        notifications.show({
          title: 'Default notification',
          message: 'This is a default notification message',
        })
      }
    >
      Show notification
    </Button>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <Stack gap="md">
      <Button
        onClick={() =>
          notifications.show({
            color: 'blue',
            title: 'Info',
            message: 'This is an informational notification',
          })
        }
      >
        Show Info
      </Button>

      <Button
        onClick={() =>
          notifications.show({
            color: 'green',
            title: 'Success',
            message: 'Your changes have been saved successfully',
          })
        }
      >
        Show Success
      </Button>

      <Button
        onClick={() =>
          notifications.show({
            color: 'yellow',
            title: 'Warning',
            message: 'Please review your information',
          })
        }
      >
        Show Warning
      </Button>

      <Button
        onClick={() =>
          notifications.show({
            color: 'red',
            title: 'Error',
            message: 'An error occurred while processing your request',
          })
        }
      >
        Show Error
      </Button>
    </Stack>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <Stack gap="md">
      <Button
        onClick={() =>
          notifications.show({
            color: 'blue',
            title: 'Info',
            message: 'New information available',
            icon: <Info size={20} />,
          })
        }
      >
        Info with Icon
      </Button>

      <Button
        onClick={() =>
          notifications.show({
            color: 'green',
            title: 'Success',
            message: 'Operation completed',
            icon: <CheckCircle size={20} />,
          })
        }
      >
        Success with Icon
      </Button>

      <Button
        onClick={() =>
          notifications.show({
            color: 'yellow',
            title: 'Warning',
            message: 'Action required',
            icon: <AlertTriangle size={20} />,
          })
        }
      >
        Warning with Icon
      </Button>

      <Button
        onClick={() =>
          notifications.show({
            color: 'red',
            title: 'Error',
            message: 'Something went wrong',
            icon: <XCircle size={20} />,
          })
        }
      >
        Error with Icon
      </Button>
    </Stack>
  ),
};

export const AutoClose: Story = {
  render: () => (
    <Group gap="md">
      <Button
        onClick={() =>
          notifications.show({
            title: 'Quick dismiss',
            message: 'This will auto-close in 2 seconds',
            autoClose: 2000,
          })
        }
      >
        2 seconds
      </Button>

      <Button
        onClick={() =>
          notifications.show({
            title: 'Medium dismiss',
            message: 'This will auto-close in 5 seconds',
            autoClose: 5000,
          })
        }
      >
        5 seconds
      </Button>

      <Button
        onClick={() =>
          notifications.show({
            title: 'No auto-close',
            message: 'This will stay until manually dismissed',
            autoClose: false,
          })
        }
      >
        Manual dismiss
      </Button>
    </Group>
  ),
};

export const WithLoading: Story = {
  render: () => (
    <Button
      onClick={() =>
        notifications.show({
          id: 'load-data',
          loading: true,
          title: 'Loading data',
          message: 'Please wait while we fetch your data...',
          autoClose: false,
          withCloseButton: false,
        })
      }
    >
      Show Loading
    </Button>
  ),
};

export const UpdateNotification: Story = {
  render: () => (
    <Button
      onClick={() => {
        notifications.show({
          id: 'update-example',
          loading: true,
          title: 'Uploading file',
          message: 'Please wait...',
          autoClose: false,
          withCloseButton: false,
        });

        setTimeout(() => {
          notifications.update({
            id: 'update-example',
            color: 'green',
            title: 'Upload complete',
            message: 'File uploaded successfully',
            icon: <CheckCircle size={20} />,
            loading: false,
            autoClose: 3000,
          });
        }, 3000);
      }}
    >
      Upload with Progress
    </Button>
  ),
};

export const HealthcareExamples: Story = {
  render: () => (
    <Stack gap="md">
      <Button
        onClick={() =>
          notifications.show({
            color: 'green',
            title: 'Appointment Confirmed',
            message: 'Patient John Smith - December 20, 2025 at 2:00 PM',
            icon: <Calendar size={20} />,
            autoClose: 5000,
          })
        }
      >
        Appointment Confirmed
      </Button>

      <Button
        onClick={() =>
          notifications.show({
            color: 'blue',
            title: 'Lab Results Ready',
            message: 'New lab results available for Patient #12345',
            icon: <TestTube size={20} />,
            autoClose: false,
          })
        }
      >
        Lab Results
      </Button>

      <Button
        onClick={() =>
          notifications.show({
            color: 'yellow',
            title: 'Missing Information',
            message: 'Patient record incomplete. Please update insurance details.',
            icon: <AlertTriangle size={20} />,
            autoClose: 7000,
          })
        }
      >
        Missing Info
      </Button>

      <Button
        onClick={() =>
          notifications.show({
            color: 'red',
            title: 'Critical Alert',
            message: 'Patient requires immediate attention',
            icon: <AlertCircle size={20} />,
            autoClose: false,
          })
        }
      >
        Critical Alert
      </Button>

      <Button
        onClick={() =>
          notifications.show({
            color: 'green',
            title: 'Prescription Sent',
            message: 'E-prescription sent to pharmacy successfully',
            icon: <Pill size={20} />,
            autoClose: 4000,
          })
        }
      >
        Prescription Sent
      </Button>
    </Stack>
  ),
};

export const AllPositions: Story = {
  render: () => (
    <Group gap="md">
      <Button
        onClick={() =>
          notifications.show({
            title: 'Top',
            message: 'Notification at top',
            position: 'top-center',
          })
        }
      >
        Top
      </Button>

      <Button
        onClick={() =>
          notifications.show({
            title: 'Top Right',
            message: 'Default position',
            position: 'top-right',
          })
        }
      >
        Top Right
      </Button>

      <Button
        onClick={() =>
          notifications.show({
            title: 'Bottom',
            message: 'Notification at bottom',
            position: 'bottom-center',
          })
        }
      >
        Bottom
      </Button>

      <Button
        onClick={() =>
          notifications.show({
            title: 'Bottom Right',
            message: 'Alternative position',
            position: 'bottom-right',
          })
        }
      >
        Bottom Right
      </Button>
    </Group>
  ),
};

export const WithAction: Story = {
  render: () => (
    <Button
      onClick={() => {
        const id = notifications.show({
          color: 'blue',
          title: 'Undo available',
          message: 'Patient record deleted. Click to undo.',
          autoClose: 5000,
          withCloseButton: true,
        });
      }}
    >
      Show with Action
    </Button>
  ),
};

export const MultipleNotifications: Story = {
  render: () => (
    <Button
      onClick={() => {
        notifications.show({
          title: 'First notification',
          message: 'This is the first notification',
        });
        setTimeout(() => {
          notifications.show({
            title: 'Second notification',
            message: 'This is the second notification',
            color: 'green',
          });
        }, 500);
        setTimeout(() => {
          notifications.show({
            title: 'Third notification',
            message: 'This is the third notification',
            color: 'yellow',
          });
        }, 1000);
      }}
    >
      Show Multiple
    </Button>
  ),
};
