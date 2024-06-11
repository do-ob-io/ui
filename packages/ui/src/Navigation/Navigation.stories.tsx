import type { Meta, StoryObj } from '@storybook/react';

import { Navigation } from './Navigation';

const meta = {
  component: Navigation,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<typeof Navigation>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: {
    title: 'Navigation',
  },
};

export const Island: Story = {
  args: {
    title: 'Navigation',
    variant: 'island'
  },
};
