import type { Meta, StoryObj } from '@storybook/react-vite';
import { CalendarIcon, SmileIcon, CalculatorIcon, SettingsIcon } from 'lucide-react';
import { expect, userEvent } from 'storybook/test';

import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
  CommandShortcut,
} from './command.js';

const meta = {
  component: Command,
  parameters: {
    layout: 'centered',
  },
  tags: [ 'autodocs' ],
} satisfies Meta<typeof Command>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default command palette.
 */
export const Default: Story = {
  render: (args) => (
    <Command className="rounded-lg border shadow-md w-87.5" {...args}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <CalendarIcon />
            <span>Calendar</span>
          </CommandItem>
          <CommandItem>
            <SmileIcon />
            <span>Search Emoji</span>
          </CommandItem>
          <CommandItem>
            <CalculatorIcon />
            <span>Calculator</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <SettingsIcon />
            <span>Settings</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Calendar')).toBeVisible();
    await expect(canvas.getByText('Settings')).toBeVisible();
  },
};

/**
 * Tests filtering items in the command palette.
 */
export const FilterItems: Story = {
  render: (args) => (
    <Command className="rounded-lg border shadow-md w-87.5" {...args}>
      <CommandInput placeholder="Search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Actions">
          <CommandItem>
            <CalendarIcon />
            <span>Calendar</span>
          </CommandItem>
          <CommandItem>
            <CalculatorIcon />
            <span>Calculator</span>
          </CommandItem>
          <CommandItem>
            <SettingsIcon />
            <span>Settings</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
  play: async ({ canvas }) => {
    const input = canvas.getByPlaceholderText('Search...');
    await userEvent.type(input, 'Cal');
    await expect(canvas.getByText('Calendar')).toBeVisible();
    await expect(canvas.getByText('Calculator')).toBeVisible();
  },
};

/**
 * Command with shortcuts display.
 */
export const WithShortcuts: Story = {
  render: (args) => (
    <Command className="rounded-lg border shadow-md w-87.5" {...args}>
      <CommandInput placeholder="Type a command..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Actions">
          <CommandItem>
            <span>New File</span>
            <CommandShortcut>⌘N</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <span>Open File</span>
            <CommandShortcut>⌘O</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <span>Save</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText('⌘N')).toBeVisible();
    await expect(canvas.getByText('⌘O')).toBeVisible();
    await expect(canvas.getByText('⌘S')).toBeVisible();
  },
};
