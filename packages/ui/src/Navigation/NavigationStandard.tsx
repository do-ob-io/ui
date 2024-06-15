import { Navbar, NavbarContent } from '@nextui-org/react';
import { twColors } from '@do-ob/ui/utility';
import { clsx, clmg } from '@do-ob/core';
import type { NavigationProps } from './Navigation';
import { NavigationPart_Brand } from './parts/NavigationPart_Brand';
import { NavigationPart_Links } from './parts/NavigationPart_Links';
import { NavigationPart_Search } from './parts/NavigationPart_Search';

export function NavigationStandard({
  title,
  color,
  links,
  className,
  search
}: NavigationProps) {

  const [ colors ] = twColors(color);

  return (
    <Navbar className={clmg(clsx(color && colors, className))}>
      <NavbarContent justify="start">
        <NavigationPart_Brand title={title} />
      </NavbarContent>

      <NavbarContent justify="center">
        <NavigationPart_Links links={links} colors={colors} />
      </NavbarContent>

      <NavbarContent justify="end">
        <div className="max-w-64">
          {search ? (
            <NavigationPart_Search search={search} />
          ) : null}
        </div>
      </NavbarContent>

    </Navbar>
  );
}

export default NavigationStandard;
