import type { Meta, StoryObj } from '@storybook/react';

// import { Suspense } from 'react';
import { Header } from './Header';
import { Link, SocialLinks } from '@do-ob/ui/types';

const meta = {
  component: Header,
  // decorators: [
  //   Story => (
  //     <Suspense>
  //       <Story />
  //     </Suspense>
  //   ),
  // ],
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
    variant: 'standard',
    socials,
    brand: {
      logo: 'https://github.com/do-ob-io/shared/blob/main/do-ob-logo-readme.png?raw=true',
    },
    navigation: {
      links,
    }
  }
};

export const Extended: Story = {
  args: {
    variant: 'extended',
    socials,
    brand: {
      name: 'User Interface Library',
      nameShort: 'UI Library',
      logo: 'https://github.com/do-ob-io/shared/blob/main/do-ob-logo-readme.png?raw=true',
    },
    navigation: {
      links,
    }
  }
};
