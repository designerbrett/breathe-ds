import type { Meta, StoryObj } from '@storybook/react';
import { Popover, Button, Text, Stack } from '@mantine/core';
import { MantineProvider } from '@mantine/core';
import { breatheMantineTheme } from '../theme';
import '@mantine/core/styles.css';

const meta = {
  title: 'Internal/Mantine/Popover',
  component: Popover,
  decorators: [
    (Story) => (
      <MantineProvider theme={breatheMantineTheme}>
        <Story />
      </MantineProvider>
    ),
  ],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Mantine Popover with Breathe theme. Rich content panel for desktop applications.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Popover>
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="sm">This is a basic popover with some content</Text>
      </Popover.Dropdown>
    </Popover>
  ),
};

export const WithTitle: Story = {
  render: () => (
    <Popover>
      <Popover.Target>
        <Button>Show details</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Stack gap="xs">
          <Text size="sm" fw={600}>Patient Information</Text>
          <Text size="sm" c="dimmed">
            Click to view full patient details and medical history.
          </Text>
        </Stack>
      </Popover.Dropdown>
    </Popover>
  ),
};

export const AllPositions: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <Popover position="top">
        <Popover.Target>
          <Button size="xs">Top</Button>
        </Popover.Target>
        <Popover.Dropdown>
          <Text size="xs">Top position</Text>
        </Popover.Dropdown>
      </Popover>

      <Popover position="right">
        <Popover.Target>
          <Button size="xs">Right</Button>
        </Popover.Target>
        <Popover.Dropdown>
          <Text size="xs">Right position</Text>
        </Popover.Dropdown>
      </Popover>

      <Popover position="bottom">
        <Popover.Target>
          <Button size="xs">Bottom</Button>
        </Popover.Target>
        <Popover.Dropdown>
          <Text size="xs">Bottom position</Text>
        </Popover.Dropdown>
      </Popover>

      <Popover position="left">
        <Popover.Target>
          <Button size="xs">Left</Button>
        </Popover.Target>
        <Popover.Dropdown>
          <Text size="xs">Left position</Text>
        </Popover.Dropdown>
      </Popover>
    </div>
  ),
};

export const WithArrow: Story = {
  render: () => (
    <Popover withArrow>
      <Popover.Target>
        <Button>With arrow</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="sm">This popover has an arrow pointing to the target</Text>
      </Popover.Dropdown>
    </Popover>
  ),
};

export const HealthcarePatientInfo: Story = {
  render: () => (
    <Popover width={300} withArrow>
      <Popover.Target>
        <Button variant="light">John Smith (#12345)</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Stack gap="xs">
          <Text size="sm" fw={600}>Patient Quick View</Text>
          <Text size="xs" c="dimmed">DOB: 01/15/1955 (Age: 71)</Text>
          <Text size="xs" c="dimmed">Phone: (555) 123-4567</Text>
          <Text size="xs" c="dimmed">Last Visit: 12/15/2025</Text>
          <Text size="xs" c="dimmed">
            Conditions: Diabetes, Hypertension
          </Text>
          <Button size="xs" variant="light" mt="xs">
            View Full Profile
          </Button>
        </Stack>
      </Popover.Dropdown>
    </Popover>
  ),
};

export const AppointmentPreview: Story = {
  render: () => (
    <Popover width={280} withArrow>
      <Popover.Target>
        <Button variant="subtle" size="sm">
          2:00 PM - John Smith
        </Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Stack gap="xs">
          <Text size="sm" fw={600}>Appointment Details</Text>
          <Text size="xs" c="dimmed">Patient: John Smith (#12345)</Text>
          <Text size="xs" c="dimmed">Type: Follow-up Visit</Text>
          <Text size="xs" c="dimmed">Provider: Dr. Sarah Johnson</Text>
          <Text size="xs" c="dimmed">Duration: 30 minutes</Text>
          <Button size="xs" variant="light" mt="xs" fullWidth>
            View Details
          </Button>
        </Stack>
      </Popover.Dropdown>
    </Popover>
  ),
};

export const MedicationInfo: Story = {
  render: () => (
    <Popover width={250} withArrow>
      <Popover.Target>
        <Button variant="subtle" size="sm">
          Metformin 500mg ℹ️
        </Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Stack gap="xs">
          <Text size="sm" fw={600}>Metformin 500mg</Text>
          <Text size="xs" c="dimmed">Dosage: Twice daily</Text>
          <Text size="xs" c="dimmed">Prescribed: 01/10/2015</Text>
          <Text size="xs" c="dimmed">Last Refill: 11/01/2025</Text>
          <Text size="xs" c="dimmed">Refills Remaining: 2</Text>
        </Stack>
      </Popover.Dropdown>
    </Popover>
  ),
};

export const ControlledPopover: Story = {
  render: () => {
    const [opened, setOpened] = React.useState(false);

    return (
      <Popover opened={opened} onChange={setOpened}>
        <Popover.Target>
          <Button onClick={() => setOpened((o) => !o)}>
            Controlled toggle
          </Button>
        </Popover.Target>
        <Popover.Dropdown>
          <Text size="sm">This popover is controlled by state</Text>
          <Button size="xs" mt="sm" onClick={() => setOpened(false)}>
            Close
          </Button>
        </Popover.Dropdown>
      </Popover>
    );
  },
};

export const HoverPopover: Story = {
  render: () => (
    <Popover openDelay={200} closeDelay={400}>
      <Popover.Target>
        <Button variant="light">Hover me</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="sm">Opens on hover with a slight delay</Text>
      </Popover.Dropdown>
    </Popover>
  ),
};

export const StatusIndicator: Story = {
  render: () => (
    <Popover withArrow>
      <Popover.Target>
        <div style={{
          width: '12px',
          height: '12px',
          borderRadius: '50%',
          backgroundColor: '#27AE60',
          cursor: 'pointer',
        }} />
      </Popover.Target>
      <Popover.Dropdown>
        <Stack gap="xs">
          <Text size="sm" fw={600}>System Status</Text>
          <Text size="xs" c="dimmed">✅ All systems operational</Text>
          <Text size="xs" c="dimmed">Last checked: 2 minutes ago</Text>
        </Stack>
      </Popover.Dropdown>
    </Popover>
  ),
};
