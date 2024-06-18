export * from './types/locale';

/**
 * Theme mode.
 */
export type ThemeMode = 'light' | 'dark';

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

export type Socials = 'facebook' | 'x' | 'instagram' | 'linkedin' | 'youtube';

/**
 * An object of socials.
 */
export type SocialLinks = {
  type: Socials;
  url: string;
}[];
