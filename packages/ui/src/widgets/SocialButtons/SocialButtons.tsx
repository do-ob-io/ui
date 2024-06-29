import { Group } from 'react-aria-components';
import { Button } from '@do-ob/ui/components';
import { Socials } from '@do-ob/ui/types';
import { SocialButtonsProps } from './SocialButtons.types';
import { cn } from '@do-ob/ui/utility';

/**
 * Map of social keys to async imports of social icon components.
 */
const socialIcons: Record<Socials, () => Promise<React.ComponentType<React.HTMLAttributes<SVGElement>>>> = {
  x: async () => (await import('@do-ob/ui/icons')).XSocialIcon,
  facebook: async () => (await import('@do-ob/ui/icons')).FacebookIcon,
  linkedin: async () => (await import('@do-ob/ui/icons')).LinkedInIcon,
  youtube: async () => (await import('@do-ob/ui/icons')).YouTubeIcon,
  instagram: async () => (await import('@do-ob/ui/icons')).InstagramIcon,
};

export async function SocialButtons({
  socials = [],
  variant = 'light',
  size = 'md',
  color = 'background',
  className,
  ...props
}: SocialButtonsProps & React.ComponentProps<typeof Group>) {

  // Load all social icons.
  const Icons = await Promise.all(
    Object.values(socials).map(({ type }) => socialIcons[type]())
  );

  // Map the Icons with the socials.
  const icons = Object.values(socials).map((social, index) => ({
    ...social,
    Icon: Icons[index],
  }));

  return (
    <Group
      className={cn(
        'flex gap-1',
        className,
      )}
      aria-label="Social links"
      {...props}
    >
      {icons.map((icon) => (
        <Button
          key={icon.type}
          href={icon.url}
          iconify
          variant={variant}
          color={color}
          size={size}
        >
          <icon.Icon />
        </Button>
      ))}
    </Group>
  );
}
