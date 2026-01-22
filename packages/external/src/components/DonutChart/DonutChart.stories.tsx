import type { Meta, StoryObj } from '@storybook/react';
import { DonutChart } from './DonutChart';

const meta = {
  title: 'External/Data Visualization/DonutChart',
  component: DonutChart,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Donut Chart component for showing proportions with a center total. Use to show total in center. Always include a legend with percentages. Limit to 4-5 segments for clarity.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DonutChart>;

export default meta;
type Story = StoryObj<typeof meta>;

const patientStatusData = [
  { name: 'Active', value: 864 },
  { name: 'Pending', value: 247 },
  { name: 'Inactive', value: 123 },
];

const departmentData = [
  { name: 'Cardiology', value: 245 },
  { name: 'Orthopedics', value: 198 },
  { name: 'Neurology', value: 156 },
  { name: 'Primary Care', value: 289 },
];

export const Default: Story = {
  args: {
    data: patientStatusData,
    title: 'Patient Status',
  },
};

export const CustomCenterLabel: Story = {
  args: {
    data: patientStatusData,
    title: 'Custom Label',
    centerLabel: '1,234',
  },
};

export const NoTitle: Story = {
  args: {
    data: patientStatusData,
  },
};

export const CustomColors: Story = {
  args: {
    data: patientStatusData,
    title: 'Custom Color Scheme',
    colors: ['#27AE60', '#E67E22', '#E74C3C'],
  },
};

export const NoLegend: Story = {
  args: {
    data: patientStatusData,
    title: 'Without Legend',
    showLegend: false,
  },
};

export const LargerRing: Story = {
  args: {
    data: patientStatusData,
    title: 'Larger Ring',
    innerRadius: 50,
    outerRadius: 90,
  },
};

export const ThinnerRing: Story = {
  args: {
    data: patientStatusData,
    title: 'Thinner Ring',
    innerRadius: 70,
    outerRadius: 85,
  },
};

export const TallChart: Story = {
  args: {
    data: patientStatusData,
    title: 'Taller Chart',
    height: 400,
  },
};

export const HealthcareExamples: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
      <DonutChart
        data={patientStatusData}
        title="Patient Status"
        colors={['#27AE60', '#E67E22', '#E74C3C']}
        centerLabel="1,234"
      />
      <DonutChart
        data={departmentData}
        title="Visits by Department"
        colors={['#2B79B9', '#27AE60', '#E67E22', '#9B59B6']}
        centerLabel="888"
      />
      <DonutChart
        data={[
          { name: 'Excellent', value: 450 },
          { name: 'Good', value: 320 },
          { name: 'Fair', value: 85 },
          { name: 'Poor', value: 15 },
        ]}
        title="Patient Satisfaction"
        colors={['#27AE60', '#2B79B9', '#E67E22', '#E74C3C']}
        centerLabel="870"
      />
      <DonutChart
        data={[
          { name: 'Medicare', value: 450 },
          { name: 'Private', value: 380 },
          { name: 'Medicaid', value: 220 },
          { name: 'Self-Pay', value: 110 },
        ]}
        title="Insurance Breakdown"
        colors={['#2B79B9', '#27AE60', '#E67E22', '#E8EDF2']}
        centerLabel="1,160"
      />
    </div>
  ),
};
