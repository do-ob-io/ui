// Divider.tsx
import React from 'react';
import { DividerProps } from './Divider.types';
import { cn } from '@do-ob/ui/utility';

export function Divider({
  orientation = 'horizontal',
  className,
  ...props
}: DividerProps & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'border-background-fg/50',
        orientation === 'horizontal' ? 'w-full border-t' : 'h-full border-l',
        className
      )}
      {...props}
    ></div>
  );
};

export default Divider;
