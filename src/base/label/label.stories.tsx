import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import { Label } from './label.js';

const meta = {
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: [ 'autodocs' ],
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default label element.
 */
export const Default: Story = {
  args: {
    children: 'Email address',
    htmlFor: 'email',
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Email address')).toBeVisible();
  },
};

/**
 * Label associated with an input.
 */
export const WithInput: Story = {
  render: (args) => (
    <div className="grid gap-2 w-[300px]">
      <Label htmlFor="name" {...args}>Full Name</Label>
      <input id="name" className="border rounded-md px-2 py-1 text-sm" placeholder="Enter name" />
    </div>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Full Name')).toBeVisible();
    await expect(canvas.getByPlaceholderText('Enter name')).toBeInTheDocument();
  },
};
