import { Dispatch, createContext } from 'react';
import { reducer as dialogReducer } from '../reducers/dialog.reducer';
import { DialogAction } from '../reducers/dialog.actions';
import { nop } from '@do-ob/core';

export const DialogContext = createContext(dialogReducer());

export const DialogDispatchContext = createContext<Dispatch<DialogAction>>(nop);
