import type { Meta, StoryObj } from '@storybook/react-vite';
import { ChevronsUpDownIcon } from 'lucide-react';
import { expect, userEvent } from 'storybook/test';

import { Button } from '../button/button.js';

import { Collapsible, CollapsibleTrigger, CollapsibleContent } from './collapsible.js';

const meta = {
  component: Collapsible,
  parameters: {
    layout: 'padded',
  },
  tags: [ 'autodocs' ],
} satisfies Meta<typeof Collapsible>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default collapsible section.
 */
export const Default: Story = {
  render: (args) => (
    <Collapsible className="w-87.5 space-y-2" {...args}>
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-semibold">Collapsible Section</h4>
        <CollapsibleTrigger render={<Button variant="ghost" size="icon-sm" />}>
          <ChevronsUpDownIcon className="size-4" />
          <span className="sr-only">Toggle</span>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-4 py-2 text-sm">
        Always visible content
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-2 text-sm">
          Hidden content 1
        </div>
        <div className="rounded-md border px-4 py-2 text-sm">
          Hidden content 2
        </div>
      </CollapsibleContent>
    </Collapsible>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Collapsible Section')).toBeVisible();
    await expect(canvas.getByText('Always visible content')).toBeVisible();
  },
};

/**
 * Tests expanding the collapsible content.
 */
export const ExpandInteraction: Story = {
  render: (args) => (
    <Collapsible className="w-87.5 space-y-2" {...args}>
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-semibold">Click to expand</h4>
        <CollapsibleTrigger render={<Button variant="ghost" size="icon-sm" />}>
          <ChevronsUpDownIcon className="size-4" />
          <span className="sr-only">Toggle</span>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-2 text-sm">
          Expanded content
        </div>
      </CollapsibleContent>
    </Collapsible>
  ),
  play: async ({ canvas }) => {
    const trigger = canvas.getByRole('button', { name: 'Toggle' });
    await userEvent.click(trigger);
    await expect(canvas.getByText('Expanded content')).toBeVisible();
  },
};

/**
 * Collapsible open by default.
 */
export const DefaultOpen: Story = {
  render: (args) => (
    <Collapsible defaultOpen className="w-87.5 space-y-2" {...args}>
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-semibold">Open by default</h4>
        <CollapsibleTrigger render={<Button variant="ghost" size="icon-sm" />}>
          <ChevronsUpDownIcon className="size-4" />
          <span className="sr-only">Toggle</span>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-2 text-sm">
          Visible from start
        </div>
      </CollapsibleContent>
    </Collapsible>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Visible from start')).toBeVisible();
  },
};
