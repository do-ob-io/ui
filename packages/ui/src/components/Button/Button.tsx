'use client';

import React from 'react';
import { Button as AriaButton } from 'react-aria-components';
import { fillStyles, emptyStyles, cn, interactiveStyles } from '@do-ob/ui/utility';

export interface ButtonProps<
  Element extends React.ElementType = typeof AriaButton
> {
  as?: Element;
  variant?: 'bordered' | 'filled' | 'faded' | 'light';
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  className?: string;
  iconify?: boolean;
}

/**
 * Define tailwind classes for the variants.
 */
const variantStyles: Record<NonNullable<ButtonProps['variant']>, string> = {
  bordered: 'border-2 bg-transparent hover:brightness-75 active:brightness-50',
  filled: 'border-2 hover:brightness-75 active:brightness-50 [&_svg]:fill-background dark:[&_svg]:fill-background-dark',
  faded: 'border-2 border-transparent dark:border-transparent hover:brightness-75 active:brightness-50 bg-opacity-20 dark:bg-opacity-20 hover:bg-opacity-30 active:bg-opacity-50',
  light: 'border-2 border-transparent bg-transparent hover:bg-black/10 active::bg-black/20 dark:border-transparent',
};

/**
 * Define tailwind classes for the sizes.
 */
const sizeStyles: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'px-2 h-8 text-sm',
  md: 'px-4 h-11 text-base',
  lg: 'px-6 h-14 text-xl',
};

/**
 * Define tailwind classes for the sizes.
 */
const sizeIconStyles: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'size-8 text-sm [&_svg]:size-5',
  md: 'size-11 text-base [&_svg]:size-7',
  lg: 'size-14 text-lg [&_svg]:size-10',
};

/**
 * Button
 */
export function Button<
  Element extends React.ElementType
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
  ...props
}: ButtonProps<Element> & React.ComponentPropsWithoutRef<Element>) {

  const Tag = as ?? AriaButton;

  const variantClasses = variantStyles[variant];
  const sizeClasses = iconify ? sizeIconStyles[size] : sizeStyles[size];
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
      className={cn(
        'rounded inline-flex justify-center items-center no-underline',
        interactiveStyles.focus,
        interactiveStyles.mouse,
        colorClasses,
        sizeClasses,
        variantClasses,
        iconify && 'rounded-full',
        className
      )}
      {...props}
    >
      {startContent && <span className="mr-2">{startContent}</span>}
      {children}
      {endContent && <span className="ml-2">{endContent}</span>}
    </Tag>
  );
}
