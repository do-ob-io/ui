import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import { Skeleton } from './skeleton.js';

const meta = {
  component: Skeleton,
  parameters: {
    layout: 'centered',
  },
  tags: [ 'autodocs' ],
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default skeleton placeholder.
 */
export const Default: Story = {
  render: (args) => (
    <div className="flex items-center gap-4">
      <Skeleton className="size-12 rounded-full" {...args} />
      <div className="space-y-2">
        <Skeleton className="h-4 w-62.5" {...args} />
        <Skeleton className="h-4 w-50" {...args} />
      </div>
    </div>
  ),
  play: async ({ canvas }) => {
    const container = canvas.getByText('', { selector: '[data-slot="skeleton"]' });
    await expect(container).toBeInTheDocument();
  },
};

/**
 * Card skeleton placeholder.
 */
export const CardSkeleton: Story = {
  render: (args) => (
    <div className="flex flex-col gap-3 w-75">
      <Skeleton className="h-31.25 w-full rounded-xl" {...args} />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" {...args} />
        <Skeleton className="h-4 w-3/4" {...args} />
      </div>
    </div>
  ),
  play: async ({ canvas }) => {
    const skeletons = canvas.getAllByRole('generic');
    await expect(skeletons.length).toBeGreaterThan(0);
  },
};
