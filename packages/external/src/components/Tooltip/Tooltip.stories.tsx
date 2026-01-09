import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './Tooltip';
import { Button } from '../Button/Button';
import React from 'react';

const meta = {
  title: 'External/Overlays/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: 'radio',
      options: ['top', 'bottom', 'left', 'right'],
      description: 'Position of tooltip relative to trigger',
    },
    delay: {
      control: { type: 'number', min: 0, max: 1000, step: 100 },
      description: 'Delay before showing tooltip (ms)',
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: 'This is a helpful tooltip',
    children: <Button variant="outline">Hover me</Button>,
  },
};

export const Top: Story = {
  args: {
    content: 'Tooltip appears above',
    position: 'top',
    children: <Button variant="outline">Hover for top tooltip</Button>,
  },
};

export const Bottom: Story = {
  args: {
    content: 'Tooltip appears below',
    position: 'bottom',
    children: <Button variant="outline">Hover for bottom tooltip</Button>,
  },
};

export const Left: Story = {
  args: {
    content: 'Tooltip appears to the left',
    position: 'left',
    children: <Button variant="outline">Hover for left tooltip</Button>,
  },
};

export const Right: Story = {
  args: {
    content: 'Tooltip appears to the right',
    position: 'right',
    children: <Button variant="outline">Hover for right tooltip</Button>,
  },
};

export const LongContent: Story = {
  args: {
    content: 'This is a longer tooltip with more detailed information that will wrap to multiple lines when needed.',
    children: <Button variant="outline">Long tooltip</Button>,
  },
};

export const NoDelay: Story = {
  args: {
    content: 'Appears instantly',
    delay: 0,
    children: <Button variant="outline">Instant tooltip</Button>,
  },
};

export const LongDelay: Story = {
  args: {
    content: 'Takes a moment to appear',
    delay: 1000,
    children: <Button variant="outline">Delayed tooltip</Button>,
  },
};

// Real-world examples
export const HelpIcon: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <span style={{ fontSize: '16px', fontWeight: 600 }}>Blood Pressure</span>
      <Tooltip content="Normal blood pressure is below 120/80 mmHg">
        <button
          style={{
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            border: '2px solid #2B79B9',
            background: 'transparent',
            color: '#2B79B9',
            fontSize: '14px',
            fontWeight: 'bold',
            cursor: 'help',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          aria-label="Help"
        >
          ?
        </button>
      </Tooltip>
    </div>
  ),
};

export const MedicationInfo: Story = {
  render: () => (
    <Tooltip content="Take with food. Do not exceed 2 tablets per day.">
      <span
        style={{
          fontSize: '16px',
          color: '#2B79B9',
          textDecoration: 'underline',
          textDecorationStyle: 'dotted',
          cursor: 'help',
        }}
      >
        Aspirin 81mg
      </span>
    </Tooltip>
  ),
};

export const DisabledButton: Story = {
  render: () => (
    <Tooltip content="You must complete all required fields before submitting">
      <span style={{ display: 'inline-block' }}>
        <Button variant="primary" disabled>
          Submit Form
        </Button>
      </span>
    </Tooltip>
  ),
};

export const IconButton: Story = {
  render: () => (
    <Tooltip content="Edit patient information" position="bottom">
      <button
        style={{
          width: '44px',
          height: '44px',
          borderRadius: '8px',
          border: '2px solid #E8EDF2',
          background: '#FFFFFF',
          fontSize: '18px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        aria-label="Edit"
      >
        ✏️
      </button>
    </Tooltip>
  ),
};

export const StatusIndicator: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <Tooltip content="Patient is currently checked in">
        <div
          style={{
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            background: '#27AE60',
            cursor: 'help',
          }}
        />
      </Tooltip>
      <span>John Doe</span>
    </div>
  ),
};

export const TruncatedText: Story = {
  render: () => (
    <Tooltip content="Dr. Sarah Johnson, MD - Board Certified Internal Medicine">
      <div
        style={{
          width: '200px',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          cursor: 'help',
          textDecoration: 'underline',
          textDecorationStyle: 'dotted',
        }}
      >
        Dr. Sarah Johnson, MD - Board Certified Internal Medicine
      </div>
    </Tooltip>
  ),
};

export const FormFieldHelp: Story = {
  render: () => (
    <div style={{ width: '300px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
        <label style={{ fontSize: '16px', fontWeight: 600 }}>Patient ID</label>
        <Tooltip content="A unique identifier assigned to each patient. You can find this on appointment confirmation emails.">
          <span
            style={{
              fontSize: '14px',
              color: '#7B8A99',
              cursor: 'help',
            }}
          >
            ℹ️
          </span>
        </Tooltip>
      </div>
      <input
        type="text"
        placeholder="Enter patient ID"
        style={{
          width: '100%',
          padding: '12px',
          border: '2px solid #E8EDF2',
          borderRadius: '8px',
          fontSize: '16px',
        }}
      />
    </div>
  ),
};

export const MultipleTooltips: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <Tooltip content="View patient details" position="top">
        <Button variant="outline">👁️ View</Button>
      </Tooltip>
      <Tooltip content="Edit patient information" position="top">
        <Button variant="outline">✏️ Edit</Button>
      </Tooltip>
      <Tooltip content="Delete patient record (cannot be undone)" position="top">
        <Button variant="outline">🗑️ Delete</Button>
      </Tooltip>
      <Tooltip content="Send message to patient" position="top">
        <Button variant="outline">💬 Message</Button>
      </Tooltip>
    </div>
  ),
};

