import { Navbar, NavbarContent } from '@nextui-org/react';
import { twColors } from '@do-ob/ui/utility';
import { clsx, clmg } from '@do-ob/core';

import type { NavigationProps } from './Navigation';
import { NavigationPart_Brand } from './parts/NavigationPart_Brand';
import { NavigationPart_Links } from './parts/NavigationPart_Links';
import { NavigationPart_Search } from './parts/NavigationPart_Search';

export function NavigationIsland({
  title,
  image,
  color,
  links,
  className,
  search,
}: NavigationProps) {

  const [ colors ] = twColors(color);

  return (
    <Navbar className="items-center justify-center">
      <NavbarContent justify="start" className="flex items-center">
        <NavigationPart_Brand title={title} image={image} />
      </NavbarContent>
      <NavbarContent justify="center">
        <div className={clmg(clsx(color && colors, 'flex rounded-full border-1 border-foreground-200 px-4', className))}>
          <NavigationPart_Links links={links} colors={colors} />
        </div>
      </NavbarContent>
      <NavbarContent justify="end">
        {search ? (
          <NavigationPart_Search search={search} />
        ) : null}
      </NavbarContent>
    </Navbar>
  );
}
