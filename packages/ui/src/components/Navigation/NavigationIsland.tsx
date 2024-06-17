'use client';

import React from 'react';
import { Navbar, NavbarContent, NavbarMenuToggle } from '@nextui-org/react';
import { clsx, clmg } from '@do-ob/core';

import type { NavigationProps } from './data/NavigationContext';
import { NavigationProvider } from './data/NavigationProvider';
import { NavigationPart_Brand } from './parts/NavigationPart_Brand';
import { NavigationPart_Links } from './parts/NavigationPart_Links';
import { NavigationPart_Actions } from './parts/NavigationPart_Actions';
import { twColors } from '@do-ob/ui/utility';
import { NavigationPart_Menu } from './parts/NavigationPart_Menu';

export function NavigationIsland(props: NavigationProps) {

  const [ isMenuOpen, setIsMenuOpen ] = React.useState(false);

  const colors = twColors(props.color);

  return (
    <NavigationProvider {...props}>
      <Navbar
        position={props.position}
        isBlurred={false}
        onMenuOpenChange={setIsMenuOpen}
        className="items-center justify-center"
        height="5rem"
      >
        <NavbarContent justify="start" className="flex items-center">
          <NavigationPart_Brand />
        </NavbarContent>

        {props.links && props.links.length > 0 && (
          <NavbarContent justify="center" className="hidden lg:flex">
            <div className={clmg(clsx(props.color && colors, 'flex rounded-full border-1 border-foreground-200/50 px-4', props.className))}>
              <NavigationPart_Links />
            </div>
          </NavbarContent>
        )}

        <NavbarContent justify="end">
          <div className="hidden max-w-64 lg:block">
            <NavigationPart_Actions />
          </div>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className="lg:hidden"
          />
        </NavbarContent>

        <NavigationPart_Menu />

      </Navbar>
    </NavigationProvider>
  );
}
