import type { Link } from '@do-ob/ui/types';

export interface NavigationProps {
  /**
   * Label to use for accessibility.
   */
  label?: string;

  /**
   * The links of the navigation
   */
  links?: Link[];

  /**
   * The orientation of the navigation
   */
  orientation?: 'horizontal' | 'vertical';

  /**
   * Class names to merge with the root componet.
   */
  className?: string;
}
