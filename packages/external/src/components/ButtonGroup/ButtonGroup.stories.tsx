import type { Meta, StoryObj } from '@storybook/react';
import { ButtonGroup } from './ButtonGroup';
import { Button } from '../Button/Button';

const meta = {
  title: 'External/Actions/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
      description: 'Layout orientation',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether buttons should take full width',
    },
    spacing: {
      control: 'radio',
      options: ['none', 'small', 'medium'],
      description: 'Spacing between buttons',
    },
  },
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button variant="primary">Save</Button>
      <Button variant="secondary">Cancel</Button>
    </ButtonGroup>
  ),
};

export const ThreeButtons: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button variant="primary">Confirm</Button>
      <Button variant="secondary">Preview</Button>
      <Button variant="outline">Cancel</Button>
    </ButtonGroup>
  ),
};

export const ConnectedButtons: Story = {
  args: {
    spacing: 'none',
  },
  render: (args) => (
    <ButtonGroup {...args}>
      <Button variant="outline">Left</Button>
      <Button variant="outline">Center</Button>
      <Button variant="outline">Right</Button>
    </ButtonGroup>
  ),
};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
  },
  render: (args) => (
    <ButtonGroup {...args}>
      <Button variant="primary">Save Changes</Button>
      <Button variant="secondary">Save Draft</Button>
      <Button variant="outline">Discard</Button>
    </ButtonGroup>
  ),
};

export const VerticalConnected: Story = {
  args: {
    orientation: 'vertical',
    spacing: 'none',
  },
  render: (args) => (
    <ButtonGroup {...args}>
      <Button variant="outline">Option 1</Button>
      <Button variant="outline">Option 2</Button>
      <Button variant="outline">Option 3</Button>
    </ButtonGroup>
  ),
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
  },
  render: (args) => (
    <ButtonGroup {...args}>
      <Button variant="secondary">Back</Button>
      <Button variant="primary">Next</Button>
    </ButtonGroup>
  ),
};

export const FullWidthVertical: Story = {
  args: {
    orientation: 'vertical',
    fullWidth: true,
  },
  render: (args) => (
    <ButtonGroup {...args}>
      <Button variant="primary">Create Account</Button>
      <Button variant="secondary">Sign In</Button>
      <Button variant="ghost">Continue as Guest</Button>
    </ButtonGroup>
  ),
};

export const MediumSpacing: Story = {
  args: {
    spacing: 'medium',
  },
  render: (args) => (
    <ButtonGroup {...args}>
      <Button variant="primary">Submit</Button>
      <Button variant="secondary">Save Draft</Button>
      <Button variant="outline">Cancel</Button>
    </ButtonGroup>
  ),
};

export const MixedSizes: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button variant="primary" size="large">
        Continue
      </Button>
      <Button variant="outline" size="large">
        Cancel
      </Button>
    </ButtonGroup>
  ),
};

export const FormActions: Story = {
  render: () => (
    <div style={{ maxWidth: '600px' }}>
      <h3>Edit Profile</h3>
      <p>Make changes to your profile information below.</p>
      <div style={{ marginTop: '24px' }}>
        <ButtonGroup fullWidth>
          <Button variant="secondary">Cancel</Button>
          <Button variant="primary">Save Changes</Button>
        </ButtonGroup>
      </div>
    </div>
  ),
};
