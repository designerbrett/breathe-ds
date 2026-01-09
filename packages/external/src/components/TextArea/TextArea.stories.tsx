import type { Meta, StoryObj } from '@storybook/react';
import { TextArea } from './TextArea';
import React from 'react';

const meta = {
  title: 'External/Form/TextArea',
  component: TextArea,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    autoResize: {
      control: 'boolean',
      description: 'Auto-resize textarea to fit content',
    },
    showCharacterCount: {
      control: 'boolean',
      description: 'Show current character count',
    },
    minRows: {
      control: { type: 'number', min: 1, max: 10 },
      description: 'Minimum rows to display',
    },
    maxRows: {
      control: { type: 'number', min: 1, max: 20 },
      description: 'Maximum rows before scrolling',
    },
  },
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Comments',
    placeholder: 'Enter your comments here...',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Description',
    helperText: 'Provide a detailed description of the issue.',
    placeholder: 'Describe the issue...',
  },
};

export const Required: Story = {
  args: {
    label: 'Message',
    required: true,
    placeholder: 'This field is required',
  },
};

export const WithError: Story = {
  args: {
    label: 'Feedback',
    error: 'This field is required. Please provide your feedback.',
    defaultValue: '',
  },
};

export const WithSuccess: Story = {
  args: {
    label: 'Review',
    success: 'Your review has been saved.',
    defaultValue: 'Great product! Highly recommended.',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Field',
    disabled: true,
    defaultValue: 'This field is disabled and cannot be edited.',
  },
};

export const WithCharacterCount: Story = {
  args: {
    label: 'Tweet',
    showCharacterCount: true,
    maxLength: 280,
    placeholder: 'What\'s happening?',
    helperText: 'Share your thoughts in 280 characters or less.',
  },
};

export const AutoResize: Story = {
  args: {
    label: 'Auto-expanding Text Area',
    autoResize: true,
    minRows: 3,
    maxRows: 10,
    placeholder: 'Type to see the textarea grow automatically...',
    helperText: 'The textarea will expand as you type, up to 10 rows.',
  },
};

export const LongContent: Story = {
  args: {
    label: 'Notes',
    defaultValue: `This is a longer piece of text that demonstrates how the textarea handles multiple lines of content.

You can see how it wraps text and provides a scrollbar when needed. The textarea maintains its styling and readability even with longer content.

This is useful for fields like:
- Patient notes
- Detailed descriptions
- Long-form feedback
- Documentation`,
  },
};

// Real-world examples
export const PatientNotes: Story = {
  render: () => (
    <TextArea
      label="Clinical Notes"
      required
      minRows={5}
      placeholder="Enter clinical observations and notes..."
      helperText="Document all relevant patient observations and interactions."
    />
  ),
};

export const FeedbackForm: Story = {
  render: () => (
    <TextArea
      label="How can we improve?"
      placeholder="Share your suggestions..."
      maxLength={500}
      showCharacterCount
      helperText="Your feedback helps us improve our service."
    />
  ),
};

export const AppointmentReason: Story = {
  render: () => (
    <TextArea
      label="Reason for Visit"
      required
      minRows={3}
      placeholder="Please describe your symptoms or reason for scheduling..."
      helperText="Be as specific as possible to help us prepare for your visit."
    />
  ),
};

export const MessageComposer: Story = {
  render: () => (
    <TextArea
      label="Message to Healthcare Provider"
      placeholder="Type your message here..."
      autoResize
      minRows={3}
      maxRows={8}
      maxLength={1000}
      showCharacterCount
    />
  ),
};

export const ErrorState: Story = {
  render: () => (
    <TextArea
      label="Prescription Notes"
      required
      error="Please provide prescription details before submitting."
      defaultValue=""
    />
  ),
};

export const SuccessState: Story = {
  render: () => (
    <TextArea
      label="Medication Instructions"
      success="Instructions saved successfully."
      defaultValue="Take one tablet daily with food. Complete the full course even if symptoms improve."
    />
  ),
};

