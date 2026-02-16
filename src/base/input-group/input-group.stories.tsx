import type { Meta, StoryObj } from '@storybook/react-vite';
import { SearchIcon, MailIcon } from 'lucide-react';
import { expect } from 'storybook/test';

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupInput,
  InputGroupTextarea,
} from './input-group.js';

const meta = {
  component: InputGroup,
  parameters: {
    layout: 'centered',
  },
  tags: [ 'autodocs' ],
} satisfies Meta<typeof InputGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default input group with a leading icon addon.
 */
export const Default: Story = {
  render: (args) => (
    <div className="w-[350px]">
      <InputGroup {...args}>
        <InputGroupAddon align="inline-start">
          <SearchIcon />
        </InputGroupAddon>
        <InputGroupInput placeholder="Search..." />
      </InputGroup>
    </div>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByPlaceholderText('Search...')).toBeInTheDocument();
  },
};

/**
 * Input group with trailing text addon.
 */
export const WithTrailingText: Story = {
  render: (args) => (
    <div className="w-[350px]">
      <InputGroup {...args}>
        <InputGroupInput placeholder="0.00" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>USD</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText('USD')).toBeVisible();
    await expect(canvas.getByPlaceholderText('0.00')).toBeInTheDocument();
  },
};

/**
 * Input group with a button addon.
 */
export const WithButton: Story = {
  render: (args) => (
    <div className="w-[350px]">
      <InputGroup {...args}>
        <InputGroupAddon align="inline-start">
          <MailIcon />
        </InputGroupAddon>
        <InputGroupInput placeholder="Email address" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton>Subscribe</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByPlaceholderText('Email address')).toBeInTheDocument();
    await expect(canvas.getByText('Subscribe')).toBeVisible();
  },
};

/**
 * Input group with a textarea.
 */
export const WithTextarea: Story = {
  render: (args) => (
    <div className="w-[350px]">
      <InputGroup {...args}>
        <InputGroupTextarea placeholder="Write a message..." />
      </InputGroup>
    </div>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByPlaceholderText('Write a message...')).toBeInTheDocument();
  },
};
