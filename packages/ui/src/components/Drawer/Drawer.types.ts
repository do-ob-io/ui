export interface DrawerProps {
  /**
   * Controls the open state of the drawer.
   */
  open?: boolean;

  /**
   * If the drawer can be dismissed by clicking outside of it.
   */
  dismissable?: boolean;

  onClose?: () => void;

  onOpen?: () => void;
}
