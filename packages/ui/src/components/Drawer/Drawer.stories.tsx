import type { Meta, StoryObj } from '@storybook/react';

import { Drawer } from './Drawer';
import { Button } from '@do-ob/ui/components';
import { useDrawerControl } from '@do-ob/ui/hooks';

const meta = {
  component: Drawer,
} satisfies Meta<typeof Drawer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Controlled: Story = {
  render: function Render(args) {

    const controllerProps = useDrawerControl('example');

    return (<>
      <Button {...controllerProps}>Click me</Button>
      <Drawer {...args} />
    </>);
  },
  args: {
    name: 'example'
  }
};

