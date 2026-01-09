import type { Meta, StoryObj } from '@storybook/react';
import { Accordion, Text } from '@mantine/core';
import { MantineProvider } from '@mantine/core';
import { ClipboardList, Hospital, Pill, Settings, Bell, Lock, Link2 } from 'lucide-react';
import { breatheMantineTheme } from '../theme';
import '@mantine/core/styles.css';

const meta = {
  title: 'Internal/Mantine/Accordion',
  component: Accordion,
  decorators: [
    (Story) => (
      <MantineProvider theme={breatheMantineTheme}>
        <div style={{ maxWidth: '600px' }}>
          <Story />
        </div>
      </MantineProvider>
    ),
  ],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Mantine Accordion with Breathe theme. Expandable sections for desktop applications.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Accordion defaultValue="item-1">
      <Accordion.Item value="item-1">
        <Accordion.Control>First Section</Accordion.Control>
        <Accordion.Panel>
          <Text size="sm">Content for the first section</Text>
        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="item-2">
        <Accordion.Control>Second Section</Accordion.Control>
        <Accordion.Panel>
          <Text size="sm">Content for the second section</Text>
        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="item-3">
        <Accordion.Control>Third Section</Accordion.Control>
        <Accordion.Panel>
          <Text size="sm">Content for the third section</Text>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  ),
};

export const MultipleOpen: Story = {
  render: () => (
    <Accordion multiple defaultValue={['item-1', 'item-2']}>
      <Accordion.Item value="item-1">
        <Accordion.Control>Section 1</Accordion.Control>
        <Accordion.Panel>
          <Text size="sm">This accordion allows multiple sections to be open at once.</Text>
        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="item-2">
        <Accordion.Control>Section 2</Accordion.Control>
        <Accordion.Panel>
          <Text size="sm">Both this and section 1 can be open simultaneously.</Text>
        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="item-3">
        <Accordion.Control>Section 3</Accordion.Control>
        <Accordion.Panel>
          <Text size="sm">All three sections can be open at the same time.</Text>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <Text size="xs" fw={600} mb="xs">Default</Text>
        <Accordion variant="default">
          <Accordion.Item value="1">
            <Accordion.Control>Item 1</Accordion.Control>
            <Accordion.Panel>Default variant</Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="2">
            <Accordion.Control>Item 2</Accordion.Control>
            <Accordion.Panel>Content</Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </div>

      <div>
        <Text size="xs" fw={600} mb="xs">Contained</Text>
        <Accordion variant="contained">
          <Accordion.Item value="1">
            <Accordion.Control>Item 1</Accordion.Control>
            <Accordion.Panel>Contained variant</Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="2">
            <Accordion.Control>Item 2</Accordion.Control>
            <Accordion.Panel>Content</Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </div>

      <div>
        <Text size="xs" fw={600} mb="xs">Separated</Text>
        <Accordion variant="separated">
          <Accordion.Item value="1">
            <Accordion.Control>Item 1</Accordion.Control>
            <Accordion.Panel>Separated variant</Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="2">
            <Accordion.Control>Item 2</Accordion.Control>
            <Accordion.Panel>Content</Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  ),
};

export const HealthcareFAQ: Story = {
  render: () => (
    <Accordion variant="separated">
      <Accordion.Item value="insurance">
        <Accordion.Control>What insurance plans do you accept?</Accordion.Control>
        <Accordion.Panel>
          <Text size="sm">
            We accept most major insurance plans including Blue Cross Blue Shield,
            Aetna, UnitedHealthcare, and Cigna. Please contact our office to verify
            your specific plan coverage.
          </Text>
        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="appointments">
        <Accordion.Control>How do I schedule an appointment?</Accordion.Control>
        <Accordion.Panel>
          <Text size="sm">
            You can schedule appointments through our patient portal, by calling our
            office at (555) 123-4567, or by using the online booking system.
          </Text>
        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="records">
        <Accordion.Control>How can I access my medical records?</Accordion.Control>
        <Accordion.Panel>
          <Text size="sm">
            Medical records are available through our secure patient portal. You can
            also request physical copies by contacting our medical records department.
          </Text>
        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="prescriptions">
        <Accordion.Control>How do I refill my prescriptions?</Accordion.Control>
        <Accordion.Panel>
          <Text size="sm">
            Prescription refills can be requested through the patient portal, by
            calling your pharmacy directly, or by contacting our office.
          </Text>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  ),
};

