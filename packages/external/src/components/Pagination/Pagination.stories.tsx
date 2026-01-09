import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from './Pagination';
import { useState } from 'react';

const meta = {
  title: 'External/Navigation/Pagination',
  component: Pagination,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    currentPage: {
      control: 'number',
      description: 'Current page (1-indexed)',
    },
    totalPages: {
      control: 'number',
      description: 'Total number of pages',
    },
    siblingCount: {
      control: 'number',
      description: 'Number of page buttons to show around current',
    },
    showFirstLast: {
      control: 'boolean',
      description: 'Whether to show first/last buttons',
    },
    showPrevNextText: {
      control: 'boolean',
      description: 'Whether to show previous/next text',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);

    return (
      <div>
        <p style={{ marginBottom: '20px' }}>Current page: {currentPage}</p>
        <Pagination
          currentPage={currentPage}
          totalPages={10}
          onPageChange={setCurrentPage}
        />
      </div>
    );
  },
};

export const ManyPages: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(15);

    return (
      <div>
        <p style={{ marginBottom: '20px' }}>
          Page {currentPage} of 50
        </p>
        <Pagination
          currentPage={currentPage}
          totalPages={50}
          onPageChange={setCurrentPage}
        />
      </div>
    );
  },
};

export const FewPages: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(2);

    return (
      <div>
        <p style={{ marginBottom: '20px' }}>Page {currentPage} of 5</p>
        <Pagination
          currentPage={currentPage}
          totalPages={5}
          onPageChange={setCurrentPage}
        />
      </div>
    );
  },
};

export const NoFirstLast: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(5);

    return (
      <Pagination
        currentPage={currentPage}
        totalPages={20}
        onPageChange={setCurrentPage}
        showFirstLast={false}
      />
    );
  },
};

export const IconsOnly: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(5);

    return (
      <Pagination
        currentPage={currentPage}
        totalPages={20}
        onPageChange={setCurrentPage}
        showPrevNextText={false}
      />
    );
  },
};

export const LargeSiblingCount: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(10);

    return (
      <Pagination
        currentPage={currentPage}
        totalPages={30}
        onPageChange={setCurrentPage}
        siblingCount={2}
      />
    );
  },
};

export const Disabled: Story = {
  args: {
    currentPage: 3,
    totalPages: 10,
    disabled: true,
    onPageChange: () => {},
  },
};

export const DataTable: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const totalItems = 127;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const startItem = (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(currentPage * itemsPerPage, totalItems);

    return (
      <div style={{ maxWidth: '900px' }}>
        <h3>User List</h3>

        {/* Mock table */}
        <div style={{ marginTop: '20px', marginBottom: '20px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #E8EDF2' }}>
                <th style={{ padding: '12px', textAlign: 'left' }}>Name</th>
                <th style={{ padding: '12px', textAlign: 'left' }}>Email</th>
                <th style={{ padding: '12px', textAlign: 'left' }}>Role</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: itemsPerPage }).map((_, i) => {
                const itemNumber = startItem + i;
                if (itemNumber > totalItems) return null;

                return (
                  <tr key={i} style={{ borderBottom: '1px solid #E8EDF2' }}>
                    <td style={{ padding: '12px' }}>User {itemNumber}</td>
                    <td style={{ padding: '12px' }}>user{itemNumber}@example.com</td>
                    <td style={{ padding: '12px' }}>Member</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Pagination info */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '16px',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <p style={{ margin: 0, color: '#7B8A99' }}>
            Showing {startItem} to {endItem} of {totalItems} users
          </p>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    );
  },
};

