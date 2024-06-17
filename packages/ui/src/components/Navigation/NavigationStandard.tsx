import { Navbar, NavbarContent } from '@nextui-org/react';
import { clsx, clmg } from '@do-ob/core';
import type { NavigationProps } from './data/NavigationContext';
import { NavigationProvider } from './data/NavigationProvider';
import { NavigationPart_Brand } from './parts/NavigationPart_Brand';
import { NavigationPart_Links } from './parts/NavigationPart_Links';
import { NavigationPart_Actions } from './parts/NavigationPart_Actions';
import { twColors } from '@do-ob/ui/utility';

export function NavigationStandard(props: NavigationProps) {

  const colors = twColors(props.color);

  return (
    <NavigationProvider {...props}>
      <Navbar
        className={clmg(clsx(props.color && colors, 'border-b-1 border-b-foreground-200/50', props.className))}
        height="4rem"
      >
        <NavbarContent justify="start">
          <NavigationPart_Brand />
        </NavbarContent>

        <NavbarContent justify="center">
          <NavigationPart_Links />
        </NavbarContent>

        <NavbarContent justify="end">
          <div className="max-w-64">
            <NavigationPart_Actions />
          </div>
        </NavbarContent>

      </Navbar>
    </NavigationProvider>
  );
}

export default NavigationStandard;
