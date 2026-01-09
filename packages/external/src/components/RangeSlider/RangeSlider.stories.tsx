import type { Meta, StoryObj } from '@storybook/react';
import { RangeSlider } from './RangeSlider';
import { useState } from 'react';

const meta = {
  title: 'External/Form/RangeSlider',
  component: RangeSlider,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    min: {
      control: 'number',
      description: 'Minimum value',
    },
    max: {
      control: 'number',
      description: 'Maximum value',
    },
    step: {
      control: 'number',
      description: 'Step increment',
    },
    showLabel: {
      control: 'boolean',
      description: 'Whether to show value label',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    labelPrefix: {
      control: 'text',
      description: 'Label prefix',
    },
    labelSuffix: {
      control: 'text',
      description: 'Label suffix',
    },
  },
} satisfies Meta<typeof RangeSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: 50,
    onChange: (value) => console.log('Value:', value),
  },
};

export const WithLabel: Story = {
  args: {
    defaultValue: 75,
    showLabel: true,
  },
};

export const PriceRange: Story = {
  args: {
    min: 0,
    max: 1000,
    step: 50,
    defaultValue: 500,
    labelPrefix: '$',
    showLabel: true,
  },
};

export const Distance: Story = {
  args: {
    min: 0,
    max: 100,
    step: 5,
    defaultValue: 25,
    labelSuffix: ' km',
    showLabel: true,
  },
};

export const Percentage: Story = {
  args: {
    min: 0,
    max: 100,
    step: 1,
    defaultValue: 65,
    labelSuffix: '%',
    showLabel: true,
  },
};

export const SmallRange: Story = {
  args: {
    min: 1,
    max: 10,
    step: 1,
    defaultValue: 5,
    showLabel: true,
  },
};

export const LargeSteps: Story = {
  args: {
    min: 0,
    max: 1000,
    step: 100,
    defaultValue: 400,
    showLabel: true,
  },
};

export const Disabled: Story = {
  args: {
    defaultValue: 50,
    disabled: true,
  },
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState(30);

    return (
      <div>
        <h3>Volume: {value}%</h3>
        <RangeSlider
          min={0}
          max={100}
          value={value}
          onChange={setValue}
          labelSuffix="%"
        />
        <div style={{ marginTop: '24px', display: 'flex', gap: '12px' }}>
          <button
            onClick={() => setValue(0)}
            style={{
              padding: '8px 16px',
              border: '1px solid #E8EDF2',
              borderRadius: '6px',
              cursor: 'pointer',
            }}
          >
            Mute
          </button>
          <button
            onClick={() => setValue(50)}
            style={{
              padding: '8px 16px',
              border: '1px solid #E8EDF2',
              borderRadius: '6px',
              cursor: 'pointer',
            }}
          >
            50%
          </button>
          <button
            onClick={() => setValue(100)}
            style={{
              padding: '8px 16px',
              border: '1px solid #E8EDF2',
              borderRadius: '6px',
              cursor: 'pointer',
            }}
          >
            Max
          </button>
        </div>
      </div>
    );
  },
};

export const PriceFilter: Story = {
  render: () => {
    const [minPrice, setMinPrice] = useState(200);
    const [maxPrice, setMaxPrice] = useState(800);

    return (
      <div style={{ maxWidth: '600px' }}>
        <h3>Filter by Price</h3>
        <div style={{ marginTop: '24px' }}>
          <label style={{ display: 'block', marginBottom: '16px', fontWeight: 600 }}>
            Minimum Price: ${minPrice}
          </label>
          <RangeSlider
            min={0}
            max={1000}
            step={50}
            value={minPrice}
            onChange={setMinPrice}
            labelPrefix="$"
          />
        </div>
        <div style={{ marginTop: '32px' }}>
          <label style={{ display: 'block', marginBottom: '16px', fontWeight: 600 }}>
            Maximum Price: ${maxPrice}
          </label>
          <RangeSlider
            min={0}
            max={1000}
            step={50}
            value={maxPrice}
            onChange={setMaxPrice}
            labelPrefix="$"
          />
        </div>
        <div
          style={{
            marginTop: '32px',
            padding: '16px',
            backgroundColor: '#E8F2FA',
            borderRadius: '8px',
          }}
        >
          <strong>Selected Range:</strong> ${minPrice} - ${maxPrice}
        </div>
      </div>
    );
  },
};

export const SettingsForm: Story = {
  render: () => {
    const [brightness, setBrightness] = useState(75);
    const [contrast, setContrast] = useState(50);
    const [saturation, setSaturation] = useState(60);

    return (
      <div style={{ maxWidth: '500px' }}>
        <h2>Display Settings</h2>
        <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>
              Brightness
            </label>
            <RangeSlider
              min={0}
              max={100}
              value={brightness}
              onChange={setBrightness}
              labelSuffix="%"
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>
              Contrast
            </label>
            <RangeSlider
              min={0}
              max={100}
              value={contrast}
              onChange={setContrast}
              labelSuffix="%"
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>
              Saturation
            </label>
            <RangeSlider
              min={0}
              max={100}
              value={saturation}
              onChange={setSaturation}
              labelSuffix="%"
            />
          </div>
          <button
            onClick={() => {
              setBrightness(75);
              setContrast(50);
              setSaturation(60);
            }}
            style={{
              padding: '12px',
              backgroundColor: '#FFFFFF',
              border: '1px solid #E8EDF2',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '14px',
            }}
          >
            Reset to Defaults
          </button>
        </div>
      </div>
    );
  },
};

export const AgeRange: Story = {
  render: () => {
    const [age, setAge] = useState(25);

    return (
      <div style={{ maxWidth: '500px' }}>
        <h3>Age Verification</h3>
        <p style={{ color: '#7B8A99' }}>Please confirm your age</p>
        <div style={{ marginTop: '24px' }}>
          <RangeSlider
            min={13}
            max={100}
            step={1}
            value={age}
            onChange={setAge}
            labelSuffix=" years"
            aria-label="Select your age"
          />
        </div>
        <div style={{ marginTop: '24px' }}>
          <p style={{ fontSize: '18px', fontWeight: 600 }}>
            Selected Age: {age} years
          </p>
          {age < 18 && (
            <p style={{ color: '#E67E22', marginTop: '8px' }}>
              You must be 18 or older to continue
            </p>
          )}
        </div>
      </div>
    );
  },
};

export const TemperatureControl: Story = {
  render: () => {
    const [temp, setTemp] = useState(22);

    return (
      <div style={{ maxWidth: '400px' }}>
        <h3>Room Temperature</h3>
        <div style={{ marginTop: '24px' }}>
          <RangeSlider
            min={16}
            max={30}
            step={0.5}
            value={temp}
            onChange={setTemp}
            labelSuffix="°C"
          />
        </div>
        <div
          style={{
            marginTop: '24px',
            padding: '20px',
            backgroundColor: temp < 20 ? '#E3F2FD' : temp > 25 ? '#FFEBEE' : '#E8F8F5',
            borderRadius: '12px',
            textAlign: 'center',
          }}
        >
          <div style={{ fontSize: '48px', fontWeight: 600 }}>
            {temp}°C
          </div>
          <div style={{ marginTop: '8px', color: '#7B8A99' }}>
            {temp < 20 && 'Cool'}
            {temp >= 20 && temp <= 25 && 'Comfortable'}
            {temp > 25 && 'Warm'}
          </div>
        </div>
      </div>
    );
  },
};
