import type { Meta, StoryObj } from '@storybook/react';
import { Drawer } from './Drawer';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { TextArea } from '../TextArea/TextArea';
import React from 'react';

const meta = {
  title: 'External/Overlays/Drawer',
  component: Drawer,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: 'radio',
      options: ['left', 'right'],
      description: 'Position of the drawer',
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      description: 'Size of the drawer',
    },
  },
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

// Helper component for interactive demos
const DrawerDemo: React.FC<{
  title?: string;
  position?: 'left' | 'right';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  footer?: React.ReactNode;
}> = ({ title, position, size, children, footer }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div style={{ padding: '40px' }}>
      <Button variant="primary" onClick={() => setIsOpen(true)}>
        Open Drawer
      </Button>

      <Drawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={title}
        position={position}
        size={size}
        footer={footer}
      >
        {children}
      </Drawer>
    </div>
  );
};

export const Default: Story = {
  render: () => (
    <DrawerDemo title="Drawer Title">
      <p>This is the drawer content. Click outside or press ESC to close.</p>
    </DrawerDemo>
  ),
};

export const RightPosition: Story = {
  render: () => (
    <DrawerDemo title="Right Drawer" position="right">
      <p>This drawer slides in from the right side of the screen.</p>
    </DrawerDemo>
  ),
};

export const LeftPosition: Story = {
  render: () => (
    <DrawerDemo title="Left Drawer" position="left">
      <p>This drawer slides in from the left side of the screen.</p>
    </DrawerDemo>
  ),
};

export const SmallSize: Story = {
  render: () => (
    <DrawerDemo title="Small Drawer" size="small">
      <p>This is a small drawer (320px wide).</p>
    </DrawerDemo>
  ),
};

export const MediumSize: Story = {
  render: () => (
    <DrawerDemo title="Medium Drawer" size="medium">
      <p>This is a medium drawer (480px wide) - the default size.</p>
    </DrawerDemo>
  ),
};

export const LargeSize: Story = {
  render: () => (
    <DrawerDemo title="Large Drawer" size="large">
      <p>This is a large drawer (640px wide).</p>
    </DrawerDemo>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <DrawerDemo
      title="Drawer with Footer"
      footer={
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
          <Button variant="outline">Cancel</Button>
          <Button variant="primary">Save Changes</Button>
        </div>
      }
    >
      <p>This drawer has a footer with action buttons.</p>
    </DrawerDemo>
  ),
};

export const NoTitle: Story = {
  render: () => (
    <DrawerDemo>
      <h2 style={{ marginTop: 0 }}>Custom Title</h2>
      <p>This drawer doesn't use the built-in title prop, so you can fully customize the content.</p>
    </DrawerDemo>
  ),
};

// Real-world examples
export const PatientDetails: Story = {
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
      <div style={{ padding: '40px' }}>
        <Button variant="primary" onClick={() => setIsOpen(true)}>
          View Patient Details
        </Button>

        <Drawer
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Patient Information"
          size="large"
          footer={
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
              <Button variant="outline" onClick={() => setIsOpen(false)}>
                Close
              </Button>
              <Button variant="primary">Edit Patient</Button>
            </div>
          }
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <section>
              <h3 style={{ marginTop: 0 }}>Personal Information</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '12px', fontSize: '16px' }}>
                <div style={{ fontWeight: 600 }}>Name:</div>
                <div>John Doe</div>
                <div style={{ fontWeight: 600 }}>DOB:</div>
                <div>January 15, 1955</div>
                <div style={{ fontWeight: 600 }}>Age:</div>
                <div>69 years</div>
                <div style={{ fontWeight: 600 }}>Gender:</div>
                <div>Male</div>
                <div style={{ fontWeight: 600 }}>Phone:</div>
                <div>(555) 123-4567</div>
                <div style={{ fontWeight: 600 }}>Email:</div>
                <div>john.doe@email.com</div>
              </div>
            </section>

            <section>
              <h3>Medical History</h3>
              <ul style={{ paddingLeft: '20px' }}>
                <li>Hypertension (diagnosed 2010)</li>
                <li>Type 2 Diabetes (diagnosed 2015)</li>
                <li>High Cholesterol (diagnosed 2018)</li>
              </ul>
            </section>

            <section>
              <h3>Current Medications</h3>
              <ul style={{ paddingLeft: '20px' }}>
                <li>Lisinopril 10mg - Once daily</li>
                <li>Metformin 500mg - Twice daily</li>
                <li>Atorvastatin 20mg - Once daily at bedtime</li>
              </ul>
            </section>

            <section>
              <h3>Allergies</h3>
              <div style={{ padding: '12px', background: '#FFF4E6', borderRadius: '8px', color: '#E67E22' }}>
                ⚠️ Penicillin - Severe allergic reaction
              </div>
            </section>
          </div>
        </Drawer>
      </div>
    );
  },
};

