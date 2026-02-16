import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import { Spinner } from './spinner.js';

const meta = {
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  tags: [ 'autodocs' ],
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default loading spinner.
 */
export const Default: Story = {
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('status')).toBeInTheDocument();
  },
};

/**
 * Large spinner.
 */
export const Large: Story = {
  args: {
    className: 'size-8',
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('status')).toBeInTheDocument();
  },
};

/**
 * Small spinner.
 */
export const Small: Story = {
  args: {
    className: 'size-3',
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('status')).toBeInTheDocument();
  },
};
