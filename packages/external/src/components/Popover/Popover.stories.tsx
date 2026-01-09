import type { Meta, StoryObj } from '@storybook/react';
import { Popover } from './Popover';
import { Button } from '../Button/Button';

const meta = {
  title: 'External/Overlays/Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    placement: {
      control: 'radio',
      options: ['top', 'bottom', 'left', 'right'],
      description: 'Placement relative to trigger',
    },
    triggerOn: {
      control: 'radio',
      options: ['click', 'hover'],
      description: 'Trigger action',
    },
    showArrow: {
      control: 'boolean',
      description: 'Whether to show arrow pointer',
    },
  },
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    trigger: <Button variant="primary">Click me</Button>,
    children: (
      <div>
        <h4 style={{ margin: '0 0 8px 0' }}>Popover Title</h4>
        <p style={{ margin: 0, color: '#5A6C7D' }}>
          This is the popover content. Click outside to close.
        </p>
      </div>
    ),
  },
};

export const Bottom: Story = {
  args: {
    placement: 'bottom',
    trigger: <Button variant="outline">Bottom</Button>,
    children: (
      <p style={{ margin: 0 }}>
        This popover appears at the bottom of the trigger element.
      </p>
    ),
  },
};

export const Top: Story = {
  args: {
    placement: 'top',
    trigger: <Button variant="outline">Top</Button>,
    children: (
      <p style={{ margin: 0 }}>
        This popover appears at the top of the trigger element.
      </p>
    ),
  },
};

export const Left: Story = {
  args: {
    placement: 'left',
    trigger: <Button variant="outline">Left</Button>,
    children: (
      <p style={{ margin: 0 }}>
        This popover appears to the left of the trigger element.
      </p>
    ),
  },
};

export const Right: Story = {
  args: {
    placement: 'right',
    trigger: <Button variant="outline">Right</Button>,
    children: (
      <p style={{ margin: 0 }}>
        This popover appears to the right of the trigger element.
      </p>
    ),
  },
};

export const HoverTrigger: Story = {
  args: {
    triggerOn: 'hover',
    trigger: <Button variant="secondary">Hover over me</Button>,
    children: (
      <p style={{ margin: 0 }}>
        This popover appears when you hover over the trigger.
      </p>
    ),
  },
};

export const NoArrow: Story = {
  args: {
    showArrow: false,
    trigger: <Button variant="outline">No Arrow</Button>,
    children: <p style={{ margin: 0 }}>This popover has no arrow.</p>,
  },
};

export const RichContent: Story = {
  args: {
    trigger: <Button variant="primary">View Details</Button>,
    children: (
      <div>
        <h3 style={{ margin: '0 0 12px 0', fontSize: '18px' }}>
          Product Information
        </h3>
        <p style={{ margin: '0 0 12px 0', color: '#5A6C7D', lineHeight: 1.6 }}>
          This premium wireless headphone features active noise cancellation
          and 30-hour battery life.
        </p>
        <div style={{ display: 'flex', gap: '8px' }}>
          <Button size="small" variant="primary">
            Buy Now
          </Button>
          <Button size="small" variant="outline">
            Learn More
          </Button>
        </div>
      </div>
    ),
  },
};

export const UserProfile: Story = {
  args: {
    triggerOn: 'hover',
    trigger: (
      <div
        style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          backgroundColor: '#2B79B9',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 600,
          cursor: 'pointer',
        }}
      >
        JD
      </div>
    ),
    children: (
      <div>
        <h4 style={{ margin: '0 0 4px 0' }}>John Doe</h4>
        <p style={{ margin: '0 0 12px 0', fontSize: '14px', color: '#7B8A99' }}>
          john.doe@example.com
        </p>
        <div style={{ borderTop: '1px solid #E8EDF2', paddingTop: '12px' }}>
          <a
            href="#"
            style={{
              display: 'block',
              padding: '8px 0',
              color: '#2B79B9',
              textDecoration: 'none',
            }}
          >
            View Profile
          </a>
          <a
            href="#"
            style={{
              display: 'block',
              padding: '8px 0',
              color: '#2B79B9',
              textDecoration: 'none',
            }}
          >
            Settings
          </a>
          <a
            href="#"
            style={{
              display: 'block',
              padding: '8px 0',
              color: '#E74C3C',
              textDecoration: 'none',
            }}
          >
            Sign Out
          </a>
        </div>
      </div>
    ),
  },
};

