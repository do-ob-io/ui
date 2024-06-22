import { ThemeColor } from '@do-ob/ui/types';
import { twMerge as twMergeLib } from 'tailwind-merge';
import { clsx } from '@do-ob/core';

/**
 * Merges tailwind classes.
 */
export function twMerge(...classes: unknown[]): string {
  return twMergeLib(clsx(...classes));
}

export type TwColors = 'background' | 'foreground' | 'primary' | 'secondary' | 'success' | 'warning' | 'error';

export const interactiveStyles = {
  focus: 'focus:outline-blue-500 outline-offset-1 focus:outline-2 focus:outline-offset-4 transition-all',
  mouse: 'brightness-100 dark:hover:brightness-125 dark:active:brightness-150 hover:brightness-75 active:brightness-50 transition-all duration-200',
};

export const fillStyles: Record<TwColors, string> = {
  background: 'bg-background text-foreground border-background',
  foreground: 'bg-foreground text-background border-foreground',
  primary: 'bg-primary text-primary-foreground border-primary',
  secondary: 'bg-secondary text-secondary-foreground border-secondary',
  success: 'bg-success text-success-foreground border-success',
  warning: 'bg-warning text-warning-foreground border-warning',
  error: 'bg-error text-error-foreground border-error',
};

export const emptyStyles: Record<TwColors, string> = {
  background: 'bg-transparent text-background border-background',
  foreground: 'bg-transparent text-foreground border-foreground',
  primary: 'bg-transparent text-primary border-primary',
  secondary: 'bg-transparent text-secondary border-secondary',
  success: 'bg-transparent text-success border-success',
  warning: 'bg-transparent text-warning border-warning',
  error: 'bg-transparent text-error border-error',
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
