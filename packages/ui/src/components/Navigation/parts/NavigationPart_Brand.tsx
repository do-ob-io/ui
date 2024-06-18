import { NavbarBrand, Link } from '@nextui-org/react';
import { Image } from '@do-ob/ui/components';
import { NavigationProps } from '../data/NavigationProps';
import { clsx } from '@do-ob/core';

/**
 * Navigation Brand component
 */
export function NavigationPart_Brand({ base: {
  title,
  titleShort,
  logo,
  classNames,
} }: { base: NavigationProps }) {

  return (
    <NavbarBrand>
      <Link href="/" className="flex flex-row gap-4 rounded p-2 text-inherit">
        {logo ? (
          <Image
            src={logo}
            alt={title}
            width={0}
            height={0}
            loading="eager"
            className={clsx('h-[40px] w-auto',classNames?.logo)}
          />
        ) : null}
        <h1 className="hidden text-3xl tracking-tight md:inline">{title}</h1>
        <h1 className="text-3xl tracking-tight md:hidden">{titleShort ?? title}</h1>
      </Link>
    </NavbarBrand>
  );
}

export default NavigationPart_Brand;
