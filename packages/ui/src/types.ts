 
export * from './types/actions';
export * from './types/locale';

/**
 * Polymorphic component.
 */
export type Polymorphic<
  Element extends React.ElementType
> = {
  as?: Element;
} & React.ComponentPropsWithoutRef<Element>;

/**
 * A call to some action
 */
export interface Call {
  /**
   * The title of the call.
   */
  title: string;

  /**
   * The URL of the call.
   */
  url?: string;

  /**
   * The callback of the call.
   */
  onCall?: () => void;
}

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
