'use client';

/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { ThemeMode } from '@do-ob/ui/types';
import { nop } from '@do-ob/core';
import { createContext } from 'react';

/**
 * Context properties for the do-ob ui provider
 */
export interface DoobUiContextProps {
  /**
   * The image component to utilize for optimization
   * 
   * This is useful in NextJS to pass in the Image component.
   */
  image?: React.ElementType<any>;

  /**
   * Navigation method.
   */
  navigate: (path: string) => void;

  /**
   * Pathname hook.
   */
  pathname: string;

  /**
   * The theme to use for the application.
   */
  mode?: ThemeMode;

  /**
   * Toggle the theme mode.
   */
  modeToggle?: () => void;
}

/**
 * Default properties for the do-ob ui context
 */
export const doobUiContextDefaultProps: DoobUiContextProps = {
  image: undefined,
  navigate: (path) => window.location.href = path,
  pathname: '',
  mode: 'light',
  modeToggle: nop,
};

/**
 * The do-ob user interface (ui) context
 */
export const DoobUiContext = createContext<DoobUiContextProps>(doobUiContextDefaultProps);
