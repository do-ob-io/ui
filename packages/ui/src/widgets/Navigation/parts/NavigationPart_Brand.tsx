import { Brand } from '@do-ob/ui/widgets';
import { Link } from '@do-ob/ui/components';
import { NavigationProps } from '../data/NavigationProps';

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
    <Link href="/" className="flex flex-row gap-4 rounded p-2 text-inherit no-underline">
      <Brand
        name={title}
        nameShort={titleShort}
        image={logo}
        classNames={{
          name: classNames?.title,
          image: classNames?.logo,
        }}
      />
    </Link>
  );
}

export default NavigationPart_Brand;
