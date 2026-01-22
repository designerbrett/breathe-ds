import type { Meta, StoryObj } from '@storybook/react';
import { StatCard } from './StatCard';

const meta = {
  title: 'External/Data Visualization/StatCard',
  component: StatCard,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Stat Card component for displaying key numbers and metrics prominently. Pattern: Label above, large number, trend indicator below. Use color for positive (green) or negative (red) trends.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof StatCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Total Revenue',
    value: '$124,563',
    trend: '↑ 12% from last month',
    trendDirection: 'up',
  },
};

export const NegativeTrend: Story = {
  args: {
    label: 'Avg Response Time',
    value: '2.4 hrs',
    trend: '↑ 8% from last month',
    trendDirection: 'down',
  },
};

export const NoTrend: Story = {
  args: {
    label: 'Active Patients',
    value: '1,234',
  },
};

export const WithDescription: Story = {
  args: {
    label: 'Patient Satisfaction',
    value: '94%',
    trend: '↑ 3% from last month',
    trendDirection: 'up',
    description: 'Based on 342 survey responses',
  },
};

export const WithAccent: Story = {
  args: {
    label: 'Critical Alerts',
    value: '3',
    trend: '↓ 2 from yesterday',
    trendDirection: 'up',
    accentColor: '#E74C3C',
  },
};

export const LargeNumber: Story = {
  args: {
    label: 'Total Appointments',
    value: '12,847',
    trend: '↑ 18% from last year',
    trendDirection: 'up',
  },
};

export const Dashboard: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
      <StatCard
        label="Total Revenue"
        value="$124,563"
        trend="↑ 12% from last month"
        trendDirection="up"
      />
      <StatCard
        label="Avg Response Time"
        value="2.4 hrs"
        trend="↑ 8% from last month"
        trendDirection="down"
      />
      <StatCard
        label="Active Patients"
        value="1,234"
        trend="↑ 45 this week"
        trendDirection="up"
      />
      <StatCard
        label="Completion Rate"
        value="87%"
        trend="↓ 3% from last month"
        trendDirection="down"
      />
    </div>
  ),
};

export const HealthcareDashboard: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
      <StatCard
        label="Patient Satisfaction"
        value="94%"
        trend="↑ 3% from last month"
        trendDirection="up"
        description="Based on 342 survey responses"
      />
      <StatCard
        label="Appointments Today"
        value="47"
        trend="12 remaining"
        trendDirection="neutral"
        accentColor="#2B79B9"
      />
      <StatCard
        label="Average Wait Time"
        value="18 min"
        trend="↑ 5 min from last week"
        trendDirection="down"
        accentColor="#E67E22"
      />
      <StatCard
        label="Critical Alerts"
        value="3"
        trend="↓ 2 from yesterday"
        trendDirection="up"
        accentColor="#E74C3C"
      />
      <StatCard
        label="New Patients (This Month)"
        value="189"
        trend="↑ 23% from last month"
        trendDirection="up"
      />
      <StatCard
        label="Prescription Refills"
        value="127"
        trend="Pending approval: 8"
        trendDirection="neutral"
      />
      <StatCard
        label="Lab Results Ready"
        value="34"
        trend="Awaiting review"
        trendDirection="neutral"
        accentColor="#9B59B6"
      />
      <StatCard
        label="Insurance Claims"
        value="$45.2k"
        trend="↑ $8.3k from last week"
        trendDirection="up"
        description="12 claims pending"
      />
    </div>
  ),
};

export const CompactGrid: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px', maxWidth: '900px' }}>
      <StatCard
        label="Daily Visits"
        value="342"
        trend="↑ 12%"
        trendDirection="up"
      />
      <StatCard
        label="Cancellations"
        value="8"
        trend="↓ 4"
        trendDirection="up"
      />
      <StatCard
        label="No-Shows"
        value="5"
        trend="→ Same"
        trendDirection="neutral"
      />
      <StatCard
        label="Utilization"
        value="92%"
        trend="↑ 5%"
        trendDirection="up"
      />
    </div>
  ),
};
