import type { Meta, StoryObj } from '@storybook/react';
import { Toast } from './Toast';
import { Button } from '../Button/Button';
import React from 'react';

const meta = {
  title: 'External/Feedback/Toast',
  component: Toast,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['info', 'success', 'warning', 'error'],
      description: 'Visual variant',
    },
    position: {
      control: 'radio',
      options: ['top-right', 'top-center', 'top-left', 'bottom-right', 'bottom-center', 'bottom-left'],
      description: 'Position of the toast',
    },
    duration: {
      control: { type: 'number', min: 0, max: 10000, step: 1000 },
      description: 'Duration in ms before auto-dismiss (0 = no auto-dismiss)',
    },
    dismissible: {
      control: 'boolean',
      description: 'Whether toast can be manually dismissed',
    },
  },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
  args: {
    variant: 'info',
    children: 'This is an informational message.',
    duration: 0, // Don't auto-dismiss in stories by default
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Changes saved successfully!',
    duration: 0,
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'Your session will expire in 5 minutes.',
    duration: 0,
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    children: 'Failed to save changes. Please try again.',
    duration: 0,
  },
};

export const WithTitle: Story = {
  args: {
    variant: 'info',
    title: 'New Message',
    children: 'You have received a new message from your healthcare provider.',
    duration: 0,
  },
};

export const WithAction: Story = {
  args: {
    variant: 'warning',
    title: 'Update Available',
    children: 'A new version is available.',
    action: <Button variant="primary" size="small">Update</Button>,
    duration: 0,
  },
};

export const CustomIcon: Story = {
  args: {
    variant: 'success',
    icon: '🎉',
    title: 'Congratulations!',
    children: 'You completed the onboarding process.',
    duration: 0,
  },
};

export const NonDismissible: Story = {
  args: {
    variant: 'info',
    title: 'Processing',
    children: 'Please wait while we process your request...',
    dismissible: false,
    duration: 0,
  },
};

export const AutoDismiss: Story = {
  args: {
    variant: 'success',
    children: 'File uploaded successfully!',
    duration: 3000,
  },
};

// Position variants
export const TopRight: Story = {
  args: {
    variant: 'info',
    position: 'top-right',
    children: 'Notification appears in top-right corner.',
    duration: 0,
  },
};

export const TopCenter: Story = {
  args: {
    variant: 'success',
    position: 'top-center',
    children: 'Notification appears at top-center.',
    duration: 0,
  },
};

export const TopLeft: Story = {
  args: {
    variant: 'warning',
    position: 'top-left',
    children: 'Notification appears in top-left corner.',
    duration: 0,
  },
};

export const BottomRight: Story = {
  args: {
    variant: 'error',
    position: 'bottom-right',
    children: 'Notification appears in bottom-right corner.',
    duration: 0,
  },
};

export const BottomCenter: Story = {
  args: {
    variant: 'info',
    position: 'bottom-center',
    children: 'Notification appears at bottom-center.',
    duration: 0,
  },
};

export const BottomLeft: Story = {
  args: {
    variant: 'success',
    position: 'bottom-left',
    children: 'Notification appears in bottom-left corner.',
    duration: 0,
  },
};

// Real-world examples
export const SaveConfirmation: Story = {
  render: () => (
    <Toast
      variant="success"
      icon="✓"
      title="Saved"
      duration={0}
    >
      Your changes have been saved successfully.
    </Toast>
  ),
};

export const ErrorWithRetry: Story = {
  render: () => (
    <Toast
      variant="error"
      title="Connection Error"
      action={<Button variant="primary" size="small">Retry</Button>}
      duration={0}
    >
      Unable to connect to the server. Please try again.
    </Toast>
  ),
};

export const FileUploadSuccess: Story = {
  render: () => (
    <Toast
      variant="success"
      icon="📁"
      title="File Uploaded"
      action={<Button variant="outline" size="small">View</Button>}
      duration={0}
    >
      document.pdf uploaded successfully (2.4 MB)
    </Toast>
  ),
};

export const MessageReceived: Story = {
  render: () => (
    <Toast
      variant="info"
      icon="💬"
      title="New Message"
      action={<Button variant="outline" size="small">Open</Button>}
      position="top-right"
      duration={0}
    >
      Dr. Smith sent you a message about your appointment.
    </Toast>
  ),
};

export const SessionExpiring: Story = {
  render: () => (
    <Toast
      variant="warning"
      icon="⏰"
      title="Session Expiring Soon"
      action={<Button variant="primary" size="small">Stay Logged In</Button>}
      duration={0}
    >
      Your session will expire in 2 minutes due to inactivity.
    </Toast>
  ),
};

export const UpdateRequired: Story = {
  render: () => (
    <Toast
      variant="warning"
      title="Update Required"
      action={
        <div style={{ display: 'flex', gap: '8px' }}>
          <Button variant="outline" size="small">Later</Button>
          <Button variant="primary" size="small">Update Now</Button>
        </div>
      }
      duration={0}
    >
      A critical security update is available. Please update to continue.
    </Toast>
  ),
};

