import { NavbarBrand } from '@nextui-org/react';

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
      <h1 className="text-2xl">{title}</h1>
    </NavbarBrand>
  );
}

export default NavigationPart_Brand;
