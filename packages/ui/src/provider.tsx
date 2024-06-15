import { NextUIProvider, NextUIProviderProps } from '@nextui-org/react';
import { DoobUiContext } from '@do-ob/ui/context';
import type { ThemeMode } from '@do-ob/ui/types';
import { useMode } from '@do-ob/ui/hooks';

export interface DoobUiProviderProps {
  /**
   * Set the image component to utilize for optimization
   */
  image?: React.ElementType<any>;

  /**
   * Set the initial theme mode to use for the application.
   * 
   * Changing this value later will not change the theme mode.
   * 
   * @default 'light'
   */
  mode?: ThemeMode;

  /**
   * NextUI Provider properties.
   * 
   * @see https://nextui.org/docs/api-references/nextui-provider
   */
  nextui?: NextUIProviderProps;
}

'use client';
/**
 * The provider for the doob context
 */
export function DoobUiProvider({
  nextui,
  children,
  ...contextValue
}: React.PropsWithChildren<DoobUiProviderProps>) {

  const { mode, modeToggle } = useMode(contextValue.mode);

  return (
    <NextUIProvider {...nextui} >
      <DoobUiContext.Provider value={{
        ...contextValue,
        mode,
        modeToggle
      }}>
        {children}
      </DoobUiContext.Provider>
    </NextUIProvider>
  );
}
