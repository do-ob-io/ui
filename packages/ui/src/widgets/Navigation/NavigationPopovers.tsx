import { Popover } from '@do-ob/ui/components';
import { NavigationProps } from './Navigation.types';

export function NavigationPopovers({
  base,
  id,
}: { base: NavigationProps, id: string }) {

  const {
    links = [],
  } = base;

  return (
    <>
      {links.map((link) => (
        <Popover
          key={link.url}
          id={`${id}-${link.url}`}
          placement="bottom"
          nonmodal
        >
          <h2>{link.title}</h2>
        </Popover>
      ))}
    </>
  );
}
