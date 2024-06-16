import { SearchAction, search } from '@do-ob/ui/actions';
import { SearchFormInputs } from './SearchFormInputs';
import { useActionState } from '@do-ob/ui/hooks';
import { Form } from '@do-ob/ui/components';

/**
 * Search Form properties
 */
export interface SearchFormProps {
  /**
   * The search form action URL.
   */
  action?: SearchAction;
}

/**
 * Search Form component
 */
export function SearchForm({
  action = search,
}: SearchFormProps) {

  const [ , formAction ] = useActionState(action, []);

  return (
    <Form
      className="flex w-full flex-col gap-2"
      changeSubmit
      action={formAction}
    >
      <SearchFormInputs />
    </Form>);
}
