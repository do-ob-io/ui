import type { Meta, StoryObj } from '@storybook/react';

import { Navigation } from './Navigation';
import { Link } from '@do-ob/ui/types';

const meta = {
  component: Navigation,
} satisfies Meta<typeof Navigation>;

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

export const Default: Story = {
  args: {
    links,
  }
};
