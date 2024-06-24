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

export type TwColors = 'background' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';

export const interactiveStyles = {
  focus: 'focus:outline-blue-500 outline-offset-1 focus:outline-2 focus:outline-offset-4 transition-all',
  mouse: 'brightness-100 dark:hover:brightness-125 dark:active:brightness-150 hover:brightness-75 active:brightness-50 transition-all duration-200 cursor-pointer',
};

export const fillStyles: Record<TwColors, string> = {
  background: 'bg-background text-background-fg border-background dark:bg-background-dark dark:text-background-dark-fg dark:border-background-dark',
  primary: 'bg-primary text-primary-fg border-primary dark:bg-primary-dark dark:text-primary-dark-fg dark:border-primary-dark',
  secondary: 'bg-secondary text-secondary-fg border-secondary dark:bg-secondary-dark dark:text-secondary-dark-fg dark:border-secondary-dark',
  success: 'bg-success text-success-fg border-success dark:bg-success-dark dark:text-success-dark-fg dark:border-success-dark',
  warning: 'bg-warning text-warning-fg border-warning dark:bg-warning-dark dark:text-warning-dark-fg dark:border-warning-dark',
  danger: 'bg-danger text-danger-fg border-danger dark:bg-danger-dark dark:text-danger-dark-fg dark:border-danger-dark',
};

export const emptyStyles: Record<TwColors, string> = {
  background: 'bg-transparent text-background border-background',
  primary: 'bg-transparent text-primary border-primary dark:text-primary-dark dark:border-primary-dark',
  secondary: 'bg-transparent text-secondary border-secondary dark:text-secondary-dark dark:border-secondary-dark',
  success: 'bg-transparent text-success border-success dark:text-success-dark dark:border-success-dark',
  warning: 'bg-transparent text-warning border-warning dark:text-warning-dark dark:border-warning-dark',
  danger: 'bg-transparent text-danger-light-bg border-danger-light-bg dark:text-danger-dark dark:border-danger-dark',
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
