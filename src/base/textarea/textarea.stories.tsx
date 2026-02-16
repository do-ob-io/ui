import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent } from 'storybook/test';

import { Textarea } from './textarea.js';

const meta = {
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: [ 'autodocs' ],
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default textarea.
 */
export const Default: Story = {
  render: (args) => (
    <Textarea placeholder="Type your message here..." className="w-[300px]" {...args} />
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByPlaceholderText('Type your message here...')).toBeVisible();
  },
};

/**
 * Tests typing into the textarea.
 */
export const TypeInteraction: Story = {
  render: (args) => (
    <Textarea placeholder="Write something..." className="w-[300px]" {...args} />
  ),
  play: async ({ canvas }) => {
    const textarea = canvas.getByPlaceholderText('Write something...');
    await userEvent.type(textarea, 'Hello, world!');
    await expect(textarea).toHaveValue('Hello, world!');
  },
};

/**
 * Disabled textarea.
 */
export const Disabled: Story = {
  render: (args) => (
    <Textarea placeholder="Disabled textarea" disabled className="w-[300px]" {...args} />
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByPlaceholderText('Disabled textarea')).toBeDisabled();
  },
};

/**
 * Textarea with default value.
 */
export const WithDefaultValue: Story = {
  render: (args) => (
    <Textarea defaultValue="Some pre-filled content" className="w-[300px]" {...args} />
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByDisplayValue('Some pre-filled content')).toBeVisible();
  },
};
