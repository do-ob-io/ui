import { NavbarMenuToggle } from "@nextui-org/react";

export function NavigationPart_MenuToggle({
  isMenuOpen = false,
  className = '',
}) {

  return (
    <NavbarMenuToggle
      aria-label={isMenuOpen ? 'Close manu' : 'Open menu'}
      className={className}
    />
  );
}