import { ThemeSwitch, SearchButton } from '@do-ob/ui/components';
import type { SocialLinks } from '@do-ob/ui/types';
import { SocialIcons } from '@do-ob/ui/icons';
import { Link, Button, Divider } from '@nextui-org/react';

/**
 * Navigation Brand properties
 */
export interface NavigationPart_ActionsProps {
  /**
   * The search form action URL.
   */
  search?: string;

  /**
   * Enable the dark mode toggle.
   */
  modeToggle?: boolean;

  /**
   * The social links of the navigation.
   */
  socials?: SocialLinks;
}

/**
 * Navigation Search component
 */
export function NavigationPart_Actions({
  search,
  modeToggle,
  socials = [],
}: NavigationPart_ActionsProps) {

  return (
    <div className="flex h-full flex-row items-end justify-center gap-2">
      <section className="flex h-full flex-row items-center justify-center [&>div]:flex [&>div]:items-center">
        {socials.map((social) => {
          const Icon = SocialIcons[social.type];
          return (
            <div key={social.type}>
              <Button
                as={Link}
                size="sm"
                variant="light"
                aria-label={social.type}
                href={social.url}
                isIconOnly
              >
                <Icon className="size-5 dark:fill-white" />
              </Button>
            </div>
          );})}
      </section>

      {socials.length > 0 && (search || modeToggle) ? (
        <Divider orientation="vertical" className="h-6" />
      ) : null}

      <section className="flex h-full flex-row items-center justify-center gap-2 [&>div]:flex [&>div]:items-center">
        {search ? (
          <div>
            <SearchButton />
          </div>
        ) : null}
        {modeToggle ? (
          <div>
            <ThemeSwitch />
          </div>
        ) : null}
      </section>
    
    </div>
  );
}
