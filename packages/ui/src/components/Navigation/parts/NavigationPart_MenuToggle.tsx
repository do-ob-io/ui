import { NavbarMenuToggle } from '@nextui-org/react';

export interface NavigationPart_MenuToggleProps {
  className?: string;
}

export function NavigationPart_MenuToggle({
  className = '',
}: NavigationPart_MenuToggleProps) {

  return (
    <NavbarMenuToggle
      aria-label="Open or close manu"
      className={className}
    />
  );
}
