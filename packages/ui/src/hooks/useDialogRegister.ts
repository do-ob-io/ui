
import { dialogActions } from '@do-ob/ui/reducer';
import { use, useEffect } from 'react';
import { DialogDispatchContext } from '@do-ob/ui/context';

export function useDialogRegister(id: string) {
  const dispatch = use(DialogDispatchContext);

  useEffect(() => {
    dispatch(dialogActions.register(id));
    return () => {
      dispatch(dialogActions.unregister(id));
    };
  }, [ dispatch, id ]);
};
