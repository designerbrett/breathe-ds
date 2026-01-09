import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Radio } from './Radio';

const meta = {
  title: 'External/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Radio button for single selection from a group. Large touch targets (44px min), high contrast, clear visual states.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['default', 'large'],
      description: 'Radio size',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    checked: {
      control: 'boolean',
      description: 'Checked state',
    },
  },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Option 1',
    name: 'example',
  },
};

export const Checked: Story = {
  args: {
    label: 'Selected option',
    name: 'example',
    checked: true,
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Morning appointment',
    name: 'time',
    helperText: '8:00 AM - 12:00 PM',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled option',
    name: 'example',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Disabled selected',
    name: 'example',
    disabled: true,
    checked: true,
  },
};

export const LargeSize: Story = {
  args: {
    label: 'Large radio button',
    name: 'example',
    size: 'large',
  },
};

export const RadioGroup: Story = {
  render: () => {
    const [selected, setSelected] = useState('morning');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '350px' }}>
        <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 600 }}>
          Preferred appointment time
        </h3>

        <Radio
          label="Morning"
          name="appointment-time"
          value="morning"
          helperText="8:00 AM - 12:00 PM"
          checked={selected === 'morning'}
          onChange={(e) => setSelected(e.target.value)}
        />

        <Radio
          label="Afternoon"
          name="appointment-time"
          value="afternoon"
          helperText="12:00 PM - 5:00 PM"
          checked={selected === 'afternoon'}
          onChange={(e) => setSelected(e.target.value)}
        />

        <Radio
          label="Evening"
          name="appointment-time"
          value="evening"
          helperText="5:00 PM - 8:00 PM"
          checked={selected === 'evening'}
          onChange={(e) => setSelected(e.target.value)}
        />

        <div style={{ marginTop: '16px', padding: '16px', background: '#F8FAFB', borderRadius: '12px' }}>
          <strong>Selected:</strong> {selected}
        </div>
      </div>
    );
  },
};

export const ContactMethod: Story = {
  render: () => {
    const [method, setMethod] = useState('email');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '350px' }}>
        <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 600 }}>
          How should we contact you?
        </h3>

        <Radio
          label="Email"
          name="contact-method"
          value="email"
          helperText="We'll send appointment reminders to your email"
          checked={method === 'email'}
          onChange={(e) => setMethod(e.target.value)}
        />

        <Radio
          label="Phone call"
          name="contact-method"
          value="phone"
          helperText="We'll call you to confirm appointments"
          checked={method === 'phone'}
          onChange={(e) => setMethod(e.target.value)}
        />

        <Radio
          label="Text message (SMS)"
          name="contact-method"
          value="sms"
          helperText="We'll send text reminders to your phone"
          checked={method === 'sms'}
          onChange={(e) => setMethod(e.target.value)}
        />

        <Radio
          label="No reminders"
          name="contact-method"
          value="none"
          helperText="I'll manage my own schedule"
          checked={method === 'none'}
          onChange={(e) => setMethod(e.target.value)}
        />
      </div>
    );
  },
};

export const WithDisabledOption: Story = {
  render: () => {
    const [insurance, setInsurance] = useState('medicare');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '350px' }}>
        <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 600 }}>
          Insurance type
        </h3>

        <Radio
          label="Medicare"
          name="insurance"
          value="medicare"
          helperText="Federal health insurance for 65+"
          checked={insurance === 'medicare'}
          onChange={(e) => setInsurance(e.target.value)}
        />

        <Radio
          label="Medicaid"
          name="insurance"
          value="medicaid"
          helperText="State and federal program"
          checked={insurance === 'medicaid'}
          onChange={(e) => setInsurance(e.target.value)}
        />

        <Radio
          label="Private insurance"
          name="insurance"
          value="private"
          helperText="Employer or self-purchased"
          checked={insurance === 'private'}
          onChange={(e) => setInsurance(e.target.value)}
        />

        <Radio
          label="Veterans Affairs"
          name="insurance"
          value="va"
          helperText="Not available at this location"
          disabled
        />
      </div>
    );
  },
};
