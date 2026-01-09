import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import React from 'react';

const meta = {
  title: 'External/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Text input optimized for mobile (65+ audience). Large touch targets (56px), high contrast, clear validation states.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['default', 'large'],
      description: 'Input size',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    required: {
      control: 'boolean',
      description: 'Required field',
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'you@example.com',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'you@example.com',
    helperText: "We'll never share your email with anyone else.",
  },
};

export const Required: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'you@example.com',
    required: true,
    helperText: 'This field is required',
  },
};

export const WithError: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'you@example.com',
    value: 'invalid-email',
    error: 'Please enter a valid email address',
  },
};

export const WithSuccess: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'you@example.com',
    value: 'user@example.com',
    success: 'Looks good!',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'you@example.com',
    disabled: true,
    value: 'disabled@example.com',
  },
};

export const LargeSize: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'you@example.com',
    size: 'large',
  },
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '350px' }}>
      <Input label="Default" placeholder="Enter text..." />

      <Input
        label="With Helper Text"
        placeholder="Enter text..."
        helperText="This is helper text"
      />

      <Input
        label="Required Field"
        placeholder="Enter text..."
        required
      />

      <Input
        label="Error State"
        placeholder="Enter text..."
        value="invalid"
        error="This field has an error"
      />

      <Input
        label="Success State"
        placeholder="Enter text..."
        value="valid@example.com"
        success="Looks good!"
      />

      <Input
        label="Disabled"
        placeholder="Enter text..."
        disabled
        value="Disabled value"
      />
    </div>
  ),
};

export const FormExample: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '350px' }}>
      <Input
        label="Full Name"
        placeholder="John Doe"
        required
      />

      <Input
        label="Email Address"
        type="email"
        placeholder="you@example.com"
        required
        helperText="We'll send confirmation to this email"
      />

      <Input
        label="Phone Number"
        type="tel"
        placeholder="(555) 555-5555"
      />

      <Input
        label="Date of Birth"
        type="date"
      />
    </div>
  ),
};

// Validation Examples
export const EmailValidation: Story = {
  render: function EmailValidationDemo() {
    const [email, setEmail] = React.useState('');
    const [touched, setTouched] = React.useState(false);

    const validateEmail = (value: string) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(value);
    };

    const isValid = validateEmail(email);
    const showError = touched && email.length > 0 && !isValid;
    const showSuccess = touched && email.length > 0 && isValid;

    return (
      <div style={{ width: '350px' }}>
        <Input
          label="Email Address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => setTouched(true)}
          placeholder="you@example.com"
          required
          error={showError ? 'Please enter a valid email address' : undefined}
          success={showSuccess ? 'Email is valid' : undefined}
          helperText={!showError && !showSuccess ? 'Enter your email address' : undefined}
        />
      </div>
    );
  },
};

export const PasswordValidation: Story = {
  render: function PasswordValidationDemo() {
    const [password, setPassword] = React.useState('');
    const [touched, setTouched] = React.useState(false);

    const validatePassword = (value: string) => {
      return value.length >= 8;
    };

    const isValid = validatePassword(password);
    const showError = touched && password.length > 0 && !isValid;
    const showSuccess = touched && password.length > 0 && isValid;

    return (
      <div style={{ width: '350px' }}>
        <Input
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onBlur={() => setTouched(true)}
          placeholder="Enter password"
          required
          error={showError ? 'Password must be at least 8 characters' : undefined}
          success={showSuccess ? 'Password meets requirements' : undefined}
          helperText={!showError && !showSuccess ? 'Minimum 8 characters' : undefined}
        />
      </div>
    );
  },
};

export const PhoneValidation: Story = {
  render: function PhoneValidationDemo() {
    const [phone, setPhone] = React.useState('');
    const [touched, setTouched] = React.useState(false);

    const validatePhone = (value: string) => {
      const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
      return phoneRegex.test(value);
    };

    const isValid = validatePhone(phone);
    const showError = touched && phone.length > 0 && !isValid;
    const showSuccess = touched && phone.length > 0 && isValid;

    return (
      <div style={{ width: '350px' }}>
        <Input
          label="Phone Number"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          onBlur={() => setTouched(true)}
          placeholder="(555) 555-5555"
          required
          error={showError ? 'Please enter a valid phone number' : undefined}
          success={showSuccess ? 'Phone number is valid' : undefined}
          helperText={!showError && !showSuccess ? 'Format: (555) 555-5555' : undefined}
        />
      </div>
    );
  },
};

export const RequiredFieldValidation: Story = {
  render: function RequiredFieldDemo() {
    const [value, setValue] = React.useState('');
    const [touched, setTouched] = React.useState(false);

    const showError = touched && value.trim().length === 0;
    const showSuccess = touched && value.trim().length > 0;

    return (
      <div style={{ width: '350px' }}>
        <Input
          label="Full Name"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onBlur={() => setTouched(true)}
          placeholder="John Doe"
          required
          error={showError ? 'This field is required' : undefined}
          success={showSuccess ? 'Looks good!' : undefined}
        />
      </div>
    );
  },
};

