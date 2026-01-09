import type { Meta, StoryObj } from '@storybook/react';
import { Timeline } from './Timeline';

const meta = {
  title: 'External/Data Display/Timeline',
  component: Timeline,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: 'radio',
      options: ['left', 'center', 'right'],
      description: 'Position of the timeline line',
    },
  },
} satisfies Meta<typeof Timeline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      {
        title: 'Order Placed',
        description: 'Your order has been received and is being processed.',
        timestamp: '2 hours ago',
      },
      {
        title: 'Payment Confirmed',
        description: 'Payment has been successfully processed.',
        timestamp: '1 hour ago',
      },
      {
        title: 'Order Shipped',
        description: 'Your order is on its way. Tracking number: 1Z999AA10123456784',
        timestamp: '30 minutes ago',
      },
      {
        title: 'Out for Delivery',
        description: 'Your package is out for delivery and will arrive today.',
        timestamp: 'Just now',
      },
    ],
  },
};

export const WithVariants: Story = {
  args: {
    items: [
      {
        title: 'Account Created',
        description: 'Welcome! Your account has been successfully created.',
        timestamp: 'Jan 1, 2024',
        variant: 'success',
      },
      {
        title: 'Email Verified',
        description: 'Your email address has been verified.',
        timestamp: 'Jan 1, 2024',
        variant: 'success',
      },
      {
        title: 'Payment Method Added',
        description: 'Visa ending in 4242 has been added to your account.',
        timestamp: 'Jan 2, 2024',
        variant: 'info',
      },
      {
        title: 'Failed Login Attempt',
        description: 'An unsuccessful login attempt was detected from a new device.',
        timestamp: 'Jan 5, 2024',
        variant: 'warning',
      },
      {
        title: 'Password Changed',
        description: 'Your password was successfully updated.',
        timestamp: 'Jan 5, 2024',
        variant: 'success',
      },
    ],
  },
};

export const WithCustomIcons: Story = {
  args: {
    items: [
      {
        title: 'Project Created',
        description: 'New project "Website Redesign" has been created.',
        timestamp: '2 days ago',
        icon: (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M8 2L9.5 5L13 5.5L10.5 8L11 11.5L8 9.5L5 11.5L5.5 8L3 5.5L6.5 5L8 2Z"
              fill="#2B79B9"
              stroke="#2B79B9"
              strokeWidth="1"
            />
          </svg>
        ),
      },
      {
        title: 'Team Member Added',
        description: 'Sarah Johnson joined the project.',
        timestamp: '1 day ago',
        icon: (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="5" r="3" fill="#2B79B9" />
            <path
              d="M2 13C2 10.2386 4.23858 8 7 8H9C11.7614 8 14 10.2386 14 13V14H2V13Z"
              fill="#2B79B9"
            />
          </svg>
        ),
      },
      {
        title: 'Milestone Reached',
        description: 'Design phase completed successfully.',
        timestamp: '12 hours ago',
        icon: (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M13 4L6 11L3 8"
              stroke="#27AE60"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ),
        variant: 'success',
      },
    ],
  },
};

export const CenterPosition: Story = {
  args: {
    position: 'center',
    items: [
      {
        title: 'Q1 2024 - Launch',
        description: 'Initial product launch and market entry.',
        timestamp: 'January 2024',
      },
      {
        title: 'Q2 2024 - Growth',
        description: 'User acquisition and feature expansion.',
        timestamp: 'April 2024',
      },
      {
        title: 'Q3 2024 - Scale',
        description: 'Infrastructure scaling and optimization.',
        timestamp: 'July 2024',
      },
      {
        title: 'Q4 2024 - Expansion',
        description: 'International markets and partnerships.',
        timestamp: 'October 2024',
      },
    ],
  },
};

