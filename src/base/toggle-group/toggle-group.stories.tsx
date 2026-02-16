import type { Meta, StoryObj } from '@storybook/react-vite';
import { BoldIcon, ItalicIcon, UnderlineIcon, AlignLeftIcon, AlignCenterIcon, AlignRightIcon } from 'lucide-react';
import { expect, userEvent } from 'storybook/test';

import { ToggleGroup, ToggleGroupItem } from './toggle-group.js';

const meta = {
  component: ToggleGroup,
  parameters: {
    layout: 'centered',
  },
  tags: [ 'autodocs' ],
} satisfies Meta<typeof ToggleGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default toggle group with multiple items.
 */
export const Default: Story = {
  render: (args) => (
    <ToggleGroup {...args}>
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <BoldIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <ItalicIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline">
        <UnderlineIcon />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('button', { name: 'Toggle bold' })).toBeInTheDocument();
    await expect(canvas.getByRole('button', { name: 'Toggle italic' })).toBeInTheDocument();
    await expect(canvas.getByRole('button', { name: 'Toggle underline' })).toBeInTheDocument();
  },
};

/**
 * Tests selecting a toggle group item.
 */
export const SelectItem: Story = {
  render: (args) => (
    <ToggleGroup {...args}>
      <ToggleGroupItem value="left" aria-label="Align left">
        <AlignLeftIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Align center">
        <AlignCenterIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Align right">
        <AlignRightIcon />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
  play: async ({ canvas }) => {
    const centerBtn = canvas.getByRole('button', { name: 'Align center' });
    await userEvent.click(centerBtn);
    await expect(centerBtn).toHaveAttribute('aria-pressed', 'true');
  },
};

/**
 * Outline variant toggle group.
 */
export const Outline: Story = {
  render: (args) => (
    <ToggleGroup variant="outline" {...args}>
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <BoldIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <ItalicIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline">
        <UnderlineIcon />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('button', { name: 'Toggle bold' })).toBeInTheDocument();
  },
};

/**
 * Vertical orientation toggle group.
 */
export const Vertical: Story = {
  render: (args) => (
    <ToggleGroup orientation="vertical" {...args}>
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <BoldIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <ItalicIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline">
        <UnderlineIcon />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('button', { name: 'Toggle bold' })).toBeInTheDocument();
  },
};
