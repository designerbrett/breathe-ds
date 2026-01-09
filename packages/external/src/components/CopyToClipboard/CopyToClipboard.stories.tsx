import type { Meta, StoryObj } from '@storybook/react';
import { CopyToClipboard } from './CopyToClipboard';

const meta = {
  title: 'External/UI Elements/CopyToClipboard',
  component: CopyToClipboard,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text',
      description: 'Text to copy to clipboard',
    },
    successMessage: {
      control: 'text',
      description: 'Message to show on successful copy',
    },
    successDuration: {
      control: 'number',
      description: 'Duration to show success message (ms)',
    },
    showText: {
      control: 'boolean',
      description: 'Whether to show the text being copied',
    },
  },
} satisfies Meta<typeof CopyToClipboard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'npm install @breathe-ds/external',
  },
};

export const CustomMessage: Story = {
  args: {
    text: 'https://breathe-design.com/docs',
    successMessage: 'Link copied!',
  },
};

export const ShortDuration: Story = {
  args: {
    text: 'Quick copy example',
    successDuration: 1000,
  },
};

export const WithoutText: Story = {
  args: {
    text: 'Hidden text to copy',
    showText: false,
  },
};

export const CustomContent: Story = {
  args: {
    text: 'npm install @breathe-ds/external',
    children: (
      <span style={{ fontWeight: 600, color: '#2B79B9' }}>
        Click to copy installation command
      </span>
    ),
  },
};

export const APIKey: Story = {
  render: () => (
    <div>
      <h3>API Credentials</h3>
      <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>
            API Key
          </label>
          <CopyToClipboard
            text="sk_live_51JX8YZAbCd123456789eFgHiJkLmNoPqRsTuVwXyZ"
            successMessage="API Key copied!"
          />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>
            Secret Key
          </label>
          <CopyToClipboard
            text="sk_test_51JX8YZAbCd987654321aBcDeFgHiJkLmNoPqRsTuVw"
            successMessage="Secret Key copied!"
          />
        </div>
      </div>
    </div>
  ),
};

export const CodeSnippets: Story = {
  render: () => (
    <div style={{ maxWidth: '600px' }}>
      <h3>Code Examples</h3>
      <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>
          <h4 style={{ marginBottom: '8px' }}>Install Package</h4>
          <CopyToClipboard text="npm install @breathe-ds/external" />
        </div>
        <div>
          <h4 style={{ marginBottom: '8px' }}>Import Component</h4>
          <CopyToClipboard text="import { Button } from '@breathe-ds/external';" />
        </div>
        <div>
          <h4 style={{ marginBottom: '8px' }}>Basic Usage</h4>
          <CopyToClipboard text='<Button variant="primary">Click me</Button>' />
        </div>
      </div>
    </div>
  ),
};

export const ShareLinks: Story = {
  render: () => (
    <div style={{ maxWidth: '500px' }}>
      <h3>Share this page</h3>
      <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <CopyToClipboard
          text="https://breathe-design.com/components/button"
          successMessage="Link copied to clipboard!"
        />
        <div style={{ marginTop: '16px' }}>
          <p style={{ fontSize: '14px', color: '#7B8A99' }}>
            Copy the link above to share this page with others
          </p>
        </div>
      </div>
    </div>
  ),
};

export const InlineUsage: Story = {
  render: () => (
    <div style={{ maxWidth: '600px' }}>
      <p style={{ lineHeight: 1.8 }}>
        To get started, run{' '}
        <CopyToClipboard text="npm install @breathe-ds/external" showText={false} />
        {' '}in your terminal to install the package.
      </p>
      <p style={{ lineHeight: 1.8, marginTop: '16px' }}>
        Your webhook URL is:{' '}
        <CopyToClipboard
          text="https://api.example.com/webhooks/abc123"
          successMessage="Webhook URL copied!"
        />
      </p>
    </div>
  ),
};

export const WithCallbacks: Story = {
  args: {
    text: 'Text with callbacks',
    onCopy: () => {
      console.log('Text copied successfully!');
      alert('Copy successful! Check console for details.');
    },
    onError: (error) => {
      console.error('Copy failed:', error);
      alert('Copy failed! Check console for details.');
    },
  },
};

export const LongText: Story = {
  args: {
    text: 'This is a very long text that will be truncated in the display but the entire text will be copied when the user clicks the copy button. It demonstrates how the component handles overflow.',
  },
};

export const MultipleInstances: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '600px' }}>
      <CopyToClipboard text="First value to copy" />
      <CopyToClipboard text="Second value to copy" />
      <CopyToClipboard text="Third value to copy" />
      <p style={{ marginTop: '16px', fontSize: '14px', color: '#7B8A99' }}>
        Each instance maintains its own copy state independently
      </p>
    </div>
  ),
};

export const CommandLine: Story = {
  render: () => (
    <div style={{ maxWidth: '700px' }}>
      <h3>Terminal Commands</h3>
      <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div>
          <p style={{ marginBottom: '8px', fontSize: '14px', color: '#5A6C7D' }}>
            Clone the repository:
          </p>
          <CopyToClipboard text="git clone https://github.com/example/breathe-ds.git" />
        </div>
        <div>
          <p style={{ marginBottom: '8px', fontSize: '14px', color: '#5A6C7D' }}>
            Navigate to directory:
          </p>
          <CopyToClipboard text="cd breathe-ds" />
        </div>
        <div>
          <p style={{ marginBottom: '8px', fontSize: '14px', color: '#5A6C7D' }}>
            Install dependencies:
          </p>
          <CopyToClipboard text="npm install" />
        </div>
        <div>
          <p style={{ marginBottom: '8px', fontSize: '14px', color: '#5A6C7D' }}>
            Start development server:
          </p>
          <CopyToClipboard text="npm run dev" />
        </div>
      </div>
    </div>
  ),
};