export const InteractiveCharacterLimit: Story = {
  render: function CharacterLimitDemo() {
    const [value, setValue] = React.useState('');
    const maxLength = 200;

    return (
      <div style={{ maxWidth: '600px' }}>
        <TextArea
          label="Appointment Notes (200 character limit)"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          maxLength={maxLength}
          showCharacterCount
          placeholder="Enter your appointment notes..."
          helperText="Provide brief notes about your upcoming appointment."
          error={value.length >= maxLength ? 'Character limit reached' : undefined}
        />
      </div>
    );
  },
};

export const AutoResizeDemo: Story = {
  render: () => (
    <div style={{ maxWidth: '600px' }}>
      <TextArea
        label="Expandable Notes"
        autoResize
        minRows={2}
        maxRows={12}
        placeholder="Start typing to see the textarea expand automatically..."
        helperText="The textarea grows as you type and shrinks when you delete text."
      />
    </div>
  ),
};

export const FormWithMultipleTextAreas: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '600px' }}>
      <TextArea
        label="Chief Complaint"
        required
        placeholder="What brings you in today?"
        minRows={2}
      />

      <TextArea
        label="Medical History"
        placeholder="List any relevant medical conditions or past surgeries..."
        minRows={3}
        helperText="Include chronic conditions, previous hospitalizations, etc."
      />

      <TextArea
        label="Current Medications"
        placeholder="List all medications you are currently taking..."
        minRows={3}
        helperText="Include prescription drugs, over-the-counter medications, and supplements."
      />

      <TextArea
        label="Allergies"
        required
        placeholder="List any known allergies..."
        minRows={2}
        helperText="Include medication allergies, food allergies, and environmental allergies."
      />
    </div>
  ),
};

export const WithValidation: Story = {
  render: function ValidationDemo() {
    const [value, setValue] = React.useState('');
    const minLength = 50;
    const [touched, setTouched] = React.useState(false);

    const showError = touched && value.length > 0 && value.length < minLength;
    const showSuccess = value.length >= minLength;

    return (
      <div style={{ maxWidth: '600px' }}>
        <TextArea
          label="Detailed Symptoms Description"
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onBlur={() => setTouched(true)}
          minRows={4}
          maxLength={500}
          showCharacterCount
          placeholder="Please describe your symptoms in detail..."
          helperText={`Provide at least ${minLength} characters for a detailed description.`}
          error={showError ? `Please provide more detail (minimum ${minLength} characters)` : undefined}
          success={showSuccess ? 'Thank you for the detailed description.' : undefined}
        />
      </div>
    );
  },
};

export const ReadOnly: Story = {
  args: {
    label: 'Previous Notes',
    readOnly: true,
    defaultValue: 'Patient reported improvement in symptoms. Continue current treatment plan. Follow-up scheduled for next month.',
    helperText: 'These are notes from your previous visit.',
  },
};

export const SmallTextArea: Story = {
  args: {
    label: 'Quick Note',
    minRows: 2,
    placeholder: 'Add a quick note...',
  },
};

export const LargeTextArea: Story = {
  args: {
    label: 'Detailed Report',
    minRows: 8,
    placeholder: 'Write a detailed report...',
  },
};

export const WithMaxLengthWarning: Story = {
  render: function MaxLengthDemo() {
    const [value, setValue] = React.useState('');
    const maxLength = 150;
    const warningThreshold = maxLength * 0.9;

    return (
      <div style={{ maxWidth: '600px' }}>
        <TextArea
          label="Brief Summary"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          maxLength={maxLength}
          showCharacterCount
          minRows={3}
          placeholder="Provide a brief summary..."
          helperText={
            value.length > warningThreshold && value.length < maxLength
              ? `You're approaching the character limit.`
              : 'Keep your summary concise.'
          }
          error={value.length >= maxLength ? 'Character limit reached' : undefined}
        />
      </div>
    );
  },
};

export const Placeholder: Story = {
  args: {
    label: 'Additional Comments',
    placeholder: 'Share any additional information that might be helpful...',
    minRows: 4,
  },
};

export const NoBorder: Story = {
  render: () => (
    <TextArea
      label="Custom Styled"
      placeholder="This could be styled differently in your app..."
      minRows={3}
      style={{ border: '1px dashed #A8B5C2' }}
    />
  ),
};
