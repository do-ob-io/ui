import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import { Button } from '../button/button.js';

import { ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from './button-group.js';

const meta = {
  component: ButtonGroup,
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
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default horizontal button group.
 */
export const Default: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button variant="outline">Left</Button>
      <Button variant="outline">Center</Button>
      <Button variant="outline">Right</Button>
    </ButtonGroup>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('group')).toBeInTheDocument();
    await expect(canvas.getByText('Left')).toBeVisible();
    await expect(canvas.getByText('Center')).toBeVisible();
    await expect(canvas.getByText('Right')).toBeVisible();
  },
};

/**
 * Vertical button group orientation.
 */
export const Vertical: Story = {
  render: (args) => (
    <ButtonGroup orientation="vertical" {...args}>
      <Button variant="outline">Top</Button>
      <Button variant="outline">Middle</Button>
      <Button variant="outline">Bottom</Button>
    </ButtonGroup>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Top')).toBeVisible();
    await expect(canvas.getByText('Bottom')).toBeVisible();
  },
};

/**
 * Button group with separator between items.
 */
export const WithSeparator: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button variant="outline">Save</Button>
      <ButtonGroupSeparator />
      <Button variant="outline">Cancel</Button>
    </ButtonGroup>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Save')).toBeVisible();
    await expect(canvas.getByText('Cancel')).toBeVisible();
  },
};

/**
 * Button group with a text label.
 */
export const WithText: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <ButtonGroupText>Label</ButtonGroupText>
      <Button variant="outline">Action</Button>
    </ButtonGroup>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Label')).toBeVisible();
    await expect(canvas.getByText('Action')).toBeVisible();
  },
};
