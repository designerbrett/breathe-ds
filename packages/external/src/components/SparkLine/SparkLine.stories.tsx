import type { Meta, StoryObj } from '@storybook/react';
import { SparkLine } from './SparkLine';

const meta = {
  title: 'External/Data Visualization/SparkLine',
  component: SparkLine,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Compact inline trend indicator for quick insights. Perfect for stat cards, dashboards, or tables. No axes needed - use color to indicate positive (green) or negative (red) trends.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SparkLine>;

export default meta;
type Story = StoryObj<typeof meta>;

const upwardTrendData = [
  { value: 30 },
  { value: 25 },
  { value: 28 },
  { value: 20 },
  { value: 22 },
  { value: 15 },
  { value: 18 },
  { value: 12 },
  { value: 10 },
];

const downwardTrendData = [
  { value: 20 },
  { value: 18 },
  { value: 15 },
  { value: 20 },
  { value: 25 },
  { value: 28 },
  { value: 30 },
  { value: 32 },
  { value: 35 },
];

export const Default: Story = {
  args: {
    data: upwardTrendData,
  },
};

export const UpwardTrend: Story = {
  args: {
    data: upwardTrendData,
    trend: 'up',
  },
};

export const DownwardTrend: Story = {
  args: {
    data: downwardTrendData,
    trend: 'down',
  },
};

export const CustomColor: Story = {
  args: {
    data: upwardTrendData,
    color: '#E67E22',
  },
};

export const LargerSize: Story = {
  args: {
    data: upwardTrendData,
    width: 120,
    height: 60,
    trend: 'up',
  },
};

export const InStatCard: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', width: '600px' }}>
      <div style={{ background: '#FAFBFC', borderRadius: '8px', padding: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: '12px', color: '#7B8A99', marginBottom: '4px' }}>DAILY VISITS</div>
            <div style={{ fontSize: '24px', fontWeight: '700', color: '#1A2B3D' }}>342</div>
            <div style={{ fontSize: '12px', color: '#27AE60', marginTop: '4px' }}>↑ 12%</div>
          </div>
          <SparkLine
            data={upwardTrendData}
            trend="up"
          />
        </div>
      </div>

      <div style={{ background: '#FAFBFC', borderRadius: '8px', padding: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: '12px', color: '#7B8A99', marginBottom: '4px' }}>AVG WAIT TIME</div>
            <div style={{ fontSize: '24px', fontWeight: '700', color: '#1A2B3D' }}>18m</div>
            <div style={{ fontSize: '12px', color: '#E74C3C', marginTop: '4px' }}>↑ 5%</div>
          </div>
          <SparkLine
            data={downwardTrendData}
            trend="down"
          />
        </div>
      </div>
    </div>
  ),
};

export const HealthcareExamples: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', width: '800px' }}>
      <div style={{ background: '#FAFBFC', borderRadius: '8px', padding: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: '12px', color: '#7B8A99', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Patient Satisfaction</div>
            <div style={{ fontSize: '28px', fontWeight: '700', color: '#1A2B3D' }}>94%</div>
            <div style={{ fontSize: '13px', color: '#27AE60', marginTop: '4px' }}>↑ 3% from last month</div>
          </div>
          <SparkLine
            data={[
              { value: 88 },
              { value: 90 },
              { value: 89 },
              { value: 91 },
              { value: 92 },
              { value: 93 },
              { value: 94 },
            ]}
            trend="up"
            width={100}
            height={50}
          />
        </div>
      </div>

      <div style={{ background: '#FAFBFC', borderRadius: '8px', padding: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: '12px', color: '#7B8A99', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Appointments Today</div>
            <div style={{ fontSize: '28px', fontWeight: '700', color: '#1A2B3D' }}>47</div>
            <div style={{ fontSize: '13px', color: '#2B79B9', marginTop: '4px' }}>12 remaining</div>
          </div>
          <SparkLine
            data={[
              { value: 12 },
              { value: 18 },
              { value: 24 },
              { value: 30 },
              { value: 35 },
              { value: 42 },
              { value: 47 },
            ]}
            color="#2B79B9"
            width={100}
            height={50}
          />
        </div>
      </div>

      <div style={{ background: '#FAFBFC', borderRadius: '8px', padding: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: '12px', color: '#7B8A99', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Response Time</div>
            <div style={{ fontSize: '28px', fontWeight: '700', color: '#1A2B3D' }}>2.4h</div>
            <div style={{ fontSize: '13px', color: '#E74C3C', marginTop: '4px' }}>↑ 8% slower</div>
          </div>
          <SparkLine
            data={[
              { value: 2.0 },
              { value: 1.8 },
              { value: 1.5 },
              { value: 2.0 },
              { value: 2.5 },
              { value: 2.8 },
              { value: 2.4 },
            ]}
            trend="down"
            width={100}
            height={50}
          />
        </div>
      </div>

      <div style={{ background: '#FAFBFC', borderRadius: '8px', padding: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: '12px', color: '#7B8A99', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Revenue (Today)</div>
            <div style={{ fontSize: '28px', fontWeight: '700', color: '#1A2B3D' }}>$8.2k</div>
            <div style={{ fontSize: '13px', color: '#27AE60', marginTop: '4px' }}>↑ 15% vs yesterday</div>
          </div>
          <SparkLine
            data={[
              { value: 5200 },
              { value: 6100 },
              { value: 5800 },
              { value: 6500 },
              { value: 7200 },
              { value: 7800 },
              { value: 8200 },
            ]}
            trend="up"
            width={100}
            height={50}
          />
        </div>
      </div>
    </div>
  ),
};
