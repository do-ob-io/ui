import { ThemeSwitch, SearchButton } from '@do-ob/ui/components';
import { SocialIcons } from '@do-ob/ui/icons';
import { Link, Button, Divider } from '@nextui-org/react';
import { NavigationContext } from '../data/NavigationContext';
import { useContext } from 'react';

/**
 * Navigation Search component
 */
export function NavigationPart_Actions() {

  const { socials = [], search, modeToggle } = useContext(NavigationContext);

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
