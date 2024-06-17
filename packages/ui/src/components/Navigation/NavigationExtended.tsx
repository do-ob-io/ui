import { Navbar, NavbarContent } from '@nextui-org/react';
import { clsx, clmg } from '@do-ob/core';
import type { NavigationProps } from './data/NavigationContext';
import { NavigationPart_Brand } from './parts/NavigationPart_Brand';
import { NavigationPart_Links } from './parts/NavigationPart_Links';
import { NavigationPart_Actions } from './parts/NavigationPart_Actions';
import { NavigationProvider } from './data/NavigationProvider';

export function NavigationExtended(props: NavigationProps) {

  return (
    <NavigationProvider {...props}>
      {({ color, colors, className }) => (
        <Navbar
          className={clmg(clsx(color && colors, 'relative border-b-1 border-b-foreground-200/50', className))}
          height="4rem"
        >
          <NavbarContent justify="start">
            <NavigationPart_Brand />
          </NavbarContent>

          <NavbarContent justify="start">
            <NavigationPart_Links />
          </NavbarContent>

          <NavbarContent justify="end">
            <div className="max-w-64">
              <NavigationPart_Actions />
            </div>
          </NavbarContent>

        </Navbar>
      )}
    </NavigationProvider>
  );
}