import type { Meta, StoryObj } from '@storybook/react';
import { TextInput } from '@mantine/core';
import { MantineProvider } from '@mantine/core';
import { breatheMantineTheme } from '../theme';
import '@mantine/core/styles.css';

const meta = {
  title: 'Internal/Mantine/TextInput',
  component: TextInput,
  decorators: [
    (Story) => (
      <MantineProvider theme={breatheMantineTheme}>
        <div style={{ maxWidth: '400px' }}>
          <Story />
        </div>
      </MantineProvider>
    ),
  ],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Mantine TextInput with Breathe theme. Compact sizing (36px) with 14px font for desktop productivity.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'Enter your email',
  },
};

export const WithDescription: Story = {
  args: {
    label: 'Username',
    description: 'Your unique identifier',
    placeholder: 'johndoe',
  },
};

export const Required: Story = {
  args: {
    label: 'First Name',
    placeholder: 'John',
    required: true,
    withAsterisk: true,
  },
};

export const WithError: Story = {
  args: {
    label: 'Email',
    placeholder: 'email@example.com',
    error: 'Please enter a valid email address',
    value: 'invalid-email',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Account ID',
    placeholder: 'Cannot be changed',
    disabled: true,
    value: 'ACC-12345',
  },
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '400px' }}>
      <TextInput
        label="Default"
        placeholder="Enter text"
      />
      <TextInput
        label="With Value"
        value="Some text"
        onChange={() => {}}
      />
      <TextInput
        label="Required Field"
        placeholder="Enter text"
        required
        withAsterisk
      />
      <TextInput
        label="With Error"
        placeholder="Enter text"
        error="This field is required"
      />
      <TextInput
        label="Disabled"
        placeholder="Cannot edit"
        disabled
        value="Locked value"
      />
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '400px' }}>
      <TextInput
        label="Extra Small"
        placeholder="Size: xs"
        size="xs"
      />
      <TextInput
        label="Small"
        placeholder="Size: sm"
        size="sm"
      />
      <TextInput
        label="Medium (Default)"
        placeholder="Size: md"
        size="md"
      />
      <TextInput
        label="Large"
        placeholder="Size: lg"
        size="lg"
      />
    </div>
  ),
};
