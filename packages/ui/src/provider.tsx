import { NextUIProvider, NextUIProviderProps } from '@nextui-org/react';
import React from 'react';

export interface doobContextProps {
  /**
   * The image component to utilize for optimization
   * 
   * This is useful in NextJS to pass in the Image component.
   */
  imageNode?: React.ReactNode;
}

export const doobContextDefaultProps: doobContextProps = {
  imageNode: undefined
};

export const DoobContext = React.createContext<doobContextProps>(doobContextDefaultProps);

export interface DoobProviderProps extends doobContextProps {
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
export function DoobProvider({
  children,
  nextui,
  ...contextValue
}: React.PropsWithChildren<DoobProviderProps>) {

  return (
    <NextUIProvider {...nextui} >
      <DoobContext.Provider value={contextValue}>
        {children}
      </DoobContext.Provider>
    </NextUIProvider>
  );
}
