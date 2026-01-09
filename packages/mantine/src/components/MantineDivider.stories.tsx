import type { Meta, StoryObj } from '@storybook/react';
import { Divider, Text, Stack } from '@mantine/core';
import { MantineProvider } from '@mantine/core';
import { ClipboardList, Pill, Calendar, FileText } from 'lucide-react';
import { breatheMantineTheme } from '../theme';
import '@mantine/core/styles.css';

const meta = {
  title: 'Internal/Mantine/Divider',
  component: Divider,
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
        component: 'Mantine Divider with Breathe theme. Content separator for desktop applications.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div>
      <Text size="sm">Content above</Text>
      <Divider my="md" />
      <Text size="sm">Content below</Text>
    </div>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div>
      <Text size="sm">Section 1 content</Text>
      <Divider my="md" label="Section 2" />
      <Text size="sm">Section 2 content</Text>
    </div>
  ),
};

export const LabelPositions: Story = {
  render: () => (
    <Stack gap="xl">
      <div>
        <Text size="sm" mb="md">Content above</Text>
        <Divider label="Label Left" labelPosition="left" />
        <Text size="sm" mt="md">Content below</Text>
      </div>

      <div>
        <Text size="sm" mb="md">Content above</Text>
        <Divider label="Label Center" labelPosition="center" />
        <Text size="sm" mt="md">Content below</Text>
      </div>

      <div>
        <Text size="sm" mb="md">Content above</Text>
        <Divider label="Label Right" labelPosition="right" />
        <Text size="sm" mt="md">Content below</Text>
      </div>
    </Stack>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <Stack gap="xl">
      <div>
        <Text size="xs" mb="xs">Extra Small</Text>
        <Divider size="xs" />
      </div>
      <div>
        <Text size="xs" mb="xs">Small</Text>
        <Divider size="sm" />
      </div>
      <div>
        <Text size="xs" mb="xs">Medium (Default)</Text>
        <Divider size="md" />
      </div>
      <div>
        <Text size="xs" mb="xs">Large</Text>
        <Divider size="lg" />
      </div>
      <div>
        <Text size="xs" mb="xs">Extra Large</Text>
        <Divider size="xl" />
      </div>
    </Stack>
  ),
};

export const AllColors: Story = {
  render: () => (
    <Stack gap="md">
      <Divider label="Blue (Default)" color="blue" />
      <Divider label="Green" color="green" />
      <Divider label="Red" color="red" />
      <Divider label="Gray" color="gray" />
    </Stack>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <Stack gap="xl">
      <div>
        <Text size="xs" mb="xs">Solid (Default)</Text>
        <Divider variant="solid" />
      </div>
      <div>
        <Text size="xs" mb="xs">Dashed</Text>
        <Divider variant="dashed" />
      </div>
      <div>
        <Text size="xs" mb="xs">Dotted</Text>
        <Divider variant="dotted" />
      </div>
    </Stack>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', height: '100px' }}>
      <Text size="sm">Left section</Text>
      <Divider orientation="vertical" />
      <Text size="sm">Middle section</Text>
      <Divider orientation="vertical" />
      <Text size="sm">Right section</Text>
    </div>
  ),
};

export const HealthcareSections: Story = {
  render: () => (
    <Stack gap="lg">
      <div>
        <Text size="sm" fw={600}>Patient Demographics</Text>
        <Text size="sm" c="dimmed" mt="xs">
          Name: John Smith<br />
          DOB: 01/15/1955<br />
          Age: 71
        </Text>
      </div>

      <Divider label="Medical History" labelPosition="left" />

      <div>
        <Text size="sm" c="dimmed">
          • Type 2 Diabetes (2015)<br />
          • Hypertension (2012)<br />
          • Hyperlipidemia (2016)
        </Text>
      </div>

      <Divider label="Current Medications" labelPosition="left" />

      <div>
        <Text size="sm" c="dimmed">
          • Metformin 500mg - Twice daily<br />
          • Lisinopril 10mg - Once daily<br />
          • Atorvastatin 20mg - Once daily
        </Text>
      </div>

      <Divider label="Recent Visits" labelPosition="left" />

      <div>
        <Text size="sm" c="dimmed">
          • 12/15/2025 - Annual Check-up<br />
          • 09/20/2025 - Follow-up Visit
        </Text>
      </div>
    </Stack>
  ),
};

export const FormSections: Story = {
  render: () => (
    <Stack gap="lg">
      <div>
        <Divider label="Personal Information" labelPosition="left" mb="md" />
        <Text size="sm" c="dimmed">Form fields for personal info...</Text>
      </div>

      <div>
        <Divider label="Contact Details" labelPosition="left" mb="md" />
        <Text size="sm" c="dimmed">Form fields for contact details...</Text>
      </div>

      <div>
        <Divider label="Emergency Contact" labelPosition="left" mb="md" />
        <Text size="sm" c="dimmed">Form fields for emergency contact...</Text>
      </div>
    </Stack>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <Stack gap="md">
      <Divider label={<span><ClipboardList size={16} style={{ display: 'inline', marginRight: '8px' }} />Patient Info</span>} labelPosition="left" />
      <Divider label={<span><Pill size={16} style={{ display: 'inline', marginRight: '8px' }} />Medications</span>} labelPosition="left" />
      <Divider label={<span><Calendar size={16} style={{ display: 'inline', marginRight: '8px' }} />Appointments</span>} labelPosition="left" />
      <Divider label={<span><FileText size={16} style={{ display: 'inline', marginRight: '8px' }} />Documents</span>} labelPosition="left" />
    </Stack>
  ),
};

export const SubtleDividers: Story = {
  render: () => (
    <Stack gap="lg">
      <div>
        <Text size="sm">Section 1</Text>
        <Divider my="xs" size="xs" color="gray" />
        <Text size="sm" c="dimmed">Subsection content</Text>
      </div>

      <div>
        <Text size="sm">Section 2</Text>
        <Divider my="xs" size="xs" color="gray" />
        <Text size="sm" c="dimmed">Subsection content</Text>
      </div>
    </Stack>
  ),
};
