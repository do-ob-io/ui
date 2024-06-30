import { dialogActions } from '@do-ob/ui/reducer';
import { use, useCallback } from 'react';
import { DialogDispatchContext } from '@do-ob/ui/context';

export function useDialogControlButtonProps(name?: string) {
  const dispatch = use(DialogDispatchContext);

  const onPress = useCallback(() => {
    if(!name) return;
    dispatch(dialogActions.toggle(name));
  }, [ dispatch, name ]);

  return {
    onPress,
  };
};
