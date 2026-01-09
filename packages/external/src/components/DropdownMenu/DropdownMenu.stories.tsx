import type { Meta, StoryObj } from '@storybook/react';
import { DropdownMenu } from './DropdownMenu';
import { Button } from '../Button/Button';
import React from 'react';

const meta = {
  title: 'External/Overlays/DropdownMenu',
  component: DropdownMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: 'radio',
      options: ['bottom-left', 'bottom-right', 'top-left', 'top-right'],
      description: 'Position of menu relative to trigger',
    },
  },
} satisfies Meta<typeof DropdownMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    trigger: <Button variant="outline">Open Menu</Button>,
    items: [
      { label: 'View Details', onClick: () => console.log('View Details') },
      { label: 'Edit', onClick: () => console.log('Edit') },
      { label: 'Delete', onClick: () => console.log('Delete'), variant: 'danger' },
    ],
  },
};

export const WithIcons: Story = {
  args: {
    trigger: <Button variant="outline">Actions ▾</Button>,
    items: [
      { label: 'View', icon: '👁️', onClick: () => console.log('View') },
      { label: 'Edit', icon: '✏️', onClick: () => console.log('Edit') },
      { label: 'Share', icon: '📤', onClick: () => console.log('Share') },
      { label: 'Delete', icon: '🗑️', onClick: () => console.log('Delete'), variant: 'danger' },
    ],
  },
};

export const WithDividers: Story = {
  args: {
    trigger: <Button variant="outline">More Options ▾</Button>,
    items: [
      { label: 'View Profile', icon: '👤', onClick: () => console.log('View Profile') },
      { label: 'Settings', icon: '⚙️', onClick: () => console.log('Settings'), divider: true },
      { label: 'Help', icon: '❓', onClick: () => console.log('Help') },
      { label: 'About', icon: 'ℹ️', onClick: () => console.log('About'), divider: true },
      { label: 'Sign Out', icon: '🚪', onClick: () => console.log('Sign Out'), variant: 'danger' },
    ],
  },
};

export const WithDisabledItems: Story = {
  args: {
    trigger: <Button variant="outline">File Menu ▾</Button>,
    items: [
      { label: 'New Document', icon: '📄', onClick: () => console.log('New') },
      { label: 'Open', icon: '📂', onClick: () => console.log('Open') },
      { label: 'Save', icon: '💾', onClick: () => console.log('Save'), disabled: true },
      { label: 'Save As', icon: '💾', onClick: () => console.log('Save As') },
      { label: 'Export', icon: '📤', onClick: () => console.log('Export'), disabled: true, divider: true },
      { label: 'Close', onClick: () => console.log('Close') },
    ],
  },
};

export const BottomLeft: Story = {
  args: {
    trigger: <Button variant="outline">Bottom Left ▾</Button>,
    position: 'bottom-left',
    items: [
      { label: 'Option 1', onClick: () => console.log('1') },
      { label: 'Option 2', onClick: () => console.log('2') },
      { label: 'Option 3', onClick: () => console.log('3') },
    ],
  },
};

export const BottomRight: Story = {
  args: {
    trigger: <Button variant="outline">Bottom Right ▾</Button>,
    position: 'bottom-right',
    items: [
      { label: 'Option 1', onClick: () => console.log('1') },
      { label: 'Option 2', onClick: () => console.log('2') },
      { label: 'Option 3', onClick: () => console.log('3') },
    ],
  },
};

export const TopLeft: Story = {
  args: {
    trigger: <Button variant="outline">Top Left ▴</Button>,
    position: 'top-left',
    items: [
      { label: 'Option 1', onClick: () => console.log('1') },
      { label: 'Option 2', onClick: () => console.log('2') },
      { label: 'Option 3', onClick: () => console.log('3') },
    ],
  },
};

export const TopRight: Story = {
  args: {
    trigger: <Button variant="outline">Top Right ▴</Button>,
    position: 'top-right',
    items: [
      { label: 'Option 1', onClick: () => console.log('1') },
      { label: 'Option 2', onClick: () => console.log('2') },
      { label: 'Option 3', onClick: () => console.log('3') },
    ],
  },
};

// Real-world examples
export const PatientActions: Story = {
  render: () => (
    <DropdownMenu
      trigger={<Button variant="outline">Patient Actions ▾</Button>}
      items={[
        { label: 'View Chart', icon: '📋', onClick: () => alert('View Chart') },
        { label: 'Schedule Appointment', icon: '📅', onClick: () => alert('Schedule') },
        { label: 'Send Message', icon: '💬', onClick: () => alert('Message') },
        { label: 'View History', icon: '📊', onClick: () => alert('History'), divider: true },
        { label: 'Edit Information', icon: '✏️', onClick: () => alert('Edit') },
        { label: 'Archive Patient', icon: '📦', onClick: () => alert('Archive'), variant: 'danger' },
      ]}
    />
  ),
};

