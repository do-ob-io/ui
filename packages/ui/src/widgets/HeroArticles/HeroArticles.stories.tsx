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
    title: 'The Future of Electric Vehicles: Trends and Innovations for 2025 and Beyond',
    subtitle: 'This article explores the latest advancements in electric vehicle technology, highlighting key trends that are set to shape the industry in the coming years. From battery innovations to autonomous driving capabilities, the article provides a comprehensive overview of what to expect in the rapidly evolving EV landscape.',
    image: 'https://picsum.photos/720/480?v=1',
    url: '#',
  },
  {
    title: 'Remote Work Revolution: How Companies are Adapting to the New Normal',
    subtitle: 'As remote work becomes increasingly common, companies are finding innovative ways to adapt to this new mode of operation. This article examines the benefits and challenges of remote work, offers insights into effective management strategies, and explores how businesses can leverage technology to maintain productivity and employee engagement.',
    image: 'https://picsum.photos/720/480?v=2',
    url: '#',
  },
  {
    title: 'The Impact of Artificial Intelligence on Healthcare: Opportunities and Challenges',
    subtitle: 'Artificial intelligence is transforming the healthcare industry by enhancing diagnostic accuracy, personalizing treatment plans, and streamlining administrative processes. This article discusses the potential benefits of AI in healthcare, as well as the ethical and practical challenges that come with its adoption.',
    image: 'https://picsum.photos/720/480?v=3',
    url: '#',
  },
  {
    title: 'Climate Change and Agriculture: Strategies for Sustainable Farming',
    subtitle: 'Climate change poses significant challenges to the agricultural sector, affecting crop yields and food security. This article explores sustainable farming practices that can mitigate the impact of climate change, including the adoption of resilient crops, innovative irrigation techniques, and integrated pest management strategies.',
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
