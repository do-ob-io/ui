'use client';

import React from 'react';
import { twMerge, interactiveStyles } from '@do-ob/ui/utility';
import { Link as AriaLink } from 'react-aria-components';
import { ArrowTopRightOnSquareIcon } from '@do-ob/ui/icons-hero-solid';
import { DoobUiContext } from '@do-ob/ui/context';

export interface LinkProps<
  Element extends React.ElementType = typeof AriaLink
> {
  as?: Element;
  href?: string;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function Link<
  Element extends React.ElementType = typeof AriaLink
>({
  as,
  href,
  children,
  className,
  style,
  ...props
}: LinkProps<Element> & React.ComponentPropsWithoutRef<Element>) {

  const { navigate } = React.useContext(DoobUiContext);

  const Tag = as ?? AriaLink;

  const isExternal = href && (href.startsWith('http://') || href.startsWith('https://'));

  const handlePress = () => {
    navigate(href || '');
  };

  return (
    <Tag
      className={twMerge(
        'underline text-sky-800 dark:text-sky-300 hover:decoration-wavy inline-flex items-center',
        interactiveStyles.focus,
        interactiveStyles.mouse,
        className
      )}
      href={isExternal ? href : undefined}
      style={style}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      onPress={isExternal ? undefined : handlePress}
      {...props}
    >
      {children}
      {isExternal && <ArrowTopRightOnSquareIcon className="ml-1 inline size-4" />}
    </Tag>
  );
}
