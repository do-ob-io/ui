import { NavbarBrand, Link } from '@nextui-org/react';
import { Image } from '@do-ob/ui/widgets';
import { NavigationProps } from '../data/NavigationProps';
import { clsx } from '@do-ob/core';

/**
 * Navigation Brand component
 */
export function NavigationPart_Brand({ base: {
  title,
  titleShort,
  logo,
  logoSize,
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
            className={classNames?.logo}
            style={{ width: logoSize ?? 40, height: logoSize ?? 40 }}
          />
        ) : null}
        <h1 className={clsx('hidden text-3xl tracking-tight md:inline', classNames?.title)}>{title}</h1>
        <h1 className={clsx('text-3xl tracking-tight md:hidden', classNames?.title)}>{titleShort ?? title}</h1>
      </Link>
    </NavbarBrand>
  );
}

export default NavigationPart_Brand;
