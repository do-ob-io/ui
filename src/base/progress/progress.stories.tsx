import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import { Progress, ProgressLabel, ProgressValue } from './progress.js';

const meta = {
  component: Progress,
  parameters: {
    layout: 'padded',
  },
  tags: [ 'autodocs' ],
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default progress bar at 50%.
 */
export const Default: Story = {
  args: {
    value: 50,
  },
  render: (args) => (
    <div className="w-[400px]">
      <Progress {...args} />
    </div>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('progressbar')).toBeInTheDocument();
  },
};

/**
 * Progress at 0%.
 */
export const Empty: Story = {
  args: {
    value: 0,
  },
  render: (args) => (
    <div className="w-[400px]">
      <Progress {...args} />
    </div>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('progressbar')).toBeInTheDocument();
  },
};

/**
 * Progress at 100%.
 */
export const Complete: Story = {
  args: {
    value: 100,
  },
  render: (args) => (
    <div className="w-[400px]">
      <Progress {...args} />
    </div>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('progressbar')).toBeInTheDocument();
  },
};

/**
 * Progress with label and value display.
 */
export const WithLabel: Story = {
  args: {
    value: 66,
  },
  render: (args) => (
    <div className="w-[400px]">
      <Progress {...args}>
        <ProgressLabel>Uploading...</ProgressLabel>
        <ProgressValue />
      </Progress>
    </div>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Uploading...')).toBeVisible();
    await expect(canvas.getByRole('progressbar')).toBeInTheDocument();
  },
};
