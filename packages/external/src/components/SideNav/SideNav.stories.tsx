import type { Meta, StoryObj } from '@storybook/react';
import { SideNav } from './SideNav';
import { useState } from 'react';

const meta = {
  title: 'External/Navigation/SideNav',
  component: SideNav,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    collapsed: {
      control: 'boolean',
      description: 'Whether the nav is collapsed',
    },
  },
} satisfies Meta<typeof SideNav>;

export default meta;
type Story = StoryObj<typeof meta>;

const basicItems = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: '📊',
    href: '#dashboard',
    active: true,
  },
  {
    id: 'patients',
    label: 'Patients',
    icon: '👥',
    href: '#patients',
  },
  {
    id: 'appointments',
    label: 'Appointments',
    icon: '📅',
    href: '#appointments',
  },
  {
    id: 'messages',
    label: 'Messages',
    icon: '💬',
    href: '#messages',
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: '⚙️',
    href: '#settings',
  },
];

const nestedItems = [
  {
    id: 'home',
    label: 'Home',
    icon: '🏠',
    href: '#home',
    active: true,
  },
  {
    id: 'analytics',
    label: 'Analytics',
    icon: '📈',
    children: [
      { id: 'overview', label: 'Overview', href: '#overview' },
      { id: 'reports', label: 'Reports', href: '#reports' },
      { id: 'insights', label: 'Insights', href: '#insights' },
    ],
  },
  {
    id: 'content',
    label: 'Content',
    icon: '📝',
    children: [
      { id: 'posts', label: 'Posts', href: '#posts' },
      { id: 'media', label: 'Media', href: '#media' },
      { id: 'categories', label: 'Categories', href: '#categories' },
    ],
  },
  {
    id: 'users',
    label: 'Users',
    icon: '👤',
    href: '#users',
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: '⚙️',
    href: '#settings',
  },
];

export const Default: Story = {
  args: {
    items: basicItems,
  },
  render: (args) => (
    <div style={{ height: '100vh', position: 'relative' }}>
      <SideNav {...args} />
      <div style={{ marginLeft: '280px', padding: '40px' }}>
        <h1>Main Content Area</h1>
        <p>This is where your page content would go.</p>
      </div>
    </div>
  ),
};

export const Collapsed: Story = {
  args: {
    items: basicItems,
    collapsed: true,
  },
  render: (args) => (
    <div style={{ height: '100vh', position: 'relative' }}>
      <SideNav {...args} />
      <div style={{ marginLeft: '72px', padding: '40px' }}>
        <h1>Main Content Area</h1>
        <p>Navigation is collapsed to show only icons.</p>
      </div>
    </div>
  ),
};

export const WithNesting: Story = {
  args: {
    items: nestedItems,
  },
  render: (args) => (
    <div style={{ height: '100vh', position: 'relative' }}>
      <SideNav {...args} />
      <div style={{ marginLeft: '280px', padding: '40px' }}>
        <h1>Nested Navigation</h1>
        <p>Click on Analytics or Content to expand nested items.</p>
      </div>
    </div>
  ),
};

export const WithHeader: Story = {
  args: {
    items: basicItems,
    header: (
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div
          style={{
            width: '40px',
            height: '40px',
            background: 'linear-gradient(135deg, #2B79B9, #3A8FCC)',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '20px',
          }}
        >
          🏥
        </div>
        <div>
          <div style={{ fontWeight: 600, fontSize: '16px' }}>HealthApp</div>
          <div style={{ fontSize: '12px', opacity: 0.7 }}>v2.0</div>
        </div>
      </div>
    ),
  },
  render: (args) => (
    <div style={{ height: '100vh', position: 'relative' }}>
      <SideNav {...args} />
      <div style={{ marginLeft: '280px', padding: '40px' }}>
        <h1>With Header</h1>
        <p>Navigation includes a header with logo and app name.</p>
      </div>
    </div>
  ),
};

