
import { dialogActions } from '@do-ob/ui/reducer';
import { use, useEffect } from 'react';
import { DialogDispatchContext } from '@do-ob/ui/context';

export function useDialogRegister(id: string, type?: 'modal' | 'popover' | 'drawer') {
  const dispatch = use(DialogDispatchContext);

  useEffect(() => {
    dispatch(dialogActions.register(id, type));
    return () => {
      dispatch(dialogActions.unregister(id));
    };
  }, [ dispatch, id, type ]);
};
