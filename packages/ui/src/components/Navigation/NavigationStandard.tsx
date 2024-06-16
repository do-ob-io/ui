import { Navbar, NavbarContent } from '@nextui-org/react';
import { twColors } from '@do-ob/ui/utility';
import { clsx, clmg } from '@do-ob/core';
import type { NavigationProps } from './Navigation';
import { NavigationPart_Brand } from './parts/NavigationPart_Brand';
import { NavigationPart_Links } from './parts/NavigationPart_Links';
import { NavigationPart_Actions } from './parts/NavigationPart_Actions';

export function NavigationStandard({
  title,
  color,
  links,
  className,
  search,
  modeToggle,
  socials
}: NavigationProps) {

  const [ colors ] = twColors(color);

  return (
    <Navbar
      className={clmg(clsx(color && colors, 'border-b-1 border-b-foreground-200/50', className))}
      height="4rem"
    >
      <NavbarContent justify="start">
        <NavigationPart_Brand title={title} />
      </NavbarContent>

      <NavbarContent justify="center">
        <NavigationPart_Links links={links} colors={colors} />
      </NavbarContent>

      <NavbarContent justify="end">
        <div className="max-w-64">
          <NavigationPart_Actions search={search} modeToggle={modeToggle} socials={socials} />
        </div>
      </NavbarContent>

    </Navbar>
  );
}

export default NavigationStandard;
