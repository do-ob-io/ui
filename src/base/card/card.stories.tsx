import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import { Button } from '../button/button.js';

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
} from './card.js';

const meta = {
  component: Card,
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
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default card with header, content, and footer.
 */
export const Default: Story = {
  render: (args) => (
    <Card className="w-[350px]" {...args}>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content area with some example text.</p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Card Title')).toBeVisible();
    await expect(canvas.getByText('Card description goes here')).toBeVisible();
    await expect(canvas.getByText('Card content area with some example text.')).toBeVisible();
  },
};

/**
 * Small size card variant.
 */
export const SmallSize: Story = {
  render: (args) => (
    <Card className="w-[300px]" size="sm" {...args}>
      <CardHeader>
        <CardTitle>Small Card</CardTitle>
        <CardDescription>Compact card layout</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Compact content area.</p>
      </CardContent>
    </Card>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Small Card')).toBeVisible();
  },
};

/**
 * Card with an action slot in the header.
 */
export const WithAction: Story = {
  render: (args) => (
    <Card className="w-[350px]" {...args}>
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>You have 3 unread messages</CardDescription>
        <CardAction>
          <Button variant="outline" size="sm">View All</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p>Message list would go here.</p>
      </CardContent>
    </Card>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Notifications')).toBeVisible();
    await expect(canvas.getByText('View All')).toBeVisible();
  },
};
