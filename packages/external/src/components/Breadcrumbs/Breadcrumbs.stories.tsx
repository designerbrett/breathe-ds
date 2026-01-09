import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumbs } from './Breadcrumbs';

const meta = {
  title: 'External/Navigation/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    items: {
      description: 'Array of breadcrumb items',
    },
    separator: {
      description: 'Custom separator between items',
    },
    maxItems: {
      control: 'number',
      description: 'Maximum items to show before collapsing',
    },
  },
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products' },
      { label: 'Electronics', href: '/products/electronics' },
      { label: 'Laptops' },
    ],
  },
};

export const TwoLevels: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Dashboard' },
    ],
  },
};

export const ThreeLevels: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Settings', href: '/settings' },
      { label: 'Profile' },
    ],
  },
};

export const WithClickHandlers: Story = {
  args: {
    items: [
      {
        label: 'Home',
        onClick: () => alert('Navigate to Home'),
      },
      {
        label: 'Documents',
        onClick: () => alert('Navigate to Documents'),
      },
      {
        label: 'Current Page',
      },
    ],
  },
};

export const CustomSeparator: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products' },
      { label: 'Details' },
    ],
    separator: '>',
  },
};

export const ArrowSeparator: Story = {
  args: {
    items: [
      { label: 'Dashboard', href: '/' },
      { label: 'Analytics', href: '/analytics' },
      { label: 'Reports' },
    ],
    separator: '→',
  },
};

export const DotSeparator: Story = {
  args: {
    items: [
      { label: 'Account', href: '/account' },
      { label: 'Billing', href: '/account/billing' },
      { label: 'Payment Methods' },
    ],
    separator: '•',
  },
};

export const LongPath: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products' },
      { label: 'Electronics', href: '/products/electronics' },
      { label: 'Computers', href: '/products/electronics/computers' },
      { label: 'Laptops', href: '/products/electronics/computers/laptops' },
      { label: 'Gaming Laptops' },
    ],
  },
};

export const CollapsedPath: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Level 1', href: '/level1' },
      { label: 'Level 2', href: '/level1/level2' },
      { label: 'Level 3', href: '/level1/level2/level3' },
      { label: 'Level 4', href: '/level1/level2/level3/level4' },
      { label: 'Current Page' },
    ],
    maxItems: 4,
  },
};

export const CollapsedToThree: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products' },
      { label: 'Category', href: '/products/category' },
      { label: 'Subcategory', href: '/products/category/subcategory' },
      { label: 'Item', href: '/products/category/subcategory/item' },
      { label: 'Details' },
    ],
    maxItems: 3,
  },
};

export const EcommercePath: Story = {
  render: () => (
    <div>
      <h3>Product Details</h3>
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Shop', href: '/shop' },
          { label: 'Electronics', href: '/shop/electronics' },
          { label: 'Laptops', href: '/shop/electronics/laptops' },
          { label: 'MacBook Pro 16"' },
        ]}
      />
      <div style={{ marginTop: '24px', padding: '16px', backgroundColor: '#F8FAFB', borderRadius: '8px' }}>
        <p>Product content would go here...</p>
      </div>
    </div>
  ),
};

export const SettingsPath: Story = {
  render: () => (
    <div>
      <Breadcrumbs
        items={[
          { label: 'Dashboard', href: '/' },
          { label: 'Settings', href: '/settings' },
          { label: 'Account', href: '/settings/account' },
          { label: 'Security' },
        ]}
        separator="›"
      />
      <div style={{ marginTop: '24px' }}>
        <h2>Security Settings</h2>
        <p>Manage your account security preferences.</p>
      </div>
    </div>
  ),
};
