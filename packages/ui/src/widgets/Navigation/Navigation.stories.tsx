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

const logo = 'https://via.placeholder.com/100';

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

const args = {
  title: 'Navigation Component',
  titleShort: 'Navigation',
  logo,
  links,
  search: '#search',
  modeToggle: true,
  socials,
};

export const Standard: Story = {
  args,
};

export const Island: Story = {
  args: {
    ...args,
    variant: 'island',
  },
};

export const Extended: Story = {
  args: {
    ...args,
    variant: 'extended',
  },
};

export const WithClassName: Story = {
  args: {
    ...args,
    variant: 'standard',
    className: 'bg-red-500',
  },
};
