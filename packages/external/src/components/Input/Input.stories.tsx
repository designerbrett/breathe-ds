import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta = {
  title: 'External/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Text input optimized for mobile (65+ audience). Large touch targets (56px), high contrast, clear validation states.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['default', 'large'],
      description: 'Input size',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    required: {
      control: 'boolean',
      description: 'Required field',
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'you@example.com',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'you@example.com',
    helperText: "We'll never share your email with anyone else.",
  },
};

export const Required: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'you@example.com',
    required: true,
    helperText: 'This field is required',
  },
};

export const WithError: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'you@example.com',
    value: 'invalid-email',
    error: 'Please enter a valid email address',
  },
};

export const WithSuccess: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'you@example.com',
    value: 'user@example.com',
    success: 'Looks good!',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'you@example.com',
    disabled: true,
    value: 'disabled@example.com',
  },
};

export const LargeSize: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'you@example.com',
    size: 'large',
  },
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '350px' }}>
      <Input label="Default" placeholder="Enter text..." />

      <Input
        label="With Helper Text"
        placeholder="Enter text..."
        helperText="This is helper text"
      />

      <Input
        label="Required Field"
        placeholder="Enter text..."
        required
      />

      <Input
        label="Error State"
        placeholder="Enter text..."
        value="invalid"
        error="This field has an error"
      />

      <Input
        label="Success State"
        placeholder="Enter text..."
        value="valid@example.com"
        success="Looks good!"
      />

      <Input
        label="Disabled"
        placeholder="Enter text..."
        disabled
        value="Disabled value"
      />
    </div>
  ),
};

export const FormExample: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '350px' }}>
      <Input
        label="Full Name"
        placeholder="John Doe"
        required
      />

      <Input
        label="Email Address"
        type="email"
        placeholder="you@example.com"
        required
        helperText="We'll send confirmation to this email"
      />

      <Input
        label="Phone Number"
        type="tel"
        placeholder="(555) 555-5555"
      />

      <Input
        label="Date of Birth"
        type="date"
      />
    </div>
  ),
};
