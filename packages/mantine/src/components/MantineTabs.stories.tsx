import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, Text } from '@mantine/core';
import { MantineProvider } from '@mantine/core';
import { Info, MessageCircle, Settings, FileText } from 'lucide-react';
import { breatheMantineTheme } from '../theme';
import '@mantine/core/styles.css';

const meta = {
  title: 'Internal/Mantine/Tabs',
  component: Tabs,
  decorators: [
    (Story) => (
      <MantineProvider theme={breatheMantineTheme}>
        <div style={{ maxWidth: '600px' }}>
          <Story />
        </div>
      </MantineProvider>
    ),
  ],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Mantine Tabs with Breathe theme. Switch between different views in desktop applications.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="overview">
      <Tabs.List>
        <Tabs.Tab value="overview">Overview</Tabs.Tab>
        <Tabs.Tab value="details">Details</Tabs.Tab>
        <Tabs.Tab value="settings">Settings</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="overview" pt="md">
        <Text size="sm">Overview content goes here</Text>
      </Tabs.Panel>

      <Tabs.Panel value="details" pt="md">
        <Text size="sm">Detailed information goes here</Text>
      </Tabs.Panel>

      <Tabs.Panel value="settings" pt="md">
        <Text size="sm">Settings panel content</Text>
      </Tabs.Panel>
    </Tabs>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <Tabs defaultValue="info">
      <Tabs.List>
        <Tabs.Tab value="info" leftSection={<Info size={16} />}>Info</Tabs.Tab>
        <Tabs.Tab value="messages" leftSection={<MessageCircle size={16} />}>Messages</Tabs.Tab>
        <Tabs.Tab value="settings" leftSection={<Settings size={16} />}>Settings</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="info" pt="md">
        <Text size="sm">Information panel</Text>
      </Tabs.Panel>

      <Tabs.Panel value="messages" pt="md">
        <Text size="sm">Messages panel</Text>
      </Tabs.Panel>

      <Tabs.Panel value="settings" pt="md">
        <Text size="sm">Settings panel</Text>
      </Tabs.Panel>
    </Tabs>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <Text size="xs" fw={600} mb="sm">Default</Text>
        <Tabs defaultValue="tab1" variant="default">
          <Tabs.List>
            <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
            <Tabs.Tab value="tab2">Tab 2</Tabs.Tab>
            <Tabs.Tab value="tab3">Tab 3</Tabs.Tab>
          </Tabs.List>
        </Tabs>
      </div>

      <div>
        <Text size="xs" fw={600} mb="sm">Outline</Text>
        <Tabs defaultValue="tab1" variant="outline">
          <Tabs.List>
            <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
            <Tabs.Tab value="tab2">Tab 2</Tabs.Tab>
            <Tabs.Tab value="tab3">Tab 3</Tabs.Tab>
          </Tabs.List>
        </Tabs>
      </div>

      <div>
        <Text size="xs" fw={600} mb="sm">Pills</Text>
        <Tabs defaultValue="tab1" variant="pills">
          <Tabs.List>
            <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
            <Tabs.Tab value="tab2">Tab 2</Tabs.Tab>
            <Tabs.Tab value="tab3">Tab 3</Tabs.Tab>
          </Tabs.List>
        </Tabs>
      </div>
    </div>
  ),
};

export const HealthcareExample: Story = {
  render: () => {
    const [activeTab, setActiveTab] = React.useState<string | null>('demographics');

    return (
      <Tabs value={activeTab} onChange={setActiveTab}>
        <Tabs.List>
          <Tabs.Tab value="demographics">Demographics</Tabs.Tab>
          <Tabs.Tab value="history">Medical History</Tabs.Tab>
          <Tabs.Tab value="medications">Medications</Tabs.Tab>
          <Tabs.Tab value="visits">Visit History</Tabs.Tab>
          <Tabs.Tab value="documents">Documents</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="demographics" pt="md">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Text size="sm"><strong>Name:</strong> John Smith</Text>
            <Text size="sm"><strong>DOB:</strong> 01/15/1955</Text>
            <Text size="sm"><strong>Age:</strong> 71</Text>
            <Text size="sm"><strong>Gender:</strong> Male</Text>
            <Text size="sm"><strong>Phone:</strong> (555) 123-4567</Text>
          </div>
        </Tabs.Panel>

        <Tabs.Panel value="history" pt="md">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Text size="sm">• Type 2 Diabetes (Diagnosed 2015)</Text>
            <Text size="sm">• Hypertension (Diagnosed 2012)</Text>
            <Text size="sm">• Hyperlipidemia (Diagnosed 2016)</Text>
          </div>
        </Tabs.Panel>

        <Tabs.Panel value="medications" pt="md">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Text size="sm">• Metformin 500mg - Twice daily</Text>
            <Text size="sm">• Lisinopril 10mg - Once daily</Text>
            <Text size="sm">• Atorvastatin 20mg - Once daily</Text>
          </div>
        </Tabs.Panel>

        <Tabs.Panel value="visits" pt="md">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Text size="sm">• 12/15/2025 - Annual Check-up</Text>
            <Text size="sm">• 09/20/2025 - Follow-up Visit</Text>
            <Text size="sm">• 06/10/2025 - Blood Work</Text>
          </div>
        </Tabs.Panel>

        <Tabs.Panel value="documents" pt="md">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Text size="sm"><FileText size={16} style={{ display: 'inline', marginRight: '8px' }} />Lab Results - 12/15/2025</Text>
            <Text size="sm"><FileText size={16} style={{ display: 'inline', marginRight: '8px' }} />Imaging Report - 09/20/2025</Text>
            <Text size="sm"><FileText size={16} style={{ display: 'inline', marginRight: '8px' }} />Consent Forms - 01/05/2025</Text>
          </div>
        </Tabs.Panel>
      </Tabs>
    );
  },
};

export const DataDashboard: Story = {
  render: () => (
    <Tabs defaultValue="overview" variant="pills">
      <Tabs.List>
        <Tabs.Tab value="overview">Overview</Tabs.Tab>
        <Tabs.Tab value="analytics">Analytics</Tabs.Tab>
        <Tabs.Tab value="reports">Reports</Tabs.Tab>
        <Tabs.Tab value="export">Export</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="overview" pt="md">
        <Text size="sm" c="dimmed">Dashboard overview with key metrics</Text>
      </Tabs.Panel>

      <Tabs.Panel value="analytics" pt="md">
        <Text size="sm" c="dimmed">Detailed analytics and charts</Text>
      </Tabs.Panel>

      <Tabs.Panel value="reports" pt="md">
        <Text size="sm" c="dimmed">Generated reports and summaries</Text>
      </Tabs.Panel>

      <Tabs.Panel value="export" pt="md">
        <Text size="sm" c="dimmed">Export data in various formats</Text>
      </Tabs.Panel>
    </Tabs>
  ),
};

export const WithDisabledTab: Story = {
  render: () => (
    <Tabs defaultValue="active">
      <Tabs.List>
        <Tabs.Tab value="active">Active</Tabs.Tab>
        <Tabs.Tab value="disabled" disabled>
          Disabled
        </Tabs.Tab>
        <Tabs.Tab value="enabled">Enabled</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="active" pt="md">
        <Text size="sm">Active tab content</Text>
      </Tabs.Panel>

      <Tabs.Panel value="enabled" pt="md">
        <Text size="sm">Another enabled tab</Text>
      </Tabs.Panel>
    </Tabs>
  ),
};
