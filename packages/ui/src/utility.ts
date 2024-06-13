import { ThemeColor } from '@do-ob/ui/types';

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
