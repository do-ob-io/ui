import { SearchButton } from '../../SearchButton/SearchButton';

/**
 * Navigation Brand properties
 */
export interface NavigationPart_ActionsProps {
  /**
   * The search form action URL.
   */
  search?: string;
}

/**
 * Navigation Search component
 */
export function NavigationPart_Actions({
  search,
}: NavigationPart_ActionsProps) {

  return (<ul>
    {search ? (
      <li>
        <SearchButton />
      </li>
    ) : null}
  </ul>);
}
