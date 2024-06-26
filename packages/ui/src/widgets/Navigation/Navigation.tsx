'use client';

import { use, useRef } from 'react';
import { Link } from '@do-ob/ui/types';
import { DoobUiContext } from '@do-ob/ui/context';
import { interactiveStyles, twMerge } from '@do-ob/ui/utility';
import { Tabs, TabList, Tab } from 'react-aria-components';
import { Button } from '@do-ob/ui/components';
import { clsx } from '@do-ob/core';
import { useOverflow } from '@do-ob/ui/hooks';
import { Bars3Icon } from '@do-ob/ui/icons';

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

  const ref = useRef<HTMLDivElement>(null);
  const overflowing = useOverflow(ref, 'x');
  console.log({ overflowing });

  const { pathname } = use(DoobUiContext);
  let selected = '';
  links
    .map((link) => link.url)
    .sort((a, b) => a.length - b.length)
    .forEach((linkPath) => {
      if (!!pathname.length && pathname.startsWith(linkPath)) {
        selected = linkPath;
      }
    });

  return (
    <div ref={ref} className="relative block overflow-hidden">
      <Tabs
        aria-role="navigation"
        orientation={orientation}
        selectedKey={selected}
        aria-hidden={overflowing}
        className={twMerge(
          'block',
          overflowing === true && 'opacity-0',
          className
        )}
        keyboardActivation="manual"
      >
        <TabList ref={ref} className="flex gap-1 orientation-horizontal:flex-row orientation-vertical:flex-col" aria-label={label}>
          {links.length === 0 ? (
            <div>&nbsp;</div>
          ) : null}
          {links.map((link, index) => (
            <Tab
              className={twMerge(
                interactiveStyles.focus,
                interactiveStyles.mouse,
                'relative px-4 h-11 hover:text-primary active:text-primary [&>*:first-child]:selected:bg-primary group rounded selected:font-bold flex items-center',
                orientation === 'horizontal' ? '[&>*:first-child]:selected:h-[6px] justify-center' : '[&>*:first-child]:selected:w-[6px] justify-start',
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

      <Button
        variant="light"
        iconify
        className={twMerge(
          'absolute top-0 left-0 size-11',
          overflowing ? '' : 'hidden',
        )}
      >
        <Bars3Icon />
      </Button>

    </div>
  );
}
