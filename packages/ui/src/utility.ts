'use client';

import { ThemeColor } from '@do-ob/ui/types';
import { twMerge as twMergeLib } from 'tailwind-merge';
import { clsx } from '@do-ob/core';

/**
 * Merges tailwind classes.
 */
export function twMerge(...classes: unknown[]): string {
  return twMergeLib(clsx(...classes));
}

export type TwColors = 'background' | 'foreground' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';

export const interactiveStyles = {
  focus: 'focus:outline-blue-500 outline-offset-1 focus:outline-2 focus:outline-offset-4 transition-all',
  mouse: 'brightness-100 dark:hover:brightness-125 dark:active:brightness-150 hover:brightness-75 active:brightness-50 transition-all duration-200',
};

export const fillStyles: Record<TwColors, string> = {
  background: 'bg-background text-foreground border-background',
  foreground: 'bg-foreground text-background border-foreground',
  primary: 'bg-primary-light-bg text-primary-light-fg border-primary-light-bg dark:bg-primary-dark-bg dark:text-primary-dark-fg dark:border-primary-dark-bg',
  secondary: 'bg-secondary-light-bg text-secondary-light-fg border-secondary-light-bg dark:bg-secondary-dark-bg dark:text-secondary-dark-fg dark:border-secondary-dark-bg',
  success: 'bg-success-light-bg text-success-light-fg border-success-light-bg dark:bg-success-dark-bg dark:text-success-dark-fg dark:border-success-dark-bg',
  warning: 'bg-warning-light-bg text-warning-light-fg border-warning-light-bg dark:bg-warning-dark-bg dark:text-warning-dark-fg dark:border-warning-dark-bg',
  danger: 'bg-danger-light-bg text-danger-light-fg border-danger-light-bg dark:bg-danger-dark-bg dark:text-danger-dark-fg dark:border-danger-dark-bg',
};

export const emptyStyles: Record<TwColors, string> = {
  background: 'bg-transparent text-background border-background',
  foreground: 'bg-transparent text-foreground border-foreground',
  primary: 'bg-transparent text-primary border-primary dark:text-primary-400 dark:border-primary-400',
  secondary: 'bg-transparent text-secondary border-secondary dark:text-secondary-400 dark:border-secondary-400',
  success: 'bg-transparent text-success border-success dark:text-success-400 dark:border-success-400',
  warning: 'bg-transparent text-warning border-warning dark:text-warning-400 dark:border-warning-400',
  danger: 'bg-transparent text-danger-light-bg border-danger-light-bg dark:text-danger-dark-bg dark:border-danger-dark-bg',
};

/**
 * Given a color type, return the corresponding tailwindcss classes for background color and text color.
 */
export function twColors(color?: ThemeColor): [full: string, bg: string, text: string] {
  if (!color) return [ '', '', '' ];

  switch (color) {
    case 'background':
      return [ 'bg-background [&>*]:text-foreground', 'bg-background', 'text-foreground' ];
    case 'foreground':
      return [ 'bg-foreground [&>*]:text-background', 'bg-foreground', 'text-background' ]; break;
    default:
      return [ `bg-${color} [&>*]:text-${color}-foreground`, `bg-${color}`, `text-${color}-foreground` ];
  }
}
