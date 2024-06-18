'use client';

import React from 'react';

/**
 * Hero section props
 */
export interface HeroProps {
  /**
   * The title of the hero section
   */
  title?: string;
  /**
   * The subtitle of the hero section
   */
  subtitle?: string;

  /**
   * Custom class name
   */
  className?: string;
}

/**
 * Hero context
 */
export const HeroContext = React.createContext<HeroProps>({});

/**
 * Hero provider
 */
export function HeroProvider({
  children, ...props
}: React.PropsWithChildren<HeroProps>) {
  return (
    <HeroContext.Provider value={props}>
      {children}
    </HeroContext.Provider>
  );
}
