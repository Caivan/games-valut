import type { Meta, StoryObj } from '@storybook/react-vite';
import { Spacer } from './Spacer';
import { Typography } from '../typography';

const meta = {
  title: 'Components/Spacer',
  component: Spacer,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A utility component for creating consistent spacing between elements. Can handle both horizontal and vertical spacing.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'The size of the spacing',
    },
    horizontal: {
      control: 'boolean',
      description: 'Whether to apply horizontal spacing',
    },
    vertical: {
      control: 'boolean',
      description: 'Whether to apply vertical spacing',
    },
  },
} satisfies Meta<typeof Spacer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'md',
  },
  render: (args) => (
    <div style={{ border: '1px dashed #ccc', padding: '1rem' }}>
      <Typography>Content above spacer</Typography>
      <Spacer {...args} />
      <Typography>Content below spacer</Typography>
    </div>
  ),
};

export const Horizontal: Story = {
  args: {
    size: 'md',
    horizontal: true,
    vertical: false,
  },
  render: (args) => (
    <div style={{ border: '1px dashed #ccc', padding: '1rem', display: 'flex', alignItems: 'center' }}>
      <Typography>Left content</Typography>
      <Spacer {...args} />
      <Typography>Right content</Typography>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ border: '1px dashed #ccc', padding: '1rem' }}>
      <Typography variant="subtitle">Vertical Spacing Sizes</Typography>
      <Typography>Content</Typography>
      <Spacer size="xs" />
      <Typography variant="caption">XS spacing above</Typography>
      <Spacer size="sm" />
      <Typography variant="caption">SM spacing above</Typography>
      <Spacer size="md" />
      <Typography variant="caption">MD spacing above</Typography>
      <Spacer size="lg" />
      <Typography variant="caption">LG spacing above</Typography>
      <Spacer size="xl" />
      <Typography variant="caption">XL spacing above</Typography>    
    </div>
  ),
};

export const HorizontalSizes: Story = {
  render: () => (
    <div style={{ border: '1px dashed #ccc', padding: '1rem' }}>
      <Typography variant="subtitle">Horizontal Spacing Sizes</Typography>
      <Spacer size="sm" />
      <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
        <Typography variant="caption">Start</Typography>
        <Spacer size="xs" horizontal vertical={false} />
        <Typography variant="caption">XS</Typography>
        <Spacer size="sm" horizontal vertical={false} />
        <Typography variant="caption">SM</Typography>
        <Spacer size="md" horizontal vertical={false} />
        <Typography variant="caption">MD</Typography>
        <Spacer size="lg" horizontal vertical={false} />
        <Typography variant="caption">LG</Typography>
        <Spacer size="xl" horizontal vertical={false} />
        <Typography variant="caption">XL</Typography>
        <Spacer size="xxl" horizontal vertical={false} />
        <Typography variant="caption">End</Typography>
      </div>
    </div>
  ),
};

export const BothDirections: Story = {
  args: {
    size: 'lg',
    horizontal: true,
    vertical: true,
  },
  render: (args) => (
    <div style={{ border: '1px dashed #ccc', padding: '1rem' }}>
      <Typography>This spacer below has both horizontal and vertical spacing</Typography>
      <div style={{ display: 'flex' }}>
        <Typography>Left</Typography>
        <Spacer {...args} />
        <Typography>Right (with spacing in both directions)</Typography>
      </div>
    </div>
  ),
};