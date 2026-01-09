import type { Meta, StoryObj } from '@storybook/react';
import { PageActions } from './PageActions';
import { Button } from '../Button/Button';

const meta = {
  title: 'External/Actions/PageActions',
  component: PageActions,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    align: {
      control: 'radio',
      options: ['left', 'right', 'center'],
      description: 'Alignment of actions',
    },
    stackOnMobile: {
      control: 'boolean',
      description: 'Whether to stack actions on mobile',
    },
  },
} satisfies Meta<typeof PageActions>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    primaryAction: <Button variant="primary">Create New</Button>,
    secondaryActions: [
      <Button variant="outline">Export</Button>,
      <Button variant="outline">Filter</Button>,
    ],
  },
};

export const PrimaryOnly: Story = {
  args: {
    primaryAction: <Button variant="primary">Save Changes</Button>,
  },
};

export const SecondaryOnly: Story = {
  args: {
    secondaryActions: [
      <Button variant="outline">Edit</Button>,
      <Button variant="outline">Duplicate</Button>,
      <Button variant="outline">Archive</Button>,
    ],
  },
};

export const MultipleActions: Story = {
  args: {
    primaryAction: <Button variant="primary">Publish</Button>,
    secondaryActions: [
      <Button variant="secondary">Save Draft</Button>,
      <Button variant="outline">Preview</Button>,
      <Button variant="ghost">Discard</Button>,
    ],
  },
};

export const AlignLeft: Story = {
  args: {
    align: 'left',
    primaryAction: <Button variant="primary">Add Item</Button>,
    secondaryActions: [
      <Button variant="outline">Import</Button>,
      <Button variant="outline">Export</Button>,
    ],
  },
};

export const AlignCenter: Story = {
  args: {
    align: 'center',
    primaryAction: <Button variant="primary">Continue</Button>,
    secondaryActions: [<Button variant="outline">Back</Button>],
  },
};

export const NoStackMobile: Story = {
  args: {
    stackOnMobile: false,
    primaryAction: <Button variant="primary">Apply</Button>,
    secondaryActions: [<Button variant="outline">Cancel</Button>],
  },
};

export const PageHeader: Story = {
  render: () => (
    <div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '24px',
          borderBottom: '1px solid #E8EDF2',
        }}
      >
        <div>
          <h1 style={{ margin: '0 0 8px 0' }}>Projects</h1>
          <p style={{ margin: 0, color: '#7B8A99' }}>
            Manage your projects and teams
          </p>
        </div>
        <PageActions
          primaryAction={<Button variant="primary">New Project</Button>}
          secondaryActions={[
            <Button variant="outline">Import</Button>,
            <Button variant="outline">Export</Button>,
          ]}
        />
      </div>
    </div>
  ),
};

export const SettingsPage: Story = {
  render: () => (
    <div style={{ maxWidth: '800px' }}>
      <div
        style={{
          padding: '24px',
          borderBottom: '1px solid #E8EDF2',
          marginBottom: '24px',
        }}
      >
        <h1 style={{ margin: '0 0 8px 0' }}>Account Settings</h1>
        <p style={{ margin: 0, color: '#7B8A99' }}>
          Update your account preferences and settings
        </p>
      </div>

      {/* Form content would go here */}
      <div style={{ padding: '24px' }}>
        <p style={{ color: '#5A6C7D' }}>Form fields would appear here...</p>
      </div>

      <div
        style={{
          padding: '24px',
          borderTop: '1px solid #E8EDF2',
          backgroundColor: '#F8FAFB',
        }}
      >
        <PageActions
          primaryAction={<Button variant="primary">Save Changes</Button>}
          secondaryActions={[
            <Button variant="outline">Cancel</Button>,
            <Button variant="ghost">Reset</Button>,
          ]}
        />
      </div>
    </div>
  ),
};

export const DetailPage: Story = {
  render: () => (
    <div style={{ maxWidth: '900px' }}>
      <div
        style={{
          padding: '24px',
          borderBottom: '1px solid #E8EDF2',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: '24px',
          }}
        >
          <div style={{ flex: 1 }}>
            <div
              style={{
                display: 'inline-block',
                padding: '4px 12px',
                backgroundColor: '#E8F8F5',
                color: '#27AE60',
                borderRadius: '12px',
                fontSize: '12px',
                fontWeight: 600,
                marginBottom: '12px',
              }}
            >
              Active
            </div>
            <h1 style={{ margin: '0 0 8px 0' }}>Website Redesign Project</h1>
            <p style={{ margin: 0, color: '#7B8A99' }}>
              Last updated 2 hours ago by Sarah Johnson
            </p>
          </div>
          <PageActions
            primaryAction={<Button variant="primary">Edit Project</Button>}
            secondaryActions={[
              <Button variant="outline">Share</Button>,
              <Button variant="outline">Export</Button>,
              <Button variant="ghost">⋮</Button>,
            ]}
          />
        </div>
      </div>
    </div>
  ),
};

export const ListPage: Story = {
  render: () => (
    <div>
      <div
        style={{
          padding: '24px',
          borderBottom: '1px solid #E8EDF2',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '16px',
          }}
        >
          <h1 style={{ margin: 0 }}>Team Members</h1>
          <PageActions
            primaryAction={<Button variant="primary">Invite Member</Button>}
            secondaryActions={[
              <Button variant="outline">Import</Button>,
              <Button variant="outline">Export</Button>,
            ]}
          />
        </div>
        <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
          <input
            type="search"
            placeholder="Search members..."
            style={{
              flex: 1,
              padding: '12px',
              border: '1px solid #E8EDF2',
              borderRadius: '8px',
              fontSize: '16px',
            }}
          />
          <Button variant="outline">Filter</Button>
        </div>
      </div>
    </div>
  ),
};

export const WizardStep: Story = {
  render: () => (
    <div style={{ maxWidth: '600px' }}>
      <div style={{ padding: '24px' }}>
        <div style={{ marginBottom: '8px', color: '#7B8A99', fontSize: '14px' }}>
          Step 2 of 4
        </div>
        <h2 style={{ margin: '0 0 24px 0' }}>Choose Your Plan</h2>

        {/* Plan options would go here */}
        <div style={{ padding: '40px', textAlign: 'center', color: '#7B8A99' }}>
          Plan selection interface...
        </div>
      </div>

      <div
        style={{
          padding: '24px',
          borderTop: '1px solid #E8EDF2',
          backgroundColor: '#F8FAFB',
        }}
      >
        <PageActions
          align="center"
          primaryAction={<Button variant="primary">Continue</Button>}
          secondaryActions={[<Button variant="outline">Back</Button>]}
        />
      </div>
    </div>
  ),
};

export const DangerousAction: Story = {
  render: () => (
    <div style={{ maxWidth: '600px' }}>
      <div style={{ padding: '24px' }}>
        <h2 style={{ margin: '0 0 12px 0' }}>Delete Account</h2>
        <p style={{ color: '#7B8A99', lineHeight: 1.6 }}>
          This action cannot be undone. All your data will be permanently deleted
          from our servers.
        </p>
      </div>

      <div
        style={{
          padding: '24px',
          borderTop: '1px solid #E8EDF2',
          backgroundColor: '#FFEBEE',
        }}
      >
        <PageActions
          primaryAction={
            <Button
              variant="primary"
              style={{ backgroundColor: '#E74C3C', borderColor: '#E74C3C' }}
            >
              Delete Account
            </Button>
          }
          secondaryActions={[<Button variant="outline">Cancel</Button>]}
        />
      </div>
    </div>
  ),
};
