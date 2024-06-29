import type { Meta, StoryObj } from '@storybook/react';

import { Drawer } from './Drawer';

const meta = {
  component: Drawer,
} satisfies Meta<typeof Drawer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (<>
    <h1>Use the story controls to open and close the drawer.</h1>
    <Drawer {...args} />
  </>),
  args: {
    open: true,
  }
};
