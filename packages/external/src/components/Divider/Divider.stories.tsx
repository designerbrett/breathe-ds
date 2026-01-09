import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from './Divider';

const meta = {
  title: 'External/Layout/Divider',
  component: Divider,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
      description: 'Orientation of the divider',
    },
    label: {
      control: 'text',
      description: 'Optional text label to display',
    },
    labelPosition: {
      control: 'radio',
      options: ['left', 'center', 'right'],
      description: 'Position of the label',
    },
    spacing: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      description: 'Spacing around the divider',
    },
  },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithLabel: Story = {
  args: {
    label: 'Section Divider',
  },
};

export const LabelLeft: Story = {
  args: {
    label: 'Left Aligned',
    labelPosition: 'left',
  },
};

export const LabelRight: Story = {
  args: {
    label: 'Right Aligned',
    labelPosition: 'right',
  },
};

export const SmallSpacing: Story = {
  args: {
    spacing: 'small',
  },
};

export const LargeSpacing: Story = {
  args: {
    spacing: 'large',
  },
};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
  },
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', height: '100px' }}>
      <span>Left Content</span>
      <Divider {...args} />
      <span>Right Content</span>
    </div>
  ),
};

export const InContent: Story = {
  render: () => (
    <div>
      <h2>Section One</h2>
      <p>
        This is some content in the first section. The divider helps separate
        different content areas for better readability.
      </p>
      <Divider />
      <h2>Section Two</h2>
      <p>
        This is content in the second section. Notice how the divider creates
        a clear visual separation between sections.
      </p>
      <Divider label="Optional Label" />
      <h2>Section Three</h2>
      <p>
        You can also add labels to dividers to provide context about the
        separation.
      </p>
    </div>
  ),
};

export const VerticalInLayout: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0', alignItems: 'flex-start' }}>
      <div style={{ flex: 1, padding: '0 16px' }}>
        <h3>Column 1</h3>
        <p>Content for the first column</p>
      </div>
      <Divider orientation="vertical" spacing="small" />
      <div style={{ flex: 1, padding: '0 16px' }}>
        <h3>Column 2</h3>
        <p>Content for the second column</p>
      </div>
      <Divider orientation="vertical" spacing="small" />
      <div style={{ flex: 1, padding: '0 16px' }}>
        <h3>Column 3</h3>
        <p>Content for the third column</p>
      </div>
    </div>
  ),
};
