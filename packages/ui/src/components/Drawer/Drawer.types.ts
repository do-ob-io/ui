import type { CSSProperties } from 'react';

export interface DrawerProps {
  /**
   * Required id of the dialog used for controls.
   */
  id: string;

  /**
   * The title of the drawer.
   */
  title: string;

  /**
   * If the drawer can be dismissed by clicking outside of it.
   */
  dismissable?: boolean;

  /**
   * Width of the drawer. As React Style CSS
   */
  length?: CSSProperties['width'];

  /**
   * Direction of the drawer.
   */
  direction?: 'top' | 'right' | 'bottom' | 'left';

  /**
   * Hides the drawer title.
   */
  hideTitle?: boolean;

  onClose?: () => void;

  onOpen?: () => void;

  onOpenChange?: (open: boolean) => void;
}
