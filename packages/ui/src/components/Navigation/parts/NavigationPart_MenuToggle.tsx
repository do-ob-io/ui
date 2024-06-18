import { NavbarMenuToggle } from '@nextui-org/react';

export interface NavigationPart_MenuToggleProps {
  isMenuOpen?: boolean;
  className?: string;
}

export function NavigationPart_MenuToggle({
  isMenuOpen = false,
  className = '',
}: NavigationPart_MenuToggleProps) {

  return (
    <NavbarMenuToggle
      aria-label={isMenuOpen ? 'Close manu' : 'Open menu'}
      className={className}
    />
  );
}