export const PatientInformation: Story = {
  render: () => (
    <Accordion defaultValue="demographics" variant="contained">
      <Accordion.Item value="demographics">
        <Accordion.Control><ClipboardList size={16} style={{ display: 'inline', marginRight: '8px' }} />Demographics</Accordion.Control>
        <Accordion.Panel>
          <Text size="sm" mb="xs"><strong>Name:</strong> John Smith</Text>
          <Text size="sm" mb="xs"><strong>DOB:</strong> 01/15/1955</Text>
          <Text size="sm" mb="xs"><strong>Age:</strong> 71</Text>
          <Text size="sm" mb="xs"><strong>Gender:</strong> Male</Text>
          <Text size="sm"><strong>Phone:</strong> (555) 123-4567</Text>
        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="history">
        <Accordion.Control><Hospital size={16} style={{ display: 'inline', marginRight: '8px' }} />Medical History</Accordion.Control>
        <Accordion.Panel>
          <Text size="sm">• Type 2 Diabetes (Diagnosed 2015)</Text>
          <Text size="sm">• Hypertension (Diagnosed 2012)</Text>
          <Text size="sm">• Hyperlipidemia (Diagnosed 2016)</Text>
        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="medications">
        <Accordion.Control><Pill size={16} style={{ display: 'inline', marginRight: '8px' }} />Current Medications</Accordion.Control>
        <Accordion.Panel>
          <Text size="sm">• Metformin 500mg - Twice daily</Text>
          <Text size="sm">• Lisinopril 10mg - Once daily</Text>
          <Text size="sm">• Atorvastatin 20mg - Once daily</Text>
        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="allergies">
        <Accordion.Control>⚠️ Allergies</Accordion.Control>
        <Accordion.Panel>
          <Text size="sm">• Penicillin (Moderate - Rash)</Text>
          <Text size="sm">• Sulfa drugs (Severe - Anaphylaxis)</Text>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  ),
};

export const SettingsSections: Story = {
  render: () => (
    <Accordion variant="separated">
      <Accordion.Item value="account">
        <Accordion.Control><Settings size={16} style={{ display: 'inline', marginRight: '8px' }} />Account Settings</Accordion.Control>
        <Accordion.Panel>
          <Text size="sm" c="dimmed">
            Change your email, password, and account preferences
          </Text>
        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="notifications">
        <Accordion.Control><Bell size={16} style={{ display: 'inline', marginRight: '8px' }} />Notification Preferences</Accordion.Control>
        <Accordion.Panel>
          <Text size="sm" c="dimmed">
            Manage email, SMS, and push notification settings
          </Text>
        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="privacy">
        <Accordion.Control><Lock size={16} style={{ display: 'inline', marginRight: '8px' }} />Privacy & Security</Accordion.Control>
        <Accordion.Panel>
          <Text size="sm" c="dimmed">
            Control who can see your information and enable two-factor authentication
          </Text>
        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="integrations">
        <Accordion.Control><Link2 size={16} style={{ display: 'inline', marginRight: '8px' }} />Integrations</Accordion.Control>
        <Accordion.Panel>
          <Text size="sm" c="dimmed">
            Connect third-party applications and services
          </Text>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  ),
};

export const WithDisabledItem: Story = {
  render: () => (
    <Accordion>
      <Accordion.Item value="enabled-1">
        <Accordion.Control>Enabled Section</Accordion.Control>
        <Accordion.Panel>
          <Text size="sm">This section is accessible</Text>
        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="disabled" disabled>
        <Accordion.Control>Disabled Section</Accordion.Control>
        <Accordion.Panel>
          <Text size="sm">This section cannot be opened</Text>
        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="enabled-2">
        <Accordion.Control>Another Enabled Section</Accordion.Control>
        <Accordion.Panel>
          <Text size="sm">This section is also accessible</Text>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  ),
};
