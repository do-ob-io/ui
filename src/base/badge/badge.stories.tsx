import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import { Badge } from './badge.js';

const meta = {
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: [ 'autodocs' ],
  argTypes: {
    variant: {
      control: 'select',
      options: [ 'default', 'secondary', 'destructive', 'outline', 'ghost', 'link' ],
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default badge with primary styling.
 */
export const Default: Story = {
  args: {
    children: 'Badge',
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Badge')).toBeVisible();
  },
};

/**
 * Secondary variant badge.
 */
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Secondary')).toBeVisible();
  },
};

/**
 * Destructive variant badge for errors or warnings.
 */
export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Error',
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Error')).toBeVisible();
  },
};

/**
 * Outline variant badge.
 */
export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline',
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Outline')).toBeVisible();
  },
};

/**
 * Ghost variant badge.
 */
export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost',
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Ghost')).toBeVisible();
  },
};

/**
 * Link variant badge.
 */
export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Link',
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Link')).toBeVisible();
  },
};
