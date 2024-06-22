/**
 * Hero section props
 */
export interface HeroProps {
  /**
   * The title of the hero section
   */
  title?: string;
  /**
   * The subtitle of the hero section
   */
  subtitle?: string;

  /**
   * The action text. Typically a button or input.
   */
  actionText?: string;

  /**
   * The type of action. Default is 'button'
   */
  actionType?: 'button' | 'input';

  /**
   * Custom class name
   */
  className?: string;

  /**
   * Custom classes for slots
   */
  classNames?: {
    /**
     * Custom class name for the title
     */
    title?: string;
    /**
     * Custom class name for the subtitle
     */
    subtitle?: string;
  };
}
