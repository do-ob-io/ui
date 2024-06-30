import { dialogActions } from '@do-ob/ui/reducer';
import { use, useCallback, useRef } from 'react';
import { DialogDispatchContext } from '@do-ob/ui/context';

export function useDialogControlButtonProps(name?: string) {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dispatch = use(DialogDispatchContext);

  const onPress = useCallback(() => {
    if(!name) return;
    dispatch(dialogActions.toggle(name, triggerRef));
  }, [ dispatch, name, triggerRef ]);

  return {
    ref: triggerRef,
    onPress,
  };
};
