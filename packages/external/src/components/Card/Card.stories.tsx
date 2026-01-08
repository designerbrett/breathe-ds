import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from './Card';
import { Button } from '../Button/Button';

const meta = {
  title: 'External/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Card component for grouping related content. Soft shadows, rounded corners, and generous padding for 65+ audience.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'elevated', 'bordered'],
      description: 'Visual variant',
    },
    padding: {
      control: 'select',
      options: ['default', 'large', 'none'],
      description: 'Padding size',
    },
    interactive: {
      control: 'boolean',
      description: 'Make card clickable',
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
        </CardHeader>
        <CardContent>
          This is a card with some content inside. Cards are used to group
          related information together.
        </CardContent>
      </>
    ),
  },
};

export const Elevated: Story = {
  args: {
    variant: 'elevated',
    children: (
      <>
        <CardHeader>
          <CardTitle>Elevated Card</CardTitle>
        </CardHeader>
        <CardContent>
          This card has a more prominent shadow for emphasis.
        </CardContent>
      </>
    ),
  },
};

export const Bordered: Story = {
  args: {
    variant: 'bordered',
    children: (
      <>
        <CardHeader>
          <CardTitle>Bordered Card</CardTitle>
        </CardHeader>
        <CardContent>
          This card uses a border instead of a shadow for a lighter visual
          weight.
        </CardContent>
      </>
    ),
  },
};

export const WithFooter: Story = {
  args: {
    children: (
      <>
        <CardHeader>
          <CardTitle>Daily Activity</CardTitle>
        </CardHeader>
        <CardContent>
          You've completed 7 out of 10 activities today. Keep up the great
          work!
        </CardContent>
        <CardFooter>
          <Button variant="primary">View Details</Button>
          <Button variant="ghost">Skip</Button>
        </CardFooter>
      </>
    ),
  },
};

export const Interactive: Story = {
  args: {
    interactive: true,
    onClick: () => alert('Card clicked!'),
    children: (
      <>
        <CardHeader>
          <CardTitle>Interactive Card</CardTitle>
        </CardHeader>
        <CardContent>
          This card is clickable. Hover over it to see the effect.
        </CardContent>
      </>
    ),
  },
};

export const LargePadding: Story = {
  args: {
    padding: 'large',
    children: (
      <>
        <CardHeader>
          <CardTitle>Large Padding</CardTitle>
        </CardHeader>
        <CardContent>
          This card has extra padding for a more spacious feel.
        </CardContent>
      </>
    ),
  },
};

export const NoPadding: Story = {
  args: {
    padding: 'none',
    children: (
      <div>
        <img
          src="https://via.placeholder.com/350x150/2B79B9/FFFFFF?text=Image"
          alt="Placeholder"
          style={{ width: '100%', borderRadius: '20px 20px 0 0' }}
        />
        <div style={{ padding: '24px' }}>
          <CardTitle>Image Card</CardTitle>
          <CardContent style={{ marginTop: '8px' }}>
            Card with no default padding, useful for cards with images.
          </CardContent>
        </div>
      </div>
    ),
  },
};

export const AllVariants: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '24px',
        maxWidth: '900px',
      }}
    >
      <Card>
        <CardHeader>
          <CardTitle>Default Card</CardTitle>
        </CardHeader>
        <CardContent>Standard shadow and spacing.</CardContent>
      </Card>

      <Card variant="elevated">
        <CardHeader>
          <CardTitle>Elevated Card</CardTitle>
        </CardHeader>
        <CardContent>More prominent shadow for emphasis.</CardContent>
      </Card>

      <Card variant="bordered">
        <CardHeader>
          <CardTitle>Bordered Card</CardTitle>
        </CardHeader>
        <CardContent>Uses border instead of shadow.</CardContent>
      </Card>
    </div>
  ),
};

export const HealthDashboardExample: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '375px' }}>
      <Card variant="elevated">
        <CardHeader>
          <CardTitle>Today's Steps</CardTitle>
        </CardHeader>
        <CardContent>
          <div style={{ fontSize: '48px', fontWeight: 'bold', color: '#2B79B9', marginBottom: '8px' }}>
            7,234
          </div>
          <div style={{ fontSize: '15px', color: '#7B8A99' }}>
            Goal: 10,000 steps
          </div>
        </CardContent>
      </Card>

      <Card interactive onClick={() => alert('Medication reminder')}>
        <CardHeader>
          <CardTitle>Medication Reminder</CardTitle>
        </CardHeader>
        <CardContent>
          Take your evening medication at 8:00 PM
        </CardContent>
        <CardFooter>
          <Button variant="primary" size="small">
            Mark as Taken
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Upcoming Appointment</CardTitle>
        </CardHeader>
        <CardContent>
          Dr. Smith - Annual Checkup
          <br />
          <strong>Tomorrow at 2:00 PM</strong>
        </CardContent>
        <CardFooter>
          <Button variant="outline" size="small">
            View Details
          </Button>
        </CardFooter>
      </Card>
    </div>
  ),
};
