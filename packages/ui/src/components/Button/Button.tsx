'use client';

import React from 'react';
import { Button as AriaButton, Link as AriaLink } from 'react-aria-components';
import { fillStyles, emptyStyles, cn, interactiveStyles } from '@do-ob/ui/utility';
import { ButtonProps, ButtonVariant, ButtonSize } from './Button.types';
import { Polymorphic } from '@do-ob/ui/types';
import { useDialogControlButtonProps } from '@do-ob/ui/hooks';

/**
 * Define tailwind classes for the variants.
 */
const variantStyles: Record<ButtonVariant, string> = {
  bordered: 'border-2 bg-transparent hover:brightness-75 active:brightness-50',
  filled: 'border-2 hover:brightness-75 active:brightness-50 [&_svg]:fill-background dark:[&_svg]:fill-background-dark',
  faded: 'border-2 border-transparent dark:border-transparent hover:brightness-75 active:brightness-50 bg-opacity-20 dark:bg-opacity-20 hover:bg-opacity-30 active:bg-opacity-50',
  light: 'border-2 border-transparent bg-transparent hover:bg-black/10 active::bg-black/20 dark:border-transparent',
};

/**
 * Define tailwind classes for the sizes.
 */
const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-2 h-8 text-sm',
  md: 'px-4 h-11 text-base',
  lg: 'px-6 h-14 text-xl',
};

/**
 * Define tailwind classes for the sizes in non-text context.
 */
const sizeComponetStyles: Record<ButtonSize, string> = {
  sm: 'px-2 min-h-8 text-sm',
  md: 'px-4 min-h-11 text-base',
  lg: 'px-6 min-h-14 text-xl',
};

/**
 * Define tailwind classes for the sizes.
 */
const sizeIconStyles: Record<ButtonSize, string> = {
  sm: 'size-8 text-sm [&_svg]:size-5',
  md: 'size-11 text-base [&_svg]:size-7',
  lg: 'size-14 text-lg [&_svg]:size-10',
};

/**
 * Button
 */
export function Button<
  Element extends React.ElementType = typeof AriaButton
>({
  as,
  children,
  variant = 'filled',
  size = 'md',
  color = 'primary',
  className,
  startContent = null,
  endContent = null,
  iconify = false,
  unstyled = false,
  href,
  dialog,
  ...props
}: ButtonProps & Polymorphic<Element>) {

  const dialogControlProps = useDialogControlButtonProps(dialog);

  const Tag = as ?? (href ? AriaLink : AriaButton);

  const isExternal = href && (href.startsWith('http://') || href.startsWith('https://'));

  const linkProps = {
    href,
    target: isExternal ? '_blank' : undefined,
    rel: isExternal ? 'noopener noreferrer' : undefined,
  };

  const variantClasses = variantStyles[variant];
  const sizeClasses = iconify ?
    sizeIconStyles[size] :
    (typeof children === 'string' ? sizeStyles[size] : sizeComponetStyles[size]);
  const colorClasses = (() => {
    switch (variant) {
      case 'filled':
        return fillStyles[color];
      case 'bordered':
      case 'light':
        return emptyStyles[color];
      case 'faded':
        return cn(fillStyles[color], emptyStyles[color]);
    }
  })();
  
  return (
    <Tag
      className={unstyled ? className : cn(
        'inline-flex items-center justify-center rounded no-underline',
        interactiveStyles.focus,
        interactiveStyles.mouse,
        colorClasses,
        sizeClasses,
        variantClasses,
        iconify && 'rounded-full',
        className
      )}
      {...linkProps}
      {...dialogControlProps}
      {...props}
    >
      {startContent && <span className="mr-2">{startContent}</span>}
      {children}
      {endContent && <span className="ml-2">{endContent}</span>}
    </Tag>
  );
}
