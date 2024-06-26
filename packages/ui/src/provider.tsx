/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
 
import React from 'react';
import { RouterProvider } from 'react-aria-components';
import { DoobUiContext, DoobUiContextProps, doobUiContextDefaultProps } from '@do-ob/ui/context';
import { useMode } from '@do-ob/ui/hooks';

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
 * A simple hook to get the current pathname
 */
const usePathname = (override: string): string => {
  const [ pathname, setPathname ] = React.useState<string>(override ?? window.location.pathname);

  React.useEffect(() => {
    if(override) {
      setPathname(override);
      return;
    }

    const handleLocationChange = () => {
      setPathname(window.location.pathname);
    };

    // Function to wrap history methods to dispatch events
    const wrapHistoryMethod = (method: 'pushState' | 'replaceState') => {
      const originalMethod = history[method];

      return function (this: History, ...args: any[]) {
        const result = originalMethod.apply(this, args as any);
        window.dispatchEvent(new Event('locationchange'));
        return result;
      };
    };

    // Wrap the pushState and replaceState methods
    history.pushState = wrapHistoryMethod('pushState');
    history.replaceState = wrapHistoryMethod('replaceState');

    // Listen for popstate and custom locationchange events
    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('locationchange', handleLocationChange);

    // Clean up the event listeners on component unmount
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('locationchange', handleLocationChange);
    };
  }, [ override ]);

  return pathname;
};

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

  return (
    <RouterProvider navigate={navigate}>
      <DoobUiContext.Provider value={{
        ...doobUiContextDefaultProps,
        ...props,
        pathname,
        mode,
        modeToggle
      }}>
        {children}
      </DoobUiContext.Provider>
    </RouterProvider>
  );
}
