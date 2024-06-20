import { Navbar, NavbarContent } from '@nextui-org/react';
import { clsx, clmg } from '@do-ob/core';

import type { NavigationProps } from './data/NavigationProps';
import { NavigationPart_Brand } from './parts/NavigationPart_Brand';
import { NavigationPart_Links } from './parts/NavigationPart_Links';
import { NavigationPart_Actions } from './parts/NavigationPart_Actions';
import { twColors } from '@do-ob/ui/utility';
import { NavigationPart_Menu } from './parts/NavigationPart_Menu';
import { NavigationPart_MenuToggle } from './parts/NavigationPart_MenuToggle';

export function NavigationIsland(props: NavigationProps) {

  const colors = twColors(props.color);
  
  const additionalClasses = clsx(!props.hideBorder && 'border-1 border-foreground-200/50', props.className);

  return (
    <Navbar
      position={props.position}
      isBlurred={props.isBlurred ?? false}
      maxWidth={props.maxWidth}
      className="items-center justify-center bg-transparent bg-none"
      height="5rem"
    >
      <NavbarContent justify="start" className="flex items-center">
        <NavigationPart_Brand base={props} />
      </NavbarContent>

      {props.links && props.links.length > 0 && (
        <NavbarContent justify="center" className="hidden lg:flex">
          <div className={clmg(clsx(props.color && colors, 'flex rounded-full px-4', additionalClasses))}>
            <NavigationPart_Links base={props} />
          </div>
        </NavbarContent>
      )}

      <NavbarContent justify="end">
        <div className="hidden max-w-64 lg:block">
          <NavigationPart_Actions base={props} />
        </div>
        <NavigationPart_MenuToggle
          className="md:hidden"
        />
      </NavbarContent>

      <NavigationPart_Menu base={props} />

    </Navbar>
  );
}
