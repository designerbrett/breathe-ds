import type { Meta, StoryObj } from '@storybook/react';
import { Banner } from './Banner';
import { Button } from '../Button/Button';

const meta = {
  title: 'External/Feedback/Banner',
  component: Banner,
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
    dismissible: {
      control: 'boolean',
      description: 'Whether banner can be dismissed',
    },
  },
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
  args: {
    variant: 'info',
    children: 'This is an informational message to help you understand something important.',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Your changes have been saved successfully!',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'Your trial period will expire in 3 days. Please upgrade to continue using premium features.',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    children: 'Unable to connect to the server. Please check your internet connection and try again.',
  },
};

export const WithTitle: Story = {
  args: {
    variant: 'info',
    title: 'New Features Available',
    children: 'We have released new features that you might find useful. Check out the changelog for details.',
  },
};

export const Dismissible: Story = {
  args: {
    variant: 'info',
    dismissible: true,
    children: 'This banner can be dismissed by clicking the X button.',
  },
};

export const WithAction: Story = {
  args: {
    variant: 'warning',
    title: 'Update Required',
    children: 'A new version is available. Please update to continue.',
    action: <Button variant="primary" size="small">Update Now</Button>,
  },
};

export const DismissibleWithAction: Story = {
  args: {
    variant: 'info',
    title: 'Cookie Notice',
    children: 'We use cookies to improve your experience on our site.',
    dismissible: true,
    action: <Button variant="outline" size="small">Learn More</Button>,
  },
};

export const CustomIcon: Story = {
  args: {
    variant: 'success',
    icon: '🎉',
    title: 'Congratulations!',
    children: 'You have completed all the onboarding steps.',
  },
};

export const MaintenanceNotice: Story = {
  render: () => (
    <div>
      <Banner
        variant="warning"
        title="Scheduled Maintenance"
        dismissible
      >
        Our services will be undergoing scheduled maintenance on Sunday, January 15th from
        2:00 AM to 6:00 AM EST. Some features may be temporarily unavailable during this time.
      </Banner>
    </div>
  ),
};

export const SystemUpdate: Story = {
  render: () => (
    <Banner
      variant="info"
      title="System Update"
      action={<Button variant="primary" size="small">Restart Now</Button>}
      dismissible
    >
      A system update has been downloaded and is ready to install. Restart your application
      to apply the latest improvements and security fixes.
    </Banner>
  ),
};

export const PaymentSuccess: Story = {
  render: () => (
    <Banner
      variant="success"
      title="Payment Successful"
      action={<Button variant="outline" size="small">View Receipt</Button>}
    >
      Your payment of $49.99 has been processed successfully. A confirmation email has
      been sent to your registered email address.
    </Banner>
  ),
};

export const StorageFull: Story = {
  render: () => (
    <Banner
      variant="warning"
      title="Storage Almost Full"
      action={<Button variant="primary" size="small">Upgrade Plan</Button>}
      dismissible
    >
      You are using 95% of your storage space. Upgrade your plan to get more storage
      and avoid service interruptions.
    </Banner>
  ),
};

export const ConnectionError: Story = {
  render: () => (
    <Banner
      variant="error"
      title="Connection Error"
      action={<Button variant="primary" size="small">Retry</Button>}
    >
      Failed to establish a connection to the server. Please check your internet
      connection or try again later.
    </Banner>
  ),
};

export const MultipleStacked: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '16px' }}>
      <Banner
        variant="error"
        title="Action Required"
        action={<Button variant="primary" size="small">Verify Email</Button>}
      >
        Please verify your email address to access all features.
      </Banner>

      <Banner
        variant="warning"
        dismissible
      >
        Your password will expire in 7 days. Update it in your account settings.
      </Banner>

      <Banner
        variant="info"
        title="Did you know?"
        dismissible
      >
        You can customize your dashboard layout by dragging and dropping widgets.
      </Banner>
    </div>
  ),
};

export const PageTop: Story = {
  render: () => (
    <div>
      <Banner
        variant="info"
        title="Welcome to Breathe Design System"
        dismissible
        action={<Button variant="outline" size="small">Get Started</Button>}
      >
        This is a comprehensive UI component library optimized for healthcare applications
        with special consideration for mobile users and accessibility.
      </Banner>

      <div style={{ padding: '40px 0' }}>
        <h1>Page Content</h1>
        <p>The banner appears at the top of the page to grab attention.</p>
      </div>
    </div>
  ),
};

export const CookieConsent: Story = {
  render: () => (
    <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, padding: '20px' }}>
      <Banner
        variant="info"
        dismissible
        action={
          <div style={{ display: 'flex', gap: '8px' }}>
            <Button variant="primary" size="small">Accept All</Button>
            <Button variant="outline" size="small">Manage Preferences</Button>
          </div>
        }
      >
        We use cookies and similar technologies to help personalize content and offer
        a better experience. By clicking Accept, you agree to this use of cookies.
      </Banner>
    </div>
  ),
};

export const TrialExpiring: Story = {
  render: () => (
    <Banner
      variant="warning"
      icon="⏰"
      title="Trial Ending Soon"
      action={<Button variant="primary" size="small">Upgrade Now</Button>}
      dismissible
    >
      Your 14-day free trial ends in 2 days. Upgrade to Pro to keep access to all
      premium features including unlimited projects, priority support, and advanced analytics.
    </Banner>
  ),
};

export const AccountVerified: Story = {
  render: () => (
    <Banner
      variant="success"
      icon="✓"
      title="Account Verified"
      dismissible
    >
      Your account has been successfully verified! You now have access to all features
      and can start using the platform without any limitations.
    </Banner>
  ),
};

export const SecurityAlert: Story = {
  render: () => (
    <Banner
      variant="error"
      title="Security Alert"
      action={<Button variant="primary" size="small">Review Activity</Button>}
    >
      We detected a login attempt from an unrecognized device in New York, USA.
      If this was you, you can safely ignore this message. Otherwise, please review
      your recent activity and secure your account.
    </Banner>
  ),
};

export const BetaFeature: Story = {
  render: () => (
    <Banner
      variant="info"
      icon="🧪"
      title="Beta Feature"
      dismissible
      action={<Button variant="outline" size="small">Learn More</Button>}
    >
      You are using a beta version of this feature. We appreciate your feedback to
      help us improve. Some functionality may change before the final release.
    </Banner>
  ),
};
