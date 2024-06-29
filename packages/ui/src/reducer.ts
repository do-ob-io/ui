import { reducer as dialogReducer } from './reducers/dialog.reducer';
export * as dialogActions from './reducers/dialog.actions';
import type { DialogState } from './reducers/dialog.reducer';
import type { DialogAction } from './reducers/dialog.actions';

export interface State {
  dialog: DialogState;
}

export type Action = DialogAction;

export const initialState: State = {
  dialog: dialogReducer()
};

export function reducer(state: State = initialState, action: unknown = {}) {

  console.log({ action });
  
  return {
    ...state,
    dialog: dialogReducer(state.dialog, action as DialogAction),
  };
}
