import type { Meta, StoryObj } from '@storybook/react';
import { useState, useEffect } from 'react';
import { ProgressBar } from './ProgressBar';

const meta = {
  title: 'External/ProgressBar',
  component: ProgressBar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Progress bar for showing completion status. Clear visual feedback with optional labels and color variants.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Progress value (0-100)',
    },
    size: {
      control: 'select',
      options: ['default', 'large'],
      description: 'Bar size',
    },
    variant: {
      control: 'select',
      options: ['default', 'success', 'warning', 'error'],
      description: 'Visual variant',
    },
    showLabel: {
      control: 'boolean',
      description: 'Show percentage',
    },
  },
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 75,
  },
};

export const WithLabel: Story = {
  args: {
    value: 65,
    label: 'Daily Goal Progress',
    showLabel: true,
  },
};

export const Success: Story = {
  args: {
    value: 100,
    label: 'Completed',
    variant: 'success',
    showLabel: true,
  },
};

export const Warning: Story = {
  args: {
    value: 45,
    label: 'Needs Attention',
    variant: 'warning',
    showLabel: true,
  },
};

export const Error: Story = {
  args: {
    value: 20,
    label: 'Critical',
    variant: 'error',
    showLabel: true,
  },
};

export const Large: Story = {
  args: {
    value: 80,
    label: 'Upload Progress',
    size: 'large',
    showLabel: true,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '350px' }}>
      <ProgressBar value={75} label="Default" variant="default" showLabel />
      <ProgressBar value={100} label="Success" variant="success" showLabel />
      <ProgressBar value={50} label="Warning" variant="warning" showLabel />
      <ProgressBar value={25} label="Error" variant="error" showLabel />
    </div>
  ),
};

export const Animated: Story = {
  render: () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) return 0;
          return prev + 1;
        });
      }, 50);

      return () => clearInterval(interval);
    }, []);

    return (
      <div style={{ width: '350px' }}>
        <ProgressBar
          value={progress}
          label="Loading..."
          showLabel
        />
      </div>
    );
  },
};

export const HealthDashboard: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '350px', padding: '20px' }}>
      <h3 style={{ margin: 0, fontSize: '20px', fontWeight: 600 }}>
        Today's Activity
      </h3>

      <ProgressBar
        value={7234}
        max={10000}
        label="Steps"
        showLabel
        variant="default"
      />

      <ProgressBar
        value={45}
        max={60}
        label="Active Minutes"
        showLabel
        variant="success"
      />

      <ProgressBar
        value={1200}
        max={2000}
        label="Calories Burned"
        showLabel
        variant="warning"
      />

      <ProgressBar
        value={6}
        max={8}
        label="Water Intake (glasses)"
        showLabel
        variant="default"
      />
    </div>
  ),
};

export const CourseProgress: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '350px' }}>
      <div>
        <h4 style={{ margin: '0 0 12px 0', fontSize: '16px', fontWeight: 600 }}>
          Medication Management Course
        </h4>
        <ProgressBar
          value={8}
          max={10}
          label="Lessons"
          showLabel
          variant="success"
        />
      </div>

      <div>
        <h4 style={{ margin: '0 0 12px 0', fontSize: '16px', fontWeight: 600 }}>
          Nutrition Basics
        </h4>
        <ProgressBar
          value={3}
          max={10}
          label="Lessons"
          showLabel
          variant="default"
        />
      </div>

      <div>
        <h4 style={{ margin: '0 0 12px 0', fontSize: '16px', fontWeight: 600 }}>
          Exercise for Seniors
        </h4>
        <ProgressBar
          value={0}
          max={10}
          label="Lessons"
          showLabel
          variant="default"
        />
      </div>
    </div>
  ),
};
