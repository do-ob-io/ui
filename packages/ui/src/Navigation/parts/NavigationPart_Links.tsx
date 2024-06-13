import { NavbarMenuItem, Link, Button, Popover, PopoverTrigger, PopoverContent } from '@nextui-org/react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { Link as LinkType } from '@do-ob/ui/types';

/**
 * Navigation Brand properties
 */
export interface NavigationPart_LinksProps {
  /**
   * The branding title to display.
   */
  links?: LinkType[];
}

function LinkLeaf({ link }: { link: LinkType }) {
  return (
    <NavbarMenuItem>
      <Button
        as={Link}
        href={link.url}
        variant="light"
        className="text-inherit"
      >
        {link.title}
      </Button>
    </NavbarMenuItem>
  );
}

function LinkBranch({ link }: { link: LinkType }) {
  return (
    <Popover
      placement="bottom"
    >
      <NavbarMenuItem>
        <PopoverTrigger>
          <Button
            variant="light"
            className="text-inherit"
            endContent={<ChevronDownIcon className="size-4" />}
          >
            {link.title}
          </Button>
        </PopoverTrigger>
      </NavbarMenuItem>
      <PopoverContent className="min-w-32 items-start p-2">
        <Link href={link.url} className="w-full rounded px-4 py-2 text-inherit">
          {link.title}
        </Link>
      </PopoverContent>
    </Popover>
  );
}

/**
 * Navigation Links component
 */
export function NavigationPart_Links({
  links = [],
}: NavigationPart_LinksProps) {
  return links.length ? links.map((link) => !link.links?.length ? (
    <LinkLeaf key={link.title} link={link} />
  ) : (
    <LinkBranch key={link.title} link={link} />
  )) : (
    <NavbarMenuItem>
      &nbsp;
    </NavbarMenuItem>
  );
}

export default NavigationPart_Links;
