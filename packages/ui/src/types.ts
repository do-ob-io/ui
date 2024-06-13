/**
 * Theem colors.
 */
export type ThemeColor = 'background' | 'foreground' | 'default' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';

/**
 * A link to another page.
 */
export interface Link {
  /**
   * The URL of the link.
   */
  url: string;

  /**
   * The text title of the link.
   */
  title: string;

  /**
   * Nested links.
   */
  links?: Link[];
}
