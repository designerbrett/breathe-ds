import type { Meta, StoryObj } from '@storybook/react';
import { Pagination, Text, Stack } from '@mantine/core';
import { MantineProvider } from '@mantine/core';
import { breatheMantineTheme } from '../theme';
import '@mantine/core/styles.css';

const meta = {
  title: 'Internal/Mantine/Pagination',
  component: Pagination,
  decorators: [
    (Story) => (
      <MantineProvider theme={breatheMantineTheme}>
        <Story />
      </MantineProvider>
    ),
  ],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Mantine Pagination with Breathe theme. Navigate through large datasets in desktop applications.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    total: 10,
  },
};

export const WithControls: Story = {
  render: () => {
    const [activePage, setActivePage] = React.useState(1);

    return (
      <Stack gap="md" align="center">
        <Pagination value={activePage} onChange={setActivePage} total={10} />
        <Text size="sm" c="dimmed">
          Page {activePage} of 10
        </Text>
      </Stack>
    );
  },
};

export const AllSizes: Story = {
  render: () => (
    <Stack gap="lg" align="center">
      <div>
        <Text size="xs" mb="xs" ta="center">
          Extra Small
        </Text>
        <Pagination total={10} size="xs" />
      </div>
      <div>
        <Text size="xs" mb="xs" ta="center">
          Small
        </Text>
        <Pagination total={10} size="sm" />
      </div>
      <div>
        <Text size="xs" mb="xs" ta="center">
          Medium (Default)
        </Text>
        <Pagination total={10} size="md" />
      </div>
      <div>
        <Text size="xs" mb="xs" ta="center">
          Large
        </Text>
        <Pagination total={10} size="lg" />
      </div>
    </Stack>
  ),
};

export const WithBoundaries: Story = {
  render: () => (
    <Stack gap="lg" align="center">
      <div>
        <Text size="xs" mb="xs" ta="center">
          Show 1 boundary (default)
        </Text>
        <Pagination total={20} boundaries={1} defaultValue={10} />
      </div>
      <div>
        <Text size="xs" mb="xs" ta="center">
          Show 2 boundaries
        </Text>
        <Pagination total={20} boundaries={2} defaultValue={10} />
      </div>
      <div>
        <Text size="xs" mb="xs" ta="center">
          Show 3 boundaries
        </Text>
        <Pagination total={20} boundaries={3} defaultValue={10} />
      </div>
    </Stack>
  ),
};

export const WithSiblings: Story = {
  render: () => (
    <Stack gap="lg" align="center">
      <div>
        <Text size="xs" mb="xs" ta="center">
          1 sibling (default)
        </Text>
        <Pagination total={20} siblings={1} defaultValue={10} />
      </div>
      <div>
        <Text size="xs" mb="xs" ta="center">
          2 siblings
        </Text>
        <Pagination total={20} siblings={2} defaultValue={10} />
      </div>
      <div>
        <Text size="xs" mb="xs" ta="center">
          3 siblings
        </Text>
        <Pagination total={20} siblings={3} defaultValue={10} />
      </div>
    </Stack>
  ),
};

export const Disabled: Story = {
  args: {
    total: 10,
    disabled: true,
    value: 5,
  },
};

export const DataTablePagination: Story = {
  render: () => {
    const [activePage, setActivePage] = React.useState(1);
    const totalPages = 25;
    const itemsPerPage = 20;
    const totalItems = 487;

    return (
      <Stack gap="md" style={{ width: '100%', maxWidth: '600px' }}>
        <div
          style={{
            border: '1px solid #e9ecef',
            borderRadius: '8px',
            padding: '16px',
            backgroundColor: '#f8f9fa',
          }}
        >
          <Text size="sm" c="dimmed">
            Mock data table content here...
          </Text>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Text size="sm" c="dimmed">
            Showing {(activePage - 1) * itemsPerPage + 1}-
            {Math.min(activePage * itemsPerPage, totalItems)} of {totalItems}{' '}
            items
          </Text>
          <Pagination
            value={activePage}
            onChange={setActivePage}
            total={totalPages}
          />
        </div>
      </Stack>
    );
  },
};

export const PatientListPagination: Story = {
  render: () => {
    const [activePage, setActivePage] = React.useState(1);
    const totalPages = 15;

    return (
      <Stack gap="md" style={{ width: '100%', maxWidth: '700px' }}>
        <div>
          <Text size="lg" fw={600} mb="md">
            Patient List
          </Text>
          <div
            style={{
              border: '1px solid #e9ecef',
              borderRadius: '8px',
              padding: '16px',
            }}
          >
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                style={{
                  padding: '12px',
                  borderBottom:
                    i < 5 ? '1px solid #e9ecef' : 'none',
                }}
              >
                <Text size="sm" fw={500}>
                  Patient #{(activePage - 1) * 5 + i}
                </Text>
                <Text size="xs" c="dimmed">
                  Last visit: 12/15/2025
                </Text>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Pagination
            value={activePage}
            onChange={setActivePage}
            total={totalPages}
            size="sm"
          />
        </div>

        <Text size="xs" c="dimmed" ta="center">
          Page {activePage} of {totalPages}
        </Text>
      </Stack>
    );
  },
};

export const CompactPagination: Story = {
  render: () => {
    const [activePage, setActivePage] = React.useState(1);

    return (
      <Stack gap="sm" align="center">
        <Pagination
          value={activePage}
          onChange={setActivePage}
          total={50}
          size="sm"
          siblings={0}
          boundaries={1}
        />
        <Text size="xs" c="dimmed">
          Compact view for limited space
        </Text>
      </Stack>
    );
  },
};
