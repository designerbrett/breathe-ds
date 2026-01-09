import type { Meta, StoryObj } from '@storybook/react';
import { DescriptionList } from './DescriptionList';

const meta = {
  title: 'External/Data Display/DescriptionList',
  component: DescriptionList,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
      description: 'Layout orientation',
    },
    dividers: {
      control: 'boolean',
      description: 'Show dividers between items',
    },
    columns: {
      control: 'radio',
      options: ['1', '2', '3'],
      description: 'Number of columns (horizontal only)',
    },
  },
} satisfies Meta<typeof DescriptionList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { term: 'Name', description: 'John Doe' },
      { term: 'Email', description: 'john.doe@example.com' },
      { term: 'Phone', description: '+1 (555) 123-4567' },
      { term: 'Location', description: 'San Francisco, CA' },
    ],
  },
};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
    items: [
      { term: 'Product Name', description: 'Premium Wireless Headphones' },
      {
        term: 'Description',
        description:
          'High-quality over-ear headphones with active noise cancellation and 30-hour battery life.',
      },
      { term: 'Price', description: '$299.99' },
      { term: 'Availability', description: 'In Stock' },
    ],
  },
};

export const WithDividers: Story = {
  args: {
    dividers: true,
    items: [
      { term: 'Order Number', description: '#ORD-2024-0123' },
      { term: 'Order Date', description: 'January 8, 2024' },
      { term: 'Status', description: 'Delivered' },
      { term: 'Total', description: '$156.99' },
      { term: 'Payment Method', description: 'Visa ending in 4242' },
    ],
  },
};

export const TwoColumns: Story = {
  args: {
    columns: '2',
    items: [
      { term: 'First Name', description: 'Jane' },
      { term: 'Last Name', description: 'Smith' },
      { term: 'Email', description: 'jane.smith@example.com' },
      { term: 'Phone', description: '+1 (555) 987-6543' },
      { term: 'Address', description: '123 Main Street' },
      { term: 'City', description: 'New York' },
    ],
  },
};

export const ThreeColumns: Story = {
  args: {
    columns: '3',
    items: [
      { term: 'CPU', description: 'Intel i7-1165G7' },
      { term: 'RAM', description: '16GB DDR4' },
      { term: 'Storage', description: '512GB SSD' },
      { term: 'Display', description: '15.6" FHD' },
      { term: 'Graphics', description: 'Intel Iris Xe' },
      { term: 'Battery', description: '10 hours' },
    ],
  },
};

export const UserProfile: Story = {
  render: () => (
    <div style={{ maxWidth: '800px' }}>
      <h2>User Profile</h2>
      <DescriptionList
        dividers
        items={[
          { term: 'Full Name', description: 'Sarah Johnson' },
          { term: 'Username', description: '@sarahj' },
          { term: 'Email', description: 'sarah.johnson@example.com' },
          { term: 'Role', description: 'Administrator' },
          { term: 'Department', description: 'Engineering' },
          { term: 'Location', description: 'Seattle, WA' },
          { term: 'Member Since', description: 'March 15, 2022' },
          {
            term: 'Bio',
            description:
              'Software engineer passionate about building accessible and user-friendly applications.',
          },
        ]}
      />
    </div>
  ),
};

export const OrderDetails: Story = {
  render: () => (
    <div style={{ maxWidth: '700px' }}>
      <h2>Order Details</h2>
      <DescriptionList
        dividers
        items={[
          { term: 'Order ID', description: '#ORD-2024-0456' },
          { term: 'Date Placed', description: 'January 8, 2024 at 10:30 AM' },
          {
            term: 'Status',
            description: (
              <span style={{ color: '#27AE60', fontWeight: 600 }}>
                Shipped
              </span>
            ),
          },
          {
            term: 'Tracking Number',
            description: (
              <a href="#" style={{ color: '#2B79B9' }}>
                1Z999AA10123456784
              </a>
            ),
          },
          { term: 'Estimated Delivery', description: 'January 12, 2024' },
          { term: 'Shipping Address', description: '456 Oak Avenue, Apt 3B, Boston, MA 02101' },
          { term: 'Subtotal', description: '$145.00' },
          { term: 'Shipping', description: '$10.00' },
          { term: 'Tax', description: '$12.75' },
          {
            term: 'Total',
            description: (
              <strong style={{ fontSize: '18px', color: '#1A2B3D' }}>
                $167.75
              </strong>
            ),
          },
        ]}
      />
    </div>
  ),
};

export const ProductSpecifications: Story = {
  render: () => (
    <div>
      <h2>Technical Specifications</h2>
      <DescriptionList
        columns="2"
        items={[
          { term: 'Brand', description: 'TechPro' },
          { term: 'Model', description: 'TP-X1000' },
          { term: 'Processor', description: 'Intel Core i7-1165G7 (4.7GHz)' },
          { term: 'Memory', description: '16GB LPDDR4X RAM' },
          { term: 'Storage', description: '512GB NVMe SSD' },
          { term: 'Display', description: '15.6" IPS, 1920x1080, 300 nits' },
          { term: 'Graphics', description: 'Intel Iris Xe Graphics' },
          { term: 'Connectivity', description: 'Wi-Fi 6, Bluetooth 5.1' },
          { term: 'Ports', description: '2x USB-C, 2x USB-A, HDMI, Audio Jack' },
          { term: 'Battery', description: '65Wh, up to 10 hours' },
          { term: 'Weight', description: '3.5 lbs (1.6 kg)' },
          { term: 'Dimensions', description: '14.1" x 9.3" x 0.7"' },
        ]}
      />
    </div>
  ),
};

export const AccountSettings: Story = {
  render: () => (
    <div style={{ maxWidth: '600px' }}>
      <h3>Account Information</h3>
      <DescriptionList
        orientation="vertical"
        dividers
        items={[
          {
            term: 'Account Type',
            description: (
              <div>
                <div style={{ fontWeight: 600 }}>Premium</div>
                <div style={{ fontSize: '14px', color: '#7B8A99', marginTop: '4px' }}>
                  Billed monthly at $29.99
                </div>
              </div>
            ),
          },
          {
            term: 'Next Billing Date',
            description: 'February 8, 2024',
          },
          {
            term: 'Payment Method',
            description: (
              <div>
                <div>Visa ending in 4242</div>
                <a href="#" style={{ fontSize: '14px', color: '#2B79B9', marginTop: '4px', display: 'inline-block' }}>
                  Update payment method
                </a>
              </div>
            ),
          },
          {
            term: 'Email Notifications',
            description: (
              <div>
                <div>Enabled for account updates and promotions</div>
                <a href="#" style={{ fontSize: '14px', color: '#2B79B9', marginTop: '4px', display: 'inline-block' }}>
                  Manage preferences
                </a>
              </div>
            ),
          },
        ]}
      />
    </div>
  ),
};
