import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '@mantine/core';
import { MantineProvider } from '@mantine/core';
import { breatheMantineTheme } from '../theme';
import '@mantine/core/styles.css';

const meta = {
  title: 'Internal/Mantine/Select',
  component: Select,
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
        component: 'Mantine Select dropdown with Breathe theme. Compact sizing (36px) with custom chevron icon for desktop.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockData = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
];

export const Default: Story = {
  args: {
    label: 'Choose Framework',
    placeholder: 'Select one',
    data: mockData,
  },
};

export const WithDescription: Story = {
  args: {
    label: 'Preferred Language',
    description: 'Select your primary programming language',
    placeholder: 'Choose one',
    data: [
      { value: 'typescript', label: 'TypeScript' },
      { value: 'javascript', label: 'JavaScript' },
      { value: 'python', label: 'Python' },
      { value: 'java', label: 'Java' },
    ],
  },
};

export const Required: Story = {
  args: {
    label: 'Department',
    placeholder: 'Select department',
    required: true,
    withAsterisk: true,
    data: [
      { value: 'eng', label: 'Engineering' },
      { value: 'design', label: 'Design' },
      { value: 'product', label: 'Product' },
      { value: 'sales', label: 'Sales' },
    ],
  },
};

export const WithError: Story = {
  args: {
    label: 'Status',
    placeholder: 'Select status',
    error: 'Please select a valid status',
    data: [
      { value: 'active', label: 'Active' },
      { value: 'inactive', label: 'Inactive' },
      { value: 'pending', label: 'Pending' },
    ],
  },
};

export const Disabled: Story = {
  args: {
    label: 'Account Type',
    placeholder: 'Cannot be changed',
    disabled: true,
    value: 'premium',
    data: [
      { value: 'free', label: 'Free' },
      { value: 'premium', label: 'Premium' },
      { value: 'enterprise', label: 'Enterprise' },
    ],
  },
};

export const Searchable: Story = {
  args: {
    label: 'Select Patient',
    placeholder: 'Search for patient',
    searchable: true,
    data: [
      { value: '1', label: 'John Smith - #12345' },
      { value: '2', label: 'Jane Doe - #12346' },
      { value: '3', label: 'Bob Johnson - #12347' },
      { value: '4', label: 'Alice Williams - #12348' },
      { value: '5', label: 'Charlie Brown - #12349' },
    ],
  },
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '400px' }}>
      <Select
        label="Default"
        placeholder="Select option"
        data={mockData}
      />
      <Select
        label="With Value"
        value="react"
        data={mockData}
        onChange={() => {}}
      />
      <Select
        label="Required Field"
        placeholder="Select option"
        required
        withAsterisk
        data={mockData}
      />
      <Select
        label="With Error"
        placeholder="Select option"
        error="This field is required"
        data={mockData}
      />
      <Select
        label="Disabled"
        disabled
        value="vue"
        data={mockData}
      />
      <Select
        label="Searchable"
        placeholder="Type to search"
        searchable
        data={mockData}
      />
    </div>
  ),
};

export const HealthcareExamples: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '400px' }}>
      <Select
        label="Appointment Type"
        placeholder="Select type"
        data={[
          { value: 'checkup', label: 'Annual Check-up' },
          { value: 'followup', label: 'Follow-up Visit' },
          { value: 'urgent', label: 'Urgent Care' },
          { value: 'specialist', label: 'Specialist Consultation' },
        ]}
      />
      <Select
        label="Priority Level"
        placeholder="Select priority"
        data={[
          { value: 'urgent', label: 'Urgent' },
          { value: 'high', label: 'High' },
          { value: 'normal', label: 'Normal' },
          { value: 'low', label: 'Low' },
        ]}
      />
      <Select
        label="Insurance Provider"
        placeholder="Search provider"
        searchable
        data={[
          { value: 'bcbs', label: 'Blue Cross Blue Shield' },
          { value: 'aetna', label: 'Aetna' },
          { value: 'uhc', label: 'UnitedHealthcare' },
          { value: 'cigna', label: 'Cigna' },
          { value: 'kaiser', label: 'Kaiser Permanente' },
        ]}
      />
    </div>
  ),
};