export const SearchResults: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const resultsPerPage = 8;
    const totalResults = 156;
    const totalPages = Math.ceil(totalResults / resultsPerPage);

    return (
      <div style={{ maxWidth: '800px' }}>
        <h2>Search Results</h2>
        <p style={{ color: '#7B8A99', marginBottom: '24px' }}>
          Found {totalResults} results for "wireless headphones"
        </p>

        {/* Mock results */}
        <div style={{ display: 'grid', gap: '16px', marginBottom: '32px' }}>
          {Array.from({ length: resultsPerPage }).map((_, i) => (
            <div
              key={i}
              style={{
                padding: '20px',
                border: '1px solid #E8EDF2',
                borderRadius: '12px',
              }}
            >
              <h3 style={{ margin: '0 0 8px 0', fontSize: '18px' }}>
                Product {(currentPage - 1) * resultsPerPage + i + 1}
              </h3>
              <p style={{ margin: '0', color: '#7B8A99', fontSize: '14px' }}>
                High-quality wireless headphones with great sound...
              </p>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    );
  },
};

export const BlogPosts: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 5;
    const totalPosts = 42;
    const totalPages = Math.ceil(totalPosts / postsPerPage);

    return (
      <div style={{ maxWidth: '700px' }}>
        <h1 style={{ marginBottom: '32px' }}>Blog</h1>

        {/* Mock blog posts */}
        <div style={{ display: 'grid', gap: '32px', marginBottom: '40px' }}>
          {Array.from({ length: postsPerPage }).map((_, i) => {
            const postNumber = (currentPage - 1) * postsPerPage + i + 1;
            if (postNumber > totalPosts) return null;

            return (
              <article key={i}>
                <div
                  style={{
                    width: '100%',
                    height: '200px',
                    background: 'linear-gradient(135deg, #2B79B9, #3A8FCC)',
                    borderRadius: '12px',
                    marginBottom: '16px',
                  }}
                />
                <h2 style={{ margin: '0 0 8px 0' }}>
                  Blog Post Title {postNumber}
                </h2>
                <p style={{ color: '#7B8A99', fontSize: '14px', marginBottom: '12px' }}>
                  January {postNumber}, 2024 • 5 min read
                </p>
                <p style={{ color: '#5A6C7D', lineHeight: 1.6 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua...
                </p>
              </article>
            );
          })}
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            showFirstLast={false}
          />
        </div>
      </div>
    );
  },
};

export const ProductCatalog: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;
    const totalItems = 87;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    return (
      <div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '24px',
          }}
        >
          <h2 style={{ margin: 0 }}>Products</h2>
          <p style={{ margin: 0, color: '#7B8A99' }}>
            {totalItems} products found
          </p>
        </div>

        {/* Mock product grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '20px',
            marginBottom: '32px',
          }}
        >
          {Array.from({ length: itemsPerPage }).map((_, i) => (
            <div
              key={i}
              style={{
                border: '1px solid #E8EDF2',
                borderRadius: '12px',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '200px',
                  background: '#F8FAFB',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '48px',
                }}
              >
                📦
              </div>
              <div style={{ padding: '16px' }}>
                <h4 style={{ margin: '0 0 8px 0' }}>Product {i + 1}</h4>
                <p style={{ margin: 0, fontWeight: 600, color: '#2B79B9' }}>
                  $99.99
                </p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    );
  },
};

export const EdgeCases: Story = {
  render: () => {
    const [page1, setPage1] = useState(1);
    const [page10, setPage10] = useState(1);
    const [page100, setPage100] = useState(50);

    return (
      <div style={{ display: 'grid', gap: '40px' }}>
        <div>
          <h3>Single Page</h3>
          <Pagination
            currentPage={page1}
            totalPages={1}
            onPageChange={setPage1}
          />
        </div>

        <div>
          <h3>Two Pages</h3>
          <Pagination
            currentPage={page10}
            totalPages={2}
            onPageChange={setPage10}
          />
        </div>

        <div>
          <h3>Many Pages (100 total)</h3>
          <Pagination
            currentPage={page100}
            totalPages={100}
            onPageChange={setPage100}
          />
        </div>
      </div>
    );
  },
};
