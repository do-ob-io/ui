import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent } from 'storybook/test';

import { Input } from './input.js';

const meta = {
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: [ 'autodocs' ],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default text input.
 */
export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
  render: (args) => (
    <div className="w-[300px]">
      <Input {...args} />
    </div>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByPlaceholderText('Enter text...')).toBeInTheDocument();
  },
};

/**
 * Tests typing into the input.
 */
export const TypeInteraction: Story = {
  args: {
    placeholder: 'Type here...',
  },
  render: (args) => (
    <div className="w-[300px]">
      <Input {...args} />
    </div>
  ),
  play: async ({ canvas }) => {
    const input = canvas.getByPlaceholderText('Type here...');
    await userEvent.type(input, 'Hello world');
    await expect(input).toHaveValue('Hello world');
  },
};

/**
 * Email type input.
 */
export const Email: Story = {
  args: {
    type: 'email',
    placeholder: 'email@example.com',
  },
  render: (args) => (
    <div className="w-[300px]">
      <Input {...args} />
    </div>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByPlaceholderText('email@example.com')).toBeInTheDocument();
  },
};

/**
 * Password type input.
 */
export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter password',
  },
  render: (args) => (
    <div className="w-[300px]">
      <Input {...args} />
    </div>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByPlaceholderText('Enter password')).toBeInTheDocument();
  },
};

/**
 * File input.
 */
export const File: Story = {
  args: {
    type: 'file',
  },
  render: (args) => (
    <div className="w-[300px]">
      <Input {...args} />
    </div>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByDisplayValue('')).toBeInTheDocument();
  },
};

/**
 * Disabled input.
 */
export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Disabled input',
  },
  render: (args) => (
    <div className="w-[300px]">
      <Input {...args} />
    </div>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByPlaceholderText('Disabled input')).toBeDisabled();
  },
};
