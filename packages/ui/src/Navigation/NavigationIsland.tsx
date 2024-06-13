import { Navbar, NavbarContent } from '@nextui-org/react';
import { twColors } from '@do-ob/ui/utility';
import { clsx } from '@do-ob/core';

import type { NavigationProps } from './Navigation';
import { NavigationPart_Brand } from './parts/NavigationPart_Brand';
import { NavigationPart_Links } from './parts/NavigationPart_Links';

export function NavigationIsland({
  title,
  color,
  links,
}: NavigationProps) {

  const [ colors ] = twColors(color);

  return (
    <Navbar className="items-center justify-center">
      <NavbarContent justify="start" className="flex items-center">
        <NavigationPart_Brand title={title} />
      </NavbarContent>
      <NavbarContent justify="center">
        <div className={clsx(color && colors, 'flex gap-1 rounded-full px-4 py-1')}>
          <NavigationPart_Links links={links} />
        </div>
      </NavbarContent>
      <NavbarContent justify="end">

      </NavbarContent>
    </Navbar>
  );
}

export default NavigationIsland;
