import type { Meta, StoryObj } from '@storybook/react';

import { Navigation } from './Navigation';
import { Link } from '../types';

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
  },
  {
    title: 'Contact',
    url: '#contact',
  },
];

export const Standard: Story = {
  args: {
    title: 'Navigation',
    links,
  },
};

export const Island: Story = {
  args: {
    title: 'Navigation',
    variant: 'island',
    links,
  },
};
