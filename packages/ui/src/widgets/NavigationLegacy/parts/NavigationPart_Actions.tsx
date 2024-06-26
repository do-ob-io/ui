import { ThemeButton, SearchButton } from '@do-ob/ui/widgets';
import { SocialIcons } from '@do-ob/ui/icons';
import { Link, Button, Divider } from '@nextui-org/react';
import { NavigationProps } from '../data/NavigationProps';

/**
 * Navigation Search component
 */
export function NavigationPart_Actions({ base: {
  socials = [],
  search,
  modeToggle,
} }: { base: NavigationProps }) {

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
                isExternal={true}
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
            <SearchButton size="sm" variant="flat" />
          </div>
        ) : null}
        {modeToggle ? (
          <div>
            <ThemeButton size="sm" variant="flat" />
          </div>
        ) : null}
      </section>
    
    </div>
  );
}