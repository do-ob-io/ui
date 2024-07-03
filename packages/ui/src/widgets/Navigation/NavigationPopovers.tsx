import { Popover } from '@do-ob/ui/components';
import { NavigationProps } from './Navigation.types';
import { NavigationMenu } from './NavigationMenu';

export function NavigationPopovers({
  base,
  id,
}: { base: NavigationProps, id: string }) {

  const {
    links = [],
  } = base;

  const filteredLinks = links.filter((link) => link.links && link.links.length > 0);

  return (
    <>
      {filteredLinks.map((link) => (
        <Popover
          key={link.url}
          id={`${id}-${link.url}`}
          placement="bottom"
          nonmodal
        >
          <NavigationMenu
            base={{
              ...base,
              links: [ {
                title: link.title,
                url: link.url,
              }, ...link.links ?? [] ],
            }}
          />
        </Popover>
      ))}
    </>
  );
}
