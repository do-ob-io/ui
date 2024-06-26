import type { Meta, StoryObj } from '@storybook/react';

import { Header } from './Header';
import { Link } from '@do-ob/ui/types';

const meta = {
  component: Header,
} satisfies Meta<typeof Header>;

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
    title: 'Services',
    url: '/services',
    links: [
      {
        title: 'Service 1',
        url: '/services/service-1',
      },
      {
        title: 'Service 2',
        url: '/services/service-2',
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
    brand: {
      name: 'Brand',
      image: 'https://via.placeholder.com/64',
    },
    navigation: {
      links,
    }
  }
};
