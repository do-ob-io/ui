import type { Meta, StoryObj } from '@storybook/react';

import { Popover } from './Popover';
import { Button } from '@do-ob/ui/components';

const meta = {
  component: Popover,
} satisfies Meta<typeof Popover>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    trigger: <Button>Click Me</Button>,
    content: <div>Content</div>,
  }
};
