import type { Meta, StoryObj } from '@storybook/react';
import { Accordion, AccordionItem } from './Accordion';

const meta = {
  title: 'External/Layout/Accordion',
  component: Accordion,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    allowMultiple: {
      control: 'boolean',
      description: 'Allow multiple items to be open at once',
    },
    defaultExpanded: {
      control: 'object',
      description: 'Array of default expanded item IDs',
    },
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem id="item-1" title="What is the Breathe Design System?">
        <p>
          The Breathe Design System is a comprehensive UI component library
          optimized for healthcare applications, with special consideration for
          mobile users and accessibility.
        </p>
      </AccordionItem>
      <AccordionItem id="item-2" title="How do I get started?">
        <p>
          Install the package using npm or yarn, then import the components you
          need. Check out our documentation for detailed setup instructions and
          examples.
        </p>
      </AccordionItem>
      <AccordionItem id="item-3" title="Is it accessible?">
        <p>
          Yes! All components are built with accessibility in mind, following
          WCAG AAA guidelines for external-facing components and WCAG AA for
          internal tools.
        </p>
      </AccordionItem>
    </Accordion>
  ),
};

export const DefaultExpanded: Story = {
  args: {
    defaultExpanded: ['item-1'],
  },
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem id="item-1" title="Shipping Information">
        <p>
          We offer free standard shipping on all orders over $50. Express
          shipping is available for an additional fee.
        </p>
        <ul>
          <li>Standard: 5-7 business days</li>
          <li>Express: 2-3 business days</li>
          <li>Overnight: Next business day</li>
        </ul>
      </AccordionItem>
      <AccordionItem id="item-2" title="Returns & Exchanges">
        <p>
          Items can be returned within 30 days of purchase. Items must be
          unused and in original packaging.
        </p>
      </AccordionItem>
      <AccordionItem id="item-3" title="Payment Methods">
        <p>We accept all major credit cards, PayPal, and Apple Pay.</p>
      </AccordionItem>
    </Accordion>
  ),
};

export const AllowMultiple: Story = {
  args: {
    allowMultiple: true,
    defaultExpanded: ['item-1', 'item-2'],
  },
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem id="item-1" title="Account Settings">
        <p>
          Manage your account preferences, notification settings, and privacy
          options from your account dashboard.
        </p>
      </AccordionItem>
      <AccordionItem id="item-2" title="Security">
        <p>
          Enable two-factor authentication and review your recent login activity
          to keep your account secure.
        </p>
      </AccordionItem>
      <AccordionItem id="item-3" title="Billing">
        <p>
          View your billing history, update payment methods, and manage
          subscriptions.
        </p>
      </AccordionItem>
      <AccordionItem id="item-4" title="Integrations">
        <p>
          Connect third-party services and apps to enhance your workflow.
        </p>
      </AccordionItem>
    </Accordion>
  ),
};

export const WithDisabledItem: Story = {
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem id="item-1" title="Available Feature">
        <p>This feature is available and ready to use.</p>
      </AccordionItem>
      <AccordionItem id="item-2" title="Coming Soon (Disabled)" disabled>
        <p>This feature is currently under development.</p>
      </AccordionItem>
      <AccordionItem id="item-3" title="Another Available Feature">
        <p>This feature is also available.</p>
      </AccordionItem>
    </Accordion>
  ),
};

export const FAQ: Story = {
  render: () => (
    <div style={{ maxWidth: '800px' }}>
      <h2>Frequently Asked Questions</h2>
      <Accordion>
        <AccordionItem id="faq-1" title="How do I reset my password?">
          <p>
            Click on "Forgot Password" on the login page. Enter your email
            address and we'll send you a link to reset your password.
          </p>
        </AccordionItem>
        <AccordionItem id="faq-2" title="Can I change my subscription plan?">
          <p>
            Yes! You can upgrade or downgrade your plan at any time from your
            account settings. Changes will be reflected in your next billing
            cycle.
          </p>
        </AccordionItem>
        <AccordionItem id="faq-3" title="What happens to my data if I cancel?">
          <p>
            Your data will be retained for 30 days after cancellation. You can
            reactivate your account during this period without losing any data.
            After 30 days, your data will be permanently deleted.
          </p>
        </AccordionItem>
        <AccordionItem id="faq-4" title="Do you offer customer support?">
          <p>
            Yes! We offer 24/7 customer support via email and live chat. Premium
            plan users also get access to priority phone support.
          </p>
        </AccordionItem>
        <AccordionItem id="faq-5" title="Is my data secure?">
          <p>
            Absolutely. We use industry-standard encryption (AES-256) to protect
            your data both in transit and at rest. We're also SOC 2 Type II
            certified and fully GDPR compliant.
          </p>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};

export const ProductSpecifications: Story = {
  args: {
    allowMultiple: true,
  },
  render: (args) => (
    <div style={{ maxWidth: '600px' }}>
      <h2>Product Details</h2>
      <Accordion {...args}>
        <AccordionItem id="spec-1" title="Technical Specifications">
          <ul>
            <li>Display: 15.6" Full HD (1920x1080)</li>
            <li>Processor: Intel Core i7-1165G7</li>
            <li>RAM: 16GB DDR4</li>
            <li>Storage: 512GB NVMe SSD</li>
            <li>Graphics: Intel Iris Xe</li>
            <li>Battery: Up to 10 hours</li>
          </ul>
        </AccordionItem>
        <AccordionItem id="spec-2" title="Dimensions & Weight">
          <ul>
            <li>Width: 14.1 inches</li>
            <li>Depth: 9.3 inches</li>
            <li>Height: 0.7 inches</li>
            <li>Weight: 3.5 lbs</li>
          </ul>
        </AccordionItem>
        <AccordionItem id="spec-3" title="What's in the Box">
          <ul>
            <li>Laptop computer</li>
            <li>65W USB-C power adapter</li>
            <li>USB-C charging cable (2m)</li>
            <li>Quick start guide</li>
            <li>Warranty information</li>
          </ul>
        </AccordionItem>
        <AccordionItem id="spec-4" title="Warranty Information">
          <p>
            This product comes with a 1-year limited hardware warranty. Extended
            warranty options are available at checkout. The warranty covers
            manufacturing defects but does not cover accidental damage.
          </p>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};

export const RichContent: Story = {
  render: () => (
    <Accordion>
      <AccordionItem id="rich-1" title="Getting Started Guide">
        <h4>Step 1: Installation</h4>
        <p>Install the package using your preferred package manager:</p>
        <pre style={{ background: '#F8FAFB', padding: '12px', borderRadius: '4px' }}>
          npm install @breathe-ds/external
        </pre>

        <h4>Step 2: Import Components</h4>
        <p>Import the components you need in your application:</p>
        <pre style={{ background: '#F8FAFB', padding: '12px', borderRadius: '4px' }}>
          {`import { Button, Card } from '@breathe-ds/external';`}
        </pre>
      </AccordionItem>
      <AccordionItem id="rich-2" title="Configuration Options">
        <p>
          The design system can be configured to match your brand guidelines.
          Contact our team for customization options.
        </p>
        <div style={{ marginTop: '16px', padding: '16px', background: '#E8F2FA', borderRadius: '8px' }}>
          <strong>Note:</strong> Custom theming is available for enterprise
          customers.
        </div>
      </AccordionItem>
    </Accordion>
  ),
};
