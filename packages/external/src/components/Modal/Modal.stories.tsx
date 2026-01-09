import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Modal, ModalFooter } from './Modal';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';

const meta = {
  title: 'External/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Modal dialog for focused user attention. Large close button, keyboard accessible (ESC to close), locks background scroll.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['default', 'large'],
      description: 'Modal size',
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

// Helper component for interactive stories
const ModalExample: React.FC<{ size?: 'default' | 'large'; title?: string; children: React.ReactNode }> = ({
  size,
  title,
  children,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal open={open} onClose={() => setOpen(false)} title={title} size={size}>
        {children}
      </Modal>
    </>
  );
};

export const Default: Story = {
  render: () => (
    <ModalExample title="Welcome">
      <p>
        This is a modal dialog. Click the X button, press ESC, or click outside
        to close it.
      </p>
    </ModalExample>
  ),
};

export const WithFooter: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal open={open} onClose={() => setOpen(false)} title="Confirm Action">
          <p>Are you sure you want to proceed with this action?</p>
          <ModalFooter>
            <Button variant="ghost" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                alert('Confirmed!');
                setOpen(false);
              }}
            >
              Confirm
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  },
};

export const LargeSize: Story = {
  render: () => (
    <ModalExample size="large" title="Large Modal">
      <p>
        This is a larger modal that can contain more content. It's useful for
        forms or detailed information.
      </p>
      <p>
        The modal will scroll if the content is too tall for the viewport,
        while keeping the title and footer visible.
      </p>
    </ModalExample>
  ),
};

export const WithForm: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Schedule Appointment</Button>
        <Modal open={open} onClose={() => setOpen(false)} title="Schedule Appointment">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Input label="Patient Name" placeholder="Enter name" required />
            <Input label="Date" type="date" required />
            <Input label="Time" type="time" required />
            <Input
              label="Notes"
              placeholder="Any special requirements..."
            />
          </div>
          <ModalFooter>
            <Button variant="ghost" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                alert('Appointment scheduled!');
                setOpen(false);
              }}
            >
              Schedule
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  },
};

export const LongContent: Story = {
  render: () => (
    <ModalExample title="Terms and Conditions">
      <div>
        <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '12px' }}>
          Privacy Policy
        </h3>
        <p style={{ marginBottom: '16px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '12px' }}>
          Data Collection
        </h3>
        <p style={{ marginBottom: '16px' }}>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>

        <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '12px' }}>
          User Rights
        </h3>
        <p style={{ marginBottom: '16px' }}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </p>

        <p style={{ marginBottom: '16px' }}>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </p>

        <p style={{ marginBottom: '16px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <ModalFooter>
        <Button variant="primary">I Agree</Button>
      </ModalFooter>
    </ModalExample>
  ),
};

export const Confirmation: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button variant="primary" onClick={() => setOpen(true)}>
          Delete Account
        </Button>
        <Modal open={open} onClose={() => setOpen(false)} title="Are you sure?">
          <p>
            This action cannot be undone. Your account and all associated data
            will be permanently deleted.
          </p>
          <ModalFooter>
            <Button variant="ghost" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                alert('Account deleted');
                setOpen(false);
              }}
              style={{ background: '#E74C3C' }}
            >
              Delete Account
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  },
};
