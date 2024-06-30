import { use } from 'react';
import { NavigationProps } from './Navigation.types';
import { DoobUiContext } from '@do-ob/ui/context';
import { Tab, TabList, Tabs } from 'react-aria-components';
import { cn, interactiveStyles } from '@do-ob/ui/utility';
import { nop } from '@do-ob/core';

export function NavigationTabs({
  base: {
    label = 'Site Navigation',
    links = [],
    orientation = 'horizontal',
  },
  overflowing,
  onSelectionChange = nop,
}: {
  base: NavigationProps;
  overflowing?: boolean;
  onSelectionChange?: (key: string) => void;
}) {

  const { pathname } = use(DoobUiContext);
  
  let selected: string | null = null;
  links
    .map((link) => link.url)
    .sort((a, b) => a.length - b.length)
    .forEach((linkPath) => {
      if (!!pathname.length && pathname.startsWith(linkPath)) {
        selected = linkPath;
      }
    });

  return (
    <Tabs
      aria-role="navigation"
      orientation={orientation}
      selectedKey={selected}
      aria-hidden={overflowing}
      className={cn(
        'w-full',
        overflowing === true && 'opacity-0',
      )}
      keyboardActivation="manual"
      onSelectionChange={(key) => {
        console.log('key', key);
        if(key === selected) {
          onSelectionChange(key);
        }
      }}
    >
      <TabList className="flex gap-1 orientation-horizontal:flex-row orientation-vertical:flex-col" aria-label={label}>
        {links.length === 0 ? (
          <div>&nbsp;</div>
        ) : null}
        {links.map((link) => (
          <Tab
            className={cn(
              interactiveStyles.focus,
              'group relative flex h-11 items-center rounded px-3 active:text-primary hover:text-primary selected:font-bold dark:active:text-primary-dark dark:hover:text-primary-dark [&>*:first-child]:selected:bg-primary',
              orientation === 'horizontal' ? 'justify-center [&>*:first-child]:selected:h-[6px]' : 'justify-start [&>*:first-child]:selected:w-[6px]',
            )}
            key={link.title}
            id={link.url}
            href={link.url}
          >
            <div
              className={cn(
                'absolute rounded-[2px] transition-all group-hover:bg-primary/60 group-focus:bg-primary/60 dark:group-hover:bg-primary-dark/60 dark:group-focus:bg-primary-dark/60',
                orientation === 'horizontal' ? 'bottom-0 left-0 h-[4px] w-full' : 'left-0 top-0 h-full w-[4px]',
              )}
              aria-hidden="true"
            ></div>
            {link.title}
          </Tab>
        ))}
      </TabList>
    </Tabs>
  );
}
