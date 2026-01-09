import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';
import { useState } from 'react';

const meta = {
  title: 'External/Navigation/Tabs',
  component: Tabs,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['default', 'pills', 'underline'],
      description: 'Visual variant',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether tabs take full width',
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

const basicTabs = [
  {
    id: 'overview',
    label: 'Overview',
    content: (
      <div>
        <h3>Overview</h3>
        <p>This is the overview tab content with general information.</p>
      </div>
    ),
  },
  {
    id: 'details',
    label: 'Details',
    content: (
      <div>
        <h3>Details</h3>
        <p>Detailed information and specifications go here.</p>
      </div>
    ),
  },
  {
    id: 'settings',
    label: 'Settings',
    content: (
      <div>
        <h3>Settings</h3>
        <p>Configure your preferences and options.</p>
      </div>
    ),
  },
];

export const Default: Story = {
  args: {
    items: basicTabs,
  },
};

export const Pills: Story = {
  args: {
    variant: 'pills',
    items: basicTabs,
  },
};

export const Underline: Story = {
  args: {
    variant: 'underline',
    items: basicTabs,
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    items: basicTabs,
  },
};

export const WithIcons: Story = {
  args: {
    items: [
      {
        id: 'dashboard',
        label: 'Dashboard',
        icon: '📊',
        content: <div><h3>Dashboard</h3><p>Overview of your data and metrics.</p></div>,
      },
      {
        id: 'analytics',
        label: 'Analytics',
        icon: '📈',
        content: <div><h3>Analytics</h3><p>Detailed analytics and insights.</p></div>,
      },
      {
        id: 'reports',
        label: 'Reports',
        icon: '📄',
        content: <div><h3>Reports</h3><p>Generate and view reports.</p></div>,
      },
      {
        id: 'settings',
        label: 'Settings',
        icon: '⚙️',
        content: <div><h3>Settings</h3><p>Configure your preferences.</p></div>,
      },
    ],
  },
};

export const WithDisabled: Story = {
  args: {
    items: [
      {
        id: 'active',
        label: 'Active Tab',
        content: <div><p>This tab is active and available.</p></div>,
      },
      {
        id: 'available',
        label: 'Available Tab',
        content: <div><p>This tab is also available.</p></div>,
      },
      {
        id: 'disabled',
        label: 'Disabled Tab',
        disabled: true,
        content: <div><p>This content is not accessible.</p></div>,
      },
      {
        id: 'another',
        label: 'Another Tab',
        content: <div><p>Another available tab.</p></div>,
      },
    ],
  },
};

export const Controlled: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('tab1');

    return (
      <div>
        <div style={{ marginBottom: '20px' }}>
          <p>Current tab: <strong>{activeTab}</strong></p>
          <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
            <button
              onClick={() => setActiveTab('tab1')}
              style={{
                padding: '8px 16px',
                border: '1px solid #E8EDF2',
                borderRadius: '6px',
                cursor: 'pointer',
              }}
            >
              Go to Tab 1
            </button>
            <button
              onClick={() => setActiveTab('tab2')}
              style={{
                padding: '8px 16px',
                border: '1px solid #E8EDF2',
                borderRadius: '6px',
                cursor: 'pointer',
              }}
            >
              Go to Tab 2
            </button>
          </div>
        </div>
        <Tabs
          activeTab={activeTab}
          onTabChange={setActiveTab}
          items={[
            { id: 'tab1', label: 'Tab 1', content: <p>Content for Tab 1</p> },
            { id: 'tab2', label: 'Tab 2', content: <p>Content for Tab 2</p> },
            { id: 'tab3', label: 'Tab 3', content: <p>Content for Tab 3</p> },
          ]}
        />
      </div>
    );
  },
};

export const ProductPage: Story = {
  render: () => (
    <div style={{ maxWidth: '900px' }}>
      <h2>Wireless Headphones Pro</h2>
      <p style={{ color: '#7B8A99', marginBottom: '24px' }}>
        Premium noise-cancelling headphones with 30-hour battery life
      </p>
      <Tabs
        variant="underline"
        items={[
          {
            id: 'description',
            label: 'Description',
            content: (
              <div>
                <h3>Product Description</h3>
                <p>
                  Experience premium sound quality with our latest wireless headphones.
                  Featuring active noise cancellation, 30-hour battery life, and
                  comfortable over-ear design perfect for all-day wear.
                </p>
                <h4 style={{ marginTop: '24px' }}>Key Features:</h4>
                <ul>
                  <li>Active Noise Cancellation (ANC)</li>
                  <li>30-hour battery life</li>
                  <li>Premium sound quality</li>
                  <li>Comfortable over-ear design</li>
                  <li>Bluetooth 5.0 connectivity</li>
                </ul>
              </div>
            ),
          },
          {
            id: 'specifications',
            label: 'Specifications',
            content: (
              <div>
                <h3>Technical Specifications</h3>
                <table style={{ width: '100%', marginTop: '16px' }}>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid #E8EDF2' }}>
                      <td style={{ padding: '12px 0', fontWeight: 600 }}>Driver Size</td>
                      <td style={{ padding: '12px 0' }}>40mm</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #E8EDF2' }}>
                      <td style={{ padding: '12px 0', fontWeight: 600 }}>Frequency Response</td>
                      <td style={{ padding: '12px 0' }}>20Hz - 20kHz</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #E8EDF2' }}>
                      <td style={{ padding: '12px 0', fontWeight: 600 }}>Battery Life</td>
                      <td style={{ padding: '12px 0' }}>30 hours (ANC on)</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #E8EDF2' }}>
                      <td style={{ padding: '12px 0', fontWeight: 600 }}>Charging Time</td>
                      <td style={{ padding: '12px 0' }}>2 hours</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '12px 0', fontWeight: 600 }}>Weight</td>
                      <td style={{ padding: '12px 0' }}>250g</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ),
          },
          {
            id: 'reviews',
            label: 'Reviews (24)',
            content: (
              <div>
                <h3>Customer Reviews</h3>
                <div style={{ marginTop: '20px' }}>
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      style={{
                        padding: '16px',
                        border: '1px solid #E8EDF2',
                        borderRadius: '8px',
                        marginBottom: '12px',
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                        <strong>User {i}</strong>
                        <span>⭐⭐⭐⭐⭐</span>
                      </div>
                      <p style={{ margin: 0, color: '#5A6C7D' }}>
                        Great headphones! The sound quality is amazing and the battery
                        lasts all day.
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ),
          },
        ]}
      />
    </div>
  ),
};

