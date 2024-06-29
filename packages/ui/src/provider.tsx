 
'use client';
 
import React from 'react';
import { RouterProvider } from 'react-aria-components';
import {
  DoobUiContext,
  DoobUiContextProps,
  doobUiContextDefaultProps,
  DialogContext,
  DialogDispatchContext,
} from '@do-ob/ui/context';
import { useMode, usePathname } from '@do-ob/ui/hooks';
import { dialogReducer } from '@do-ob/ui/reducer';

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

  const [ dialogState, dialogDispatch ] = React.useReducer(dialogReducer, dialogReducer());

  const pathname = usePathname(pathnameProp);
  const { mode, modeToggle } = useMode(props.mode);

  return (
    <RouterProvider navigate={navigate}>
      <DoobUiContext.Provider value={{
        ...doobUiContextDefaultProps,
        ...props,
        pathname,
        mode,
        modeToggle
      }}>
        <DialogContext.Provider value={dialogState}>
          <DialogDispatchContext.Provider value={dialogDispatch}>
            {children}
          </DialogDispatchContext.Provider>
        </DialogContext.Provider>
      </DoobUiContext.Provider>
    </RouterProvider>
  );
}
