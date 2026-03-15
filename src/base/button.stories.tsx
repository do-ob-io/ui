import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from './button.js';

const meta = {
  component: Button,
  parameters: {
    layout: 'padded',
  },
  tags: [ 'autodocs' ],
  args: {
    children: 'Button',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
