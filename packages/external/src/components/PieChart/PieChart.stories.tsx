import type { Meta, StoryObj } from '@storybook/react';
import { PieChart } from './PieChart';

const meta = {
  title: 'External/Data Visualization/PieChart',
  component: PieChart,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Pie Chart component for showing proportions and percentages of a whole. Always include a legend with percentages. Limit to 4-5 segments for clarity.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PieChart>;

export default meta;
type Story = StoryObj<typeof meta>;

const insuranceData = [
  { name: 'Blue Cross', value: 40 },
  { name: 'Aetna', value: 30 },
  { name: 'United', value: 20 },
  { name: 'Other', value: 10 },
];

const patientStatusData = [
  { name: 'Active', value: 70 },
  { name: 'Pending', value: 20 },
  { name: 'Inactive', value: 10 },
];

export const Default: Story = {
  args: {
    data: insuranceData,
    title: 'Insurance Distribution',
  },
};

export const NoTitle: Story = {
  args: {
    data: insuranceData,
  },
};

export const CustomColors: Story = {
  args: {
    data: insuranceData,
    title: 'Custom Color Scheme',
    colors: ['#2B79B9', '#27AE60', '#E67E22', '#E74C3C'],
  },
};

export const WithLabels: Story = {
  args: {
    data: insuranceData,
    title: 'With Percentage Labels',
    showLabels: true,
  },
};

export const NoLegend: Story = {
  args: {
    data: insuranceData,
    title: 'Without Legend',
    showLegend: false,
  },
};

export const TallChart: Story = {
  args: {
    data: insuranceData,
    title: 'Taller Chart',
    height: 400,
  },
};

export const HealthcareExamples: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
      <PieChart
        data={insuranceData}
        title="Insurance Distribution"
        colors={['#2B79B9', '#27AE60', '#E67E22', '#E74C3C']}
      />
      <PieChart
        data={patientStatusData}
        title="Patient Status"
        colors={['#27AE60', '#E67E22', '#E74C3C']}
      />
      <PieChart
        data={[
          { name: 'In-Person', value: 65 },
          { name: 'Telehealth', value: 25 },
          { name: 'Phone', value: 10 },
        ]}
        title="Visit Type Distribution"
        colors={['#2B79B9', '#9B59B6', '#3498DB']}
      />
      <PieChart
        data={[
          { name: 'Scheduled', value: 45 },
          { name: 'Walk-in', value: 30 },
          { name: 'Emergency', value: 15 },
          { name: 'Follow-up', value: 10 },
        ]}
        title="Appointment Types"
        colors={['#27AE60', '#2B79B9', '#E74C3C', '#E67E22']}
      />
    </div>
  ),
};
