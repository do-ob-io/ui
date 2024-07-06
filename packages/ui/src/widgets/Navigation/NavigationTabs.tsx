'use client';

import { createRef, use, useMemo } from 'react';
import { NavigationProps } from './Navigation.types';
import { DialogDispatchContext, DoobUiContext } from '@do-ob/ui/context';
import { Tab, TabList, Tabs } from 'react-aria-components';
import { cn, interactiveStyles } from '@do-ob/ui/utility';
import { nop } from '@do-ob/core';
import { ChevronDownIcon } from '@do-ob/ui/icons';
import { dialogActions } from '@do-ob/ui/reducer';
import { useListData } from 'react-stately';
import { useTreeFlatten } from '@do-ob/ui/hooks';

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

  const linksFlattened = useTreeFlatten(links, (link) => link.links);

  const linkList = useListData({
    initialItems: linksFlattened,
    getKey: (item) => item.url,
  });

  const tabRefs = useMemo(() => (links.reduce((acc, { url }) => {
    acc[url] = createRef<HTMLDivElement>();
    return acc;
  }, {} as Record<string, React.RefObject<HTMLDivElement | null>>)), [ links ]);

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
        overflowing !== false && 'opacity-0',
      )}
      keyboardActivation="manual"
      onSelectionChange={(key) => {

        // Call the onSelectionChange callback if the selected path matches the key
        if(key === selected) {
          onSelectionChange(key);
        }

        // Only for horizontal navigation.
        if(orientation === 'horizontal') {
          const selectedLink = linkList.getItem(key);

          // If the selected link has sub-items, open a dialog.
          if(selectedLink.children > 0) {
            dispatch(dialogActions.open(
              `${id}-${selectedLink.url}`,
              tabRefs[selectedLink.url],
            ));
          }
        }
      }}
    >
      <TabList
        className="flex gap-1 orientation-horizontal:flex-row orientation-vertical:flex-col"
        items={orientation === 'horizontal' ? linkList.items.filter((item) => item.level === 0) : linkList.items}
        aria-label={label}
      >
        {({ children, ...value }) => (
          <Tab
            className={cn(
              interactiveStyles.focus,
              'cursor-pointer',
              'group relative inline-flex flex-row items-center gap-1 rounded px-3 active:text-primary hover:text-primary selected:font-bold dark:active:text-primary-dark dark:hover:text-primary-dark [&>*:first-child]:selected:bg-primary',
              value.level === 0 ? 'h-11' : 'h-8',
              orientation === 'horizontal' ? 'justify-center [&>*:first-child]:selected:h-[6px]' : 'justify-start [&>*:first-child]:selected:w-[6px]',
            )}
            key={value.url}
            id={value.url}
            href={children ? undefined : value.url}
          >
            <div
              className={cn(
                'absolute rounded-[2px] transition-all group-hover:bg-primary/60 group-focus:bg-primary/60 dark:group-hover:bg-primary-dark/60 dark:group-focus:bg-primary-dark/60',
                orientation === 'horizontal' ? 'bottom-0 left-0 h-[4px] w-full' : 'left-0 top-0 h-full w-[4px]',
              )}
              aria-hidden="true"
            ></div>
            <div
              ref={tabRefs[value.url]}
              className={cn(
                'flex size-full flex-row gap-1',
                value.level > 0 && 'text-sm',
                orientation === 'horizontal' ? 'items-center justify-center' : 'items-center justify-start'
              )}
              style={{
                paddingLeft: `${value.level * .5}rem`,
              }}
            >
              {value.title}
              {orientation === 'horizontal' && children > 0 ? (
                <ChevronDownIcon className="size-4" />
              ) : null}
            </div>
          </Tab>
        )}
      </TabList>
    </Tabs>
  );
}
