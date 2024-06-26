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
    url: '/',
  },
  {
    title: 'About',
    url: '/about',
    links: [
      {
        title: 'Company',
        url: '/about/company',
      },
      {
        title: 'Team',
        url: '/team',
      },
    ],
  },
  {
    title: 'Contact',
    url: '/contact',
    links: [
      {
        title: 'Location',
        url: '/contact/location',
        links: [
          {
            title: 'Address',
            url: '/address',
          },
          {
            title: 'Map',
            url: '#map',
            links: [
              {
                title: 'Google Map',
                url: '/google-map',
              },
              {
                title: 'Apple Map',
                url: '/apple-map',
              },
            ]
          },
        ],
      },
      {
        title: 'Email',
        url: '/contact/email',
      },
      {
        title: 'Phone',
        url: '/contact/phone',
      },
    ],
  },
];

export const Default: Story = {
  args: {
    links,
  }
};

export const Vertical: Story = {
  args: {
    links,
    orientation: 'vertical',
  }
};

export const Overflow: Story = {
  args: {
    links: [
      {
        title: 'Link#1',
        url: '/',
      },
      {
        title: 'Link#2',
        url: '/2',
      },
      {
        title: 'Link#3',
        url: '/3',
      },
      {
        title: 'Link#4',
        url: '/4',
      },
      {
        title: 'Link#5',
        url: '/5',
      },
      {
        title: 'Link#6',
        url: '/6',
      },
      {
        title: 'Link#7',
        url: '/7',
      },
      {
        title: 'Link#8',
        url: '/8',
      },
      {
        title: 'Link#9',
        url: '/9',
      },
    ],
  }
};
