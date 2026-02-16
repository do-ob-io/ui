import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import { NativeSelect, NativeSelectOption, NativeSelectOptGroup } from './native-select.js';

const meta = {
  component: NativeSelect,
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
} satisfies Meta<typeof NativeSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default native select with options.
 */
export const Default: Story = {
  render: (args) => (
    <NativeSelect {...args}>
      <NativeSelectOption value="">Select an option</NativeSelectOption>
      <NativeSelectOption value="1">Option 1</NativeSelectOption>
      <NativeSelectOption value="2">Option 2</NativeSelectOption>
      <NativeSelectOption value="3">Option 3</NativeSelectOption>
    </NativeSelect>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('combobox')).toBeInTheDocument();
  },
};

/**
 * Small size native select.
 */
export const Small: Story = {
  render: (args) => (
    <NativeSelect size="sm" {...args}>
      <NativeSelectOption value="a">Alpha</NativeSelectOption>
      <NativeSelectOption value="b">Beta</NativeSelectOption>
      <NativeSelectOption value="c">Gamma</NativeSelectOption>
    </NativeSelect>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('combobox')).toBeInTheDocument();
  },
};

/**
 * Native select with option groups.
 */
export const WithGroups: Story = {
  render: (args) => (
    <NativeSelect {...args}>
      <NativeSelectOptGroup label="Fruits">
        <NativeSelectOption value="apple">Apple</NativeSelectOption>
        <NativeSelectOption value="banana">Banana</NativeSelectOption>
      </NativeSelectOptGroup>
      <NativeSelectOptGroup label="Vegetables">
        <NativeSelectOption value="carrot">Carrot</NativeSelectOption>
        <NativeSelectOption value="spinach">Spinach</NativeSelectOption>
      </NativeSelectOptGroup>
    </NativeSelect>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('combobox')).toBeInTheDocument();
  },
};

/**
 * Disabled native select.
 */
export const Disabled: Story = {
  render: (args) => (
    <NativeSelect disabled {...args}>
      <NativeSelectOption value="1">Option 1</NativeSelectOption>
      <NativeSelectOption value="2">Option 2</NativeSelectOption>
    </NativeSelect>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('combobox')).toBeDisabled();
  },
};
