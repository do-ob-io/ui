import { NavbarMenuItem, Link, Button, Popover, PopoverTrigger, PopoverContent, Divider } from '@nextui-org/react';
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
    <NavbarMenuItem className="border-y-4 border-transparent hover:border-b-primary-500">
      <Button
        as={Link}
        href={link.url}
        variant="light"
        className="text-base text-inherit"
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
  }

  const pl = level * 1;

  return links.map((link) => (<div className="relative w-full">
    <Divider
      orientation="vertical"
      className="absolute top-0 h-full"
      style={{
        display: level === 1 ? 'none' : 'block',
        left: `${pl - 1}rem`,
      }}
    />
    <Link
      href={link.url}
      className={clsx(...classes, 'box-border w-full rounded py-2 pr-4 text-inherit hover:bg-black/10 hover:underline dark:hover:bg-white/10')}
      style={{
        paddingLeft: `${pl}rem`,
      }}
    >
      {link.title}
    </Link>
    {link.links?.length && (
      <div className="w-full [&:last-child]:mb-0">
        <LinkBranch links={link.links} level={level + 1} />
      </div>
    )}
  </div>));
}

function LinkTrunk({ link, colors }: { link: LinkType, colors?: string }) {
  return (
    <Popover
      placement="bottom"
    >
      <NavbarMenuItem className="border-y-4 border-transparent hover:border-b-primary-500">
        <PopoverTrigger>
          <Button
            variant="light"
            className="text-base text-inherit"
            endContent={<ChevronDownIcon className="size-4" />}
          >
            {link.title}
          </Button>
        </PopoverTrigger>
      </NavbarMenuItem>
      <PopoverContent className={clsx(colors, 'min-w-64 items-start p-4')}>
        <Button as={Link} href={link.url} className="w-full justify-start rounded bg-transparent px-4 py-2 text-lg font-bold text-inherit hover:bg-black/10 hover:underline dark:hover:bg-white/10">
          {link.title}
        </Button>
        <Divider className="my-1" />
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
