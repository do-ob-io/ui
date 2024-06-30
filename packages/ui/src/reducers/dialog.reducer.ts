 
import type { DialogAction } from './dialog.actions';

export interface DialogState {
  items: Record<string, {
    id: string;
    open: boolean;
    triggerRef?: React.RefObject<HTMLElement | null>;
  }>
}

const initialState: DialogState = {
  items: {},
};

/**
 * A reducer to manage the dialog modals.
 */
export function reducer(
  state: DialogState = initialState,
  action: DialogAction = {} as DialogAction
) {

  const { type, payload } = action;

  switch (type) {
    case 'dialog/register':
      return {
        ...state,
        items: {
          ...state.items,
          [payload.id]: {
            id: payload.id,
            open: false,
          }
        }
      };
    case 'dialog/unregister':
      if(!state.items[payload.id]) {
        return state;
      }
      return {
        ...state,
        items: Object.values(state.items).reduce((acc, dialog) => {
          if (dialog.id !== payload.id) {
            acc[dialog.id] = dialog;
          }
          return acc;
        }, {} as DialogState['items'])
      };
    case 'dialog/toggle':
      if(!state.items[payload.id]) {
        return state;
      }
      return {
        ...state,
        items: {
          ...state.items,
          [payload.id]: {
            ...state.items[payload.id],
            open: !state.items[payload.id].open,
            triggerRef: payload.triggerRef ?? state.items[payload.id].triggerRef,
          }
        }
      };
    case 'dialog/open':
      if(!state.items[payload.id]) {
        return state;
      }
      return {
        ...state,
        items: {
          ...state.items,
          [payload.id]: {
            ...state.items[payload.id],
            open: true,
            triggerRef: payload.triggerRef ?? state.items[payload.id].triggerRef,
          }
        }
      };
    case 'dialog/close':
      if(!state.items[payload.id]) {
        return state;
      }
      return {
        ...state,
        items: {
          ...state.items,
          [payload.id]: {
            ...state.items[payload.id],
            open: false,
            triggerRef: payload.triggerRef ?? state.items[payload.id].triggerRef,
          }
        }
      };
    default:
      return state;
  }

}

