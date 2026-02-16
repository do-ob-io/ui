import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import { Separator } from '../separator/separator.js';

import { ScrollArea, ScrollBar } from './scroll-area.js';

const meta = {
  component: ScrollArea,
  parameters: {
    layout: 'centered',
  },
  tags: [ 'autodocs' ],
} satisfies Meta<typeof ScrollArea>;

export default meta;
type Story = StoryObj<typeof meta>;

const tags = Array.from({ length: 50 }).map(
  (_, i) => `Item ${i + 1}`,
);

/**
 * Default vertical scroll area with a list of items.
 */
export const Default: Story = {
  render: (args) => (
    <ScrollArea className="h-72 w-48 rounded-md border" {...args}>
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
        {tags.map((tag) => (
          <div key={tag}>
            <div className="text-sm">{tag}</div>
            <Separator className="my-2" />
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Tags')).toBeVisible();
    await expect(canvas.getByText('Item 1')).toBeVisible();
  },
};

/**
 * Horizontal scroll area.
 */
export const Horizontal: Story = {
  render: (args) => (
    <ScrollArea className="w-96 rounded-md border whitespace-nowrap" {...args}>
      <div className="flex w-max space-x-4 p-4">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="flex h-20 w-32 shrink-0 items-center justify-center rounded-md border bg-muted"
          >
            Card {i + 1}
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Card 1')).toBeVisible();
  },
};