export const AppointmentMenu: Story = {
  render: () => (
    <DropdownMenu
      trigger={<Button variant="outline">Appointment ▾</Button>}
      items={[
        { label: 'Reschedule', icon: '🔄', onClick: () => alert('Reschedule') },
        { label: 'Add Notes', icon: '📝', onClick: () => alert('Notes') },
        { label: 'Send Reminder', icon: '🔔', onClick: () => alert('Reminder'), divider: true },
        { label: 'Mark Complete', icon: '✓', onClick: () => alert('Complete') },
        { label: 'Cancel Appointment', icon: '✕', onClick: () => alert('Cancel'), variant: 'danger' },
      ]}
    />
  ),
};

export const UserProfileMenu: Story = {
  render: () => (
    <DropdownMenu
      trigger={
        <button
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 12px',
            border: '2px solid #E8EDF2',
            borderRadius: '8px',
            background: '#FFFFFF',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: '#2B79B9',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 600,
            }}
          >
            JD
          </div>
          <span>John Doe</span>
          <span>▾</span>
        </button>
      }
      position="bottom-right"
      items={[
        { label: 'My Profile', icon: '👤', onClick: () => alert('Profile') },
        { label: 'Account Settings', icon: '⚙️', onClick: () => alert('Settings'), divider: true },
        { label: 'Help & Support', icon: '❓', onClick: () => alert('Help') },
        { label: 'Privacy Policy', icon: '🔒', onClick: () => alert('Privacy'), divider: true },
        { label: 'Sign Out', icon: '🚪', onClick: () => alert('Sign Out'), variant: 'danger' },
      ]}
    />
  ),
};

export const TableRowActions: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #E8EDF2' }}>
            <th style={{ padding: '12px', textAlign: 'left' }}>Patient Name</th>
            <th style={{ padding: '12px', textAlign: 'left' }}>Date</th>
            <th style={{ padding: '12px', textAlign: 'right' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderBottom: '1px solid #E8EDF2' }}>
            <td style={{ padding: '12px' }}>John Doe</td>
            <td style={{ padding: '12px' }}>Jan 15, 2024</td>
            <td style={{ padding: '12px', textAlign: 'right' }}>
              <DropdownMenu
                trigger={
                  <button
                    style={{
                      padding: '8px',
                      border: 'none',
                      background: 'transparent',
                      cursor: 'pointer',
                      fontSize: '20px',
                    }}
                  >
                    ⋮
                  </button>
                }
                position="bottom-right"
                items={[
                  { label: 'View', icon: '👁️', onClick: () => alert('View') },
                  { label: 'Edit', icon: '✏️', onClick: () => alert('Edit') },
                  { label: 'Delete', icon: '🗑️', onClick: () => alert('Delete'), variant: 'danger' },
                ]}
              />
            </td>
          </tr>
          <tr style={{ borderBottom: '1px solid #E8EDF2' }}>
            <td style={{ padding: '12px' }}>Jane Smith</td>
            <td style={{ padding: '12px' }}>Jan 16, 2024</td>
            <td style={{ padding: '12px', textAlign: 'right' }}>
              <DropdownMenu
                trigger={
                  <button
                    style={{
                      padding: '8px',
                      border: 'none',
                      background: 'transparent',
                      cursor: 'pointer',
                      fontSize: '20px',
                    }}
                  >
                    ⋮
                  </button>
                }
                position="bottom-right"
                items={[
                  { label: 'View', icon: '👁️', onClick: () => alert('View') },
                  { label: 'Edit', icon: '✏️', onClick: () => alert('Edit') },
                  { label: 'Delete', icon: '🗑️', onClick: () => alert('Delete'), variant: 'danger' },
                ]}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  ),
};

export const DocumentActions: Story = {
  render: () => (
    <DropdownMenu
      trigger={<Button variant="outline">Document ▾</Button>}
      items={[
        { label: 'Download PDF', icon: '📥', onClick: () => alert('Download PDF') },
        { label: 'Download Word', icon: '📄', onClick: () => alert('Download Word') },
        { label: 'Print', icon: '🖨️', onClick: () => alert('Print'), divider: true },
        { label: 'Share Link', icon: '🔗', onClick: () => alert('Share') },
        { label: 'Email', icon: '📧', onClick: () => alert('Email'), divider: true },
        { label: 'Delete', icon: '🗑️', onClick: () => alert('Delete'), variant: 'danger' },
      ]}
    />
  ),
};

