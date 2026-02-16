import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent } from 'storybook/test';

import { Label } from '../label/label.js';

import { Checkbox } from './checkbox.js';

const meta = {
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: [ 'autodocs' ],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default unchecked checkbox.
 */
export const Default: Story = {
  render: (args) => (
    <div className="flex items-center gap-2">
      <Checkbox id="default-cb" {...args} />
      <Label htmlFor="default-cb">Accept terms</Label>
    </div>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('checkbox')).toBeInTheDocument();
    await expect(canvas.getByText('Accept terms')).toBeVisible();
  },
};

/**
 * Tests toggling the checkbox on and off.
 */
export const ToggleInteraction: Story = {
  render: (args) => (
    <div className="flex items-center gap-2">
      <Checkbox id="toggle-cb" {...args} />
      <Label htmlFor="toggle-cb">Toggle me</Label>
    </div>
  ),
  play: async ({ canvas }) => {
    const checkbox = canvas.getByRole('checkbox');
    await userEvent.click(checkbox);
    await expect(checkbox).toBeChecked();
    await userEvent.click(checkbox);
    await expect(checkbox).not.toBeChecked();
  },
};

/**
 * Disabled checkbox.
 */
export const Disabled: Story = {
  render: (args) => (
    <div className="flex items-center gap-2">
      <Checkbox id="disabled-cb" disabled {...args} />
      <Label htmlFor="disabled-cb">Disabled</Label>
    </div>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('checkbox')).toBeDisabled();
  },
};

/**
 * Checkbox checked by default.
 */
export const Checked: Story = {
  render: (args) => (
    <div className="flex items-center gap-2">
      <Checkbox id="checked-cb" defaultChecked {...args} />
      <Label htmlFor="checked-cb">Checked by default</Label>
    </div>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('checkbox')).toBeChecked();
  },
};
