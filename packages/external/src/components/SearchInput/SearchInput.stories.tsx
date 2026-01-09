import type { Meta, StoryObj } from '@storybook/react';
import { SearchInput } from './SearchInput';
import React from 'react';

const meta = {
  title: 'External/Form/SearchInput',
  component: SearchInput,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    showClearButton: {
      control: 'boolean',
      description: 'Show clear button when input has value',
    },
    showSearchButton: {
      control: 'boolean',
      description: 'Show search button',
    },
    loading: {
      control: 'boolean',
      description: 'Show loading indicator',
    },
  },
} satisfies Meta<typeof SearchInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Search...',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Search Medications',
    placeholder: 'Enter medication name...',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Search Patients',
    placeholder: 'Enter patient name or ID...',
    helperText: 'Search by name, patient ID, or date of birth',
  },
};

export const WithSearchButton: Story = {
  args: {
    label: 'Find Provider',
    placeholder: 'Search for healthcare providers...',
    showSearchButton: true,
  },
};

export const Loading: Story = {
  args: {
    placeholder: 'Searching...',
    loading: true,
    defaultValue: 'aspirin',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search is disabled',
    disabled: true,
  },
};

export const NoClearButton: Story = {
  args: {
    placeholder: 'Search...',
    showClearButton: false,
    defaultValue: 'Example search text',
  },
};

// Real-world examples
export const PatientSearch: Story = {
  render: () => (
    <SearchInput
      label="Find Patient"
      placeholder="Search by name, ID, or date of birth..."
      helperText="Use full or partial match"
    />
  ),
};

export const MedicationSearch: Story = {
  render: () => (
    <SearchInput
      label="Search Medications"
      placeholder="Enter medication name..."
      helperText="Start typing to see suggestions"
    />
  ),
};

export const AppointmentSearch: Story = {
  render: () => (
    <SearchInput
      label="Search Appointments"
      placeholder="Search by patient name or date..."
      showSearchButton
    />
  ),
};

export const DocumentSearch: Story = {
  render: () => (
    <SearchInput
      label="Search Medical Records"
      placeholder="Search documents, test results, prescriptions..."
      showSearchButton
      helperText="Search across all patient documents and records"
    />
  ),
};

// Interactive examples
export const InteractiveSearch: Story = {
  render: function SearchDemo() {
    const [value, setValue] = React.useState('');
    const [searching, setSearching] = React.useState(false);
    const [results, setResults] = React.useState<string[]>([]);

    const handleSearch = (searchValue: string) => {
      setSearching(true);

      // Simulate API call
      setTimeout(() => {
        const mockResults = [
          'Aspirin 81mg',
          'Lisinopril 10mg',
          'Metformin 500mg',
          'Atorvastatin 20mg',
        ].filter(item =>
          item.toLowerCase().includes(searchValue.toLowerCase())
        );

        setResults(mockResults);
        setSearching(false);
      }, 1000);
    };

    return (
      <div style={{ maxWidth: '600px' }}>
        <SearchInput
          label="Search Medications"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onSearch={handleSearch}
          onClear={() => {
            setValue('');
            setResults([]);
          }}
          loading={searching}
          placeholder="Type medication name and press Enter..."
          helperText="Press Enter or click Search to find medications"
          showSearchButton
        />

        {results.length > 0 && (
          <div style={{
            marginTop: '16px',
            padding: '16px',
            background: '#F8FAFB',
            borderRadius: '8px'
          }}>
            <div style={{ fontWeight: 600, marginBottom: '8px' }}>
              Found {results.length} results:
            </div>
            <ul style={{ margin: 0, paddingLeft: '20px' }}>
              {results.map((result, index) => (
                <li key={index} style={{ padding: '4px 0' }}>{result}</li>
              ))}
            </ul>
          </div>
        )}

        {!searching && results.length === 0 && value && (
          <div style={{
            marginTop: '16px',
            padding: '16px',
            background: '#FFF4E6',
            borderRadius: '8px',
            color: '#E67E22'
          }}>
            No medications found matching "{value}"
          </div>
        )}
      </div>
    );
  },
};

