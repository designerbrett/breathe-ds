import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from '@mantine/core';
import { MantineProvider } from '@mantine/core';
import { breatheMantineTheme } from '../theme';
import '@mantine/core/styles.css';

const meta = {
  title: 'Internal/Mantine/Textarea',
  component: Textarea,
  decorators: [
    (Story) => (
      <MantineProvider theme={breatheMantineTheme}>
        <div style={{ maxWidth: '500px' }}>
          <Story />
        </div>
      </MantineProvider>
    ),
  ],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Mantine Textarea with Breathe theme. Multi-line text input with auto-resize for desktop productivity.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Comments',
    placeholder: 'Enter your comments',
  },
};

export const WithDescription: Story = {
  args: {
    label: 'Feedback',
    description: 'Please provide detailed feedback about your experience',
    placeholder: 'Share your thoughts...',
  },
};

export const Required: Story = {
  args: {
    label: 'Reason for Visit',
    placeholder: 'Describe your symptoms',
    required: true,
    withAsterisk: true,
  },
};

export const WithError: Story = {
  args: {
    label: 'Medical History',
    placeholder: 'Provide details',
    error: 'This field is required and must be at least 20 characters',
    value: 'Too short',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Previous Notes',
    placeholder: 'Cannot be edited',
    disabled: true,
    value: 'These notes are locked and cannot be modified.',
  },
};

export const AutoSize: Story = {
  args: {
    label: 'Notes',
    placeholder: 'This textarea will grow as you type',
    autosize: true,
    minRows: 2,
    maxRows: 6,
  },
};

export const WithCharacterCount: Story = {
  render: () => {
    const [value, setValue] = React.useState('');
    const maxLength = 200;

    return (
      <div>
        <Textarea
          label="Patient Summary"
          placeholder="Brief summary of the visit"
          value={value}
          onChange={(event) => setValue(event.currentTarget.value)}
          maxLength={maxLength}
        />
        <div style={{ fontSize: '12px', color: '#868e96', marginTop: '4px' }}>
          {value.length} / {maxLength} characters
        </div>
      </div>
    );
  },
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '500px' }}>
      <Textarea
        label="Default"
        placeholder="Enter text"
      />
      <Textarea
        label="With Value"
        value="Some content here"
        onChange={() => {}}
      />
      <Textarea
        label="Required Field"
        placeholder="Enter text"
        required
        withAsterisk
      />
      <Textarea
        label="With Error"
        placeholder="Enter text"
        error="This field is required"
      />
      <Textarea
        label="Disabled"
        placeholder="Cannot edit"
        disabled
        value="Locked content"
      />
      <Textarea
        label="Auto-resize"
        placeholder="Type to see it grow"
        autosize
        minRows={2}
        maxRows={4}
      />
    </div>
  ),
};

export const HealthcareExamples: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '500px' }}>
      <Textarea
        label="Chief Complaint"
        description="Primary reason for today's visit"
        placeholder="Patient reports..."
        required
        autosize
        minRows={2}
        maxRows={4}
      />

      <Textarea
        label="Clinical Notes"
        description="Detailed examination findings"
        placeholder="Physical exam reveals..."
        autosize
        minRows={3}
        maxRows={8}
      />

      <Textarea
        label="Treatment Plan"
        description="Prescribed medications and instructions"
        placeholder="Recommend..."
        autosize
        minRows={2}
        maxRows={6}
      />

      <Textarea
        label="Follow-up Instructions"
        description="Patient care instructions and next steps"
        placeholder="Patient advised to..."
        autosize
        minRows={2}
        maxRows={4}
      />
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '500px' }}>
      <Textarea
        label="Extra Small"
        placeholder="Size: xs"
        size="xs"
      />
      <Textarea
        label="Small"
        placeholder="Size: sm"
        size="sm"
      />
      <Textarea
        label="Medium (Default)"
        placeholder="Size: md"
        size="md"
      />
      <Textarea
        label="Large"
        placeholder="Size: lg"
        size="lg"
      />
    </div>
  ),
};
