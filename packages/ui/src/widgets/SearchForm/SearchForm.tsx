'use client';

import { SearchAction } from '@do-ob/ui/types';
import { SearchFormInputs } from './SearchFormInputs';
import { useActionState } from '@do-ob/ui/hooks';
import { Form } from '@do-ob/ui/widgets';
import { nop } from '@do-ob/core';

/**
 * Search Form properties
 */
export interface SearchFormProps {
  /**
   * The search form action URL.
   */
  action: SearchAction;

  /**
   * Callback when the action state is updated.
   */
  onResult?: (state: Awaited<ReturnType<SearchAction>> ) => void;

}

/**
 * Search Form component
 */
export function SearchForm({
  action = async () => [],
  onResult = nop,
}: SearchFormProps) {

  const [ state, formAction ] = useActionState(
    async (state: [], payload: FormData) => {
      const query = payload.get('query') as string;
      return await action(state, { query });
    },
    []
  );

  // Call the onResult callback when the state is updated
  if (state !== undefined) {
    onResult(state);
  }

  return (
    <Form
      className="flex w-full flex-col gap-2"
      changeSubmit
      action={formAction}
    >
      <SearchFormInputs />
    </Form>);
}
