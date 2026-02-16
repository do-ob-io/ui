import type { Meta, StoryObj } from '@storybook/react-vite';
import { toast } from 'sonner';
import { expect, userEvent, screen } from 'storybook/test';

import { Button } from '../button/button.js';

import { Toaster } from './sonner.js';

const meta = {
  component: Toaster,
  parameters: {
    layout: 'centered',
  },
  tags: [ 'autodocs' ],
  decorators: [
    (Story) => (
      // Wrap since Toaster relies on next-themes; provide fallback
      <div>
        <Story />
        <Toaster />
      </div>
    ),
  ],
} satisfies Meta<typeof Toaster>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default toast notification.
 */
export const Default: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() => toast('Event has been created.')}
    >
      Show Toast
    </Button>
  ),
  play: async ({ canvas }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Show Toast' }));
    await expect(screen.getByText('Event has been created.')).toBeVisible();
  },
};

/**
 * Success toast notification.
 */
export const Success: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() => toast.success('Successfully saved!')}
    >
      Show Success
    </Button>
  ),
  play: async ({ canvas }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Show Success' }));
    await expect(screen.getByText('Successfully saved!')).toBeVisible();
  },
};

/**
 * Error toast notification.
 */
export const Error: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() => toast.error('Something went wrong.')}
    >
      Show Error
    </Button>
  ),
  play: async ({ canvas }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Show Error' }));
    await expect(screen.getByText('Something went wrong.')).toBeVisible();
  },
};

/**
 * Toast with description and action.
 */
export const WithDescription: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() =>
        toast('Scheduled', {
          description: 'Meeting at 3:00 PM today.',
        })
      }
    >
      Show Detailed Toast
    </Button>
  ),
  play: async ({ canvas }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Show Detailed Toast' }));
    await expect(screen.getByText('Scheduled')).toBeVisible();
    await expect(screen.getByText('Meeting at 3:00 PM today.')).toBeVisible();
  },
};
