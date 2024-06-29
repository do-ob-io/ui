import type { SocialLinks } from '@do-ob/ui/types';
import type { ButtonSize, ButtonVariant, ButtonColor } from '@do-ob/ui/components';

export interface SocialButtonsProps {

  socials?: SocialLinks;

  color?: ButtonColor;

  variant?: ButtonVariant;

  size?: ButtonSize;
};
