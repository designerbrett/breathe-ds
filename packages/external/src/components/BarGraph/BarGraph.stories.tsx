import type { Meta, StoryObj } from '@storybook/react';
import { BarGraph } from './BarGraph';
import { CATEGORICAL_COLORS } from '../../utils/chartColors';

const meta = {
  title: 'External/Data Visualization/BarGraph',
  component: BarGraph,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Bar Graph component for comparing values across categories. Use horizontal bars for better label readability. Show actual numbers and use consistent colors.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BarGraph>;

export default meta;
type Story = StoryObj<typeof meta>;

const departmentData = [
  { name: 'Cardiology', value: 245 },
  { name: 'Orthopedics', value: 198 },
  { name: 'Neurology', value: 156 },
  { name: 'Primary Care', value: 289 },
];

const ageGroupData = [
  { name: '18-30', value: 120 },
  { name: '31-45', value: 235 },
  { name: '46-60', value: 340 },
  { name: '61-75', value: 425 },
  { name: '76+', value: 180 },
];

export const Default: Story = {
  args: {
    data: departmentData,
    title: 'Visits by Department',
  },
};

export const HorizontalLayout: Story = {
  args: {
    data: departmentData,
    title: 'Visits by Department',
    layout: 'horizontal',
  },
};

export const NoTitle: Story = {
  args: {
    data: departmentData,
  },
};

export const CustomColor: Story = {
  args: {
    data: departmentData,
    title: 'Custom Color Bars',
    barColor: '#27AE60',
  },
};

export const MultiColor: Story = {
  args: {
    data: departmentData,
    title: 'Multi-Colored Bars',
    barColors: ['#2B79B9', '#27AE60', '#E67E22', '#E74C3C'],
  },
};

export const WithGrid: Story = {
  args: {
    data: departmentData,
    title: 'With Grid Lines',
    showGrid: true,
  },
};

export const TallChart: Story = {
  args: {
    data: ageGroupData,
    title: 'Patient Age Distribution',
    height: 400,
  },
};

export const HealthcareExamples: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <BarGraph
        data={departmentData}
        title="Patient Visits by Department"
      />
      <BarGraph
        data={[
          { name: 'Medicare', value: 450 },
          { name: 'Blue Cross', value: 380 },
          { name: 'Aetna', value: 290 },
          { name: 'United', value: 220 },
          { name: 'Self-Pay', value: 110 },
        ]}
        title="Patients by Insurance Type"
        barColors={['#2B79B9', '#27AE60', '#E67E22', '#9B59B6', '#E8EDF2']}
      />
      <BarGraph
        data={[
          { name: 'Mon', value: 45 },
          { name: 'Tue', value: 52 },
          { name: 'Wed', value: 48 },
          { name: 'Thu', value: 61 },
          { name: 'Fri', value: 58 },
        ]}
        title="Appointments This Week"
        layout="horizontal"
        barColor="#27AE60"
      />
      <BarGraph
        data={[
          { name: 'Excellent', value: 342 },
          { name: 'Good', value: 289 },
          { name: 'Fair', value: 78 },
          { name: 'Poor', value: 12 },
        ]}
        title="Patient Satisfaction Ratings"
        barColors={['#27AE60', '#2B79B9', '#E67E22', '#E74C3C']}
      />
    </div>
  ),
};

export const WithGradient: Story = {
  args: {
    data: departmentData,
    title: 'Visits by Department (Gradient)',
    useGradient: true,
    gradientColor: 'blue',
  },
};

export const GradientGreen: Story = {
  args: {
    data: departmentData,
    title: 'Patient Visits (Green Gradient)',
    useGradient: true,
    gradientColor: 'green',
  },
};

export const GradientOrange: Story = {
  args: {
    data: departmentData,
    title: 'Alerts by Priority (Orange Gradient)',
    useGradient: true,
    gradientColor: 'orange',
    layout: 'horizontal',
  },
};

export const GradientShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <BarGraph
        data={departmentData}
        title="Blue Gradient"
        useGradient
        gradientColor="blue"
      />
      <BarGraph
        data={departmentData}
        title="Green Gradient"
        useGradient
        gradientColor="green"
      />
      <BarGraph
        data={departmentData}
        title="Orange Gradient"
        useGradient
        gradientColor="orange"
      />
      <BarGraph
        data={departmentData}
        title="Purple Gradient"
        useGradient
        gradientColor="purple"
      />
      <BarGraph
        data={departmentData}
        title="Teal Gradient"
        useGradient
        gradientColor="teal"
      />
    </div>
  ),
};
