import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent } from 'storybook/test';

import { Label } from '../label/label.js';

import { Switch } from './switch.js';

const meta = {
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: [ 'autodocs' ],
  argTypes: {
    size: {
      control: 'select',
      options: [ 'default', 'sm' ],
    },
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default switch toggle.
 */
export const Default: Story = {
  render: (args) => (
    <div className="flex items-center gap-2">
      <Switch id="switch-default" {...args} />
      <Label htmlFor="switch-default">Notifications</Label>
    </div>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('switch')).toBeInTheDocument();
    await expect(canvas.getByText('Notifications')).toBeVisible();
  },
};

/**
 * Tests toggling the switch on and off.
 */
export const ToggleInteraction: Story = {
  render: (args) => (
    <div className="flex items-center gap-2">
      <Switch id="switch-toggle" {...args} />
      <Label htmlFor="switch-toggle">Toggle me</Label>
    </div>
  ),
  play: async ({ canvas }) => {
    const switchEl = canvas.getByRole('switch');
    await userEvent.click(switchEl);
    await expect(switchEl).toBeChecked();
    await userEvent.click(switchEl);
    await expect(switchEl).not.toBeChecked();
  },
};

/**
 * Small size switch.
 */
export const Small: Story = {
  render: (args) => (
    <div className="flex items-center gap-2">
      <Switch id="switch-sm" size="sm" {...args} />
      <Label htmlFor="switch-sm">Small switch</Label>
    </div>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('switch')).toBeInTheDocument();
  },
};

/**
 * Disabled switch.
 */
export const Disabled: Story = {
  render: (args) => (
    <div className="flex items-center gap-2">
      <Switch id="switch-disabled" disabled {...args} />
      <Label htmlFor="switch-disabled">Disabled</Label>
    </div>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('switch')).toBeDisabled();
  },
};

/**
 * Switch checked by default.
 */
export const DefaultChecked: Story = {
  render: (args) => (
    <div className="flex items-center gap-2">
      <Switch id="switch-checked" defaultChecked {...args} />
      <Label htmlFor="switch-checked">Enabled</Label>
    </div>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('switch')).toBeChecked();
  },
};
