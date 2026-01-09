import type { Meta, StoryObj } from '@storybook/react';
import { FileUpload } from './FileUpload';

const meta = {
  title: 'External/Form/FileUpload',
  component: FileUpload,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    accept: {
      control: 'text',
      description: 'Accepted file types',
    },
    multiple: {
      control: 'boolean',
      description: 'Allow multiple file selection',
    },
    maxSize: {
      control: 'number',
      description: 'Maximum file size in bytes',
    },
    maxFiles: {
      control: 'number',
      description: 'Maximum number of files',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    helperText: {
      control: 'text',
      description: 'Helper text to display',
    },
    error: {
      control: 'text',
      description: 'Error message',
    },
  },
} satisfies Meta<typeof FileUpload>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onFilesChange: (files) => console.log('Files selected:', files),
  },
};

export const WithHelperText: Story = {
  args: {
    helperText: 'Supported formats: JPG, PNG, PDF (max 5MB)',
    onFilesChange: (files) => console.log('Files selected:', files),
  },
};

export const Multiple: Story = {
  args: {
    multiple: true,
    helperText: 'You can upload multiple files',
    onFilesChange: (files) => console.log('Files selected:', files),
  },
};

export const ImagesOnly: Story = {
  args: {
    accept: 'image/*',
    helperText: 'Only image files are accepted',
    onFilesChange: (files) => console.log('Files selected:', files),
  },
};

export const PDFOnly: Story = {
  args: {
    accept: '.pdf',
    helperText: 'PDF files only',
    onFilesChange: (files) => console.log('Files selected:', files),
  },
};

export const WithMaxSize: Story = {
  args: {
    maxSize: 5 * 1024 * 1024, // 5MB
    helperText: 'Maximum file size: 5MB',
    onFilesChange: (files) => console.log('Files selected:', files),
  },
};

export const WithMaxFiles: Story = {
  args: {
    multiple: true,
    maxFiles: 3,
    helperText: 'Upload up to 3 files',
    onFilesChange: (files) => console.log('Files selected:', files),
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    helperText: 'File upload is currently disabled',
  },
};

export const WithError: Story = {
  args: {
    error: 'Please upload at least one file',
    onFilesChange: (files) => console.log('Files selected:', files),
  },
};

export const DocumentUpload: Story = {
  render: () => (
    <div style={{ maxWidth: '600px' }}>
      <h3>Upload Documents</h3>
      <p style={{ color: '#7B8A99', marginBottom: '16px' }}>
        Upload relevant documents for your application
      </p>
      <FileUpload
        accept=".pdf,.doc,.docx"
        multiple
        maxFiles={5}
        maxSize={10 * 1024 * 1024}
        helperText="Accepted formats: PDF, DOC, DOCX (max 10MB each, up to 5 files)"
        onFilesChange={(files) => console.log('Documents:', files)}
      />
    </div>
  ),
};

export const ProfilePicture: Story = {
  render: () => (
    <div style={{ maxWidth: '500px' }}>
      <h3>Profile Picture</h3>
      <p style={{ color: '#7B8A99', marginBottom: '16px' }}>
        Upload a profile picture for your account
      </p>
      <FileUpload
        accept="image/jpeg,image/png"
        maxSize={2 * 1024 * 1024}
        helperText="JPG or PNG, max 2MB"
        onFilesChange={(files) => {
          if (files.length > 0) {
            console.log('Profile picture selected:', files[0]);
          }
        }}
      />
    </div>
  ),
};

export const AttachmentsForm: Story = {
  render: () => (
    <div style={{ maxWidth: '700px' }}>
      <h2>Support Ticket</h2>
      <form>
        <div style={{ marginBottom: '24px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>
            Subject
          </label>
          <input
            type="text"
            placeholder="Enter ticket subject"
            style={{
              width: '100%',
              padding: '12px',
              border: '1px solid #E8EDF2',
              borderRadius: '8px',
              fontSize: '16px',
            }}
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>
            Description
          </label>
          <textarea
            placeholder="Describe your issue"
            rows={4}
            style={{
              width: '100%',
              padding: '12px',
              border: '1px solid #E8EDF2',
              borderRadius: '8px',
              fontSize: '16px',
              resize: 'vertical',
            }}
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>
            Attachments
          </label>
          <FileUpload
            multiple
            maxFiles={3}
            helperText="Upload screenshots or relevant files (max 3 files)"
            onFilesChange={(files) => console.log('Attachments:', files)}
          />
        </div>

        <button
          type="button"
          style={{
            padding: '14px 32px',
            backgroundColor: '#2B79B9',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          Submit Ticket
        </button>
      </form>
    </div>
  ),
};

export const BulkUpload: Story = {
  render: () => (
    <div style={{ maxWidth: '800px' }}>
      <h2>Bulk Upload</h2>
      <p style={{ color: '#7B8A99', marginBottom: '24px' }}>
        Upload multiple files at once for batch processing
      </p>
      <FileUpload
        multiple
        maxFiles={20}
        helperText="Upload up to 20 files. Drag and drop supported."
        onFilesChange={(files) => {
          console.log(`${files.length} files uploaded`);
        }}
      />
      <div style={{ marginTop: '16px', padding: '12px', backgroundColor: '#E8F2FA', borderRadius: '8px' }}>
        <strong>Tip:</strong> You can select multiple files at once using Ctrl/Cmd+Click
        or drag and drop an entire folder.
      </div>
    </div>
  ),
};

export const CompactVersion: Story = {
  render: () => (
    <div style={{ maxWidth: '400px' }}>
      <FileUpload
        accept="image/*"
        helperText="JPG, PNG, or GIF"
        onFilesChange={(files) => console.log('Files:', files)}
      />
    </div>
  ),
};

export const WithValidation: Story = {
  render: () => {
    const [error, setError] = React.useState('');

    const handleFilesChange = (files: File[]) => {
      setError('');

      // Validate file types
      const invalidFiles = files.filter(
        (file) => !file.type.startsWith('image/')
      );

      if (invalidFiles.length > 0) {
        setError('Only image files are allowed');
        return;
      }

      // Validate file sizes
      const oversizedFiles = files.filter(
        (file) => file.size > 5 * 1024 * 1024
      );

      if (oversizedFiles.length > 0) {
        setError('Files must be smaller than 5MB');
        return;
      }

      console.log('Valid files:', files);
    };

    return (
      <div style={{ maxWidth: '600px' }}>
        <h3>Upload Images</h3>
        <FileUpload
          accept="image/*"
          multiple
          maxSize={5 * 1024 * 1024}
          helperText="Images only, max 5MB each"
          error={error}
          onFilesChange={handleFilesChange}
        />
      </div>
    );
  },
};
