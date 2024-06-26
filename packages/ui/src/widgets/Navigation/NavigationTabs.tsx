'use client';

import { createRef, use, useRef } from 'react';
import { NavigationProps } from './Navigation.types';
import { DialogDispatchContext, DoobUiContext } from '@do-ob/ui/context';
import { Tab, TabList, Tabs } from 'react-aria-components';
import { cn, interactiveStyles } from '@do-ob/ui/utility';
import { nop } from '@do-ob/core';
import { ChevronDownIcon } from '@do-ob/ui/icons';
import { dialogActions } from '@do-ob/ui/reducer';

export function NavigationTabs({
  base: {
    label = 'Site Navigation',
    links = [],
    orientation = 'horizontal',
  },
  id,
  overflowing,
  onSelectionChange = nop,
}: {
  base: NavigationProps;
  id: string;
  overflowing?: boolean;
  onSelectionChange?: (key: string) => void;
}) {

  const tabRefs = useRef<Record<string, HTMLElement | null>>({});

  const { pathname } = use(DoobUiContext);
  const dispatch = use(DialogDispatchContext);
  
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

        // Call the onSelectionChange callback if the selected path matches the key
        if(key === selected) {
          onSelectionChange(key);
        }

        // Only for horizontal navigation.
        if(orientation === 'horizontal') {
          const selectedLink = links.find((link) => link.url === key);

          // If the selected link has sub-items, open a dialog.
          if(selectedLink?.items?.length) {
            const element = tabRefs.current[key] ?? null;

            const ref = createRef<HTMLElement | null>();
            ref.current = element;
            dispatch(dialogActions.open(
              `${id}-${selectedLink.url}`,
              ref
            ));
          }
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
              'cursor-pointer',
              'group relative inline-flex h-11 flex-row items-center gap-1 rounded px-3 active:text-primary hover:text-primary selected:font-bold dark:active:text-primary-dark dark:hover:text-primary-dark [&>*:first-child]:selected:bg-primary',
              orientation === 'horizontal' ? 'justify-center [&>*:first-child]:selected:h-[6px]' : 'justify-start [&>*:first-child]:selected:w-[6px]',
            )}
            key={link.url}
            id={link.url}
            href={link.items?.length ? undefined : link.url}
          >
            <div
              className={cn(
                'absolute rounded-[2px] transition-all group-hover:bg-primary/60 group-focus:bg-primary/60 dark:group-hover:bg-primary-dark/60 dark:group-focus:bg-primary-dark/60',
                orientation === 'horizontal' ? 'bottom-0 left-0 h-[4px] w-full' : 'left-0 top-0 h-full w-[4px]',
              )}
              aria-hidden="true"
            ></div>
            <div
              ref={(el) => {
                tabRefs.current[link.url] = el;
              }}
              className={cn(
                'flex size-full flex-row gap-1',
                orientation === 'horizontal' ? 'items-center justify-center' : 'items-center justify-start'
              )}
            >
              {link.title}
              {orientation === 'horizontal' && link.items?.length ? (
                <ChevronDownIcon className="size-4" />
              ) : null}
            </div>
          </Tab>
        ))}
      </TabList>
    </Tabs>
  );
}
