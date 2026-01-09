import type { Meta, StoryObj } from '@storybook/react';
import { Drawer, Button, Text, Stack, TextInput, Group } from '@mantine/core';
import { MantineProvider } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { breatheMantineTheme } from '../theme';
import '@mantine/core/styles.css';

const meta = {
  title: 'Internal/Mantine/Drawer',
  component: Drawer,
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
        component: 'Mantine Drawer with Breathe theme. Slide-out details panel with focus trap for desktop applications.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [opened, { open, close }] = useDisclosure(false);

    return (
      <>
        <Drawer opened={opened} onClose={close} title="Default Drawer">
          <Text size="sm">
            This is a basic drawer that slides in from the right side.
          </Text>
        </Drawer>

        <Button onClick={open}>Open Drawer</Button>
      </>
    );
  },
};

export const AllPositions: Story = {
  render: () => {
    const [right, handlersRight] = useDisclosure(false);
    const [left, handlersLeft] = useDisclosure(false);
    const [top, handlersTop] = useDisclosure(false);
    const [bottom, handlersBottom] = useDisclosure(false);

    return (
      <>
        <Drawer opened={right} onClose={handlersRight.close} title="Right Drawer" position="right">
          <Text size="sm">Slides from the right (default)</Text>
        </Drawer>

        <Drawer opened={left} onClose={handlersLeft.close} title="Left Drawer" position="left">
          <Text size="sm">Slides from the left</Text>
        </Drawer>

        <Drawer opened={top} onClose={handlersTop.close} title="Top Drawer" position="top">
          <Text size="sm">Slides from the top</Text>
        </Drawer>

        <Drawer opened={bottom} onClose={handlersBottom.close} title="Bottom Drawer" position="bottom">
          <Text size="sm">Slides from the bottom</Text>
        </Drawer>

        <Group gap="sm">
          <Button onClick={handlersRight.open}>Right</Button>
          <Button onClick={handlersLeft.open}>Left</Button>
          <Button onClick={handlersTop.open}>Top</Button>
          <Button onClick={handlersBottom.open}>Bottom</Button>
        </Group>
      </>
    );
  },
};

export const AllSizes: Story = {
  render: () => {
    const [xs, handlersXS] = useDisclosure(false);
    const [sm, handlersSM] = useDisclosure(false);
    const [md, handlersMD] = useDisclosure(false);
    const [lg, handlersLG] = useDisclosure(false);
    const [xl, handlersXL] = useDisclosure(false);

    return (
      <>
        <Drawer opened={xs} onClose={handlersXS.close} title="XS Drawer" size="xs">
          <Text size="sm">Extra Small (size="xs")</Text>
        </Drawer>

        <Drawer opened={sm} onClose={handlersSM.close} title="SM Drawer" size="sm">
          <Text size="sm">Small (size="sm")</Text>
        </Drawer>

        <Drawer opened={md} onClose={handlersMD.close} title="MD Drawer" size="md">
          <Text size="sm">Medium (size="md") - Default</Text>
        </Drawer>

        <Drawer opened={lg} onClose={handlersLG.close} title="LG Drawer" size="lg">
          <Text size="sm">Large (size="lg")</Text>
        </Drawer>

        <Drawer opened={xl} onClose={handlersXL.close} title="XL Drawer" size="xl">
          <Text size="sm">Extra Large (size="xl")</Text>
        </Drawer>

        <Group gap="sm">
          <Button onClick={handlersXS.open} size="sm">XS</Button>
          <Button onClick={handlersSM.open} size="sm">SM</Button>
          <Button onClick={handlersMD.open} size="sm">MD</Button>
          <Button onClick={handlersLG.open} size="sm">LG</Button>
          <Button onClick={handlersXL.open} size="sm">XL</Button>
        </Group>
      </>
    );
  },
};

export const WithForm: Story = {
  render: () => {
    const [opened, { open, close }] = useDisclosure(false);

    return (
      <>
        <Drawer opened={opened} onClose={close} title="Edit Patient Information" size="lg">
          <Stack gap="md">
            <TextInput label="First Name" placeholder="John" required />
            <TextInput label="Last Name" placeholder="Smith" required />
            <TextInput label="Email" placeholder="john.smith@example.com" type="email" />
            <TextInput label="Phone" placeholder="(555) 123-4567" type="tel" />
          </Stack>

          <Group mt="xl" justify="flex-end">
            <Button variant="subtle" onClick={close}>
              Cancel
            </Button>
            <Button onClick={close}>Save Changes</Button>
          </Group>
        </Drawer>

        <Button onClick={open}>Edit Patient</Button>
      </>
    );
  },
};

