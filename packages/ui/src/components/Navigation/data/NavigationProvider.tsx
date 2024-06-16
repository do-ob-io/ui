'use client';

import { twColors } from '@do-ob/ui/utility';
import { NavigationContext, NavigationContextProps, NavigationProps } from './NavigationContext';

export interface NavigationProviderProps extends NavigationProps {
  children: ((props: NavigationContextProps) => React.ReactNode )| React.ReactNode;
}

export function NavigationProvider({
  children,
  ...props
}: NavigationProviderProps) {

  const value = {
    ...props,
    colors: twColors(props.color),
  };

  return (
    <NavigationContext.Provider value={value}>
      {typeof children === 'function' ? children(value) : children}
    </NavigationContext.Provider>
  );
}
