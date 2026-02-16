import type { Meta, StoryObj } from '@storybook/react-vite';
import { BoldIcon, ItalicIcon, UnderlineIcon } from 'lucide-react';
import { expect, userEvent } from 'storybook/test';

import { Toggle } from './toggle.js';

const meta = {
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
  tags: [ 'autodocs' ],
  argTypes: {
    variant: {
      control: 'select',
      options: [ 'default', 'outline' ],
    },
    size: {
      control: 'select',
      options: [ 'default', 'sm', 'lg' ],
    },
  },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default toggle with text.
 */
export const Default: Story = {
  render: (args) => (
    <Toggle aria-label="Toggle bold" {...args}>
      <BoldIcon />
    </Toggle>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('button', { name: 'Toggle bold' })).toBeInTheDocument();
  },
};

/**
 * Tests pressing the toggle on and off.
 */
export const ToggleInteraction: Story = {
  render: (args) => (
    <Toggle aria-label="Toggle italic" {...args}>
      <ItalicIcon />
    </Toggle>
  ),
  play: async ({ canvas }) => {
    const toggle = canvas.getByRole('button', { name: 'Toggle italic' });
    await userEvent.click(toggle);
    await expect(toggle).toHaveAttribute('aria-pressed', 'true');
    await userEvent.click(toggle);
    await expect(toggle).toHaveAttribute('aria-pressed', 'false');
  },
};

/**
 * Outline variant toggle.
 */
export const Outline: Story = {
  render: (args) => (
    <Toggle variant="outline" aria-label="Toggle underline" {...args}>
      <UnderlineIcon />
    </Toggle>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('button', { name: 'Toggle underline' })).toBeInTheDocument();
  },
};

/**
 * Toggle with text label.
 */
export const WithText: Story = {
  render: (args) => (
    <Toggle aria-label="Toggle bold" {...args}>
      <BoldIcon />
      Bold
    </Toggle>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Bold')).toBeVisible();
  },
};

/**
 * Small size toggle.
 */
export const Small: Story = {
  render: (args) => (
    <Toggle size="sm" aria-label="Toggle bold" {...args}>
      <BoldIcon />
    </Toggle>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('button', { name: 'Toggle bold' })).toBeInTheDocument();
  },
};

/**
 * Large size toggle.
 */
export const Large: Story = {
  render: (args) => (
    <Toggle size="lg" aria-label="Toggle bold" {...args}>
      <BoldIcon />
    </Toggle>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('button', { name: 'Toggle bold' })).toBeInTheDocument();
  },
};
