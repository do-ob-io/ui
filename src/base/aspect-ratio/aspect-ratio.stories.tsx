import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import { AspectRatio } from './aspect-ratio.js';

const meta = {
  component: AspectRatio,
  parameters: {
    layout: 'padded',
  },
  tags: [ 'autodocs' ],
} satisfies Meta<typeof AspectRatio>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default 16:9 aspect ratio container.
 */
export const Default: Story = {
  args: {
    ratio: 16 / 9,
  },
  render: (args) => (
    <div className="w-[450px]">
      <AspectRatio {...args}>
        <div className="flex h-full w-full items-center justify-center rounded-md bg-muted text-muted-foreground">
          16:9
        </div>
      </AspectRatio>
    </div>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText('16:9')).toBeVisible();
  },
};

/**
 * Square 1:1 aspect ratio.
 */
export const Square: Story = {
  args: {
    ratio: 1,
  },
  render: (args) => (
    <div className="w-[200px]">
      <AspectRatio {...args}>
        <div className="flex h-full w-full items-center justify-center rounded-md bg-muted text-muted-foreground">
          1:1
        </div>
      </AspectRatio>
    </div>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText('1:1')).toBeVisible();
  },
};

/**
 * 4:3 aspect ratio for photo content.
 */
export const Photo: Story = {
  args: {
    ratio: 4 / 3,
  },
  render: (args) => (
    <div className="w-[300px]">
      <AspectRatio {...args}>
        <div className="flex h-full w-full items-center justify-center rounded-md bg-muted text-muted-foreground">
          4:3
        </div>
      </AspectRatio>
    </div>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText('4:3')).toBeVisible();
  },
};
