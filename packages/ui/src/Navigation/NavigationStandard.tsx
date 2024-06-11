import { Navbar, NavbarContent } from '@nextui-org/react';
import { clsx, twColors } from '@do-ob/ui/utility';
import type { NavigationProps } from './Navigation';
import { NavigationPart_Brand } from './parts/NavigationPart_Brand';

export function NavigationStandard({
  title,
  color,
}: NavigationProps) {

  const [ colors ] = twColors(color);

  return (
    <Navbar className={clsx(color && colors)}>
      <NavbarContent>
        <NavigationPart_Brand title={title} />
      </NavbarContent>
    </Navbar>
  );
}

export default NavigationStandard;
