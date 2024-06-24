'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */
import { RouterProvider } from 'react-aria-components';
import { DoobUiContext, doobUiContextDefaultProps } from '@do-ob/ui/context';
import type { ThemeMode } from '@do-ob/ui/types';
import { useMode } from '@do-ob/ui/hooks';

export interface DoobUiProviderProps {
  /**
   * Set the image component to utilize for optimization
   */
  image?: React.ElementType<any>;

  /**
   * Navigation method.
   */
  navigate?: (path: string) => void;

  /**
   * Set the initial theme mode to use for the application.
   * 
   * Changing this value later will not change the theme mode.
   * 
   * @default 'light'
   */
  mode?: ThemeMode;
}

/**
 * The provider for the doob context
 */
export function DoobUiProvider({
  children,
  navigate = doobUiContextDefaultProps.navigate,
  ...props
}: React.PropsWithChildren<DoobUiProviderProps>) {

  const { mode, modeToggle } = useMode(props.mode);

  return (
    <RouterProvider navigate={navigate}>
      <DoobUiContext.Provider value={{
        ...doobUiContextDefaultProps,
        ...props,
        mode,
        modeToggle
      }}>
        {children}
      </DoobUiContext.Provider>
    </RouterProvider>
  );
}
