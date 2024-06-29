import { DoobUiContext } from '@do-ob/ui/context';
import type { State } from '@do-ob/ui/reducer';
import { use, useCallback } from 'react';

export function useSelector<TSelected>(selector: (state: State) => TSelected): TSelected {
  const { state } = use(DoobUiContext);
  return useCallback(() => selector(state), [ state, selector ])();
};