export const FilterMenu: Story = {
  render: () => (
    <DropdownMenu
      trigger={<Button variant="outline">Filter By ▾</Button>}
      items={[
        { label: 'All Appointments', icon: '📋', onClick: () => alert('All') },
        { label: 'Scheduled', icon: '📅', onClick: () => alert('Scheduled') },
        { label: 'Completed', icon: '✓', onClick: () => alert('Completed') },
        { label: 'Cancelled', icon: '✕', onClick: () => alert('Cancelled'), divider: true },
        { label: 'Clear Filters', onClick: () => alert('Clear') },
      ]}
    />
  ),
};

export const SortMenu: Story = {
  render: () => (
    <DropdownMenu
      trigger={<Button variant="outline">Sort By ▾</Button>}
      items={[
        { label: 'Name (A-Z)', icon: '🔤', onClick: () => alert('Name ASC') },
        { label: 'Name (Z-A)', icon: '🔤', onClick: () => alert('Name DESC') },
        { label: 'Date (Newest)', icon: '📅', onClick: () => alert('Date DESC') },
        { label: 'Date (Oldest)', icon: '📅', onClick: () => alert('Date ASC') },
      ]}
    />
  ),
};

export const NotificationMenu: Story = {
  render: () => (
    <DropdownMenu
      trigger={
        <button
          style={{
            position: 'relative',
            width: '44px',
            height: '44px',
            border: '2px solid #E8EDF2',
            borderRadius: '8px',
            background: '#FFFFFF',
            cursor: 'pointer',
            fontSize: '20px',
          }}
        >
          🔔
          <span
            style={{
              position: 'absolute',
              top: '-4px',
              right: '-4px',
              width: '20px',
              height: '20px',
              background: '#E74C3C',
              color: '#FFFFFF',
              borderRadius: '50%',
              fontSize: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 600,
            }}
          >
            3
          </span>
        </button>
      }
      position="bottom-right"
      items={[
        { label: 'New appointment request', onClick: () => alert('View') },
        { label: 'Lab results available', onClick: () => alert('View') },
        { label: 'Message from Dr. Smith', onClick: () => alert('View'), divider: true },
        { label: 'Mark all as read', onClick: () => alert('Mark read') },
      ]}
    />
  ),
};

export const LongList: Story = {
  render: () => (
    <DropdownMenu
      trigger={<Button variant="outline">Select Patient ▾</Button>}
      items={Array.from({ length: 20 }, (_, i) => ({
        label: `Patient ${i + 1}`,
        onClick: () => alert(`Selected Patient ${i + 1}`),
      }))}
    />
  ),
};

export const IconOnlyTrigger: Story = {
  render: () => (
    <DropdownMenu
      trigger={
        <button
          style={{
            width: '44px',
            height: '44px',
            border: '2px solid #E8EDF2',
            borderRadius: '8px',
            background: '#FFFFFF',
            cursor: 'pointer',
            fontSize: '20px',
          }}
          aria-label="More options"
        >
          ⋮
        </button>
      }
      items={[
        { label: 'Edit', icon: '✏️', onClick: () => alert('Edit') },
        { label: 'Duplicate', icon: '📋', onClick: () => alert('Duplicate') },
        { label: 'Archive', icon: '📦', onClick: () => alert('Archive'), divider: true },
        { label: 'Delete', icon: '🗑️', onClick: () => alert('Delete'), variant: 'danger' },
      ]}
    />
  ),
};

export const ContextualMenu: Story = {
  render: () => (
    <div style={{ padding: '40px' }}>
      <div
        style={{
          padding: '20px',
          border: '2px solid #E8EDF2',
          borderRadius: '12px',
          background: '#F8FAFB',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h3 style={{ margin: '0 0 4px 0' }}>Patient Record: John Doe</h3>
            <p style={{ margin: 0, color: '#7B8A99' }}>ID: PAT-12345</p>
          </div>
          <DropdownMenu
            trigger={
              <button
                style={{
                  width: '44px',
                  height: '44px',
                  border: '2px solid #E8EDF2',
                  borderRadius: '8px',
                  background: '#FFFFFF',
                  cursor: 'pointer',
                  fontSize: '20px',
                }}
                aria-label="Actions"
              >
                ⋮
              </button>
            }
            position="bottom-right"
            items={[
              { label: 'View Full Chart', icon: '📋', onClick: () => alert('View') },
              { label: 'Edit Information', icon: '✏️', onClick: () => alert('Edit') },
              { label: 'Send Message', icon: '💬', onClick: () => alert('Message'), divider: true },
              { label: 'Print Summary', icon: '🖨️', onClick: () => alert('Print') },
              { label: 'Export Data', icon: '📤', onClick: () => alert('Export'), divider: true },
              { label: 'Archive', icon: '📦', onClick: () => alert('Archive'), variant: 'danger' },
            ]}
          />
        </div>
      </div>
    </div>
  ),
};
