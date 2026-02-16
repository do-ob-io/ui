import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, screen, userEvent } from 'storybook/test';

import { Button } from '../button/button.js';

import { Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverTitle, PopoverDescription } from './popover.js';

const meta = {
  component: Popover,
  parameters: {
    layout: 'centered',
  },
  tags: [ 'autodocs' ],
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default popover with trigger button.
 */
export const Default: Story = {
  render: (args) => (
    <Popover {...args}>
      <PopoverTrigger render={<Button variant="outline" />}>
        Open Popover
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader>
          <PopoverTitle>Popover Title</PopoverTitle>
          <PopoverDescription>This is some popover content.</PopoverDescription>
        </PopoverHeader>
        <p className="text-sm">Additional content goes here.</p>
      </PopoverContent>
    </Popover>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('button', { name: 'Open Popover' })).toBeInTheDocument();
  },
};

/**
 * Tests opening the popover.
 */
export const OpenPopover: Story = {
  render: (args) => (
    <Popover {...args}>
      <PopoverTrigger render={<Button />}>
        Click me
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader>
          <PopoverTitle>Info</PopoverTitle>
          <PopoverDescription>Popover is now open.</PopoverDescription>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  ),
  play: async ({ canvas }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Click me' }));
    await expect(screen.getByText('Info')).toBeVisible();
    await expect(screen.getByText('Popover is now open.')).toBeVisible();
  },
};
