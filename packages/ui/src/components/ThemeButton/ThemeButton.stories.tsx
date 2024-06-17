import type { Meta, StoryObj } from '@storybook/react';

import { ThemeButton } from './ThemeButton';

const meta = {
  component: ThemeButton,
  tags: [ 'autodocs' ]
} satisfies Meta<typeof ThemeButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
