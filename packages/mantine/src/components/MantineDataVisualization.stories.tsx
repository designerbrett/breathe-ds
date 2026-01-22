import type { Meta, StoryObj } from '@storybook/react';
import { MantineProvider } from '@mantine/core';
import { breatheMantineTheme } from '../theme';
import '@mantine/core/styles.css';
import { LineGraph } from '../../../external/src/components/LineGraph/LineGraph';
import { SparkLine } from '../../../external/src/components/SparkLine/SparkLine';
import { BarGraph } from '../../../external/src/components/BarGraph/BarGraph';
import { PieChart } from '../../../external/src/components/PieChart/PieChart';
import { DonutChart } from '../../../external/src/components/DonutChart/DonutChart';
import { StatCard } from '../../../external/src/components/StatCard/StatCard';
import { CATEGORICAL_COLORS } from '../../../external/src/utils/chartColors';

// Wrapper component for the stories
const DataVisualizationShowcase = () => (
  <MantineProvider theme={breatheMantineTheme}>
    <div style={{ padding: '20px' }}>
      <h1 style={{ marginBottom: '32px', fontFamily: 'Lexend' }}>Data Visualization Components</h1>

      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ marginBottom: '24px', fontFamily: 'Lexend' }}>Stats & Metrics</h2>
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
        </div>
      </section>

      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ marginBottom: '24px', fontFamily: 'Lexend' }}>Line Graphs</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '24px' }}>
          <LineGraph
            data={[
              { name: 'Mon', value: 30 },
              { name: 'Tue', value: 50 },
              { name: 'Wed', value: 45 },
              { name: 'Thu', value: 70 },
              { name: 'Fri', value: 65 },
              { name: 'Sat', value: 80 },
              { name: 'Sun', value: 85 },
            ]}
            title="Patient Visits - Last 7 Days"
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
      </section>

      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ marginBottom: '24px', fontFamily: 'Lexend' }}>Bar Graphs</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '24px' }}>
          <BarGraph
            data={[
              { name: 'Cardiology', value: 245 },
              { name: 'Orthopedics', value: 198 },
              { name: 'Neurology', value: 156 },
              { name: 'Primary Care', value: 289 },
            ]}
            title="Visits by Department"
            useGradient
            gradientColor="blue"
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
            barColors={CATEGORICAL_COLORS.slice(0, 5)}
          />
        </div>
      </section>

      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ marginBottom: '24px', fontFamily: 'Lexend' }}>Pie & Donut Charts</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '24px' }}>
          <PieChart
            data={[
              { name: 'Blue Cross', value: 40 },
              { name: 'Aetna', value: 30 },
              { name: 'United', value: 20 },
              { name: 'Other', value: 10 },
            ]}
            title="Insurance Distribution"
            colors={['#2B79B9', '#27AE60', '#E67E22', '#E74C3C']}
          />
          <DonutChart
            data={[
              { name: 'Active', value: 864 },
              { name: 'Pending', value: 247 },
              { name: 'Inactive', value: 123 },
            ]}
            title="Patient Status"
            colors={['#27AE60', '#E67E22', '#E74C3C']}
            centerLabel="1,234"
          />
        </div>
      </section>

      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ marginBottom: '24px', fontFamily: 'Lexend' }}>Spark Lines with Stats</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
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
        </div>
      </section>
    </div>
  </MantineProvider>
);

const meta = {
  title: 'Internal/Mantine/Data Visualization',
  component: DataVisualizationShowcase,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Comprehensive data visualization components for internal dashboards and analytics. Includes line graphs, bar charts, pie/donut charts, sparklines, and stat cards with the Breathe Design System color palettes.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DataVisualizationShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllComponents: Story = {};

export const LineGraphs: Story = {
  render: () => (
    <MantineProvider theme={breatheMantineTheme}>
      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <LineGraph
          data={[
            { name: 'Mon', value: 30 },
            { name: 'Tue', value: 50 },
            { name: 'Wed', value: 45 },
            { name: 'Thu', value: 70 },
            { name: 'Fri', value: 65 },
            { name: 'Sat', value: 80 },
            { name: 'Sun', value: 85 },
          ]}
          title="Patient Visits - Last 7 Days"
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
    </MantineProvider>
  ),
};

export const BarGraphs: Story = {
  render: () => (
    <MantineProvider theme={breatheMantineTheme}>
      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <BarGraph
          data={[
            { name: 'Cardiology', value: 245 },
            { name: 'Orthopedics', value: 198 },
            { name: 'Neurology', value: 156 },
            { name: 'Primary Care', value: 289 },
          ]}
          title="Visits by Department (Gradient)"
          useGradient
          gradientColor="blue"
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
          barColors={CATEGORICAL_COLORS.slice(0, 5)}
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
          useGradient
          gradientColor="green"
        />
      </div>
    </MantineProvider>
  ),
};

export const Charts: Story = {
  render: () => (
    <MantineProvider theme={breatheMantineTheme}>
      <div style={{ padding: '20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '24px' }}>
        <PieChart
          data={[
            { name: 'Blue Cross', value: 40 },
            { name: 'Aetna', value: 30 },
            { name: 'United', value: 20 },
            { name: 'Other', value: 10 },
          ]}
          title="Insurance Distribution"
          colors={['#2B79B9', '#27AE60', '#E67E22', '#E74C3C']}
        />
        <DonutChart
          data={[
            { name: 'Active', value: 864 },
            { name: 'Pending', value: 247 },
            { name: 'Inactive', value: 123 },
          ]}
          title="Patient Status"
          colors={['#27AE60', '#E67E22', '#E74C3C']}
          centerLabel="1,234"
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
      </div>
    </MantineProvider>
  ),
};

export const Dashboard: Story = {
  render: () => (
    <MantineProvider theme={breatheMantineTheme}>
      <div style={{ padding: '20px' }}>
        <h1 style={{ marginBottom: '24px', fontFamily: 'Lexend' }}>Healthcare Dashboard</h1>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px', marginBottom: '32px' }}>
          <StatCard
            label="Patient Satisfaction"
            value="94%"
            trend="↑ 3% from last month"
            trendDirection="up"
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
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '24px' }}>
          <LineGraph
            data={[
              { name: 'Mon', value: 30 },
              { name: 'Tue', value: 50 },
              { name: 'Wed', value: 45 },
              { name: 'Thu', value: 70 },
              { name: 'Fri', value: 65 },
              { name: 'Sat', value: 80 },
              { name: 'Sun', value: 85 },
            ]}
            title="Patient Visits - Last 7 Days"
            showAreaFill
          />
          <BarGraph
            data={[
              { name: 'Cardiology', value: 245 },
              { name: 'Orthopedics', value: 198 },
              { name: 'Neurology', value: 156 },
              { name: 'Primary Care', value: 289 },
            ]}
            title="Visits by Department"
            useGradient
            gradientColor="blue"
          />
          <DonutChart
            data={[
              { name: 'Active', value: 864 },
              { name: 'Pending', value: 247 },
              { name: 'Inactive', value: 123 },
            ]}
            title="Patient Status"
            colors={['#27AE60', '#E67E22', '#E74C3C']}
            centerLabel="1,234"
          />
          <PieChart
            data={[
              { name: 'Blue Cross', value: 40 },
              { name: 'Aetna', value: 30 },
              { name: 'United', value: 20 },
              { name: 'Other', value: 10 },
            ]}
            title="Insurance Distribution"
            colors={['#2B79B9', '#27AE60', '#E67E22', '#E74C3C']}
          />
        </div>
      </div>
    </MantineProvider>
  ),
};
