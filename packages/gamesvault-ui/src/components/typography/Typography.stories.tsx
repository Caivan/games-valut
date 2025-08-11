import type { Meta, StoryObj } from '@storybook/react-vite';
import { Typography } from './Typography';

const meta = {
  title: 'Components/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A flexible typography component with multiple variants and semantic HTML elements.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['headline', 'subtitle', 'body', 'caption', 'label'],
      description:
        'The typography variant that defines size, weight, and line height',
    },
    as: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'div'],
      description: 'The HTML element to render',
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
      description: 'The text color',
    },
    children: {
      control: 'text',
      description: 'The text content',
    },
  },
  args: {
    children: 'Typography example',
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Display: Story = {
  args: {
    variant: 'display',
    children: 'This is a display',
  },
};

export const Headline: Story = {
  args: {
    variant: 'headline',
    children: 'This is a headline',
  },
};

export const Subtitle: Story = {
  args: {
    variant: 'subtitle',
    children: 'This is a subtitle',
  },
};

export const Body: Story = {
  args: {
    variant: 'body',
    children:
      'This is body text with the default styling for readable content.',
  },
};

export const Caption: Story = {
  args: {
    variant: 'caption',
    children: 'This is caption text',
  },
};

export const Label: Story = {
  args: {
    variant: 'label',
    children: 'This is a label',
  },
};

export const SecondaryColor: Story = {
  args: {
    color: 'secondary',
    children: 'This text uses secondary color',
  },
};

export const CustomElement: Story = {
  args: {
    variant: 'body',
    as: 'span',
    children: 'This body text is rendered as a span element',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        maxWidth: '600px',
      }}
    >
      <Typography variant="display">Display Typography</Typography>
      <Typography variant="headline">Headline Typography</Typography>
      <Typography variant="subtitle">Subtitle Typography</Typography>
      <Typography variant="body">
        Body typography for longer content and readable text passages.
      </Typography>
      <Typography variant="caption">
        Caption typography for smaller details
      </Typography>
      <Typography variant="label">Label Typography</Typography>
    </div>
  ),
};

export const AllColors: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        maxWidth: '600px',
      }}
    >
      <Typography color="primary">Primary color text</Typography>
      <Typography color="secondary">Secondary color text</Typography>
    </div>
  ),
};

export const SemanticElements: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        maxWidth: '600px',
      }}
    >
      <Typography variant="headline" as="h1">
        H1 Headline
      </Typography>
      <Typography variant="subtitle" as="h2">
        H2 Subtitle
      </Typography>
      <Typography variant="body" as="p">
        Paragraph body text
      </Typography>
      <Typography variant="caption" as="span">
        Span caption text
      </Typography>
      <Typography variant="label" as="div">
        Div label text
      </Typography>
    </div>
  ),
};
