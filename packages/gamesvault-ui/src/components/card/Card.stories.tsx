import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from './Card';
import { Typography } from '../typography';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A versatile card component for containing content with customizable styling.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: false,
      description: 'The content to display inside the card',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'muted'],
      description: 'The visual style variant of the card',
    },
    padding: {
      control: { type: 'select' },
      options: ['none', 'small', 'medium', 'large'],
      description: 'The padding inside the card',
    },
    radius: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'The border radius of the card',
    },
    interactive: {
      control: 'boolean',
      description: 'Whether the card should have hover effects',
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultContent = (
  <div>
    <Typography variant="subtitle">Card Title</Typography>
    <Typography variant="body" color="secondary">
      This is some card content that demonstrates the card component.
    </Typography>
  </div>
);

export const Default: Story = {
  args: {
    children: defaultContent,
  },
};

export const Muted: Story = {
  args: {
    variant: 'muted',
    children: defaultContent,
  },
};

export const Interactive: Story = {
  args: {
    interactive: true,
    onClick: () => console.log('Card clicked'),
    children: defaultContent,
  },
};
