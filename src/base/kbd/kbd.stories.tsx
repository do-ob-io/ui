import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import { Kbd, KbdGroup } from './kbd.js';

const meta = {
  component: Kbd,
  parameters: {
    layout: 'centered',
  },
  tags: [ 'autodocs' ],
} satisfies Meta<typeof Kbd>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default keyboard shortcut display.
 */
export const Default: Story = {
  args: {
    children: '⌘',
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText('⌘')).toBeVisible();
  },
};

/**
 * Keyboard shortcut group showing a combination.
 */
export const ShortcutGroup: Story = {
  render: () => (
    <KbdGroup>
      <Kbd>⌘</Kbd>
      <Kbd>K</Kbd>
    </KbdGroup>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText('⌘')).toBeVisible();
    await expect(canvas.getByText('K')).toBeVisible();
  },
};

/**
 * Multiple key combinations.
 */
export const MultipleKeys: Story = {
  render: () => (
    <div className="flex gap-4">
      <KbdGroup>
        <Kbd>Ctrl</Kbd>
        <Kbd>C</Kbd>
      </KbdGroup>
      <KbdGroup>
        <Kbd>Ctrl</Kbd>
        <Kbd>V</Kbd>
      </KbdGroup>
      <KbdGroup>
        <Kbd>Ctrl</Kbd>
        <Kbd>Shift</Kbd>
        <Kbd>P</Kbd>
      </KbdGroup>
    </div>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText('C')).toBeVisible();
    await expect(canvas.getByText('V')).toBeVisible();
    await expect(canvas.getByText('P')).toBeVisible();
  },
};