export const LiveSearch: Story = {
  render: function LiveSearchDemo() {
    const [query, setQuery] = React.useState('');
    const [loading, setLoading] = React.useState(false);

    const medications = [
      'Acetaminophen', 'Aspirin', 'Ibuprofen', 'Lisinopril',
      'Metformin', 'Atorvastatin', 'Omeprazole', 'Levothyroxine',
    ];

    React.useEffect(() => {
      if (query.length > 0) {
        setLoading(true);
        const timer = setTimeout(() => {
          setLoading(false);
        }, 300);
        return () => clearTimeout(timer);
      } else {
        setLoading(false);
      }
    }, [query]);

    const filteredMeds = query.length > 0
      ? medications.filter(med =>
          med.toLowerCase().includes(query.toLowerCase())
        )
      : [];

    return (
      <div style={{ maxWidth: '600px' }}>
        <SearchInput
          label="Live Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onClear={() => setQuery('')}
          loading={loading}
          placeholder="Start typing to search..."
          helperText="Results update as you type"
        />

        {filteredMeds.length > 0 && (
          <div style={{
            marginTop: '8px',
            border: '2px solid #E8EDF2',
            borderRadius: '8px',
            background: '#FFFFFF',
          }}>
            {filteredMeds.map((med, index) => (
              <div
                key={index}
                style={{
                  padding: '12px 16px',
                  borderBottom: index < filteredMeds.length - 1 ? '1px solid #E8EDF2' : 'none',
                  cursor: 'pointer',
                }}
              >
                {med}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  },
};

export const SearchWithFilters: Story = {
  render: function FilteredSearchDemo() {
    const [searchTerm, setSearchTerm] = React.useState('');
    const [filter, setFilter] = React.useState('all');

    return (
      <div style={{ maxWidth: '600px' }}>
        <SearchInput
          label="Search with Filters"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onClear={() => setSearchTerm('')}
          placeholder="Search documents..."
          showSearchButton
        />

        <div style={{
          display: 'flex',
          gap: '8px',
          marginTop: '12px',
          flexWrap: 'wrap'
        }}>
          <label style={{ fontSize: '14px', color: '#2D4A5F', fontWeight: 600 }}>
            Filter by:
          </label>
          {['all', 'prescriptions', 'lab results', 'imaging'].map((filterOption) => (
            <button
              key={filterOption}
              onClick={() => setFilter(filterOption)}
              style={{
                padding: '8px 16px',
                border: '2px solid',
                borderColor: filter === filterOption ? '#2B79B9' : '#E8EDF2',
                background: filter === filterOption ? '#E8F2FA' : '#FFFFFF',
                color: filter === filterOption ? '#2B79B9' : '#2D4A5F',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: filter === filterOption ? 600 : 400,
                fontSize: '14px',
              }}
            >
              {filterOption.charAt(0).toUpperCase() + filterOption.slice(1)}
            </button>
          ))}
        </div>
      </div>
    );
  },
};

export const GlobalSearch: Story = {
  render: () => (
    <div style={{ maxWidth: '800px' }}>
      <SearchInput
        placeholder="Search everything: patients, appointments, medications..."
        helperText="Global search across all records and documents"
        showSearchButton
      />
    </div>
  ),
};

export const CompactSearch: Story = {
  render: () => (
    <div style={{ maxWidth: '400px' }}>
      <SearchInput
        placeholder="Quick search..."
      />
    </div>
  ),
};

export const SearchWithRecentSearches: Story = {
  render: function RecentSearchesDemo() {
    const [query, setQuery] = React.useState('');
    const [showRecent, setShowRecent] = React.useState(false);
    const recentSearches = ['Aspirin', 'Patient: John Doe', 'Lab results 2024'];

    return (
      <div style={{ maxWidth: '600px' }}>
        <SearchInput
          label="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setShowRecent(true)}
          onBlur={() => setTimeout(() => setShowRecent(false), 200)}
          onClear={() => setQuery('')}
          placeholder="Search..."
        />

        {showRecent && query.length === 0 && (
          <div style={{
            marginTop: '8px',
            border: '2px solid #E8EDF2',
            borderRadius: '8px',
            background: '#FFFFFF',
            padding: '8px 0'
          }}>
            <div style={{
              padding: '8px 16px',
              fontSize: '12px',
              fontWeight: 600,
              color: '#7B8A99',
              textTransform: 'uppercase'
            }}>
              Recent Searches
            </div>
            {recentSearches.map((search, index) => (
              <div
                key={index}
                onClick={() => setQuery(search)}
                style={{
                  padding: '12px 16px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <span style={{ color: '#7B8A99' }}>🕐</span>
                {search}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  },
};

export const SearchBarOnly: Story = {
  args: {
    placeholder: 'Search...',
    'aria-label': 'Search',
  },
};

export const FullWidthSearch: Story = {
  render: () => (
    <div style={{ width: '100%' }}>
      <SearchInput
        placeholder="Search across all records..."
        showSearchButton
      />
    </div>
  ),
};
