import type { Meta, StoryObj } from '@storybook/react-vite';
import { InboxIcon } from 'lucide-react';
import { expect } from 'storybook/test';

import { Button } from '../button/button.js';

import {
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
  EmptyMedia,
} from './empty.js';

const meta = {
  component: Empty,
  parameters: {
    layout: 'padded',
  },
  tags: [ 'autodocs' ],
} satisfies Meta<typeof Empty>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default empty state with title and description.
 */
export const Default: Story = {
  render: (args) => (
    <Empty {...args}>
      <EmptyHeader>
        <EmptyTitle>No results found</EmptyTitle>
        <EmptyDescription>
          Try adjusting your search or filter to find what you are looking for.
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText('No results found')).toBeVisible();
    await expect(canvas.getByText(/Try adjusting your search/)).toBeVisible();
  },
};

/**
 * Empty state with an icon media variant.
 */
export const WithIcon: Story = {
  render: (args) => (
    <Empty {...args}>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <InboxIcon />
        </EmptyMedia>
        <EmptyTitle>No messages</EmptyTitle>
        <EmptyDescription>Your inbox is empty.</EmptyDescription>
      </EmptyHeader>
    </Empty>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText('No messages')).toBeVisible();
  },
};

/**
 * Empty state with action content.
 */
export const WithAction: Story = {
  render: (args) => (
    <Empty {...args}>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <InboxIcon />
        </EmptyMedia>
        <EmptyTitle>No items yet</EmptyTitle>
        <EmptyDescription>Get started by creating your first item.</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>Create Item</Button>
      </EmptyContent>
    </Empty>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText('No items yet')).toBeVisible();
    await expect(canvas.getByText('Create Item')).toBeVisible();
  },
};
