import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import { Separator } from './separator.js';

const meta = {
  component: Separator,
  parameters: {
    layout: 'centered',
  },
  tags: [ 'autodocs' ],
  argTypes: {
    orientation: {
      control: 'select',
      options: [ 'horizontal', 'vertical' ],
    },
  },
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default horizontal separator.
 */
export const Default: Story = {
  render: (args) => (
    <div className="w-[300px]">
      <div className="text-sm">Above</div>
      <Separator className="my-4" {...args} />
      <div className="text-sm">Below</div>
    </div>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('separator')).toBeInTheDocument();
    await expect(canvas.getByText('Above')).toBeVisible();
    await expect(canvas.getByText('Below')).toBeVisible();
  },
};

/**
 * Vertical separator between inline elements.
 */
export const Vertical: Story = {
  render: (args) => (
    <div className="flex h-5 items-center gap-4 text-sm">
      <span>Left</span>
      <Separator orientation="vertical" {...args} />
      <span>Right</span>
    </div>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('separator')).toBeInTheDocument();
    await expect(canvas.getByText('Left')).toBeVisible();
    await expect(canvas.getByText('Right')).toBeVisible();
  },
};
