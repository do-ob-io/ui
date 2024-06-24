'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextUIProvider, NextUIProviderProps as NextUIProviderPropsOriginal } from '@nextui-org/react';
import { DoobUiContext, doobUiContextDefaultProps } from '@do-ob/ui/context';
import type { ThemeMode } from '@do-ob/ui/types';
import { useMode } from '@do-ob/ui/hooks';

export type NextUIProviderProps = Omit<NextUIProviderPropsOriginal, 'children'>;

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

  /**
   * NextUI Provider properties.
   * 
   * @see https://nextui.org/docs/api-references/nextui-provider
   */
  nextui?: NextUIProviderProps;
}

/**
 * The provider for the doob context
 */
export function DoobUiProvider({
  nextui,
  children,
  ...props
}: React.PropsWithChildren<DoobUiProviderProps>) {

  const { mode, modeToggle } = useMode(props.mode);

  return (
    <NextUIProvider {...nextui} >
      <DoobUiContext.Provider value={{
        ...doobUiContextDefaultProps,
        ...props,
        mode,
        modeToggle
      }}>
        {children}
      </DoobUiContext.Provider>
    </NextUIProvider>
  );
}
