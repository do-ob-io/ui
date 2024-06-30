 
'use client';
 
import { useReducer } from 'react';
import {
  DialogContext,
  DialogDispatchContext,
} from '@do-ob/ui/context';
import { dialogReducer } from '@do-ob/ui/reducer';
/**
 * The provider for the doob context
 */
export function DialogProvider({
  children,
}: React.PropsWithChildren) {

  const [ dialogState, dialogDispatch ] = useReducer(dialogReducer, dialogReducer());

  return (
    <DialogContext.Provider value={dialogState}>
      <DialogDispatchContext.Provider value={dialogDispatch}>
        {children}
      </DialogDispatchContext.Provider>
    </DialogContext.Provider>
  );
}
