import type { Meta, StoryObj } from '@storybook/react';

import { SocialButtons } from './SocialButtons';
import { SocialLinks } from '@do-ob/ui/types';

const meta = {
  component: SocialButtons,
} satisfies Meta<typeof SocialButtons>;

export default meta;

type Story = StoryObj<typeof meta>;

const socials: SocialLinks = [
  { type: 'facebook', url: 'https://facebook.com' },
  { type: 'linkedin', url: 'https://linkedin.com' },
  { type: 'youtube', url: 'https://youtube.com' },
  { type: 'instagram', url: 'https://instagram.com' },
];

export const Default: Story = {
  args: {
    socials,
  }
};
