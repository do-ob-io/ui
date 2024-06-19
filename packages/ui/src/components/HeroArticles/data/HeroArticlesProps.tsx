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
