import React from 'react';
import { NavbarBrand, Link, Image } from '@nextui-org/react';
import { DoobUiContext } from '@do-ob/ui/context'; 

/**
 * Navigation Brand properties
 */
export interface NavigationPart_BrandProps {
  /**
   * The branding title to display.
   */
  title?: string;

  /**
   * The branding image to display.
   */
  image?: string;
}

/**
 * Navigation Brand component
 */
export function NavigationPart_Brand({
  title,
  image,
}: NavigationPart_BrandProps) {

  const { image: imageNode } = React.useContext(DoobUiContext);

  return (
    <NavbarBrand>
      {image ? (
        <Image
          as={imageNode}
          src={image}
          alt={title}
          width={40}
          height={40}
        />
      ) : null}
      <Link href="/" className="text-2xl tracking-tight text-inherit">{title}</Link>
    </NavbarBrand>
  );
}

export default NavigationPart_Brand;
