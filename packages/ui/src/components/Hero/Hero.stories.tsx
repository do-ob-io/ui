import type { Meta, StoryObj } from '@storybook/react';

import { Hero } from './Hero';

const meta = {
  component: Hero,
} satisfies Meta<typeof Hero>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};