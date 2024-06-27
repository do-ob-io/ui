import type { Meta, StoryObj } from '@storybook/react';

import { Image } from './Image';

const meta = {
  component: Image,
} satisfies Meta<typeof Image>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: 'https://github.com/do-ob-io/shared/blob/main/do-ob-logo-readme.png?raw=true',
    alt: 'do-ob',
    width: 200,
    height: 130,
  }
};
