export interface DrawerProps {
  /**
   * Required name of the dialog used for controls.
   */
  name: string;

  /**
   * If the drawer can be dismissed by clicking outside of it.
   */
  dismissable?: boolean;

  onClose?: () => void;

  onOpen?: () => void;

  onOpenChange?: (open: boolean) => void;
}
