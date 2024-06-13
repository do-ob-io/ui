import { Navbar, NavbarContent } from '@nextui-org/react';
import { twColors } from '@do-ob/ui/utility';
import { clsx } from '@do-ob/core';
import type { NavigationProps } from './Navigation';
import { NavigationPart_Brand } from './parts/NavigationPart_Brand';
import { NavigationPart_Links } from './parts/NavigationPart_Links';

export function NavigationStandard({
  title,
  color,
  links,
}: NavigationProps) {

  const [ colors ] = twColors(color);

  return (
    <Navbar className={clsx(color && colors)}>
      <NavbarContent justify="start">
        <NavigationPart_Brand title={title} />
      </NavbarContent>

      <NavbarContent justify="center">
        <NavigationPart_Links links={links} />
      </NavbarContent>

    </Navbar>
  );
}

export default NavigationStandard;
