'use client';

import { Link } from '@do-ob/ui/types';
import { interactiveStyles, twMerge } from '@do-ob/ui/utility';
import { Tabs, TabList, Tab } from 'react-aria-components';
import { nanoid } from '@do-ob/core';

export interface NavigationProps {
  /**
   * Label to use for accessibility.
   */
  label?: string;

  /**
   * The links of the navigation
   */
  links?: Link[];

  /**
   * The orientation of the navigation
   */
  orientation?: 'horizontal' | 'vertical';
}

export function Navigation({
  label = 'Site Navigation',
  links = [],
  orientation = 'horizontal',
}: NavigationProps) {

  const id = nanoid();

  return (
    <Tabs id={id} aria-role="navigation" orientation={orientation}>
      <TabList className="flex gap-1 orientation-horizontal:flex-row orientation-vertical:flex-col" aria-label={label}>
        {links.map((link, index) => (
          <Tab
            className={twMerge(
              interactiveStyles.focus,
              interactiveStyles.mouse,
              'relative px-4 py-2 hover:bg-black/10 active:bg-black/20 [&>*:first-child]:selected:h-[6px] [&>*:first-child]:selected:bg-primary group rounded',
            )}
            key={index}
            id={link.url}
            href={link.url}
          >
            <div className="absolute bottom-0 left-0 h-[4px] w-full rounded-[2px] transition-all group-hover:bg-primary/60" aria-hidden="true"></div>
            {link.title}
          </Tab>
        ))}
      </TabList>
    </Tabs>
  );
}
