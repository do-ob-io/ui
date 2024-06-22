import type { NavigationProps } from './data/NavigationProps';

import { NavigationStandard } from './NavigationStandard';
import { NavigationIsland } from './NavigationIsland';
import { NavigationExtended } from './NavigationExtended';

export interface NavigationVariantProps extends NavigationProps {
  /**
   * The variant of the navigation
   */
  variant?: 'standard' | 'island' | 'extended';
}

export function Navigation({
  variant = 'standard',
  ...props
}: NavigationVariantProps) {

  switch (variant) {
    case 'island':
      return <NavigationIsland {...props} />;
    case 'extended':
      return <NavigationExtended {...props} />;
    default:
      return <NavigationStandard {...props} />;
  }
}