export const WithFooter: Story = {
  args: {
    items: basicItems,
    footer: (
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: '#2B79B9',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '14px',
              fontWeight: 600,
            }}
          >
            JD
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '14px', fontWeight: 600 }}>John Doe</div>
            <div style={{ fontSize: '12px', opacity: 0.7 }}>Admin</div>
          </div>
        </div>
        <button
          style={{
            width: '100%',
            padding: '10px',
            background: 'rgba(255, 255, 255, 0.1)',
            border: 'none',
            borderRadius: '6px',
            color: '#FFFFFF',
            fontSize: '14px',
            cursor: 'pointer',
          }}
        >
          Sign Out
        </button>
      </div>
    ),
  },
  render: (args) => (
    <div style={{ height: '100vh', position: 'relative' }}>
      <SideNav {...args} />
      <div style={{ marginLeft: '280px', padding: '40px' }}>
        <h1>With Footer</h1>
        <p>Navigation includes a footer with user profile.</p>
      </div>
    </div>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
      <div style={{ height: '100vh', position: 'relative' }}>
        <SideNav
          items={basicItems}
          collapsed={collapsed}
          onCollapseChange={setCollapsed}
          header={
            <div style={{ fontWeight: 600, fontSize: '18px' }}>
              {collapsed ? '🏥' : 'HealthApp'}
            </div>
          }
        />
        <div style={{ marginLeft: collapsed ? '72px' : '280px', padding: '40px', transition: 'margin-left 0.3s ease' }}>
          <h1>Controlled Navigation</h1>
          <p>Current state: {collapsed ? 'Collapsed' : 'Expanded'}</p>
          <button
            onClick={() => setCollapsed(!collapsed)}
            style={{
              padding: '12px 24px',
              background: '#2B79B9',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              marginTop: '16px',
            }}
          >
            Toggle from Content
          </button>
        </div>
      </div>
    );
  },
};

export const HealthcareDashboard: Story = {
  render: () => (
    <div style={{ height: '100vh', position: 'relative' }}>
      <SideNav
        items={[
          { id: 'dashboard', label: 'Dashboard', icon: '📊', href: '#', active: true },
          { id: 'patients', label: 'Patients', icon: '🏥', href: '#' },
          { id: 'appointments', label: 'Appointments', icon: '📅', href: '#' },
          {
            id: 'records',
            label: 'Medical Records',
            icon: '📋',
            children: [
              { id: 'history', label: 'Patient History', href: '#' },
              { id: 'prescriptions', label: 'Prescriptions', href: '#' },
              { id: 'lab-results', label: 'Lab Results', href: '#' },
            ],
          },
          { id: 'messages', label: 'Messages', icon: '💬', href: '#' },
          { id: 'billing', label: 'Billing', icon: '💳', href: '#' },
          { id: 'reports', label: 'Reports', icon: '📈', href: '#' },
          { id: 'settings', label: 'Settings', icon: '⚙️', href: '#' },
        ]}
        header={
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '40px',
              height: '40px',
              background: 'linear-gradient(135deg, #2B79B9, #3A8FCC)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '20px',
            }}>
              🏥
            </div>
            <div>
              <div style={{ fontWeight: 600, fontSize: '16px' }}>MedConnect</div>
              <div style={{ fontSize: '12px', opacity: 0.7 }}>Healthcare Portal</div>
            </div>
          </div>
        }
        footer={
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: '#2B79B9',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '14px',
                fontWeight: 600,
              }}>
                DR
              </div>
              <div>
                <div style={{ fontSize: '14px', fontWeight: 600 }}>Dr. Smith</div>
                <div style={{ fontSize: '12px', opacity: 0.7 }}>Physician</div>
              </div>
            </div>
          </div>
        }
      />
      <div style={{ marginLeft: '280px', padding: '40px', backgroundColor: '#FAFBFC', minHeight: '100vh' }}>
        <h1 style={{ margin: '0 0 8px 0' }}>Dashboard</h1>
        <p style={{ color: '#7B8A99', margin: '0 0 32px 0' }}>Welcome back, Dr. Smith</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
          {['Today\'s Appointments', 'Active Patients', 'Pending Reviews', 'Messages'].map((title, i) => (
            <div key={i} style={{
              padding: '24px',
              background: 'white',
              borderRadius: '12px',
              border: '1px solid #E8EDF2',
            }}>
              <div style={{ fontSize: '14px', color: '#7B8A99', marginBottom: '8px' }}>{title}</div>
              <div style={{ fontSize: '32px', fontWeight: 600, color: '#1A2B3D' }}>
                {[12, 145, 8, 23][i]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};

export const WithDisabledItems: Story = {
  args: {
    items: [
      { id: 'home', label: 'Home', icon: '🏠', href: '#', active: true },
      { id: 'products', label: 'Products', icon: '📦', href: '#' },
      { id: 'orders', label: 'Orders', icon: '🛒', href: '#' },
      { id: 'analytics', label: 'Analytics', icon: '📊', href: '#', disabled: true },
      { id: 'settings', label: 'Settings', icon: '⚙️', href: '#' },
    ],
  },
  render: (args) => (
    <div style={{ height: '100vh', position: 'relative' }}>
      <SideNav {...args} />
      <div style={{ marginLeft: '280px', padding: '40px' }}>
        <h1>Disabled Items</h1>
        <p>Analytics is disabled and cannot be clicked.</p>
      </div>
    </div>
  ),
};
