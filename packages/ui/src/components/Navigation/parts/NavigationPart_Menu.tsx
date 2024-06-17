'use client';

import React from 'react';
import { NavbarMenu, NavbarMenuItem, Link, NavbarItem } from '@nextui-org/react';
import { NavigationContext, NavigationProps } from '../data/NavigationContext';
import { NavigationPart_Actions } from './NavigationPart_Actions';

/**
 * Navigation Menu component
 */
export function NavigationPart_Menu() {

  const { links = [] } = React.useContext(NavigationContext);

  return (
    <NavbarMenu className="divide-y">
      <NavbarItem>
        <NavigationPart_Actions />
      </NavbarItem>
      {links.map((link) => (
        <NavbarMenuItem key={link.url} className="p-2">
          <Link href={link.url} size="lg" className="w-full py-1 font-bold text-inherit hover:underline">
            {link.title}
          </Link>
          {link.links && (
            <NavigationPart_MenuSublinks links={link.links} />
          )}
        </NavbarMenuItem>
      ))}
    </NavbarMenu>
  );
}

/**
 * Navigation Menu Sublinks component
 */
export function NavigationPart_MenuSublinks({ links = [], level = 1 }: NavigationProps & { level?: number }) {
  return links.map((link) => (
    <div key={link.url}>
      <Link
        href={link.url}
        size="md"
        className="w-full py-2 text-inherit hover:underline"
        style={{
          paddingLeft: `${(level - 1) * 0.5}rem`,
        }}
      >
        <p>{link.title}</p>
      </Link>
      {link.links && (
        <NavigationPart_MenuSublinks links={link.links} level={level + 1} />
      )}
    </div>
  ));
}
