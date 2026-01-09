import type { Meta, StoryObj } from '@storybook/react';
import { Timeline, Text } from '@mantine/core';
import { MantineProvider } from '@mantine/core';
import { Calendar, CheckCircle, Pill, Play, Pause, BarChart3 } from 'lucide-react';
import { breatheMantineTheme } from '../theme';
import '@mantine/core/styles.css';

const meta = {
  title: 'Internal/Mantine/Timeline',
  component: Timeline,
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
        component: 'Mantine Timeline with Breathe theme. Chronological events display for desktop applications.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Timeline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Timeline>
      <Timeline.Item title="First event">
        <Text size="sm" c="dimmed">Event description</Text>
      </Timeline.Item>
      <Timeline.Item title="Second event">
        <Text size="sm" c="dimmed">Event description</Text>
      </Timeline.Item>
      <Timeline.Item title="Third event">
        <Text size="sm" c="dimmed">Event description</Text>
      </Timeline.Item>
    </Timeline>
  ),
};

export const WithBullets: Story = {
  render: () => (
    <Timeline active={1} bulletSize={24}>
      <Timeline.Item bullet={<Calendar size={16} />} title="Appointment Scheduled">
        <Text size="sm" c="dimmed">December 20, 2025 at 2:00 PM</Text>
        <Text size="xs" c="dimmed" mt="xs">2 days ago</Text>
      </Timeline.Item>
      <Timeline.Item bullet={<CheckCircle size={16} />} title="Check-in Complete">
        <Text size="sm" c="dimmed">Patient checked in</Text>
        <Text size="xs" c="dimmed" mt="xs">1 day ago</Text>
      </Timeline.Item>
      <Timeline.Item bullet={<Pill size={16} />} title="Prescription Sent">
        <Text size="sm" c="dimmed">E-prescription sent to pharmacy</Text>
        <Text size="xs" c="dimmed" mt="xs">5 hours ago</Text>
      </Timeline.Item>
    </Timeline>
  ),
};

export const PatientVisitHistory: Story = {
  render: () => (
    <Timeline active={2} color="blue" lineWidth={2}>
      <Timeline.Item title="Annual Check-up">
        <Text size="sm" c="dimmed">Complete physical examination</Text>
        <Text size="xs" c="dimmed" mt="xs">December 15, 2025</Text>
      </Timeline.Item>
      <Timeline.Item title="Follow-up Visit">
        <Text size="sm" c="dimmed">Blood pressure monitoring</Text>
        <Text size="xs" c="dimmed" mt="xs">September 20, 2025</Text>
      </Timeline.Item>
      <Timeline.Item title="Lab Work">
        <Text size="sm" c="dimmed">Routine blood tests</Text>
        <Text size="xs" c="dimmed" mt="xs">June 10, 2025</Text>
      </Timeline.Item>
      <Timeline.Item title="Initial Consultation">
        <Text size="sm" c="dimmed">First visit - diabetes diagnosis</Text>
        <Text size="xs" c="dimmed" mt="xs">January 5, 2015</Text>
      </Timeline.Item>
    </Timeline>
  ),
};

export const TreatmentPlan: Story = {
  render: () => (
    <Timeline active={1} bulletSize={24} lineWidth={2}>
      <Timeline.Item bullet={<CheckCircle size={16} />} title="Phase 1: Initial Assessment" color="green">
        <Text size="sm" c="dimmed">Complete medical history and physical exam</Text>
        <Text size="xs" c="dimmed" mt="xs">Completed - Jan 5, 2026</Text>
      </Timeline.Item>
      <Timeline.Item bullet={<Play size={16} />} title="Phase 2: Treatment Start" color="blue">
        <Text size="sm" c="dimmed">Begin medication regimen</Text>
        <Text size="xs" c="dimmed" mt="xs">In Progress - Jan 8, 2026</Text>
      </Timeline.Item>
      <Timeline.Item bullet={<Pause size={16} />} title="Phase 3: Follow-up" color="gray">
        <Text size="sm" c="dimmed">Monitor progress and adjust treatment</Text>
        <Text size="xs" c="dimmed" mt="xs">Scheduled - Feb 8, 2026</Text>
      </Timeline.Item>
      <Timeline.Item bullet={<BarChart3 size={16} />} title="Phase 4: Final Evaluation" color="gray">
        <Text size="sm" c="dimmed">Assess treatment effectiveness</Text>
        <Text size="xs" c="dimmed" mt="xs">Scheduled - Apr 8, 2026</Text>
      </Timeline.Item>
    </Timeline>
  ),
};

export const MedicationHistory: Story = {
  render: () => (
    <Timeline color="blue">
      <Timeline.Item title="Metformin 500mg - Started">
        <Text size="sm" c="dimmed">Initial diabetes treatment</Text>
        <Text size="xs" c="dimmed" mt="xs">January 10, 2015</Text>
      </Timeline.Item>
      <Timeline.Item title="Lisinopril 10mg - Added">
        <Text size="sm" c="dimmed">Blood pressure management</Text>
        <Text size="xs" c="dimmed" mt="xs">March 15, 2015</Text>
      </Timeline.Item>
      <Timeline.Item title="Atorvastatin 20mg - Added">
        <Text size="sm" c="dimmed">Cholesterol management</Text>
        <Text size="xs" c="dimmed" mt="xs">June 1, 2016</Text>
      </Timeline.Item>
    </Timeline>
  ),
};

export const OrderTracking: Story = {
  render: () => (
    <Timeline active={2} bulletSize={20} lineWidth={2}>
      <Timeline.Item title="Order Placed" color="green">
        <Text size="xs" c="dimmed">Order #12345 confirmed</Text>
        <Text size="xs" c="dimmed">Dec 18, 10:30 AM</Text>
      </Timeline.Item>
      <Timeline.Item title="Processing" color="green">
        <Text size="xs" c="dimmed">Order is being prepared</Text>
        <Text size="xs" c="dimmed">Dec 18, 2:15 PM</Text>
      </Timeline.Item>
      <Timeline.Item title="Shipped" color="blue">
        <Text size="xs" c="dimmed">Package in transit</Text>
        <Text size="xs" c="dimmed">Dec 19, 9:00 AM</Text>
      </Timeline.Item>
      <Timeline.Item title="Out for Delivery" color="gray">
        <Text size="xs" c="dimmed">Expected delivery today</Text>
        <Text size="xs" c="dimmed">Dec 20 (estimated)</Text>
      </Timeline.Item>
    </Timeline>
  ),
};
