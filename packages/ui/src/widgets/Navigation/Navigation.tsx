'use client';

import React from 'react';
import { Link } from '@do-ob/ui/types';
import { DoobUiContext } from '@do-ob/ui/context';
import { interactiveStyles, twMerge } from '@do-ob/ui/utility';
import { Tabs, TabList, Tab } from 'react-aria-components';
import { clsx } from '@do-ob/core';

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

  /**
   * Class names to merge with the root componet.
   */
  className?: string;
}

export function Navigation({
  label = 'Site Navigation',
  links = [],
  orientation = 'horizontal',
  className,
}: NavigationProps) {

  const { pathname } = React.useContext(DoobUiContext);
  let selected = '';
  links
    .map((link) => link.url)
    .sort((a, b) => a.length - b.length)
    .forEach((linkPath, index) => {
      if (index === 0 && !pathname.length) {
        selected = linkPath;
      } else if (!!pathname.length && pathname.startsWith(linkPath)) {
        selected = linkPath;
      }
    });

  return (
    <Tabs
      aria-role="navigation"
      orientation={orientation}
      selectedKey={selected}
      className={className}
      keyboardActivation="manual"
    >
      <TabList className="flex gap-1 orientation-horizontal:flex-row orientation-vertical:flex-col" aria-label={label}>
        {links.map((link, index) => (
          <Tab
            className={twMerge(
              interactiveStyles.focus,
              interactiveStyles.mouse,
              'relative px-4 py-2 hover:bg-black/10 active:bg-black/20 [&>*:first-child]:selected:bg-primary group rounded selected:font-bold',
              orientation === 'horizontal' ? '[&>*:first-child]:selected:h-[6px]' : '[&>*:first-child]:selected:w-[6px]',
            )}
            key={index}
            id={link.url}
            href={link.url}
          >
            <div
              className={clsx(
                'absolute rounded-[2px] transition-all group-hover:bg-primary/60 group-focus:bg-primary/60',
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
