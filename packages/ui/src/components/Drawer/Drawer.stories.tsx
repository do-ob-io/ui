import type { Meta, StoryObj } from '@storybook/react';

import { Drawer } from './Drawer';
import { Button } from '@do-ob/ui/components';

const meta = {
  component: Drawer,
} satisfies Meta<typeof Drawer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Controlled: Story = {
  render: function Render(args) {

    return (<>
      <Button dialog="example">Click me</Button>
      <Drawer {...args}>
        <p>Drawer content</p>
        <Button dialog="example">Click me to close</Button>
      </Drawer>
    </>);
  },
  args: {
    id: 'example',
    title: 'Example Drawer',
    dismissable: true,
    direction: 'right',
  }
};

