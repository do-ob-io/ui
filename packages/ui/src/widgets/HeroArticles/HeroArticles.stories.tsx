import type { Meta, StoryObj } from '@storybook/react';

import { HeroArticles } from './HeroArticles';
import { HeroArticlesProps } from './data/HeroArticlesProps';

const meta = {
  component: HeroArticles,
} satisfies Meta<typeof HeroArticles>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * Some example articles
 */
const articles = [
  {
    title: 'First Female Swiss Fighter Pilot Graduates from U.S. Air Force Test Pilot School',
    subtitle: 'Subtitle 1',
    image: 'https://picsum.photos/720/480?v=1',
    url: '#',
  },
  {
    title: 'Article 2',
    subtitle: 'Subtitle 2',
    image: 'https://picsum.photos/720/480?v=2',
    url: '#',
  },
  {
    title: 'Article 3',
    subtitle: 'Subtitle 3',
    image: 'https://picsum.photos/720/480?v=3',
    url: '#',
  },
  {
    title: 'Article 4',
    subtitle: 'Subtitle 4',
    image: 'https://picsum.photos/720/480?v=4',
    url: '#',
  },
];

const args: HeroArticlesProps = {
  articles,
  announcement: {
    title: 'Learn about our mission',
    url: '#',
    onCall: () => {
      console.log('Announcement clicked');
    },
  },
  latest: {
    title: 'All latest news',
    url: '#',
    onCall: () => {
      console.log('Latest clicked');
    },
  },
};

export const Standard: Story = {
  args,
};
