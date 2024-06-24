import type { Meta, StoryObj } from '@storybook/react';

import { Brand } from './Brand';

const meta = {
  component: Brand,
} satisfies Meta<typeof Brand>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    image: 'https://github.com/do-ob-io/shared/blob/main/do-ob-logo-readme.png?raw=true',
    name: 'My Really Long Band Name',
    nameShort: 'My Short Name',
  }
};
