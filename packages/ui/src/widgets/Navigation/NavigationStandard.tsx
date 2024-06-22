import { Navbar, NavbarContent } from '@nextui-org/react';
import { clsx, clmg } from '@do-ob/core';
import type { NavigationProps } from './data/NavigationProps';
import { NavigationPart_Brand } from './parts/NavigationPart_Brand';
import { NavigationPart_Links } from './parts/NavigationPart_Links';
import { NavigationPart_Actions } from './parts/NavigationPart_Actions';
import { twColors } from '@do-ob/ui/utility';
import { NavigationPart_Menu } from './parts/NavigationPart_Menu';
import { NavigationPart_MenuToggle } from './parts/NavigationPart_MenuToggle';

export function NavigationStandard(props: NavigationProps) {

  const colors = twColors(props.color);

  const additionalClasses = clsx(!props.hideBorder && 'border-b-1 border-b-foreground/10', props.className);

  return (
    <Navbar
      position={props.position}
      height="4rem"
      maxWidth={props.maxWidth}
      isBlurred={props.isBlurred}
      className={clmg(clsx(props.color && colors, 'border-b-1 border-b-foreground/10', additionalClasses))}
    >
      <NavbarContent justify="start">
        <NavigationPart_Brand base={props} />
      </NavbarContent>

      <NavbarContent justify="center" className="hidden lg:flex">
        <NavigationPart_Links base={props} />
      </NavbarContent>

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

export default NavigationStandard;
