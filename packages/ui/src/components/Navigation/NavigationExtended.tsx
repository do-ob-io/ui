'use client';

import React from 'react';
import { Navbar, NavbarContent } from '@nextui-org/react';
import { clsx, clmg } from '@do-ob/core';
import type { NavigationProps } from './data/NavigationContext';
import { NavigationPart_Brand } from './parts/NavigationPart_Brand';
import { NavigationPart_Links } from './parts/NavigationPart_Links';
import { NavigationPart_Actions } from './parts/NavigationPart_Actions';
import { NavigationProvider } from './data/NavigationProvider';
import { twColors } from '@do-ob/ui/utility';
import { NavigationPart_Menu } from './parts/NavigationPart_Menu';
import { NavigationPart_MenuToggle } from './parts/NavigationPart_MenuToggle';

export function NavigationExtended(props: NavigationProps) {

  const [ isMenuOpen, setIsMenuOpen ] = React.useState(false);

  const colors = twColors(props.color);

  return (
    <NavigationProvider {...props}>
      <Navbar
        position={props.position}
        height="8rem"
        onMenuOpenChange={setIsMenuOpen}
        className={clmg(clsx(props.color && colors, 'relative border-b-1 border-b-foreground-200/50', props.className))}
        
      >
        <NavbarContent justify="start" className="md:items-start md:pt-2">
          <div className="relative z-10">
            <NavigationPart_Brand />
          </div>
        </NavbarContent>

        <NavbarContent justify="start" className="absolute hidden items-end md:flex">
          <NavigationPart_Links />
        </NavbarContent>

        <NavbarContent justify="end" className="items-start pt-2">
          <div className="hidden max-w-64 p-2 md:block">
            <NavigationPart_Actions />
          </div>
          <NavigationPart_MenuToggle
            isMenuOpen={isMenuOpen}
            className="md:hidden"
          />
        </NavbarContent>

        <NavigationPart_Menu />

      </Navbar>
    </NavigationProvider>
  );
}
