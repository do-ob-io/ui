import { Navbar, NavbarContent } from '@nextui-org/react';
import { twColors, clsx } from '@do-ob/ui/utility';
import type { NavigationProps } from './Navigation';
import { NavigationPart_Brand } from './parts/NavigationPart_Brand';

export function NavigationIsland({
  title,
  color,
}: NavigationProps) {

  const [ colors ] = twColors(color);

  return (
    <Navbar>
      <NavbarContent justify="start" className="py-3">
        <NavigationPart_Brand title={title} />
      </NavbarContent>
      <NavbarContent justify="center">
        <div className={clsx(color && colors, 'rounded-full px-8 py-3')}>
          <div className="flex space-x-4">
            <a href="#" className="text-base">Home</a>
            <a href="#" className="text-base">About</a>
            <a href="#" className="text-base">Services</a>
            <a href="#" className="text-base">Contact</a>
          </div>
        </div>
      </NavbarContent>
      <NavbarContent justify="start">

      </NavbarContent>
    </Navbar>
  );
}

export default NavigationIsland;
