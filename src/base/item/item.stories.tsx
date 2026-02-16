import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import { Avatar, AvatarFallback } from '../avatar/avatar.js';
import { Button } from '../button/button.js';

import {
  Item,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemMedia,
  ItemActions,
  ItemGroup,
  ItemSeparator,
} from './item.js';

const meta = {
  component: Item,
  parameters: {
    layout: 'padded',
  },
  tags: [ 'autodocs' ],
  argTypes: {
    variant: {
      control: 'select',
      options: [ 'default', 'outline', 'muted' ],
    },
    size: {
      control: 'select',
      options: [ 'default', 'sm', 'xs' ],
    },
  },
} satisfies Meta<typeof Item>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default item with title and description.
 */
export const Default: Story = {
  render: (args) => (
    <div className="w-[400px]">
      <Item {...args}>
        <ItemContent>
          <ItemTitle>Item Title</ItemTitle>
          <ItemDescription>Item description text goes here.</ItemDescription>
        </ItemContent>
      </Item>
    </div>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Item Title')).toBeVisible();
    await expect(canvas.getByText('Item description text goes here.')).toBeVisible();
  },
};

/**
 * Item with icon media variant.
 */
export const WithMedia: Story = {
  render: (args) => (
    <div className="w-[400px]">
      <Item {...args}>
        <ItemMedia variant="image">
          <Avatar>
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>John Doe</ItemTitle>
          <ItemDescription>Software Engineer</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm">View</Button>
        </ItemActions>
      </Item>
    </div>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText('John Doe')).toBeVisible();
    await expect(canvas.getByText('View')).toBeVisible();
  },
};

/**
 * Outline variant item.
 */
export const Outline: Story = {
  render: (args) => (
    <div className="w-[400px]">
      <Item variant="outline" {...args}>
        <ItemContent>
          <ItemTitle>Outline Item</ItemTitle>
          <ItemDescription>This item has a border.</ItemDescription>
        </ItemContent>
      </Item>
    </div>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Outline Item')).toBeVisible();
  },
};

/**
 * Group of items with separators.
 */
export const GroupWithSeparators: Story = {
  render: () => (
    <div className="w-[400px]">
      <ItemGroup>
        <Item>
          <ItemContent>
            <ItemTitle>First Item</ItemTitle>
            <ItemDescription>Description for first item.</ItemDescription>
          </ItemContent>
        </Item>
        <ItemSeparator />
        <Item>
          <ItemContent>
            <ItemTitle>Second Item</ItemTitle>
            <ItemDescription>Description for second item.</ItemDescription>
          </ItemContent>
        </Item>
        <ItemSeparator />
        <Item>
          <ItemContent>
            <ItemTitle>Third Item</ItemTitle>
            <ItemDescription>Description for third item.</ItemDescription>
          </ItemContent>
        </Item>
      </ItemGroup>
    </div>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText('First Item')).toBeVisible();
    await expect(canvas.getByText('Second Item')).toBeVisible();
    await expect(canvas.getByText('Third Item')).toBeVisible();
  },
};

/**
 * Small size item variant.
 */
export const SmallSize: Story = {
  render: (args) => (
    <div className="w-[400px]">
      <Item size="sm" {...args}>
        <ItemContent>
          <ItemTitle>Small Item</ItemTitle>
          <ItemDescription>Compact item layout.</ItemDescription>
        </ItemContent>
      </Item>
    </div>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Small Item')).toBeVisible();
  },
};