export const AppointmentForm: Story = {
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
      <div style={{ padding: '40px' }}>
        <Button variant="primary" onClick={() => setIsOpen(true)}>
          Schedule Appointment
        </Button>

        <Drawer
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Schedule New Appointment"
          footer={
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
              <Button variant="outline" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button variant="primary">Schedule</Button>
            </div>
          }
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Input
              label="Patient Name"
              placeholder="Select patient"
              required
            />

            <Input
              label="Appointment Date"
              type="date"
              required
            />

            <Input
              label="Appointment Time"
              type="time"
              required
            />

            <Input
              label="Appointment Type"
              placeholder="e.g., Check-up, Follow-up, Lab work"
              required
            />

            <TextArea
              label="Reason for Visit"
              placeholder="Please describe the reason for this appointment..."
              minRows={4}
            />

            <TextArea
              label="Notes"
              placeholder="Any additional notes or special requirements..."
              minRows={3}
            />
          </div>
        </Drawer>
      </div>
    );
  },
};

export const NotificationsPanel: Story = {
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const notifications = [
      { id: 1, type: 'info', title: 'New appointment request', time: '5 min ago', unread: true },
      { id: 2, type: 'success', title: 'Lab results available', time: '1 hour ago', unread: true },
      { id: 3, type: 'info', title: 'Message from Dr. Smith', time: '2 hours ago', unread: false },
      { id: 4, type: 'warning', title: 'Prescription expiring soon', time: '1 day ago', unread: false },
    ];

    return (
      <div style={{ padding: '40px' }}>
        <Button variant="outline" onClick={() => setIsOpen(true)}>
          Notifications (2 new)
        </Button>

        <Drawer
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Notifications"
          position="right"
          size="small"
          footer={
            <Button variant="outline" onClick={() => setIsOpen(false)} style={{ width: '100%' }}>
              Mark All as Read
            </Button>
          }
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {notifications.map((notif) => (
              <div
                key={notif.id}
                style={{
                  padding: '16px',
                  border: '2px solid #E8EDF2',
                  borderRadius: '8px',
                  background: notif.unread ? '#E8F2FA' : '#FFFFFF',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px' }}>
                  <div style={{ fontWeight: 600, fontSize: '15px' }}>{notif.title}</div>
                  {notif.unread && (
                    <div style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: '#2B79B9',
                    }} />
                  )}
                </div>
                <div style={{ fontSize: '13px', color: '#7B8A99' }}>{notif.time}</div>
              </div>
            ))}
          </div>
        </Drawer>
      </div>
    );
  },
};

export const FilterPanel: Story = {
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
      <div style={{ padding: '40px' }}>
        <Button variant="outline" onClick={() => setIsOpen(true)}>
          Filters
        </Button>

        <Drawer
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Filter Options"
          position="left"
          size="small"
          footer={
            <div style={{ display: 'flex', gap: '12px' }}>
              <Button variant="outline" onClick={() => setIsOpen(false)} style={{ flex: 1 }}>
                Clear All
              </Button>
              <Button variant="primary" onClick={() => setIsOpen(false)} style={{ flex: 1 }}>
                Apply Filters
              </Button>
            </div>
          }
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <h4 style={{ marginTop: 0, fontSize: '16px' }}>Status</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                  <input type="checkbox" style={{ width: '20px', height: '20px' }} />
                  <span>Scheduled</span>
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                  <input type="checkbox" style={{ width: '20px', height: '20px' }} />
                  <span>Completed</span>
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                  <input type="checkbox" style={{ width: '20px', height: '20px' }} />
                  <span>Cancelled</span>
                </label>
              </div>
            </div>

            <div>
              <h4 style={{ fontSize: '16px' }}>Date Range</h4>
              <Input type="date" label="From" />
              <div style={{ marginTop: '12px' }}>
                <Input type="date" label="To" />
              </div>
            </div>

            <div>
              <h4 style={{ fontSize: '16px' }}>Provider</h4>
              <Input placeholder="Select provider" />
            </div>
          </div>
        </Drawer>
      </div>
    );
  },
};

export const SettingsPanel: Story = {
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
      <div style={{ padding: '40px' }}>
        <Button variant="outline" onClick={() => setIsOpen(true)}>
          Settings
        </Button>

        <Drawer
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Account Settings"
          size="medium"
          footer={
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
              <Button variant="outline" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button variant="primary">Save Changes</Button>
            </div>
          }
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <section>
              <h3 style={{ marginTop: 0 }}>Profile Information</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <Input label="Full Name" defaultValue="John Doe" />
                <Input label="Email" type="email" defaultValue="john.doe@email.com" />
                <Input label="Phone" type="tel" defaultValue="(555) 123-4567" />
              </div>
            </section>

            <section>
              <h3>Notification Preferences</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
                  <input type="checkbox" defaultChecked style={{ width: '20px', height: '20px' }} />
                  <div>
                    <div style={{ fontWeight: 600 }}>Email Notifications</div>
                    <div style={{ fontSize: '14px', color: '#7B8A99' }}>Receive updates via email</div>
                  </div>
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
                  <input type="checkbox" defaultChecked style={{ width: '20px', height: '20px' }} />
                  <div>
                    <div style={{ fontWeight: 600 }}>SMS Notifications</div>
                    <div style={{ fontSize: '14px', color: '#7B8A99' }}>Receive text message alerts</div>
                  </div>
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
                  <input type="checkbox" style={{ width: '20px', height: '20px' }} />
                  <div>
                    <div style={{ fontWeight: 600 }}>Marketing Emails</div>
                    <div style={{ fontSize: '14px', color: '#7B8A99' }}>Receive promotional content</div>
                  </div>
                </label>
              </div>
            </section>
          </div>
        </Drawer>
      </div>
    );
  },
};

