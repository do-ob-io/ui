import { Link, SocialLinks, ThemeColor } from '@do-ob/ui/types';

/**
 * Context properties for the do-ob ui provider
 */
export interface NavigationProps {
  /**
   * The brand title to display
   */
  title?: string;

  /**
   * A shortened version of the brand title
   */
  titleShort?: string;

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
   * The navigation position attribute
   */
  position?: 'static' | 'sticky';

  /**
   * Class names to modify.
   */
  classNames?: {
    /**
     * The logo image class name
     */
    logo?: string;

    /**
     * The popover content container class name
     */
    popover?: string;
  }
}
