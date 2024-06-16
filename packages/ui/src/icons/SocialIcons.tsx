import { Socials } from '@do-ob/ui/types';
import { FacebookIcon } from './FacebookIcon';
import { InstagramIcon } from './InstagramIcon';
import { LinkedInIcon } from './LinkedInIcon';
import { XSocialIcon } from './XSocialIcon';
import { YouTubeIcon } from './YouTubeIcon';
import type { FunctionComponent, HTMLAttributes } from 'react';

export const SocialIcons: Record<Socials, FunctionComponent<HTMLAttributes<SVGElement>>> = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  linkedin: LinkedInIcon,
  x: XSocialIcon,
  youtube: YouTubeIcon,
};
