import type { Meta, StoryObj } from '@storybook/react';
import { Table, Badge, ActionIcon, Group, Text } from '@mantine/core';
import { MantineProvider } from '@mantine/core';
import { Eye, Edit } from 'lucide-react';
import { breatheMantineTheme } from '../theme';
import '@mantine/core/styles.css';

// Sample data
const patientData = [
  {
    id: 1,
    name: 'John Doe',
    age: 68,
    lastVisit: '2025-01-05',
    status: 'Active',
    nextAppointment: '2025-01-15',
  },
  {
    id: 2,
    name: 'Jane Smith',
    age: 72,
    lastVisit: '2024-12-28',
    status: 'Followup',
    nextAppointment: '2025-01-10',
  },
  {
    id: 3,
    name: 'Robert Johnson',
    age: 65,
    lastVisit: '2025-01-03',
    status: 'Active',
    nextAppointment: '2025-02-01',
  },
  {
    id: 4,
    name: 'Mary Williams',
    age: 70,
    lastVisit: '2024-11-15',
    status: 'Inactive',
    nextAppointment: '-',
  },
  {
    id: 5,
    name: 'James Brown',
    age: 67,
    lastVisit: '2025-01-07',
    status: 'Active',
    nextAppointment: '2025-01-20',
  },
];

const TableWrapper = ({ children }: { children: React.ReactNode }) => (
  <MantineProvider theme={breatheMantineTheme}>
    <div style={{ padding: '20px', background: '#FAFBFC', minHeight: '400px' }}>
      {children}
    </div>
  </MantineProvider>
);

const meta = {
  title: 'Internal/Mantine/Table',
  component: Table,
  decorators: [
    (Story) => (
      <TableWrapper>
        <Story />
      </TableWrapper>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Data table with Breathe theme overrides. Compact sizing for desktop productivity. Features striped rows, hover states, and sortable columns.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Patient Name</Table.Th>
          <Table.Th>Age</Table.Th>
          <Table.Th>Last Visit</Table.Th>
          <Table.Th>Status</Table.Th>
          <Table.Th>Next Appointment</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {patientData.map((patient) => (
          <Table.Tr key={patient.id}>
            <Table.Td>
              <Text fw={600}>{patient.name}</Text>
            </Table.Td>
            <Table.Td>{patient.age}</Table.Td>
            <Table.Td>{patient.lastVisit}</Table.Td>
            <Table.Td>
              <Badge
                color={
                  patient.status === 'Active'
                    ? 'green'
                    : patient.status === 'Followup'
                    ? 'yellow'
                    : 'gray'
                }
                variant="light"
              >
                {patient.status}
              </Badge>
            </Table.Td>
            <Table.Td>{patient.nextAppointment}</Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  ),
};

export const Striped: Story = {
  render: () => (
    <Table striped highlightOnHover>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Patient Name</Table.Th>
          <Table.Th>Age</Table.Th>
          <Table.Th>Last Visit</Table.Th>
          <Table.Th>Status</Table.Th>
          <Table.Th>Actions</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {patientData.map((patient) => (
          <Table.Tr key={patient.id}>
            <Table.Td>
              <Text fw={600}>{patient.name}</Text>
            </Table.Td>
            <Table.Td>{patient.age}</Table.Td>
            <Table.Td>{patient.lastVisit}</Table.Td>
            <Table.Td>
              <Badge
                color={
                  patient.status === 'Active'
                    ? 'green'
                    : patient.status === 'Followup'
                    ? 'yellow'
                    : 'gray'
                }
                variant="light"
                size="sm"
              >
                {patient.status}
              </Badge>
            </Table.Td>
            <Table.Td>
              <Group gap="xs">
                <ActionIcon variant="subtle" color="blue">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                    <polyline points="10 17 15 12 10 7" />
                    <line x1="15" y1="12" x2="3" y2="12" />
                  </svg>
                </ActionIcon>
                <ActionIcon variant="subtle" color="gray">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="1" />
                    <circle cx="12" cy="5" r="1" />
                    <circle cx="12" cy="19" r="1" />
                  </svg>
                </ActionIcon>
              </Group>
            </Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  ),
};

export const WithCard: Story = {
  render: () => (
    <div style={{ background: 'white', borderRadius: '12px', padding: '24px', boxShadow: '0 1px 3px rgba(26, 43, 61, 0.04)' }}>
      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 600, margin: '0 0 8px 0', fontFamily: 'Lexend, sans-serif' }}>
          Patient List
        </h2>
        <Text size="sm" c="dimmed">
          Showing {patientData.length} patients
        </Text>
      </div>

      <Table striped highlightOnHover>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Patient Name</Table.Th>
            <Table.Th>Age</Table.Th>
            <Table.Th>Last Visit</Table.Th>
            <Table.Th>Status</Table.Th>
            <Table.Th>Next Appointment</Table.Th>
            <Table.Th>Actions</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {patientData.map((patient) => (
            <Table.Tr key={patient.id}>
              <Table.Td>
                <Text fw={600}>{patient.name}</Text>
              </Table.Td>
              <Table.Td>{patient.age}</Table.Td>
              <Table.Td>{patient.lastVisit}</Table.Td>
              <Table.Td>
                <Badge
                  color={
                    patient.status === 'Active'
                      ? 'green'
                      : patient.status === 'Followup'
                      ? 'yellow'
                      : 'gray'
                  }
                  variant="light"
                  size="sm"
                >
                  {patient.status}
                </Badge>
              </Table.Td>
              <Table.Td>{patient.nextAppointment}</Table.Td>
              <Table.Td>
                <Group gap="xs">
                  <ActionIcon variant="subtle" color="blue" size="sm">
                    <Eye size={16} />
                  </ActionIcon>
                  <ActionIcon variant="subtle" color="gray" size="sm">
                    <Edit size={16} />
                  </ActionIcon>
                </Group>
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </div>
  ),
};

export const Compact: Story = {
  render: () => (
    <Table horizontalSpacing="xs" verticalSpacing="xs">
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Name</Table.Th>
          <Table.Th>Age</Table.Th>
          <Table.Th>Status</Table.Th>
          <Table.Th>Actions</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {patientData.slice(0, 3).map((patient) => (
          <Table.Tr key={patient.id}>
            <Table.Td>
              <Text size="sm" fw={600}>
                {patient.name}
              </Text>
            </Table.Td>
            <Table.Td>
              <Text size="sm">{patient.age}</Text>
            </Table.Td>
            <Table.Td>
              <Badge
                color={
                  patient.status === 'Active'
                    ? 'green'
                    : patient.status === 'Followup'
                    ? 'yellow'
                    : 'gray'
                }
                variant="light"
                size="xs"
              >
                {patient.status}
              </Badge>
            </Table.Td>
            <Table.Td>
              <ActionIcon variant="subtle" color="blue" size="sm">
                →
              </ActionIcon>
            </Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  ),
};