export const ProjectHistory: Story = {
  render: () => (
    <div style={{ maxWidth: '700px' }}>
      <h2>Project Timeline</h2>
      <Timeline
        items={[
          {
            title: 'Project Kickoff',
            description:
              'Initial meeting with stakeholders to define project scope and requirements.',
            timestamp: 'Dec 1, 2023',
            variant: 'info',
          },
          {
            title: 'Design Phase Complete',
            description:
              'UI/UX designs approved by client. Ready to begin development.',
            timestamp: 'Dec 15, 2023',
            variant: 'success',
          },
          {
            title: 'Development Started',
            description:
              'Frontend and backend development teams begin implementation.',
            timestamp: 'Dec 20, 2023',
            variant: 'info',
          },
          {
            title: 'Alpha Release',
            description:
              'First internal release for testing. Several bugs identified.',
            timestamp: 'Jan 10, 2024',
            variant: 'warning',
          },
          {
            title: 'Beta Testing',
            description:
              'Limited release to select users for feedback and testing.',
            timestamp: 'Jan 20, 2024',
            variant: 'info',
          },
          {
            title: 'Production Launch',
            description:
              'Official launch to all users. Monitoring performance closely.',
            timestamp: 'Feb 1, 2024',
            variant: 'success',
          },
        ]}
      />
    </div>
  ),
};

export const OrderTracking: Story = {
  render: () => (
    <div style={{ maxWidth: '600px' }}>
      <h2>Order #12345 Status</h2>
      <p style={{ color: '#7B8A99', marginBottom: '24px' }}>
        Track your order progress below
      </p>
      <Timeline
        items={[
          {
            title: 'Order Confirmed',
            description: 'We received your order and payment.',
            timestamp: 'Jan 8, 10:30 AM',
            variant: 'success',
          },
          {
            title: 'Processing',
            description: 'Your order is being prepared for shipment.',
            timestamp: 'Jan 8, 11:15 AM',
            variant: 'success',
          },
          {
            title: 'Shipped',
            description: (
              <div>
                <p>Your order has been shipped via FedEx.</p>
                <p style={{ marginTop: '8px' }}>
                  <strong>Tracking:</strong>{' '}
                  <a href="#" style={{ color: '#2B79B9' }}>
                    1Z999AA10123456784
                  </a>
                </p>
              </div>
            ),
            timestamp: 'Jan 8, 2:00 PM',
            variant: 'success',
          },
          {
            title: 'In Transit',
            description: 'Package is on its way to your address.',
            timestamp: 'Jan 9, 9:00 AM',
            variant: 'info',
          },
          {
            title: 'Out for Delivery',
            description: 'Your package is out for delivery today.',
            timestamp: 'Jan 10, 7:30 AM',
            variant: 'info',
          },
          {
            title: 'Delivered',
            description: 'Package delivered. Thank you for your order!',
            timestamp: 'Estimated: Today',
          },
        ]}
      />
    </div>
  ),
};

export const UserActivity: Story = {
  render: () => (
    <div style={{ maxWidth: '650px' }}>
      <h3>Recent Activity</h3>
      <Timeline
        items={[
          {
            title: 'Logged in',
            description: 'From MacBook Pro (San Francisco, CA)',
            timestamp: '5 minutes ago',
          },
          {
            title: 'Updated profile',
            description: 'Changed profile picture and bio',
            timestamp: '2 hours ago',
          },
          {
            title: 'Created document',
            description: '"Q1 2024 Strategy" in Marketing folder',
            timestamp: 'Yesterday at 3:45 PM',
          },
          {
            title: 'Shared file',
            description: 'Shared "Budget Report.xlsx" with Finance team',
            timestamp: 'Yesterday at 11:20 AM',
          },
          {
            title: 'Commented on task',
            description: 'Added comment to "Website Redesign" task',
            timestamp: '2 days ago',
          },
        ]}
      />
    </div>
  ),
};

export const Minimal: Story = {
  args: {
    items: [
      { title: 'Step 1: Create Account', timestamp: 'Completed' },
      { title: 'Step 2: Verify Email', timestamp: 'Completed' },
      { title: 'Step 3: Add Payment Method', timestamp: 'In Progress' },
      { title: 'Step 4: Choose Plan', timestamp: 'Pending' },
    ],
  },
};
