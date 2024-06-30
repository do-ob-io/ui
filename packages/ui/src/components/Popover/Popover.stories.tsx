import type { Meta, StoryObj } from '@storybook/react';

import { Popover } from './Popover';
import { Button } from '@do-ob/ui/components';

const meta = {
  component: Popover,
} satisfies Meta<typeof Popover>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (<>
    <Button dialog="example">Click Me</Button>
    <Popover {...args}>
      <div>Content</div>
    </Popover>
  </>),
  args: {
    id: 'example',
  }
};

export const NonModal: Story = {
  render: (args) => (<>
    <Button dialog="example">Click Me</Button>
    <Popover {...args}>
      <div>Content</div>
    </Popover>
  </>),
  args: {
    id: 'example',
    nonmodal: true,
  }
};


export const NonModalMultiple: Story = {
  render: (args) => (<div className="flex flex-row gap-4">
    <Button dialog="example1">Click Me 1</Button>
    <Button dialog="example2">Click Me 2</Button>
    <Popover {...args} id="example1">
      <div>Content</div>
    </Popover>
    <Popover {...args} id="example2">
      <div>Content</div>
    </Popover>
  </div>),
  args: {
    id: 'example',
    nonmodal: true,
  }
};
