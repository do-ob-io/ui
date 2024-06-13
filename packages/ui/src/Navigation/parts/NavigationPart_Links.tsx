import { NavbarMenuItem, Link, Button } from '@nextui-org/react';
import { Link as LinkType } from '@do-ob/ui/types';

/**
 * Navigation Brand properties
 */
export interface NavigationPart_LinksProps {
  /**
   * The branding title to display.
   */
  links?: LinkType[];
}

/**
 * Navigation Links component
 */
export function NavigationPart_Links({
  links = [],
}: NavigationPart_LinksProps) {
  return links.length ? links.map((link) => (
    <NavbarMenuItem>
      <Button as={Link} href={link.url} variant="light" className="text-inherit">
        {link.title}
      </Button>
    </NavbarMenuItem>
  )) : (
    <NavbarMenuItem>
      &nbsp;
    </NavbarMenuItem>
  );
}

export default NavigationPart_Links;
