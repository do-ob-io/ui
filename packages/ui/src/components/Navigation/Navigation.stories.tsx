import type { Meta, StoryObj } from '@storybook/react';

import { Navigation } from './Navigation';
import { Link, SocialLinks } from '@do-ob/ui/types';

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

const socials: SocialLinks = [
  {
    type: 'facebook',
    url: 'https://facebook.com',
  },
  {
    type: 'instagram',
    url: 'https://instagram.com',
  },
  {
    type: 'linkedin',
    url: 'https://linkedin.com',
  },
  {
    type: 'x',
    url: 'https://x.com',
  },
  {
    type: 'youtube',
    url: 'https://youtube.com',
  },
];

export const Standard: Story = {
  args: {
    title: 'Navigation',
    links,
    search: '#search',
    modeToggle: true,
    socials,
  },
};

export const Island: Story = {
  args: {
    title: 'Navigation',
    variant: 'island',
    links,
    search: '#search',
    modeToggle: true,
    socials,
  },
};

export const Extended: Story = {
  args: {
    title: 'Navigation',
    variant: 'extended',
    links,
    search: '#search',
    modeToggle: true,
    socials,
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
