import type { Meta, StoryObj } from '@storybook/react-vite';
import { MailIcon, PlusIcon } from 'lucide-react';
import { expect, userEvent } from 'storybook/test';

import { Button } from './button.js';

const meta = {
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: [ 'autodocs' ],
  argTypes: {
    variant: {
      control: 'select',
      options: [ 'default', 'outline', 'secondary', 'ghost', 'destructive', 'link' ],
    },
    size: {
      control: 'select',
      options: [ 'default', 'xs', 'sm', 'lg', 'icon', 'icon-xs', 'icon-sm', 'icon-lg' ],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default button with primary styling.
 */
export const Default: Story = {
  args: {
    children: 'Button',
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('button')).toBeInTheDocument();
    await expect(canvas.getByText('Button')).toBeVisible();
  },
};

/**
 * Outline variant button.
 */
export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline',
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('button')).toBeInTheDocument();
    await expect(canvas.getByText('Outline')).toBeVisible();
  },
};

/**
 * Secondary variant button.
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
 * Ghost variant button for subtle interactions.
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
 * Destructive variant for dangerous actions.
 */
export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Delete',
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Delete')).toBeVisible();
  },
};

/**
 * Link variant styled as a text link.
 */
export const LinkVariant: Story = {
  args: {
    variant: 'link',
    children: 'Link Button',
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Link Button')).toBeVisible();
  },
};

/**
 * Button with a leading icon.
 */
export const WithIcon: Story = {
  args: {
    children: (
      <>
        <MailIcon data-icon="inline-start" />
        Send Email
      </>
    ),
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('button')).toBeInTheDocument();
    await expect(canvas.getByText('Send Email')).toBeVisible();
  },
};

/**
 * Icon-only button.
 */
export const IconOnly: Story = {
  args: {
    variant: 'outline',
    size: 'icon',
    children: <PlusIcon />,
    'aria-label': 'Add item',
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('button', { name: 'Add item' })).toBeInTheDocument();
  },
};

/**
 * Small size button.
 */
export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small',
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Small')).toBeVisible();
  },
};

/**
 * Large size button.
 */
export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large',
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Large')).toBeVisible();
  },
};

/**
 * Disabled button state.
 */
export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled',
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('button')).toBeDisabled();
  },
};

/**
 * Tests click interaction on the button.
 */
export const ClickInteraction: Story = {
  args: {
    children: 'Click me',
    onClick: () => { return; },
  },
  play: async ({ canvas, args }) => {
    const button = canvas.getByRole('button');
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalled();
  },
};
