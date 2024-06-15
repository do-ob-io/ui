import type { Link, ThemeColor } from '@do-ob/ui/types';

import { NavigationStandard } from './NavigationStandard';
import { NavigationIsland } from './NavigationIsland';

export interface NavigationProps {
  /**
   * The brand title to display
   */
  title?: string;

  /**
   * The brand image to display
   */
  image?: string;

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
}

export interface NavigationVariantProps extends NavigationProps {
  /**
   * The variant of the navigation
   */
  variant?: 'standard' | 'island';
}

export function Navigation({
  variant = 'standard',
  ...props
}: NavigationVariantProps) {

  switch (variant) {
    case 'island':
      return <NavigationIsland {...props} />;
    default:
      return <NavigationStandard {...props} />;
  }
}
