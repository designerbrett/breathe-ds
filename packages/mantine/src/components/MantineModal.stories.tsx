import type { Meta, StoryObj } from '@storybook/react';
import { Modal, Button, TextInput, Group, Text, Stack } from '@mantine/core';
import { MantineProvider } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { breatheMantineTheme } from '../theme';
import '@mantine/core/styles.css';

const meta = {
  title: 'Internal/Mantine/Modal',
  component: Modal,
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
        component:
          'Mantine Modal with Breathe theme. Keyboard accessible dialogs with ESC support for desktop productivity tools.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [opened, { open, close }] = useDisclosure(false);

    return (
      <>
        <Modal opened={opened} onClose={close} title="Default Modal">
          <Text size="sm">
            This is a basic modal dialog with default settings. Press ESC or
            click outside to close.
          </Text>
          <Group mt="xl" justify="flex-end">
            <Button variant="subtle" onClick={close}>
              Cancel
            </Button>
            <Button onClick={close}>Confirm</Button>
          </Group>
        </Modal>

        <Button onClick={open}>Open Modal</Button>
      </>
    );
  },
};

export const WithForm: Story = {
  render: () => {
    const [opened, { open, close }] = useDisclosure(false);

    return (
      <>
        <Modal opened={opened} onClose={close} title="Add New Patient">
          <Stack gap="md">
            <TextInput label="First Name" placeholder="John" required />
            <TextInput label="Last Name" placeholder="Smith" required />
            <TextInput
              label="Email"
              placeholder="john.smith@example.com"
              type="email"
            />
            <TextInput
              label="Phone"
              placeholder="(555) 123-4567"
              type="tel"
            />
          </Stack>

          <Group mt="xl" justify="flex-end">
            <Button variant="subtle" onClick={close}>
              Cancel
            </Button>
            <Button onClick={close}>Save Patient</Button>
          </Group>
        </Modal>

        <Button onClick={open}>Add Patient</Button>
      </>
    );
  },
};

export const ConfirmationDialog: Story = {
  render: () => {
    const [opened, { open, close }] = useDisclosure(false);

    return (
      <>
        <Modal
          opened={opened}
          onClose={close}
          title="Confirm Action"
          size="sm"
        >
          <Text size="sm" mb="xl">
            Are you sure you want to delete this patient record? This action
            cannot be undone.
          </Text>

          <Group justify="flex-end">
            <Button variant="subtle" onClick={close}>
              Cancel
            </Button>
            <Button color="red" onClick={close}>
              Delete
            </Button>
          </Group>
        </Modal>

        <Button color="red" onClick={open}>
          Delete Patient
        </Button>
      </>
    );
  },
};

export const AllSizes: Story = {
  render: () => {
    const [sizeXS, handlersXS] = useDisclosure(false);
    const [sizeSM, handlersSM] = useDisclosure(false);
    const [sizeMD, handlersMD] = useDisclosure(false);
    const [sizeLG, handlersLG] = useDisclosure(false);
    const [sizeXL, handlersXL] = useDisclosure(false);

    return (
      <>
        <Modal opened={sizeXS} onClose={handlersXS.close} title="Extra Small" size="xs">
          <Text size="sm">Extra small modal (size="xs")</Text>
          <Button mt="md" onClick={handlersXS.close} fullWidth>
            Close
          </Button>
        </Modal>

        <Modal opened={sizeSM} onClose={handlersSM.close} title="Small" size="sm">
          <Text size="sm">Small modal (size="sm")</Text>
          <Button mt="md" onClick={handlersSM.close} fullWidth>
            Close
          </Button>
        </Modal>

        <Modal opened={sizeMD} onClose={handlersMD.close} title="Medium" size="md">
          <Text size="sm">Medium modal (size="md") - Default size</Text>
          <Button mt="md" onClick={handlersMD.close} fullWidth>
            Close
          </Button>
        </Modal>

        <Modal opened={sizeLG} onClose={handlersLG.close} title="Large" size="lg">
          <Text size="sm">Large modal (size="lg")</Text>
          <Button mt="md" onClick={handlersLG.close} fullWidth>
            Close
          </Button>
        </Modal>

        <Modal opened={sizeXL} onClose={handlersXL.close} title="Extra Large" size="xl">
          <Text size="sm">Extra large modal (size="xl")</Text>
          <Button mt="md" onClick={handlersXL.close} fullWidth>
            Close
          </Button>
        </Modal>

        <Group gap="sm">
          <Button onClick={handlersXS.open} size="sm">
            XS
          </Button>
          <Button onClick={handlersSM.open} size="sm">
            SM
          </Button>
          <Button onClick={handlersMD.open} size="sm">
            MD
          </Button>
          <Button onClick={handlersLG.open} size="sm">
            LG
          </Button>
          <Button onClick={handlersXL.open} size="sm">
            XL
          </Button>
        </Group>
      </>
    );
  },
};

export const Centered: Story = {
  render: () => {
    const [opened, { open, close }] = useDisclosure(false);

    return (
      <>
        <Modal opened={opened} onClose={close} title="Centered Modal" centered>
          <Text size="sm">
            This modal is centered in the viewport for better visual focus.
          </Text>
          <Button mt="xl" onClick={close} fullWidth>
            Close
          </Button>
        </Modal>

        <Button onClick={open}>Open Centered Modal</Button>
      </>
    );
  },
};

export const WithoutOverlayClose: Story = {
  render: () => {
    const [opened, { open, close }] = useDisclosure(false);

    return (
      <>
        <Modal
          opened={opened}
          onClose={close}
          title="Important Action"
          closeOnClickOutside={false}
          closeOnEscape={false}
        >
          <Text size="sm" mb="lg">
            This modal requires explicit confirmation. You cannot close it by
            clicking outside or pressing ESC.
          </Text>
          <Group justify="flex-end">
            <Button variant="subtle" onClick={close}>
              Cancel
            </Button>
            <Button onClick={close}>Confirm</Button>
          </Group>
        </Modal>

        <Button onClick={open}>Open (Must Confirm)</Button>
      </>
    );
  },
};

export const FullScreen: Story = {
  render: () => {
    const [opened, { open, close }] = useDisclosure(false);

    return (
      <>
        <Modal
          opened={opened}
          onClose={close}
          title="Full Screen Modal"
          fullScreen
        >
          <Text size="sm" mb="md">
            This modal takes up the entire screen, useful for complex forms or
            detailed content.
          </Text>
          <Stack gap="md">
            <TextInput label="Field 1" placeholder="Enter value" />
            <TextInput label="Field 2" placeholder="Enter value" />
            <TextInput label="Field 3" placeholder="Enter value" />
          </Stack>
          <Group mt="xl" justify="flex-end">
            <Button variant="subtle" onClick={close}>
              Cancel
            </Button>
            <Button onClick={close}>Save</Button>
          </Group>
        </Modal>

        <Button onClick={open}>Open Full Screen</Button>
      </>
    );
  },
};