export const UserProfile: Story = {
  render: () => (
    <div style={{ maxWidth: '800px' }}>
      <div style={{ display: 'flex', gap: '24px', marginBottom: '32px' }}>
        <div
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: '#2B79B9',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '32px',
            fontWeight: 600,
          }}
        >
          JD
        </div>
        <div>
          <h2 style={{ margin: '0 0 8px 0' }}>John Doe</h2>
          <p style={{ margin: '0', color: '#7B8A99' }}>john.doe@example.com</p>
        </div>
      </div>

      <Tabs
        variant="pills"
        items={[
          {
            id: 'profile',
            label: 'Profile',
            icon: '👤',
            content: (
              <div>
                <h3>Profile Information</h3>
                <div style={{ display: 'grid', gap: '16px', marginTop: '20px' }}>
                  <div>
                    <label style={{ display: 'block', fontWeight: 600, marginBottom: '8px' }}>
                      Full Name
                    </label>
                    <input
                      type="text"
                      defaultValue="John Doe"
                      style={{
                        width: '100%',
                        padding: '12px',
                        border: '1px solid #E8EDF2',
                        borderRadius: '8px',
                        fontSize: '16px',
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontWeight: 600, marginBottom: '8px' }}>
                      Email
                    </label>
                    <input
                      type="email"
                      defaultValue="john.doe@example.com"
                      style={{
                        width: '100%',
                        padding: '12px',
                        border: '1px solid #E8EDF2',
                        borderRadius: '8px',
                        fontSize: '16px',
                      }}
                    />
                  </div>
                </div>
              </div>
            ),
          },
          {
            id: 'security',
            label: 'Security',
            icon: '🔒',
            content: (
              <div>
                <h3>Security Settings</h3>
                <p>Manage your password and authentication methods.</p>
                <button
                  style={{
                    marginTop: '16px',
                    padding: '12px 24px',
                    background: '#2B79B9',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                  }}
                >
                  Change Password
                </button>
              </div>
            ),
          },
          {
            id: 'notifications',
            label: 'Notifications',
            icon: '🔔',
            content: (
              <div>
                <h3>Notification Preferences</h3>
                <p>Choose how you want to be notified.</p>
              </div>
            ),
          },
        ]}
      />
    </div>
  ),
};

export const Dashboard: Story = {
  render: () => (
    <div>
      <h1 style={{ margin: '0 0 24px 0' }}>Analytics Dashboard</h1>
      <Tabs
        fullWidth
        items={[
          {
            id: 'overview',
            label: 'Overview',
            icon: '📊',
            content: (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                {['Total Users', 'Revenue', 'Orders', 'Growth'].map((metric) => (
                  <div
                    key={metric}
                    style={{
                      padding: '24px',
                      background: 'white',
                      border: '1px solid #E8EDF2',
                      borderRadius: '12px',
                    }}
                  >
                    <div style={{ fontSize: '14px', color: '#7B8A99', marginBottom: '8px' }}>
                      {metric}
                    </div>
                    <div style={{ fontSize: '32px', fontWeight: 600 }}>
                      {metric === 'Revenue' ? '$45.2K' : '1,234'}
                    </div>
                  </div>
                ))}
              </div>
            ),
          },
          {
            id: 'users',
            label: 'Users',
            icon: '👥',
            content: <div><h3>User Analytics</h3><p>Detailed user metrics and insights.</p></div>,
          },
          {
            id: 'revenue',
            label: 'Revenue',
            icon: '💰',
            content: <div><h3>Revenue Report</h3><p>Financial performance and revenue tracking.</p></div>,
          },
          {
            id: 'traffic',
            label: 'Traffic',
            icon: '🌐',
            content: <div><h3>Traffic Sources</h3><p>Website traffic analysis and sources.</p></div>,
          },
        ]}
      />
    </div>
  ),
};
