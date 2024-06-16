'use client';

import { Link, SocialLinks, ThemeColor } from '@do-ob/ui/types';
import { createContext } from 'react';

/**
 * Context properties for the do-ob ui provider
 */
export interface NavigationProps {
  /**
   * The brand title to display
   */
  title?: string;

  /**
   * The brand image to display
   */
  logo?: string;

  /**
   * The theme color of the navigation
   */
  color?: ThemeColor;

  /**
   * The links of the navigation
   */
  links?: Link[];

  /**
   * Class name for the navigation
   */
  className?: string;

  /**
   * The search form action URL
   */
  search?: string;

  /**
   * Enable the dark mode toggle
   */
  modeToggle?: boolean;

  /**
   * The social links of the navigation
   */
  socials?: SocialLinks;

  /**
   * Class names to modify.
   */
  classNames?: {
    /**
     * The logo image class name
     */
    logo?: string;
  }
}

/**
 * The context interface
 */
export interface NavigationContextProps extends NavigationProps {
  /**
   * Compiled tailwind color classes
   */
  colors: [full: string, bg: string, text: string];
}

/**
 * Default properties for the do-ob ui context
 */
export const NavigationProps: NavigationContextProps = {
  colors: [ '', '', '' ],
};

/**
 * The do-ob user interface (ui) context
 */
export const NavigationContext = createContext<NavigationContextProps>(NavigationProps);