export const PatientDetails: Story = {
  render: () => {
    const [opened, { open, close }] = useDisclosure(false);

    return (
      <>
        <Drawer opened={opened} onClose={close} title="Patient Details" size="lg">
          <Stack gap="lg">
            <div>
              <Text size="xs" fw={600} tt="uppercase" c="dimmed" mb="xs">
                Demographics
              </Text>
              <Stack gap="xs">
                <Text size="sm"><strong>Name:</strong> John Smith</Text>
                <Text size="sm"><strong>DOB:</strong> 01/15/1955 (Age: 71)</Text>
                <Text size="sm"><strong>Gender:</strong> Male</Text>
                <Text size="sm"><strong>Phone:</strong> (555) 123-4567</Text>
                <Text size="sm"><strong>Email:</strong> john.smith@example.com</Text>
              </Stack>
            </div>

            <div>
              <Text size="xs" fw={600} tt="uppercase" c="dimmed" mb="xs">
                Medical History
              </Text>
              <Stack gap="xs">
                <Text size="sm">• Type 2 Diabetes (2015)</Text>
                <Text size="sm">• Hypertension (2012)</Text>
                <Text size="sm">• Hyperlipidemia (2016)</Text>
              </Stack>
            </div>

            <div>
              <Text size="xs" fw={600} tt="uppercase" c="dimmed" mb="xs">
                Current Medications
              </Text>
              <Stack gap="xs">
                <Text size="sm">• Metformin 500mg - Twice daily</Text>
                <Text size="sm">• Lisinopril 10mg - Once daily</Text>
                <Text size="sm">• Atorvastatin 20mg - Once daily</Text>
              </Stack>
            </div>

            <div>
              <Text size="xs" fw={600} tt="uppercase" c="dimmed" mb="xs">
                Recent Visits
              </Text>
              <Stack gap="xs">
                <Text size="sm">• 12/15/2025 - Annual Check-up</Text>
                <Text size="sm">• 09/20/2025 - Follow-up Visit</Text>
                <Text size="sm">• 06/10/2025 - Blood Work</Text>
              </Stack>
            </div>
          </Stack>

          <Group mt="xl" justify="flex-end">
            <Button variant="outline" onClick={close}>
              Close
            </Button>
            <Button>Edit Patient</Button>
          </Group>
        </Drawer>

        <Button onClick={open}>View Patient Details</Button>
      </>
    );
  },
};

export const AppointmentDetails: Story = {
  render: () => {
    const [opened, { open, close }] = useDisclosure(false);

    return (
      <>
        <Drawer opened={opened} onClose={close} title="Appointment Details" size="md">
          <Stack gap="md">
            <div>
              <Text size="sm" fw={600} mb="xs">Patient</Text>
              <Text size="sm" c="dimmed">John Smith (#12345)</Text>
            </div>

            <div>
              <Text size="sm" fw={600} mb="xs">Date & Time</Text>
              <Text size="sm" c="dimmed">December 20, 2025 at 2:00 PM</Text>
            </div>

            <div>
              <Text size="sm" fw={600} mb="xs">Provider</Text>
              <Text size="sm" c="dimmed">Dr. Sarah Johnson</Text>
            </div>

            <div>
              <Text size="sm" fw={600} mb="xs">Type</Text>
              <Text size="sm" c="dimmed">Follow-up Visit</Text>
            </div>

            <div>
              <Text size="sm" fw={600} mb="xs">Reason</Text>
              <Text size="sm" c="dimmed">Review blood test results and adjust medication dosage</Text>
            </div>

            <div>
              <Text size="sm" fw={600} mb="xs">Status</Text>
              <Text size="sm" c="green">✅ Confirmed</Text>
            </div>
          </Stack>

          <Group mt="xl" justify="space-between">
            <Button variant="outline" color="red">
              Cancel Appointment
            </Button>
            <Group gap="sm">
              <Button variant="subtle" onClick={close}>
                Close
              </Button>
              <Button>Reschedule</Button>
            </Group>
          </Group>
        </Drawer>

        <Button onClick={open}>View Appointment</Button>
      </>
    );
  },
};

export const WithoutOverlay: Story = {
  render: () => {
    const [opened, { open, close }] = useDisclosure(false);

    return (
      <>
        <Drawer
          opened={opened}
          onClose={close}
          title="No Overlay"
          withOverlay={false}
        >
          <Text size="sm">
            This drawer doesn't have a backdrop overlay. You can interact with
            the page behind it.
          </Text>
        </Drawer>

        <Button onClick={open}>Open (No Overlay)</Button>
      </>
    );
  },
};

export const Persistent: Story = {
  render: () => {
    const [opened, { open, close }] = useDisclosure(false);

    return (
      <>
        <Drawer
          opened={opened}
          onClose={close}
          title="Persistent Drawer"
          closeOnClickOutside={false}
          closeOnEscape={false}
        >
          <Text size="sm" mb="lg">
            This drawer requires explicit confirmation to close. You cannot
            close it by clicking outside or pressing ESC.
          </Text>
          <Group justify="flex-end">
            <Button onClick={close}>Confirm Close</Button>
          </Group>
        </Drawer>

        <Button onClick={open}>Open Persistent</Button>
      </>
    );
  },
};
