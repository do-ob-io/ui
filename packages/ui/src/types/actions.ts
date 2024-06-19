/* eslint-disable @typescript-eslint/no-explicit-any */
export type FormAction<S = any, P = any> = (state: S, payload: P) => Promise<S>;

/**
 * Search State type
 */
export type SearchState = Array<{
  /**
   * The result ID
   */
  id: string;

  /**
   * The result title
   */
  title: string;

  /**
   * The result description
   */
  description?: string;

  /**
   * The result URL
   */
  url: string;

  /**
   * The result thumbnail
   */
  thumbnail?: string;
}>;

/**
 * Search Payload type
 */
export type SearchPayload = {
  /**
   * The search query
   */
  query: string;
};

/**
 * Search action type
 */
export type SearchAction = FormAction<SearchState, SearchPayload>;
