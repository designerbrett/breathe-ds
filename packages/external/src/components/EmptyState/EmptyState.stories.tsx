import type { Meta, StoryObj } from '@storybook/react';
import { EmptyState } from './EmptyState';
import { Button } from '../Button/Button';
import React from 'react';

const meta = {
  title: 'External/Feedback/EmptyState',
  component: EmptyState,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['default', 'search', 'error', 'success'],
      description: 'Visual variant',
    },
  },
} satisfies Meta<typeof EmptyState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    heading: 'No items yet',
    description: 'Get started by creating your first item.',
  },
};

export const WithAction: Story = {
  args: {
    heading: 'No appointments scheduled',
    description: 'Schedule your first appointment to get started.',
    action: <Button variant="primary">Schedule Appointment</Button>,
  },
};

export const WithSecondaryAction: Story = {
  args: {
    heading: 'No patients found',
    description: 'Add your first patient to start managing their care.',
    action: <Button variant="primary">Add Patient</Button>,
    secondaryAction: <Button variant="outline">Import Patients</Button>,
  },
};

export const SearchResults: Story = {
  args: {
    variant: 'search',
    heading: 'No results found',
    description: 'Try adjusting your search terms or filters.',
    action: <Button variant="outline">Clear Filters</Button>,
  },
};

export const ErrorState: Story = {
  args: {
    variant: 'error',
    heading: 'Unable to load data',
    description: 'There was a problem loading your data. Please try again.',
    action: <Button variant="primary">Retry</Button>,
  },
};

export const SuccessState: Story = {
  args: {
    variant: 'success',
    heading: 'All caught up!',
    description: 'You have no pending tasks. Great work!',
  },
};

export const CustomIcon: Story = {
  args: {
    icon: '📅',
    heading: 'No appointments today',
    description: 'Your schedule is clear for today.',
    action: <Button variant="outline">View Calendar</Button>,
  },
};

// Real-world examples
export const NoPatients: Story = {
  render: () => (
    <EmptyState
      icon="👥"
      heading="No patients yet"
      description="Add your first patient to start managing their healthcare information and appointments."
      action={<Button variant="primary">Add Patient</Button>}
      secondaryAction={<Button variant="outline">Import from CSV</Button>}
    />
  ),
};

export const NoAppointments: Story = {
  render: () => (
    <EmptyState
      icon="📅"
      heading="No appointments scheduled"
      description="Your calendar is empty. Schedule your first appointment to get started."
      action={<Button variant="primary">Schedule Appointment</Button>}
    />
  ),
};

export const NoMedications: Story = {
  render: () => (
    <EmptyState
      icon="💊"
      heading="No medications on file"
      description="Add medications to keep track of prescriptions and dosages."
      action={<Button variant="primary">Add Medication</Button>}
    />
  ),
};

export const NoSearchResults: Story = {
  render: () => (
    <EmptyState
      variant="search"
      heading='No results for "aspirin 500mg"'
      description="We couldn't find any medications matching your search. Try different keywords or check the spelling."
      action={<Button variant="outline">Clear Search</Button>}
    />
  ),
};

export const NoMessages: Story = {
  render: () => (
    <EmptyState
      icon="💬"
      heading="No messages"
      description="You're all caught up! Check back later for new messages from your healthcare team."
    />
  ),
};

export const NoDocuments: Story = {
  render: () => (
    <EmptyState
      icon="📄"
      heading="No documents"
      description="Upload medical records, test results, or other important documents."
      action={<Button variant="primary">Upload Document</Button>}
    />
  ),
};

export const NoNotifications: Story = {
  render: () => (
    <EmptyState
      variant="success"
      heading="You're all caught up!"
      description="No new notifications at this time."
    />
  ),
};

export const ConnectionError: Story = {
  render: () => (
    <EmptyState
      variant="error"
      heading="Connection Error"
      description="Unable to connect to the server. Please check your internet connection and try again."
      action={<Button variant="primary">Retry</Button>}
      secondaryAction={<Button variant="outline">Go Offline</Button>}
    />
  ),
};

export const EmptyInbox: Story = {
  render: () => (
    <EmptyState
      icon="📬"
      heading="Inbox Zero!"
      description="You've read all your messages. Enjoy your organized inbox!"
      variant="success"
    />
  ),
};

