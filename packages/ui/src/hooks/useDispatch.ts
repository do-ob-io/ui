import { DoobUiContext } from '@do-ob/ui/context';
import { use } from 'react';

export function useDispatch() {
  const { dispatch } = use(DoobUiContext);
  return dispatch;
};
