import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, screen, userEvent } from 'storybook/test';

import { Button } from '../button/button.js';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './tooltip.js';

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: [ 'autodocs' ],
  decorators: [
    (Story) => (
      <TooltipProvider>
        <Story />
      </TooltipProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default tooltip on hover.
 */
export const Default: Story = {
  render: (args) => (
    <Tooltip {...args}>
      <TooltipTrigger render={<Button variant="outline" />}>
        Hover me
      </TooltipTrigger>
      <TooltipContent>
        <p>Tooltip content</p>
      </TooltipContent>
    </Tooltip>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('button', { name: 'Hover me' })).toBeInTheDocument();
  },
};

/**
 * Tests hovering to show tooltip content.
 */
export const HoverInteraction: Story = {
  render: (args) => (
    <Tooltip {...args}>
      <TooltipTrigger render={<Button variant="outline" />}>
        Hover for info
      </TooltipTrigger>
      <TooltipContent>
        <p>This is helpful information.</p>
      </TooltipContent>
    </Tooltip>
  ),
  play: async ({ canvas }) => {
    await userEvent.hover(canvas.getByRole('button', { name: 'Hover for info' }));
    await expect(screen.getByText('This is helpful information.')).toBeVisible();
  },
};

/**
 * Tooltip positioned on the bottom.
 */
export const BottomSide: Story = {
  render: (args) => (
    <Tooltip {...args}>
      <TooltipTrigger render={<Button variant="outline" />}>
        Bottom tooltip
      </TooltipTrigger>
      <TooltipContent side="bottom">
        <p>Appears below</p>
      </TooltipContent>
    </Tooltip>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('button', { name: 'Bottom tooltip' })).toBeInTheDocument();
  },
};
