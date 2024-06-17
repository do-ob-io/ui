'use client';

import { twColors } from '@do-ob/ui/utility';
import { NavigationContext, NavigationProps } from './NavigationContext';
import { PropsWithChildren } from 'react';

export function NavigationProvider({
  children,
  ...props
}: PropsWithChildren<NavigationProps>) {

  const value = {
    ...props,
    colors: twColors(props.color),
  };

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
}
