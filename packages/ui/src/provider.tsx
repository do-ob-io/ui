 
'use client';
 
import React, { useMemo } from 'react';
import { RouterProvider } from 'react-aria-components';
import {
  DoobUiContext,
  DoobUiContextProps,
  doobUiContextDefaultProps,
} from '@do-ob/ui/context';
import { useMode, usePathname } from '@do-ob/ui/hooks';
import { DialogProvider } from './provider/DialogProvider';

export interface DoobUiProviderProps {
  /**
   * Set the image component to utilize for optimization
   */
  image?: DoobUiContextProps['image'];

  /**
   * Navigation method.
   */
  navigate?: DoobUiContextProps['navigate'];

  /**
   * Pathname hook.
   */
  pathname?: DoobUiContextProps['pathname'];

  /**
   * Set the initial theme mode to use for the application.
   * 
   * Changing this value later will not change the theme mode.
   * 
   * @default 'light'
   */
  mode?: DoobUiContextProps['mode'];
}

/**
 * The provider for the doob context
 */
export function DoobUiProvider({
  children,
  navigate = doobUiContextDefaultProps.navigate,
  pathname: pathnameProp = doobUiContextDefaultProps.pathname,
  ...props
}: React.PropsWithChildren<DoobUiProviderProps>) {

  const pathname = usePathname(pathnameProp);
  const { mode, modeToggle } = useMode(props.mode);

  const contextValue = useMemo(() => ({
    ...doobUiContextDefaultProps,
    ...props,
    pathname,
    mode,
    modeToggle,
  }), [ props, pathname, mode, modeToggle ]);

  return (
    <RouterProvider navigate={navigate}>
      <DoobUiContext.Provider value={contextValue}>
        <DialogProvider>
          {children}
        </DialogProvider>
      </DoobUiContext.Provider>
    </RouterProvider>
  );
}
