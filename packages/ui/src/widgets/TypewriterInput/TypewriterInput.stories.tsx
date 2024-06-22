import type { Meta, StoryObj } from '@storybook/react';

import { TypewriterInput } from './TypewriterInput';

const meta = {
  component: TypewriterInput,
} satisfies Meta<typeof TypewriterInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    words: [ 'Hello, World!', 'This is the do-ob Typewriter Input component.' ]
  }
};
