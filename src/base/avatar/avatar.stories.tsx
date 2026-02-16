import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import { Avatar, AvatarFallback, AvatarGroup, AvatarGroupCount, AvatarBadge } from './avatar.js';

const meta = {
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: [ 'autodocs' ],
  argTypes: {
    size: {
      control: 'select',
      options: [ 'default', 'sm', 'lg' ],
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default avatar with fallback initials.
 */
export const Default: Story = {
  render: (args) => (
    <Avatar {...args}>
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText('JD')).toBeVisible();
  },
};

/**
 * Small avatar size.
 */
export const Small: Story = {
  render: (args) => (
    <Avatar size="sm" {...args}>
      <AvatarFallback>SM</AvatarFallback>
    </Avatar>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText('SM')).toBeVisible();
  },
};

/**
 * Large avatar size.
 */
export const Large: Story = {
  render: (args) => (
    <Avatar size="lg" {...args}>
      <AvatarFallback>LG</AvatarFallback>
    </Avatar>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText('LG')).toBeVisible();
  },
};

/**
 * Avatar with a status badge indicator.
 */
export const WithBadge: Story = {
  render: (args) => (
    <Avatar {...args}>
      <AvatarFallback>AB</AvatarFallback>
      <AvatarBadge />
    </Avatar>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText('AB')).toBeVisible();
  },
};

/**
 * Group of avatars stacked together.
 */
export const Group: Story = {
  render: () => (
    <AvatarGroup>
      <Avatar>
        <AvatarFallback>A</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>B</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>C</AvatarFallback>
      </Avatar>
      <AvatarGroupCount>+3</AvatarGroupCount>
    </AvatarGroup>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText('A')).toBeVisible();
    await expect(canvas.getByText('B')).toBeVisible();
    await expect(canvas.getByText('C')).toBeVisible();
    await expect(canvas.getByText('+3')).toBeVisible();
  },
};
