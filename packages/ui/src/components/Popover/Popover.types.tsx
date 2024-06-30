export interface PopoverProps {
  /**
   * Required identifier of the popover.
   */
  id: string;

  /**
   * The placement of the popover.
   */
  placement?: 'top' | 'right' | 'bottom' | 'left';
  
  /**
   * The offset of the popover.
   */
  offset?: number;

  /**
   * Allows elements outside the popover to be interactive.
   */
  nonmodal?: boolean;

  /**
   * Hide the overlay arrow with the popup.
   */
  hideArrow?: boolean;
}
