/* eslint-disable @typescript-eslint/no-explicit-any */

import { Call } from '@do-ob/ui/types';

/**
 * A hero aritcle.
 */
export interface HeroArticle {
  /**
   * The title of the article
   */
  title: string;
  /**
   * The subtitle of the article
   */
  subtitle: string;
  /**
   * The image url of the article
   */
  image: string;
  /**
   * The url of the article
   */
  url: string;
}

/**
 * Hero section props
 */
export interface HeroArticlesProps {
  /**
   * The articles to display
   */
  articles: HeroArticle[];

  /**
   * An announcement call to display above the hero.
   */
  announcement?: Call;

  /**
   * A latest event call
   */
  latest?: Call;

  /**
   * Custom class name
   */
  className?: string;

  /**
   * The image node to use.
   */
  imageNode?: React.ElementType<any>;

  /**
   * Radius of images
   */
  radius?: 'none' | 'sm' | 'md' | 'lg';

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
