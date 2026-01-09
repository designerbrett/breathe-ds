import type { Meta, StoryObj } from '@storybook/react';
import { Slider, Stack, Text } from '@mantine/core';
import { MantineProvider } from '@mantine/core';
import { breatheMantineTheme } from '../theme';
import '@mantine/core/styles.css';

const meta = {
  title: 'Internal/Mantine/Slider',
  component: Slider,
  decorators: [
    (Story) => (
      <MantineProvider theme={breatheMantineTheme}>
        <div style={{ maxWidth: '400px' }}>
          <Story />
        </div>
      </MantineProvider>
    ),
  ],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Mantine Slider with Breathe theme. Numeric range slider for desktop applications.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: 50,
  },
};

export const WithLabel: Story = {
  render: () => (
    <div>
      <Text size="sm" fw={500} mb="xs">Volume</Text>
      <Slider defaultValue={70} />
    </div>
  ),
};

export const WithMarks: Story = {
  render: () => (
    <Slider
      defaultValue={50}
      marks={[
        { value: 0, label: '0%' },
        { value: 25, label: '25%' },
        { value: 50, label: '50%' },
        { value: 75, label: '75%' },
        { value: 100, label: '100%' },
      ]}
    />
  ),
};

export const AllSizes: Story = {
  render: () => (
    <Stack gap="lg">
      <div>
        <Text size="xs" mb="xs">Extra Small</Text>
        <Slider size="xs" defaultValue={50} />
      </div>
      <div>
        <Text size="xs" mb="xs">Small</Text>
        <Slider size="sm" defaultValue={50} />
      </div>
      <div>
        <Text size="xs" mb="xs">Medium</Text>
        <Slider size="md" defaultValue={50} />
      </div>
      <div>
        <Text size="xs" mb="xs">Large</Text>
        <Slider size="lg" defaultValue={50} />
      </div>
    </Stack>
  ),
};

export const AllColors: Story = {
  render: () => (
    <Stack gap="md">
      <Slider color="blue" defaultValue={50} />
      <Slider color="green" defaultValue={60} />
      <Slider color="red" defaultValue={70} />
      <Slider color="yellow" defaultValue={40} />
    </Stack>
  ),
};

export const WithMinMax: Story = {
  render: () => (
    <div>
      <Text size="sm" fw={500} mb="xs">Temperature (°F)</Text>
      <Slider
        min={60}
        max={80}
        defaultValue={72}
        marks={[
          { value: 60, label: '60°F' },
          { value: 70, label: '70°F' },
          { value: 80, label: '80°F' },
        ]}
      />
    </div>
  ),
};

export const WithStep: Story = {
  render: () => (
    <div>
      <Text size="sm" fw={500} mb="xs">Quantity</Text>
      <Slider
        min={0}
        max={10}
        step={1}
        defaultValue={5}
        marks={Array.from({ length: 11 }).map((_, i) => ({ value: i }))}
      />
    </div>
  ),
};

export const RangeSlider: Story = {
  render: () => (
    <div>
      <Text size="sm" fw={500} mb="xs">Age Range</Text>
      <Slider.Range
        min={0}
        max={100}
        defaultValue={[20, 80]}
        marks={[
          { value: 0, label: '0' },
          { value: 25, label: '25' },
          { value: 50, label: '50' },
          { value: 75, label: '75' },
          { value: 100, label: '100' },
        ]}
      />
    </div>
  ),
};

export const HealthcareExample: Story = {
  render: () => (
    <Stack gap="xl">
      <div>
        <Text size="sm" fw={600} mb="xs">Pain Level (1-10)</Text>
        <Slider
          min={1}
          max={10}
          defaultValue={5}
          marks={Array.from({ length: 10 }).map((_, i) => ({
            value: i + 1,
            label: i + 1 === 1 || i + 1 === 5 || i + 1 === 10 ? String(i + 1) : '',
          }))}
          color="red"
        />
      </div>

      <div>
        <Text size="sm" fw={600} mb="xs">Blood Pressure Target Range (mmHg)</Text>
        <Slider.Range
          min={80}
          max={140}
          defaultValue={[90, 120]}
          marks={[
            { value: 80, label: '80' },
            { value: 100, label: '100' },
            { value: 120, label: '120' },
            { value: 140, label: '140' },
          ]}
          color="blue"
        />
      </div>

      <div>
        <Text size="sm" fw={600} mb="xs">Medication Dosage (mg)</Text>
        <Slider
          min={0}
          max={100}
          step={25}
          defaultValue={50}
          marks={[
            { value: 0, label: '0mg' },
            { value: 25, label: '25mg' },
            { value: 50, label: '50mg' },
            { value: 75, label: '75mg' },
            { value: 100, label: '100mg' },
          ]}
          color="green"
        />
      </div>
    </Stack>
  ),
};

export const Disabled: Story = {
  args: {
    defaultValue: 50,
    disabled: true,
  },
};
