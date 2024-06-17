'use client';

import React from 'react';
import { NavbarBrand, Link, Image } from '@nextui-org/react';
import { DoobUiContext } from '@do-ob/ui/context'; 
import { NavigationContext } from '../data/NavigationContext';

/**
 * Navigation Brand component
 */
export function NavigationPart_Brand() {

  const { image: imageNode } = React.useContext(DoobUiContext);
  const { title, titleShort, logo, classNames } = React.useContext(NavigationContext);

  return (
    <NavbarBrand>
      <Link href="/" className="flex flex-row gap-4 rounded p-2 text-inherit">
        {logo ? (
          <Image
            as={imageNode}
            src={logo}
            alt={title}
            width={40}
            height={40}
            className={classNames?.logo}
            classNames={{
              wrapper: 'w-[40px] h-[40px]',
            }}
          />
        ) : null}
        <h1 className="hidden text-3xl tracking-tight md:inline">{title}</h1>
        <h1 className="text-3xl tracking-tight md:hidden">{titleShort ?? title}</h1>
      </Link>
    </NavbarBrand>
  );
}

export default NavigationPart_Brand;
