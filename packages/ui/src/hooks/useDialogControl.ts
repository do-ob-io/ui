import { dialogActions } from '@do-ob/ui/reducer';
import { use, useCallback } from 'react';
import { DialogDispatchContext } from '@do-ob/ui/context';

export function useDialogControl(name?: string) {
  const dispatch = use(DialogDispatchContext);

  const toggle = useCallback(() => {
    if(!name) return;
    dispatch(dialogActions.toggle(name));
  }, [ dispatch, name ]);

  const open = useCallback(() => {
    if(!name) return;
    dispatch(dialogActions.open(name));
  }, [ dispatch, name ]);

  const close = useCallback(() => {
    if(!name) return;
    dispatch(dialogActions.close(name));
  }, [ dispatch, name ]);

  return {
    toggle,
    open,
    close,
  };
};
