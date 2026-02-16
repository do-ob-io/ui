import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, screen, userEvent } from 'storybook/test';

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectLabel,
  SelectSeparator,
} from './select.js';

const meta = {
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: [ 'autodocs' ],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default select with options.
 */
export const Default: Story = {
  render: (args) => (
    <Select {...args}>
      <SelectTrigger className="w-45">
        <SelectValue>{(value: string | null) => value ?? 'Select a fruit'}</SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="cherry">Cherry</SelectItem>
      </SelectContent>
    </Select>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Select a fruit')).toBeVisible();
  },
};

/**
 * Tests opening the select dropdown.
 */
export const OpenDropdown: Story = {
  render: (args) => (
    <Select {...args}>
      <SelectTrigger className="w-45">
        <SelectValue>{(value: string | null) => value ?? 'Choose...'}</SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="red">Red</SelectItem>
        <SelectItem value="blue">Blue</SelectItem>
        <SelectItem value="green">Green</SelectItem>
      </SelectContent>
    </Select>
  ),
  play: async ({ canvas }) => {
    await userEvent.click(canvas.getByText('Choose...'));
    await expect(screen.getByText('Red')).toBeVisible();
    await expect(screen.getByText('Blue')).toBeVisible();
    await expect(screen.getByText('Green')).toBeVisible();
  },
};

/**
 * Select with grouped options.
 */
export const Grouped: Story = {
  render: (args) => (
    <Select {...args}>
      <SelectTrigger className="w-50">
        <SelectValue>{(value: string | null) => value ?? 'Select...'}</SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Vegetables</SelectLabel>
          <SelectItem value="carrot">Carrot</SelectItem>
          <SelectItem value="lettuce">Lettuce</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Select...')).toBeVisible();
  },
};

/**
 * Small size select trigger.
 */
export const Small: Story = {
  render: (args) => (
    <Select {...args}>
      <SelectTrigger size="sm" className="w-45">
        <SelectValue>{(value: string | null) => value ?? 'Small select'}</SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="a">Option A</SelectItem>
        <SelectItem value="b">Option B</SelectItem>
      </SelectContent>
    </Select>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Small select')).toBeVisible();
  },
};