export const HelpTooltip: Story = {
  args: {
    triggerOn: 'hover',
    placement: 'top',
    trigger: (
      <button
        style={{
          width: '24px',
          height: '24px',
          borderRadius: '50%',
          border: '2px solid #2B79B9',
          backgroundColor: 'transparent',
          color: '#2B79B9',
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: 600,
        }}
      >
        ?
      </button>
    ),
    children: (
      <p style={{ margin: 0, fontSize: '14px' }}>
        Click here to get more information about this feature.
      </p>
    ),
  },
};

export const QuickActions: Story = {
  args: {
    trigger: <Button variant="outline">Actions</Button>,
    children: (
      <div>
        <button
          style={{
            display: 'block',
            width: '100%',
            padding: '12px',
            border: 'none',
            background: 'none',
            textAlign: 'left',
            cursor: 'pointer',
            borderRadius: '4px',
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = '#F8FAFB')
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = 'transparent')
          }
        >
          Edit
        </button>
        <button
          style={{
            display: 'block',
            width: '100%',
            padding: '12px',
            border: 'none',
            background: 'none',
            textAlign: 'left',
            cursor: 'pointer',
            borderRadius: '4px',
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = '#F8FAFB')
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = 'transparent')
          }
        >
          Duplicate
        </button>
        <button
          style={{
            display: 'block',
            width: '100%',
            padding: '12px',
            border: 'none',
            background: 'none',
            textAlign: 'left',
            cursor: 'pointer',
            borderRadius: '4px',
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = '#F8FAFB')
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = 'transparent')
          }
        >
          Archive
        </button>
        <hr style={{ margin: '8px 0', border: 'none', borderTop: '1px solid #E8EDF2' }} />
        <button
          style={{
            display: 'block',
            width: '100%',
            padding: '12px',
            border: 'none',
            background: 'none',
            textAlign: 'left',
            cursor: 'pointer',
            borderRadius: '4px',
            color: '#E74C3C',
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = '#FFEBEE')
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = 'transparent')
          }
        >
          Delete
        </button>
      </div>
    ),
  },
};

export const FormHelper: Story = {
  render: () => (
    <div style={{ padding: '40px' }}>
      <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span>Password</span>
        <Popover
          triggerOn="hover"
          placement="right"
          trigger={
            <span
              style={{
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                border: '1px solid #7B8A99',
                color: '#7B8A99',
                fontSize: '12px',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'help',
              }}
            >
              i
            </span>
          }
        >
          <div style={{ maxWidth: '250px' }}>
            <p style={{ margin: '0 0 8px 0', fontWeight: 600 }}>
              Password Requirements:
            </p>
            <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '14px' }}>
              <li>At least 8 characters</li>
              <li>One uppercase letter</li>
              <li>One number</li>
              <li>One special character</li>
            </ul>
          </div>
        </Popover>
      </label>
      <input
        type="password"
        style={{
          marginTop: '8px',
          width: '300px',
          padding: '12px',
          border: '1px solid #E8EDF2',
          borderRadius: '8px',
          fontSize: '16px',
        }}
      />
    </div>
  ),
};

export const NotificationPreview: Story = {
  args: {
    trigger: (
      <button
        style={{
          position: 'relative',
          padding: '8px',
          border: '1px solid #E8EDF2',
          borderRadius: '8px',
          background: 'white',
          cursor: 'pointer',
        }}
      >
        🔔
        <span
          style={{
            position: 'absolute',
            top: '4px',
            right: '4px',
            width: '8px',
            height: '8px',
            backgroundColor: '#E74C3C',
            borderRadius: '50%',
          }}
        />
      </button>
    ),
    children: (
      <div style={{ width: '300px' }}>
        <h4 style={{ margin: '0 0 12px 0' }}>Notifications</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ padding: '12px', backgroundColor: '#F8FAFB', borderRadius: '6px' }}>
            <p style={{ margin: '0 0 4px 0', fontWeight: 600, fontSize: '14px' }}>
              New message
            </p>
            <p style={{ margin: 0, fontSize: '13px', color: '#7B8A99' }}>
              You have a new message from Sarah
            </p>
          </div>
          <div style={{ padding: '12px', backgroundColor: '#F8FAFB', borderRadius: '6px' }}>
            <p style={{ margin: '0 0 4px 0', fontWeight: 600, fontSize: '14px' }}>
              Task completed
            </p>
            <p style={{ margin: 0, fontSize: '13px', color: '#7B8A99' }}>
              "Website Redesign" has been completed
            </p>
          </div>
        </div>
        <button
          style={{
            marginTop: '12px',
            width: '100%',
            padding: '8px',
            border: '1px solid #E8EDF2',
            borderRadius: '6px',
            background: 'white',
            cursor: 'pointer',
            fontSize: '14px',
          }}
        >
          View All
        </button>
      </div>
    ),
  },
};