export const MessageThread: Story = {
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
      <div style={{ padding: '40px' }}>
        <Button variant="primary" onClick={() => setIsOpen(true)}>
          Open Message
        </Button>

        <Drawer
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Conversation with Dr. Smith"
          footer={
            <div style={{ display: 'flex', gap: '12px' }}>
              <Input placeholder="Type your message..." style={{ flex: 1 }} />
              <Button variant="primary">Send</Button>
            </div>
          }
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ padding: '16px', background: '#F8FAFB', borderRadius: '12px' }}>
              <div style={{ fontWeight: 600, marginBottom: '4px' }}>Dr. Sarah Smith</div>
              <div style={{ fontSize: '14px', color: '#7B8A99', marginBottom: '8px' }}>2 hours ago</div>
              <div>Hi John, I wanted to follow up on your recent lab results. Overall, everything looks good, but I'd like to discuss your cholesterol levels at your next appointment.</div>
            </div>

            <div style={{ padding: '16px', background: '#E8F2FA', borderRadius: '12px', marginLeft: '40px' }}>
              <div style={{ fontWeight: 600, marginBottom: '4px' }}>You</div>
              <div style={{ fontSize: '14px', color: '#7B8A99', marginBottom: '8px' }}>1 hour ago</div>
              <div>Thank you for letting me know. Should I schedule an appointment soon?</div>
            </div>

            <div style={{ padding: '16px', background: '#F8FAFB', borderRadius: '12px' }}>
              <div style={{ fontWeight: 600, marginBottom: '4px' }}>Dr. Sarah Smith</div>
              <div style={{ fontSize: '14px', color: '#7B8A99', marginBottom: '8px' }}>30 minutes ago</div>
              <div>Yes, please schedule a follow-up within the next 2-3 weeks. We can discuss dietary adjustments and whether medication changes are needed.</div>
            </div>
          </div>
        </Drawer>
      </div>
    );
  },
};

export const HelpPanel: Story = {
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
      <div style={{ padding: '40px' }}>
        <Button variant="outline" onClick={() => setIsOpen(true)}>
          Help & Support
        </Button>

        <Drawer
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Help & Support"
          position="right"
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <section>
              <h3 style={{ marginTop: 0 }}>Frequently Asked Questions</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <details style={{ padding: '12px', border: '2px solid #E8EDF2', borderRadius: '8px' }}>
                  <summary style={{ cursor: 'pointer', fontWeight: 600 }}>How do I schedule an appointment?</summary>
                  <p style={{ marginTop: '8px' }}>Click the "Schedule Appointment" button on the dashboard and fill out the required information.</p>
                </details>
                <details style={{ padding: '12px', border: '2px solid #E8EDF2', borderRadius: '8px' }}>
                  <summary style={{ cursor: 'pointer', fontWeight: 600 }}>How do I view my lab results?</summary>
                  <p style={{ marginTop: '8px' }}>Navigate to the "Lab Results" section in your patient portal to view all available results.</p>
                </details>
                <details style={{ padding: '12px', border: '2px solid #E8EDF2', borderRadius: '8px' }}>
                  <summary style={{ cursor: 'pointer', fontWeight: 600 }}>How do I contact my doctor?</summary>
                  <p style={{ marginTop: '8px' }}>Use the messaging feature in your portal to send secure messages to your healthcare team.</p>
                </details>
              </div>
            </section>

            <section>
              <h3>Contact Support</h3>
              <div style={{ padding: '16px', background: '#F8FAFB', borderRadius: '8px' }}>
                <div style={{ marginBottom: '12px' }}>
                  <div style={{ fontWeight: 600 }}>Phone</div>
                  <div>(555) 123-4567</div>
                </div>
                <div style={{ marginBottom: '12px' }}>
                  <div style={{ fontWeight: 600 }}>Email</div>
                  <div>support@healthcare.com</div>
                </div>
                <div>
                  <div style={{ fontWeight: 600 }}>Hours</div>
                  <div>Monday - Friday: 8am - 6pm</div>
                </div>
              </div>
            </section>
          </div>
        </Drawer>
      </div>
    );
  },
};