export const MinLengthValidation: Story = {
  render: function MinLengthDemo() {
    const [value, setValue] = React.useState('');
    const [touched, setTouched] = React.useState(false);
    const minLength = 3;

    const showError = touched && value.length > 0 && value.length < minLength;
    const showSuccess = value.length >= minLength;

    return (
      <div style={{ width: '350px' }}>
        <Input
          label="Username"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onBlur={() => setTouched(true)}
          placeholder="Enter username"
          required
          error={showError ? `Username must be at least ${minLength} characters` : undefined}
          success={showSuccess ? 'Username is available' : undefined}
          helperText={!showError && !showSuccess ? `Minimum ${minLength} characters` : undefined}
        />
      </div>
    );
  },
};

export const NumberValidation: Story = {
  render: function NumberValidationDemo() {
    const [value, setValue] = React.useState('');
    const [touched, setTouched] = React.useState(false);

    const isValidNumber = /^[0-9]+$/.test(value);
    const showError = touched && value.length > 0 && !isValidNumber;
    const showSuccess = touched && value.length > 0 && isValidNumber;

    return (
      <div style={{ width: '350px' }}>
        <Input
          label="Patient ID"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onBlur={() => setTouched(true)}
          placeholder="123456"
          required
          error={showError ? 'Patient ID must contain only numbers' : undefined}
          success={showSuccess ? 'Valid patient ID' : undefined}
          helperText={!showError && !showSuccess ? 'Enter numeric patient ID' : undefined}
        />
      </div>
    );
  },
};

export const RealTimeValidation: Story = {
  render: function RealTimeDemo() {
    const [email, setEmail] = React.useState('');

    const validateEmail = (value: string) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(value);
    };

    const isValid = validateEmail(email);
    const showError = email.length > 0 && !isValid;
    const showSuccess = email.length > 0 && isValid;

    return (
      <div style={{ width: '350px' }}>
        <Input
          label="Email (Real-time Validation)"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          error={showError ? 'Invalid email format' : undefined}
          success={showSuccess ? 'Valid email' : undefined}
          helperText={!showError && !showSuccess ? 'Validates as you type' : undefined}
        />
      </div>
    );
  },
};

export const CustomValidation: Story = {
  render: function CustomValidationDemo() {
    const [username, setUsername] = React.useState('');
    const [touched, setTouched] = React.useState(false);

    const validateUsername = (value: string) => {
      if (value.length < 3) return { valid: false, message: 'Username must be at least 3 characters' };
      if (value.length > 20) return { valid: false, message: 'Username must be less than 20 characters' };
      if (!/^[a-zA-Z0-9_]+$/.test(value)) return { valid: false, message: 'Username can only contain letters, numbers, and underscores' };
      if (['admin', 'root', 'system'].includes(value.toLowerCase())) return { valid: false, message: 'This username is reserved' };
      return { valid: true, message: 'Username is available' };
    };

    const validation = validateUsername(username);
    const showError = touched && username.length > 0 && !validation.valid;
    const showSuccess = touched && username.length > 0 && validation.valid;

    return (
      <div style={{ width: '350px' }}>
        <Input
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onBlur={() => setTouched(true)}
          placeholder="Enter username"
          required
          error={showError ? validation.message : undefined}
          success={showSuccess ? validation.message : undefined}
          helperText={!showError && !showSuccess ? 'Letters, numbers, and underscores only' : undefined}
        />
      </div>
    );
  },
};

export const FormWithValidation: Story = {
  render: function FormValidationDemo() {
    const [formData, setFormData] = React.useState({
      name: '',
      email: '',
      phone: '',
    });
    const [touched, setTouched] = React.useState({
      name: false,
      email: false,
      phone: false,
    });

    const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validatePhone = (phone: string) => /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(phone);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '350px' }}>
        <Input
          label="Full Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          onBlur={() => setTouched({ ...touched, name: true })}
          placeholder="John Doe"
          required
          error={touched.name && !formData.name ? 'Name is required' : undefined}
          success={touched.name && formData.name ? 'Looks good!' : undefined}
        />

        <Input
          label="Email Address"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          onBlur={() => setTouched({ ...touched, email: true })}
          placeholder="you@example.com"
          required
          error={
            touched.email && !formData.email
              ? 'Email is required'
              : touched.email && formData.email && !validateEmail(formData.email)
              ? 'Please enter a valid email'
              : undefined
          }
          success={touched.email && formData.email && validateEmail(formData.email) ? 'Valid email' : undefined}
        />

        <Input
          label="Phone Number"
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          onBlur={() => setTouched({ ...touched, phone: true })}
          placeholder="(555) 555-5555"
          required
          error={
            touched.phone && !formData.phone
              ? 'Phone is required'
              : touched.phone && formData.phone && !validatePhone(formData.phone)
              ? 'Please enter a valid phone number'
              : undefined
          }
          success={touched.phone && formData.phone && validatePhone(formData.phone) ? 'Valid phone number' : undefined}
        />
      </div>
    );
  },
};

// Input type variations
export const DateInput: Story = {
  args: {
    label: 'Date of Birth',
    type: 'date',
    required: true,
  },
};

export const TimeInput: Story = {
  args: {
    label: 'Appointment Time',
    type: 'time',
    required: true,
  },
};

export const PasswordInput: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
    required: true,
  },
};

export const NumberInput: Story = {
  args: {
    label: 'Age',
    type: 'number',
    placeholder: '0',
    min: 0,
    max: 120,
  },
};

export const ReadOnly: Story = {
  args: {
    label: 'Patient ID',
    value: 'PAT-123456',
    readOnly: true,
    helperText: 'This field cannot be edited',
  },
};