export const PaymentSuccessful: Story = {
  render: () => (
    <Toast
      variant="success"
      icon="💳"
      title="Payment Successful"
      action={<Button variant="outline" size="small">View Receipt</Button>}
      duration={0}
    >
      Your payment of $49.99 has been processed.
    </Toast>
  ),
};

export const FormValidationError: Story = {
  render: () => (
    <Toast
      variant="error"
      title="Form Validation Error"
      duration={0}
    >
      Please fill in all required fields before submitting.
    </Toast>
  ),
};

export const AccountVerified: Story = {
  render: () => (
    <Toast
      variant="success"
      icon="✓"
      title="Account Verified"
      duration={0}
    >
      Your email address has been verified successfully!
    </Toast>
  ),
};

export const OfflineMode: Story = {
  render: () => (
    <Toast
      variant="warning"
      icon="📡"
      title="You're Offline"
      dismissible={false}
      duration={0}
    >
      Changes will be saved when you reconnect to the internet.
    </Toast>
  ),
};

export const CopiedToClipboard: Story = {
  render: () => (
    <Toast
      variant="success"
      icon="📋"
      duration={0}
    >
      Copied to clipboard!
    </Toast>
  ),
};

export const AppointmentReminder: Story = {
  render: () => (
    <Toast
      variant="info"
      icon="📅"
      title="Appointment Reminder"
      action={<Button variant="outline" size="small">View Details</Button>}
      position="top-right"
      duration={0}
    >
      You have an appointment tomorrow at 2:00 PM with Dr. Johnson.
    </Toast>
  ),
};

export const BatchOperation: Story = {
  render: () => (
    <Toast
      variant="success"
      title="Batch Operation Complete"
      duration={0}
    >
      Successfully processed 45 items. 3 items failed.
    </Toast>
  ),
};

export const PasswordChanged: Story = {
  render: () => (
    <Toast
      variant="success"
      icon="🔒"
      title="Password Changed"
      duration={0}
    >
      Your password has been updated successfully.
    </Toast>
  ),
};

export const NetworkReconnected: Story = {
  render: () => (
    <Toast
      variant="success"
      icon="📡"
      title="Back Online"
      duration={0}
    >
      Connection restored. All changes have been synced.
    </Toast>
  ),
};

// Interactive demo with multiple toasts
export const InteractiveDemo: Story = {
  render: function ToastDemo() {
    const [toasts, setToasts] = React.useState<Array<{ id: number; type: 'info' | 'success' | 'warning' | 'error'; message: string }>>([]);
    const nextId = React.useRef(0);

    const addToast = (type: 'info' | 'success' | 'warning' | 'error', message: string) => {
      const id = nextId.current++;
      setToasts((prev) => [...prev, { id, type, message }]);
    };

    const removeToast = (id: number) => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    };

    return (
      <div style={{ padding: '20px' }}>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '40px' }}>
          <Button
            variant="outline"
            onClick={() => addToast('info', 'This is an info notification')}
          >
            Show Info Toast
          </Button>
          <Button
            variant="primary"
            onClick={() => addToast('success', 'Operation completed successfully!')}
          >
            Show Success Toast
          </Button>
          <Button
            variant="outline"
            onClick={() => addToast('warning', 'This is a warning message')}
          >
            Show Warning Toast
          </Button>
          <Button
            variant="outline"
            onClick={() => addToast('error', 'An error has occurred')}
          >
            Show Error Toast
          </Button>
        </div>

        <div style={{ position: 'fixed', top: '20px', right: '20px', display: 'flex', flexDirection: 'column', gap: '12px', zIndex: 9999 }}>
          {toasts.map((toast, index) => (
            <Toast
              key={toast.id}
              variant={toast.type}
              duration={3000}
              onDismiss={() => removeToast(toast.id)}
              style={{ position: 'relative', top: 'auto', right: 'auto' } as any}
            >
              {toast.message}
            </Toast>
          ))}
        </div>
      </div>
    );
  },
};

// Stack demonstration
export const ToastStack: Story = {
  render: () => (
    <div style={{ position: 'fixed', top: '20px', right: '20px', display: 'flex', flexDirection: 'column', gap: '12px', zIndex: 9999 }}>
      <Toast
        variant="info"
        title="Download Started"
        duration={0}
        style={{ position: 'relative', top: 'auto', right: 'auto' } as any}
      >
        Downloading file (1 of 3)...
      </Toast>
      <Toast
        variant="success"
        title="File Uploaded"
        duration={0}
        style={{ position: 'relative', top: 'auto', right: 'auto' } as any}
      >
        document.pdf uploaded successfully
      </Toast>
      <Toast
        variant="warning"
        title="Low Storage"
        action={<Button variant="primary" size="small">Manage</Button>}
        duration={0}
        style={{ position: 'relative', top: 'auto', right: 'auto' } as any}
      >
        Only 10% storage remaining
      </Toast>
    </div>
  ),
};