export const InFormContext: Story = {
  render: () => (
    <div style={{ width: '400px', padding: '20px', background: '#F8FAFB', borderRadius: '12px' }}>
      <h3 style={{ marginTop: 0 }}>Appointment Form</h3>

      <div style={{ marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
          <label style={{ fontSize: '16px', fontWeight: 600 }}>Appointment Type</label>
          <Tooltip content="Select the type of appointment you need. This helps us schedule appropriate time and prepare necessary equipment.">
            <span style={{ fontSize: '14px', color: '#2B79B9', cursor: 'help' }}>ℹ️</span>
          </Tooltip>
        </div>
        <select
          style={{
            width: '100%',
            padding: '12px',
            border: '2px solid #E8EDF2',
            borderRadius: '8px',
            fontSize: '16px',
          }}
        >
          <option>Select type</option>
          <option>Check-up</option>
          <option>Follow-up</option>
          <option>Lab Work</option>
        </select>
      </div>

      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
          <label style={{ fontSize: '16px', fontWeight: 600 }}>Preferred Date</label>
          <Tooltip content="Choose your preferred appointment date. We'll confirm availability within 24 hours.">
            <span style={{ fontSize: '14px', color: '#2B79B9', cursor: 'help' }}>ℹ️</span>
          </Tooltip>
        </div>
        <input
          type="date"
          style={{
            width: '100%',
            padding: '12px',
            border: '2px solid #E8EDF2',
            borderRadius: '8px',
            fontSize: '16px',
          }}
        />
      </div>
    </div>
  ),
};

export const DataVisualization: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-end', padding: '20px' }}>
      <Tooltip content="120 patients in January" position="top">
        <div style={{ width: '60px', height: '120px', background: '#2B79B9', borderRadius: '4px', cursor: 'help' }} />
      </Tooltip>
      <Tooltip content="150 patients in February" position="top">
        <div style={{ width: '60px', height: '150px', background: '#2B79B9', borderRadius: '4px', cursor: 'help' }} />
      </Tooltip>
      <Tooltip content="180 patients in March" position="top">
        <div style={{ width: '60px', height: '180px', background: '#2B79B9', borderRadius: '4px', cursor: 'help' }} />
      </Tooltip>
    </div>
  ),
};

export const AbbreviationExpansion: Story = {
  render: () => (
    <p style={{ fontSize: '16px', lineHeight: 1.6, maxWidth: '500px' }}>
      The patient's{' '}
      <Tooltip content="Blood Pressure">
        <abbr
          style={{
            textDecoration: 'underline',
            textDecorationStyle: 'dotted',
            cursor: 'help',
          }}
        >
          BP
        </abbr>
      </Tooltip>
      {' '}is within normal range. Continue monitoring{' '}
      <Tooltip content="Heart Rate">
        <abbr
          style={{
            textDecoration: 'underline',
            textDecorationStyle: 'dotted',
            cursor: 'help',
          }}
        >
          HR
        </abbr>
      </Tooltip>
      {' '}and{' '}
      <Tooltip content="Oxygen Saturation">
        <abbr
          style={{
            textDecoration: 'underline',
            textDecorationStyle: 'dotted',
            cursor: 'help',
          }}
        >
          SpO2
        </abbr>
      </Tooltip>
      {' '}levels.
    </p>
  ),
};

export const PositionComparison: Story = {
  render: () => (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '40px',
      padding: '60px',
    }}>
      <Tooltip content="Top positioned tooltip" position="top">
        <Button variant="outline">Top</Button>
      </Tooltip>
      <Tooltip content="Right positioned tooltip" position="right">
        <Button variant="outline">Right</Button>
      </Tooltip>
      <Tooltip content="Bottom positioned tooltip" position="bottom">
        <Button variant="outline">Bottom</Button>
      </Tooltip>
      <Tooltip content="Left positioned tooltip" position="left">
        <Button variant="outline">Left</Button>
      </Tooltip>
    </div>
  ),
};

export const WithRichContent: Story = {
  render: () => (
    <Tooltip
      content={
        <div>
          <div style={{ fontWeight: 600, marginBottom: '4px' }}>Medication Schedule</div>
          <div style={{ fontSize: '13px' }}>Morning: 1 tablet</div>
          <div style={{ fontSize: '13px' }}>Evening: 1 tablet</div>
        </div>
      }
    >
      <Button variant="outline">View Schedule</Button>
    </Tooltip>
  ),
};
