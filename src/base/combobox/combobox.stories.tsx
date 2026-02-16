import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, screen, userEvent } from 'storybook/test';

import {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxList,
  ComboboxItem,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxLabel,
} from './combobox.js';

const meta = {
  component: Combobox,
  parameters: {
    layout: 'centered',
  },
  tags: [ 'autodocs' ],
} satisfies Meta<typeof Combobox>;

export default meta;
type Story = StoryObj<typeof meta>;

const frameworks = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'solid', label: 'Solid' },
];

/**
 * Default combobox with search.
 */
export const Default: Story = {
  render: (args) => (
    <Combobox {...args}>
      <ComboboxInput placeholder="Select framework..." />
      <ComboboxContent>
        <ComboboxList>
          <ComboboxEmpty>No framework found.</ComboboxEmpty>
          {frameworks.map((fw) => (
            <ComboboxItem key={fw.value} value={fw.value}>
              {fw.label}
            </ComboboxItem>
          ))}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByPlaceholderText('Select framework...')).toBeVisible();
  },
};

/**
 * Tests opening and selecting from the combobox.
 */
export const OpenAndSelect: Story = {
  render: (args) => (
    <Combobox {...args}>
      <ComboboxInput placeholder="Choose..." />
      <ComboboxContent>
        <ComboboxList>
          <ComboboxEmpty>No results.</ComboboxEmpty>
          {frameworks.map((fw) => (
            <ComboboxItem key={fw.value} value={fw.value}>
              {fw.label}
            </ComboboxItem>
          ))}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  ),
  play: async ({ canvas }) => {
    await userEvent.click(canvas.getByPlaceholderText('Choose...'));
    await expect(screen.getByText('React')).toBeVisible();
  },
};

/**
 * Combobox with grouped options.
 */
export const Grouped: Story = {
  render: (args) => (
    <Combobox {...args}>
      <ComboboxInput placeholder="Search..." />
      <ComboboxContent>
        <ComboboxList>
          <ComboboxEmpty>No results found.</ComboboxEmpty>
          <ComboboxGroup>
            <ComboboxLabel>Popular</ComboboxLabel>
            <ComboboxItem value="react">React</ComboboxItem>
            <ComboboxItem value="vue">Vue</ComboboxItem>
          </ComboboxGroup>
          <ComboboxGroup>
            <ComboboxLabel>Emerging</ComboboxLabel>
            <ComboboxItem value="svelte">Svelte</ComboboxItem>
            <ComboboxItem value="solid">Solid</ComboboxItem>
          </ComboboxGroup>
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByPlaceholderText('Search...')).toBeVisible();
  },
};
