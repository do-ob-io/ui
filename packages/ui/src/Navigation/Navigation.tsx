import type { ThemeColor } from '../types';

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
