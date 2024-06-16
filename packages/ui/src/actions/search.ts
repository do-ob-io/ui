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
export type SearchPayload = FormData & {
  /**
   * The search query
   */
  query: string;
};

/**
 * Search action type.
 */
export type SearchAction = (state: SearchState, payload: FormData) => Promise<SearchState>;

/**
 * Search action type
 */
export const search: SearchAction = async (state, payload) => {
  const query = payload.get('query');

  console.log(`Searching for: ${query}`);

  return state;
};
