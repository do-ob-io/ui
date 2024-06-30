import { ThemeColor } from '@do-ob/ui/types';
// import { twMerge } from 'tailwind-merge';
import { clsx } from '@do-ob/core';

/**
 * Merges tailwind classes.
 */
export function cn(...classes: unknown[]): string {
  return clsx(...classes);
}

export type TwColors = 'background' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';

export const interactiveStyles = {
  focus: 'focus-visible:outline-blue-500 outline-offset-1 focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:transition-all focus-visible:duration-200 focus:outline-none',
  mouse: 'brightness-100 dark:hover:brightness-125 dark:active:brightness-150 hover:brightness-75 active:brightness-50 hover:transition-all hover:duration-200 cursor-pointer',
};

export const fillStyles: Record<TwColors, string> = {
  background: 'bg-background text-background-fg border-background dark:bg-background-dark dark:text-background-dark-fg dark:border-background-dark [&_svg]:fill-background-fg dark:[&_svg]:fill-background-dark-fg',
  primary: 'bg-primary text-primary-fg border-primary dark:bg-primary-dark dark:text-primary-dark-fg dark:border-primary-dark',
  secondary: 'bg-secondary text-secondary-fg border-secondary dark:bg-secondary-dark dark:text-secondary-dark-fg dark:border-secondary-dark',
  success: 'bg-success text-success-fg border-success dark:bg-success-dark dark:text-success-dark-fg dark:border-success-dark',
  warning: 'bg-warning text-warning-fg border-warning dark:bg-warning-dark dark:text-warning-dark-fg dark:border-warning-dark',
  danger: 'bg-danger text-danger-fg border-danger dark:bg-danger-dark dark:text-danger-dark-fg dark:border-danger-dark',
};

export const emptyStyles: Record<TwColors, string> = {
  background: 'text-background border-background dark:text-background-dark dark:border-background-dark [&_svg]:fill-background-fg dark:[&_svg]:fill-background-dark-fg',
  primary: 'text-primary border-primary dark:text-primary-dark dark:border-primary-dark [&_svg]:fill-primary dark:[&_svg]:fill-primary-dark',
  secondary: 'text-secondary border-secondary dark:text-secondary-dark dark:border-secondary-dark [&_svg]:fill-secondary dark:[&_svg]:fill-secondary-dark',
  success: 'text-success border-success dark:text-success-dark dark:border-success-dark [&_svg]:fill-success dark:[&_svg]:fill-success-dark',
  warning: 'text-warning border-warning dark:text-warning-dark dark:border-warning-dark [&_svg]:fill-warning dark:[&_svg]:fill-warning-dark',
  danger: 'text-danger border-danger dark:text-danger-dark dark:border-danger-dark [&_svg]:fill-danger dark:[&_svg]:fill-danger-dark',
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
