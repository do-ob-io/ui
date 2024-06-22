import { SearchState } from '@do-ob/ui/types';

/**
 * Search Form Results properties
 */
export interface SearchFormResultsProps {
  /**
   * Is the results are pending.
   */
  pending?: boolean;

  /**
   * The search results
   */
  results: SearchState;
}

/**
 * Navigation Search component
 */
export function SearchFormResults({
  pending,
  results,
}: SearchFormResultsProps) {

  if (pending) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {results.length ? (
        <ul>
          {results.map((result) => (
            <li key={result.id}>
              <a href={result.url}>
                <h3>{result.title}</h3>
                {result.description ? <p>{result.description}</p> : null}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found</p>
      )}
    </div>
  );

}
