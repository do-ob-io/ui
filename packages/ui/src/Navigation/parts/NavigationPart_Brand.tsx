import { NavbarBrand, Link } from '@nextui-org/react';

/**
 * Navigation Brand properties
 */
export interface NavigationPart_BrandProps {
  /**
   * The branding title to display.
   */
  title?: string;
}

/**
 * Navigation Brand component
 */
export function NavigationPart_Brand({
  title,
}: NavigationPart_BrandProps) {
  return (
    <NavbarBrand>
      <Link href="/" className="text-lg text-inherit">{title}</Link>
    </NavbarBrand>
  );
}

export default NavigationPart_Brand;
