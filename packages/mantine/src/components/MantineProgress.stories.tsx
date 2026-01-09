import type { Meta, StoryObj } from '@storybook/react';
import { Progress, Stack, Text, Group } from '@mantine/core';
import { MantineProvider } from '@mantine/core';
import { breatheMantineTheme } from '../theme';
import '@mantine/core/styles.css';

const meta = {
  title: 'Internal/Mantine/Progress',
  component: Progress,
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
        component: 'Mantine Progress with Breathe theme. Linear progress bars with labels and variants for desktop applications.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 50,
  },
};

export const WithColor: Story = {
  args: {
    value: 75,
    color: 'green',
  },
};

export const AllColors: Story = {
  render: () => (
    <Stack gap="md">
      <Progress value={60} color="blue" />
      <Progress value={60} color="green" />
      <Progress value={60} color="yellow" />
      <Progress value={60} color="red" />
      <Progress value={60} color="gray" />
    </Stack>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <Stack gap="md">
      <div>
        <Text size="xs" mb="xs">Extra Small</Text>
        <Progress value={50} size="xs" />
      </div>
      <div>
        <Text size="xs" mb="xs">Small</Text>
        <Progress value={50} size="sm" />
      </div>
      <div>
        <Text size="xs" mb="xs">Medium (Default)</Text>
        <Progress value={50} size="md" />
      </div>
      <div>
        <Text size="xs" mb="xs">Large</Text>
        <Progress value={50} size="lg" />
      </div>
      <div>
        <Text size="xs" mb="xs">Extra Large</Text>
        <Progress value={50} size="xl" />
      </div>
    </Stack>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <Stack gap="md">
      <div>
        <Group justify="space-between" mb="xs">
          <Text size="sm" fw={500}>Upload Progress</Text>
          <Text size="sm" c="dimmed">45%</Text>
        </Group>
        <Progress value={45} />
      </div>

      <div>
        <Group justify="space-between" mb="xs">
          <Text size="sm" fw={500}>Profile Completion</Text>
          <Text size="sm" c="dimmed">80%</Text>
        </Group>
        <Progress value={80} color="green" />
      </div>

      <div>
        <Group justify="space-between" mb="xs">
          <Text size="sm" fw={500}>Storage Used</Text>
          <Text size="sm" c="dimmed">92%</Text>
        </Group>
        <Progress value={92} color="red" />
      </div>
    </Stack>
  ),
};

export const Animated: Story = {
  args: {
    value: 50,
    animated: true,
  },
};

export const Striped: Story = {
  args: {
    value: 65,
    striped: true,
  },
};

export const AnimatedStriped: Story = {
  args: {
    value: 75,
    striped: true,
    animated: true,
  },
};

export const MultiSection: Story = {
  render: () => (
    <Stack gap="md">
      <div>
        <Text size="sm" fw={500} mb="xs">
          Patient Visit Distribution
        </Text>
        <Progress.Root size="xl">
          <Progress.Section value={35} color="blue">
            <Progress.Label>Check-ups 35%</Progress.Label>
          </Progress.Section>
          <Progress.Section value={25} color="green">
            <Progress.Label>Follow-ups 25%</Progress.Label>
          </Progress.Section>
          <Progress.Section value={20} color="yellow">
            <Progress.Label>Urgent 20%</Progress.Label>
          </Progress.Section>
          <Progress.Section value={20} color="red">
            <Progress.Label>Emergency 20%</Progress.Label>
          </Progress.Section>
        </Progress.Root>
      </div>

      <div>
        <Text size="sm" fw={500} mb="xs">
          Storage Breakdown
        </Text>
        <Progress.Root size="lg">
          <Progress.Section value={40} color="blue">
            <Progress.Label>Medical Records</Progress.Label>
          </Progress.Section>
          <Progress.Section value={30} color="green">
            <Progress.Label>Imaging</Progress.Label>
          </Progress.Section>
          <Progress.Section value={20} color="yellow">
            <Progress.Label>Documents</Progress.Label>
          </Progress.Section>
          <Progress.Section value={10} color="gray">
            <Progress.Label>Other</Progress.Label>
          </Progress.Section>
        </Progress.Root>
      </div>
    </Stack>
  ),
};

export const HealthcareExamples: Story = {
  render: () => (
    <Stack gap="lg">
      <div>
        <Text size="sm" fw={600} mb="xs">
          Patient Onboarding Progress
        </Text>
        <Stack gap="md">
          <div>
            <Group justify="space-between" mb="xs">
              <Text size="sm">Personal Information</Text>
              <Text size="sm" c="green" fw={500}>Complete</Text>
            </Group>
            <Progress value={100} color="green" size="sm" />
          </div>
          <div>
            <Group justify="space-between" mb="xs">
              <Text size="sm">Medical History</Text>
              <Text size="sm" c="blue" fw={500}>In Progress</Text>
            </Group>
            <Progress value={60} color="blue" size="sm" />
          </div>
          <div>
            <Group justify="space-between" mb="xs">
              <Text size="sm">Insurance Details</Text>
              <Text size="sm" c="dimmed">Not Started</Text>
            </Group>
            <Progress value={0} color="gray" size="sm" />
          </div>
        </Stack>
      </div>

      <div>
        <Text size="sm" fw={600} mb="xs">
          Annual Health Goals
        </Text>
        <Stack gap="md">
          <div>
            <Group justify="space-between" mb="xs">
              <Text size="sm">Exercise (150 min/week)</Text>
              <Text size="sm">120 / 150 min</Text>
            </Group>
            <Progress value={80} color="blue" size="md" />
          </div>
          <div>
            <Group justify="space-between" mb="xs">
              <Text size="sm">Weight Goal</Text>
              <Text size="sm">8 / 10 lbs</Text>
            </Group>
            <Progress value={80} color="green" size="md" />
          </div>
        </Stack>
      </div>
    </Stack>
  ),
};

export const DynamicProgress: Story = {
  render: () => {
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
      const interval = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 10));
      }, 800);
      return () => clearInterval(interval);
    }, []);

    return (
      <div>
        <Group justify="space-between" mb="xs">
          <Text size="sm" fw={500}>Processing</Text>
          <Text size="sm" c="dimmed">{progress}%</Text>
        </Group>
        <Progress value={progress} animated />
      </div>
    );
  },
};

export const UploadProgress: Story = {
  render: () => (
    <Stack gap="lg">
      <div>
        <Group justify="space-between" mb="xs">
          <Text size="sm" fw={500}>patient-records.pdf</Text>
          <Text size="xs" c="dimmed">2.4 MB / 5.0 MB</Text>
        </Group>
        <Progress value={48} color="blue" size="md" />
        <Text size="xs" c="dimmed" mt="xs">48% complete - 12 seconds remaining</Text>
      </div>

      <div>
        <Group justify="space-between" mb="xs">
          <Text size="sm" fw={500}>lab-results.pdf</Text>
          <Text size="xs" c="dimmed">Complete</Text>
        </Group>
        <Progress value={100} color="green" size="md" />
      </div>

      <div>
        <Group justify="space-between" mb="xs">
          <Text size="sm" fw={500}>x-ray-image.jpg</Text>
          <Text size="xs" c="red">Failed</Text>
        </Group>
        <Progress value={25} color="red" size="md" />
      </div>
    </Stack>
  ),
};
