import type { Meta, StoryObj } from '@storybook/react-vite';
import { ArrowUpIcon } from 'lucide-react';

import { Button } from './button.js';

const meta = {
  component: Button,
  parameters: {
    layout: 'padded',
  },
  tags: [ 'autodocs' ],
  args: {
    children: 'Click Here',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Icon: Story = {
  args: {
    size: 'icon',
    children: (
      <ArrowUpIcon />
    ),
  },
};
