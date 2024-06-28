import type { BrandProps, NavigationProps } from '@do-ob/ui/widgets';

export interface HeaderProps {
  /**
   * Branding properties.
   */
  brand?: BrandProps;

  /**
   * The variant of the header.
   */
  variant?: 'standard' | 'extended';

  /**
   * Navigation properties.
   */
  navigation?: NavigationProps;

  /**
   * Maximum width of the header.
   */
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}
