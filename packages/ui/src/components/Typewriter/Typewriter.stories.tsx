import type { Meta, StoryObj } from '@storybook/react';

import { Typewriter } from './Typewriter';

const meta = {
  component: Typewriter,
} satisfies Meta<typeof Typewriter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    words: [ 'Hello, World!', 'This is the do-ob Typewriter component.' ]
  }
};
