import type { Meta, StoryObj } from '@storybook/react';

import { SearchButton } from './SearchButton';

const meta = {
  component: SearchButton,
} satisfies Meta<typeof SearchButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    action: async (_, payload) => (payload.query.length > 1 ? [
      {
        id: '1',
        title: 'Title',
        description: 'Description',
        url: '#',
        thumbnail: 'https://example.com/image.jpg',
      },
      {
        id: '2',
        title: 'Title',
        description: 'Description',
        url: '#',
        thumbnail: 'https://example.com/image.jpg',
      }
    ] : []),
  }
};
