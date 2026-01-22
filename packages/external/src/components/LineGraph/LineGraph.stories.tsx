import type { Meta, StoryObj } from '@storybook/react';
import { LineGraph } from './LineGraph';

const meta = {
  title: 'External/Data Visualization/LineGraph',
  component: LineGraph,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Line Graph component for visualizing trends over time. Use for time-series data with clear axis labels and gridlines.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LineGraph>;

export default meta;
type Story = StoryObj<typeof meta>;

const weeklyVisitsData = [
  { name: 'Mon', value: 30 },
  { name: 'Tue', value: 50 },
  { name: 'Wed', value: 45 },
  { name: 'Thu', value: 70 },
  { name: 'Fri', value: 65 },
  { name: 'Sat', value: 80 },
  { name: 'Sun', value: 85 },
];

const monthlyRevenueData = [
  { name: 'Jan', value: 12000 },
  { name: 'Feb', value: 14500 },
  { name: 'Mar', value: 13800 },
  { name: 'Apr', value: 16200 },
  { name: 'May', value: 18900 },
  { name: 'Jun', value: 21500 },
  { name: 'Jul', value: 20300 },
  { name: 'Aug', value: 22800 },
  { name: 'Sep', value: 24100 },
  { name: 'Oct', value: 23500 },
  { name: 'Nov', value: 26300 },
  { name: 'Dec', value: 28900 },
];

export const Default: Story = {
  args: {
    data: weeklyVisitsData,
    title: 'Patient Visits - Last 7 Days',
  },
};

export const NoTitle: Story = {
  args: {
    data: weeklyVisitsData,
  },
};

export const CustomColor: Story = {
  args: {
    data: weeklyVisitsData,
    title: 'Daily Activity',
    lineColor: '#27AE60',
  },
};

export const TallChart: Story = {
  args: {
    data: weeklyVisitsData,
    title: 'Extended View',
    height: 400,
  },
};

export const NoGrid: Story = {
  args: {
    data: weeklyVisitsData,
    title: 'Clean View (No Grid)',
    showGrid: false,
  },
};

export const MonthlyRevenue: Story = {
  args: {
    data: monthlyRevenueData,
    title: 'Monthly Revenue - 2025',
    height: 300,
  },
};

export const WithAreaFill: Story = {
  args: {
    data: weeklyVisitsData,
    title: 'Patient Visits with Gradient Fill',
    showAreaFill: true,
  },
};

export const AreaFillGreen: Story = {
  args: {
    data: weeklyVisitsData,
    title: 'Success Metrics',
    lineColor: '#27AE60',
    showAreaFill: true,
  },
};

export const AreaFillOrange: Story = {
  args: {
    data: weeklyVisitsData,
    title: 'Warning Metrics',
    lineColor: '#E67E22',
    showAreaFill: true,
  },
};

export const HealthcareExamples: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <LineGraph
        data={[
          { name: 'Week 1', value: 342 },
          { name: 'Week 2', value: 389 },
          { name: 'Week 3', value: 412 },
          { name: 'Week 4', value: 378 },
        ]}
        title="Patient Appointments - Monthly"
        showAreaFill
      />
      <LineGraph
        data={[
          { name: '8am', value: 12 },
          { name: '10am', value: 18 },
          { name: '12pm', value: 25 },
          { name: '2pm', value: 22 },
          { name: '4pm', value: 15 },
          { name: '6pm', value: 8 },
        ]}
        title="Average Wait Time (minutes)"
        lineColor="#E67E22"
        showAreaFill
      />
      <LineGraph
        data={[
          { name: 'Jan', value: 89 },
          { name: 'Feb', value: 92 },
          { name: 'Mar', value: 91 },
          { name: 'Apr', value: 94 },
          { name: 'May', value: 96 },
          { name: 'Jun', value: 95 },
        ]}
        title="Patient Satisfaction Score (%)"
        lineColor="#27AE60"
        showAreaFill
      />
    </div>
  ),
};

export const GradientShowcase: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
      <LineGraph
        data={weeklyVisitsData}
        title="Blue with Gradient"
        showAreaFill
      />
      <LineGraph
        data={weeklyVisitsData}
        title="Green with Gradient"
        lineColor="#27AE60"
        showAreaFill
      />
      <LineGraph
        data={weeklyVisitsData}
        title="Orange with Gradient"
        lineColor="#E67E22"
        showAreaFill
      />
      <LineGraph
        data={weeklyVisitsData}
        title="Purple with Gradient"
        lineColor="#9B59B6"
        showAreaFill
      />
    </div>
  ),
};
