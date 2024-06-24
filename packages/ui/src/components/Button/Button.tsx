'use client';

import React from 'react';
import { Button as AriaButton } from 'react-aria-components';
import { fillStyles, emptyStyles, twMerge, interactiveStyles } from '@do-ob/ui/utility';

export interface ButtonProps<
  Element extends React.ElementType = typeof AriaButton
> {
  as?: Element;
  variant?: 'bordered' | 'filled' | 'light';
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  className?: string;
}

/**
 * Define tailwind classes for the variants.
 */
const variantStyles: Record<NonNullable<ButtonProps['variant']>, string> = {
  bordered: 'border-2 bg-transparent hover:brightness-75 active:brightness-50',
  filled: 'border-2 hover:brightness-75 active:brightness-50',
  light: 'border-2 border-transparent bg-transparent hover:bg-black/10 active::bg-black/20 dark:border-transparent',
};

/**
 * Define tailwind classes for the sizes.
 */
const sizeStyles: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'px-2 py-1 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
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
  ...props
}: ButtonProps<Element> & React.ComponentPropsWithoutRef<Element>) {

  const Tag = as ?? AriaButton;

  const variantClasses = variantStyles[variant];
  const sizeClasses = sizeStyles[size];
  const colorClasses = (() => {
    switch (variant) {
      case 'filled':
        return fillStyles[color];
      case 'bordered':
      case 'light':
        return emptyStyles[color];
    }
  })();
  
  return (
    <Tag
      className={twMerge(
        'rounded inline-flex justify-center items-center no-underline',
        interactiveStyles.focus,
        interactiveStyles.mouse,
        colorClasses,
        sizeClasses,
        variantClasses,
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
