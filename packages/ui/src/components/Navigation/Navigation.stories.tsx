import type { Meta, StoryObj } from '@storybook/react';

import { Navigation } from './Navigation';
import { Link } from '@do-ob/ui/types';

const meta = {
  component: Navigation,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<typeof Navigation>;

export default meta;

type Story = StoryObj<typeof meta>;

const links: Link[] = [
  {
    title: 'Home',
    url: '#',
  },
  {
    title: 'About',
    url: '#about',
    links: [
      {
        title: 'Company',
        url: '#company',
      },
      {
        title: 'Team',
        url: '#team',
      },
    ],
  },
  {
    title: 'Contact',
    url: '#contact',
    links: [
      {
        title: 'Location',
        url: '#location',
        links: [
          {
            title: 'Address',
            url: '#address',
          },
          {
            title: 'Map',
            url: '#map',
            links: [
              {
                title: 'Google Map',
                url: '#google-map',
              },
              {
                title: 'Apple Map',
                url: '#apple-map',
              },
            ]
          },
        ],
      },
      {
        title: 'Email',
        url: '#email',
      },
      {
        title: 'Phone',
        url: '#phone',
      },
    ],
  },
];

export const Standard: Story = {
  args: {
    title: 'Navigation',
    links,
    search: '#search',
  },
};

export const Island: Story = {
  args: {
    title: 'Navigation',
    variant: 'island',
    links,
    search: '#search',
  },
};

export const Extended: Story = {
  args: {
    title: 'Navigation',
    variant: 'extended',
    links,
    search: '#search',
  },
};

export const WithClassName: Story = {
  args: {
    title: 'Navigation',
    variant: 'standard',
    className: 'bg-red-500',
    links,
  },
};
