import { NavbarMenuItem, Link, Button, Popover, PopoverTrigger, PopoverContent } from '@nextui-org/react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { Link as LinkType } from '@do-ob/ui/types';
import { clsx } from '@do-ob/core';

/**
 * Navigation Brand properties
 */
export interface NavigationPart_LinksProps {
  /**
   * The branding title to display.
   */
  links?: LinkType[];

  /**
   * bg and text colors
   */
  colors?: string;
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

function LinkBranch({ links, level }: { links: LinkType[], level: number }) {

  const classes: string[] = [];
  if (level === 1) {
    classes.push('font-bold');
    classes.push('text-sm');
  }

  if (level === 2) {
    classes.push('text-sm');
  }

  if(level > 2) {
    classes.push('text-xs');
  }

  return links.map((link) => (<>
    <Link href={link.url} className={clsx(...classes, 'box-border w-full rounded px-4 py-2 text-inherit hover:bg-black/10 dark:hover:bg-white/10')}>
      {link.title}
    </Link>
    {link.links?.length && (
      <div className="w-full border-l-1 border-black/50 pl-4 dark:border-white/50 [&:last-child]:mb-0">
        <LinkBranch links={link.links} level={level + 1} />
      </div>
    )}
  </>));
}

function LinkTrunk({ link, colors }: { link: LinkType, colors?: string }) {
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
      <PopoverContent className={clsx(colors, 'min-w-56 items-start p-4')}>
        <Link href={link.url} className="flex flex-col items-start rounded p-2 font-bold text-inherit">
          {link.title}
        </Link>
        <LinkBranch links={link.links ?? []} level={1} />
      </PopoverContent>
    </Popover>
  );
}

/**
 * Navigation Links component
 */
export function NavigationPart_Links({
  links = [],
  colors,
}: NavigationPart_LinksProps) {
  return links.length ? links.map((link) => !link.links?.length ? (
    <LinkLeaf key={link.title} link={link} />
  ) : (
    <LinkTrunk key={link.title} link={link} colors={colors} />
  )) : (
    <NavbarMenuItem>
      &nbsp;
    </NavbarMenuItem>
  );
}

export default NavigationPart_Links;
