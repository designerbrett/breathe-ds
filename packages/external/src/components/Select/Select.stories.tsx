import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const stateOptions = [
  { value: 'al', label: 'Alabama' },
  { value: 'ak', label: 'Alaska' },
  { value: 'az', label: 'Arizona' },
  { value: 'ca', label: 'California' },
  { value: 'fl', label: 'Florida' },
  { value: 'ny', label: 'New York' },
  { value: 'tx', label: 'Texas' },
];

const meta = {
  title: 'External/Select',
  component: Select,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Select dropdown optimized for mobile (65+ audience). Large touch targets (56px), high contrast, clear validation states.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['default', 'large'],
      description: 'Select size',
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
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'State',
    placeholder: 'Select a state',
    options: stateOptions,
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'State',
    placeholder: 'Select a state',
    options: stateOptions,
    helperText: 'Choose your state of residence',
  },
};

export const Required: Story = {
  args: {
    label: 'State',
    placeholder: 'Select a state',
    options: stateOptions,
    required: true,
    helperText: 'This field is required',
  },
};

export const WithError: Story = {
  args: {
    label: 'State',
    placeholder: 'Select a state',
    options: stateOptions,
    error: 'Please select a state',
  },
};

export const Disabled: Story = {
  args: {
    label: 'State',
    placeholder: 'Select a state',
    options: stateOptions,
    disabled: true,
  },
};

export const LargeSize: Story = {
  args: {
    label: 'State',
    placeholder: 'Select a state',
    options: stateOptions,
    size: 'large',
  },
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '350px' }}>
      <Select
        label="Default"
        placeholder="Select an option"
        options={stateOptions}
      />

      <Select
        label="With Helper Text"
        placeholder="Select an option"
        options={stateOptions}
        helperText="This is helper text"
      />

      <Select
        label="Required Field"
        placeholder="Select an option"
        options={stateOptions}
        required
      />

      <Select
        label="Error State"
        placeholder="Select an option"
        options={stateOptions}
        error="This field has an error"
      />

      <Select
        label="Disabled"
        placeholder="Select an option"
        options={stateOptions}
        disabled
      />
    </div>
  ),
};

export const FormExample: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '350px' }}>
      <Select
        label="Appointment Type"
        placeholder="Select appointment type"
        options={[
          { value: 'checkup', label: 'Annual Checkup' },
          { value: 'followup', label: 'Follow-up Visit' },
          { value: 'urgent', label: 'Urgent Care' },
          { value: 'consult', label: 'Consultation' },
        ]}
        required
      />

      <Select
        label="Preferred Time"
        placeholder="Select preferred time"
        options={[
          { value: 'morning', label: 'Morning (8am - 12pm)' },
          { value: 'afternoon', label: 'Afternoon (12pm - 5pm)' },
          { value: 'evening', label: 'Evening (5pm - 8pm)' },
        ]}
        helperText="Choose your preferred time slot"
      />

      <Select
        label="Doctor"
        placeholder="Select a doctor"
        options={[
          { value: 'smith', label: 'Dr. Smith (Cardiology)' },
          { value: 'jones', label: 'Dr. Jones (General)' },
          { value: 'williams', label: 'Dr. Williams (Pediatrics)', disabled: true },
        ]}
      />
    </div>
  ),
};