export const NoLabResults: Story = {
  render: () => (
    <EmptyState
      icon="🧪"
      heading="No lab results"
      description="Lab results will appear here once they're available from your healthcare provider."
    />
  ),
};

export const NoFavorites: Story = {
  render: () => (
    <EmptyState
      icon="⭐"
      heading="No favorites yet"
      description="Mark items as favorites for quick access later."
    />
  ),
};

export const FirstTimeUser: Story = {
  render: () => (
    <EmptyState
      icon="👋"
      heading="Welcome to your dashboard!"
      description="Let's get you started by setting up your profile and adding your first appointment."
      action={<Button variant="primary">Get Started</Button>}
      secondaryAction={<Button variant="outline">Take a Tour</Button>}
    />
  ),
};

export const FilterNoResults: Story = {
  render: () => (
    <EmptyState
      variant="search"
      heading="No matching appointments"
      description="No appointments match your current filters. Try adjusting your date range or status filters."
      action={<Button variant="outline">Clear All Filters</Button>}
    />
  ),
};

export const DataDeleted: Story = {
  render: () => (
    <EmptyState
      variant="success"
      heading="Items deleted"
      description="The selected items have been permanently removed."
      action={<Button variant="outline">Go Back</Button>}
    />
  ),
};

export const NoPermission: Story = {
  render: () => (
    <EmptyState
      variant="error"
      icon="🔒"
      heading="Access Denied"
      description="You don't have permission to view this content. Contact your administrator if you believe this is an error."
      action={<Button variant="outline">Go Back</Button>}
    />
  ),
};

export const Maintenance: Story = {
  render: () => (
    <EmptyState
      icon="🔧"
      heading="Under Maintenance"
      description="This feature is temporarily unavailable while we perform scheduled maintenance. Please check back in a few hours."
      action={<Button variant="outline">Check Status</Button>}
    />
  ),
};

export const EmptyCart: Story = {
  render: () => (
    <EmptyState
      icon="🛒"
      heading="Your cart is empty"
      description="Browse our catalog and add items to your cart."
      action={<Button variant="primary">Browse Products</Button>}
    />
  ),
};

export const UploadRequired: Story = {
  render: () => (
    <EmptyState
      icon="📤"
      heading="Upload required documents"
      description="Please upload the required medical documents to continue with your appointment booking."
      action={<Button variant="primary">Upload Documents</Button>}
    />
  ),
};

export const NoRecentActivity: Story = {
  render: () => (
    <EmptyState
      icon="📊"
      heading="No recent activity"
      description="Your activity feed will show recent appointments, messages, and updates."
    />
  ),
};

export const InTable: Story = {
  render: () => (
    <div style={{
      border: '2px solid #E8EDF2',
      borderRadius: '12px',
      overflow: 'hidden',
      minHeight: '400px',
    }}>
      <div style={{
        padding: '16px 20px',
        background: '#F8FAFB',
        borderBottom: '2px solid #E8EDF2',
        fontWeight: 600,
        fontSize: '16px',
      }}>
        Patient Records
      </div>
      <EmptyState
        icon="👥"
        heading="No patient records"
        description="Add your first patient to see them listed here."
        action={<Button variant="primary">Add Patient</Button>}
      />
    </div>
  ),
};

export const WithCustomStyling: Story = {
  render: () => (
    <div style={{
      background: 'linear-gradient(135deg, #E8F2FA 0%, #FFFFFF 100%)',
      padding: '40px',
      borderRadius: '16px',
    }}>
      <EmptyState
        icon="🎉"
        heading="Congratulations!"
        description="You've completed all your tasks for today. Take a well-deserved break!"
        variant="success"
        action={<Button variant="outline">View Completed Tasks</Button>}
      />
    </div>
  ),
};

export const MultipleStates: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
      <div style={{ border: '2px solid #E8EDF2', borderRadius: '12px', padding: '20px' }}>
        <EmptyState
          icon="📧"
          heading="No messages"
          description="You're all caught up!"
        />
      </div>
      <div style={{ border: '2px solid #E8EDF2', borderRadius: '12px', padding: '20px' }}>
        <EmptyState
          variant="search"
          heading="No results"
          description="Try a different search term."
        />
      </div>
      <div style={{ border: '2px solid #E8EDF2', borderRadius: '12px', padding: '20px' }}>
        <EmptyState
          variant="error"
          heading="Error loading"
          description="Please try again."
        />
      </div>
    </div>
  ),
};
