'use client';

import { cn, interactiveStyles } from '@do-ob/ui/utility';
import { Link as AriaLink } from 'react-aria-components';
import { ArrowTopRightOnSquareIcon } from '@do-ob/ui/icons-hero-solid';
// import { DoobUiContext } from '@do-ob/ui/context';

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

  const Tag = as ?? AriaLink;

  const isExternal = href && (href.startsWith('http://') || href.startsWith('https://'));

  return (
    <Tag
      className={cn(
        'inline-flex items-center text-sky-800 underline hover:decoration-wavy dark:text-sky-300',
        interactiveStyles.focus,
        interactiveStyles.mouse,
        className
      )}
      href={href}
      style={style}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      // onPress={isExternal ? undefined : handlePress}
      {...props}
    >
      {children}
      {isExternal && <ArrowTopRightOnSquareIcon className="ml-1 inline size-4" />}
    </Tag>
  );
}
