import type { Meta, StoryObj } from '@storybook/react';
import { Thumbnail } from './Thumbnail';

const meta = {
  title: 'External/UI Elements/Thumbnail',
  component: Thumbnail,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large', 'xlarge'],
      description: 'Size of the thumbnail',
    },
    shape: {
      control: 'radio',
      options: ['square', 'rounded', 'circle'],
      description: 'Shape of the thumbnail',
    },
    interactive: {
      control: 'boolean',
      description: 'Whether the thumbnail is clickable',
    },
    loading: {
      control: 'radio',
      options: ['lazy', 'eager'],
      description: 'Image loading strategy',
    },
  },
} satisfies Meta<typeof Thumbnail>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleImage = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop';
const productImage = 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop';
const landscapeImage = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop';

export const Default: Story = {
  args: {
    src: sampleImage,
    alt: 'Profile picture',
  },
};

export const Small: Story = {
  args: {
    src: sampleImage,
    alt: 'Small thumbnail',
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    src: sampleImage,
    alt: 'Large thumbnail',
    size: 'large',
  },
};

export const ExtraLarge: Story = {
  args: {
    src: sampleImage,
    alt: 'Extra large thumbnail',
    size: 'xlarge',
  },
};

export const Circle: Story = {
  args: {
    src: sampleImage,
    alt: 'Circle thumbnail',
    shape: 'circle',
  },
};

export const Square: Story = {
  args: {
    src: productImage,
    alt: 'Square thumbnail',
    shape: 'square',
  },
};

export const Interactive: Story = {
  args: {
    src: sampleImage,
    alt: 'Interactive thumbnail',
    interactive: true,
    onClick: () => alert('Thumbnail clicked!'),
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Thumbnail src={sampleImage} alt="Small" size="small" />
      <Thumbnail src={sampleImage} alt="Medium" size="medium" />
      <Thumbnail src={sampleImage} alt="Large" size="large" />
      <Thumbnail src={sampleImage} alt="Extra Large" size="xlarge" />
    </div>
  ),
};

export const Shapes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <Thumbnail src={sampleImage} alt="Square" shape="square" />
        <p style={{ marginTop: '8px', fontSize: '14px' }}>Square</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Thumbnail src={sampleImage} alt="Rounded" shape="rounded" />
        <p style={{ marginTop: '8px', fontSize: '14px' }}>Rounded</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Thumbnail src={sampleImage} alt="Circle" shape="circle" />
        <p style={{ marginTop: '8px', fontSize: '14px' }}>Circle</p>
      </div>
    </div>
  ),
};

export const ProductGallery: Story = {
  render: () => (
    <div>
      <h3>Product Gallery</h3>
      <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
        <Thumbnail
          src={productImage}
          alt="Headphones - Main"
          size="large"
          interactive
          onClick={() => alert('View main image')}
        />
        <Thumbnail
          src="https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=400&fit=crop"
          alt="Headphones - Side"
          interactive
          onClick={() => alert('View side image')}
        />
        <Thumbnail
          src="https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=400&h=400&fit=crop"
          alt="Headphones - Detail"
          interactive
          onClick={() => alert('View detail image')}
        />
        <Thumbnail
          src="https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=400&h=400&fit=crop"
          alt="Headphones - Case"
          interactive
          onClick={() => alert('View case image')}
        />
      </div>
    </div>
  ),
};

export const UserList: Story = {
  render: () => (
    <div style={{ maxWidth: '500px' }}>
      <h3>Team Members</h3>
      <div style={{ marginTop: '16px' }}>
        {[
          { name: 'Sarah Johnson', role: 'Product Manager', img: sampleImage },
          { name: 'Michael Chen', role: 'Designer', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop' },
          { name: 'Emily Rodriguez', role: 'Developer', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop' },
          { name: 'David Kim', role: 'Developer', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop' },
        ].map((user, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              padding: '12px 0',
              borderBottom: index < 3 ? '1px solid #E8EDF2' : 'none',
            }}
          >
            <Thumbnail src={user.img} alt={user.name} shape="circle" />
            <div>
              <div style={{ fontWeight: 600, fontSize: '16px' }}>{user.name}</div>
              <div style={{ color: '#7B8A99', fontSize: '14px' }}>{user.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const AttachmentList: Story = {
  render: () => (
    <div style={{ maxWidth: '600px' }}>
      <h3>Attachments</h3>
      <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {[
          { name: 'design-mockup.png', size: '2.4 MB', img: landscapeImage },
          { name: 'product-photo.jpg', size: '1.8 MB', img: productImage },
          { name: 'screenshot.png', size: '892 KB', img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=400&fit=crop' },
        ].map((file, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              padding: '12px',
              border: '1px solid #E8EDF2',
              borderRadius: '8px',
              cursor: 'pointer',
            }}
          >
            <Thumbnail src={file.img} alt={file.name} size="small" shape="square" />
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 600, fontSize: '14px' }}>{file.name}</div>
              <div style={{ color: '#7B8A99', fontSize: '12px' }}>{file.size}</div>
            </div>
            <button style={{
              padding: '8px 16px',
              background: 'none',
              border: '1px solid #E8EDF2',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '14px',
            }}>
              Download
            </button>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const ProfileHeader: Story = {
  render: () => (
    <div style={{
      maxWidth: '800px',
      padding: '32px',
      border: '1px solid #E8EDF2',
      borderRadius: '12px',
    }}>
      <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
        <Thumbnail
          src={sampleImage}
          alt="Profile picture"
          size="xlarge"
          shape="circle"
        />
        <div style={{ flex: 1 }}>
          <h2 style={{ margin: '0 0 8px 0' }}>Sarah Johnson</h2>
          <p style={{ color: '#7B8A99', margin: '0 0 16px 0' }}>
            Product Designer · San Francisco, CA
          </p>
          <p style={{ color: '#5A6C7D', lineHeight: 1.6 }}>
            Passionate about creating intuitive and accessible user experiences.
            10+ years of experience in product design and UX research.
          </p>
        </div>
      </div>
    </div>
  ),
};
