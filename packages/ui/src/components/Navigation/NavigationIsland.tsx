import { Navbar, NavbarContent } from '@nextui-org/react';
import { clsx, clmg } from '@do-ob/core';

import type { NavigationProps } from './data/NavigationContext';
import { NavigationProvider } from './data/NavigationProvider';
import { NavigationPart_Brand } from './parts/NavigationPart_Brand';
import { NavigationPart_Links } from './parts/NavigationPart_Links';
import { NavigationPart_Actions } from './parts/NavigationPart_Actions';

export function NavigationIsland(props: NavigationProps) {

  return (
    <NavigationProvider {...props}>
      {({ color, colors, className }) => (
        <Navbar className="items-center justify-center bg-transparent backdrop-blur-none backdrop-filter-none" height="5rem">
          <NavbarContent justify="start" className="flex items-center">
            <NavigationPart_Brand />
          </NavbarContent>
          <NavbarContent justify="center">
            <div className={clmg(clsx(color && colors, 'flex rounded-full border-1 border-foreground-200/50 px-4', className))}>
              <NavigationPart_Links />
            </div>
          </NavbarContent>
          <NavbarContent justify="end">
            <NavigationPart_Actions />
          </NavbarContent>
        </Navbar>
      )}
    </NavigationProvider>
  );
}
