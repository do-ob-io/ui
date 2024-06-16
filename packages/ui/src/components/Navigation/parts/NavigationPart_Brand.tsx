'use client';

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
  logo?: string;

  /**
   * The class name for the branding image.
   */
  logoClassName?: string;
}

/**
 * Navigation Brand component
 */
export function NavigationPart_Brand({
  title,
  logo,
  logoClassName,
}: NavigationPart_BrandProps) {

  const { image: imageNode } = React.useContext(DoobUiContext);

  return (
    <NavbarBrand>
      <Link href="/" className="flex flex-row gap-4 rounded p-2 text-inherit">
        {logo ? (
          <Image as={imageNode} src={logo} alt={title} width={40} height={40} className={logoClassName} />
        ) : null}
        <h1 className="hidden text-2xl tracking-tight sm:inline">{title}</h1>
      </Link>
    </NavbarBrand>
  );
}

export default NavigationPart_Brand;
