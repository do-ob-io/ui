import type { DialogAction } from './dialog.actions';

export interface DialogState {
  items: Record<string, {
    id: string;
    open: boolean;
    type?: 'modal' | 'popover' | 'drawer';
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

  console.log({ type, payload });

  switch (type) {
    case 'dialog/register':
      return {
        ...state,
        items: {
          ...state.items,
          [payload.id]: {
            id: payload.id,
            open: false,
            type: payload.type,
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

      // Ensure all other popovers are closed when a popover is opened.
      if (state.items[payload.id].open === true && state.items[payload.id].type === 'popover') {
        state.items = Object.values(state.items).reduce((acc, dialog) => {
          if (dialog.type === 'popover') {
            acc[dialog.id] = {
              ...dialog,
              open: false,
            };
          }
          return acc;
        }, {} as DialogState['items']);
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

