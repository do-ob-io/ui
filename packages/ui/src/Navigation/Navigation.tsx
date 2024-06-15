import type { Link, ThemeColor } from '@do-ob/ui/types';

import { NavigationStandard } from './NavigationStandard';
import { NavigationIsland } from './NavigationIsland';

export interface NavigationProps {
  /**
   * Title of the navigation
   */
  title?: string;

  /**
   * The theme color of the navigation
   */
  color?: ThemeColor;

  /**
   * The links of the navigation
   */
  links?: Link[];
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

export default Navigation;
