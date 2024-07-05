'use client';

import React from 'react';
import { DividerProps } from './Divider.types';
import { cn } from '@do-ob/ui/utility';
import { Separator } from 'react-aria-components';

export function Divider({
  orientation = 'horizontal',
  className,
  ...props
}: DividerProps & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <Separator
      orientation={orientation}
      className={cn(
        'border-background-fg/50 dark:border-background-dark-fg/50',
        orientation === 'horizontal' ? 'h-px w-full border-t' : 'h-full w-px border-l',
        className
      )}
      {...props}
    ></Separator>
  );
};

export default Divider;
