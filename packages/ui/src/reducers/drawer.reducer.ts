 
import type { DrawerAction } from './drawer.actions';

export interface DrawerState {
  drawers: {
    [key: string]: {
      id: string;
      open: boolean;
    }
  };
}

const initialState: DrawerState = {
  drawers: {},
};

/**
 * A reducer to manage the drawer modals.
 */
export function reducer(
  state: DrawerState = initialState,
  action: DrawerAction = {} as DrawerAction
) {

  const { type, payload } = action;

  switch (type) {
    case 'drawer/register':
      return {
        ...state,
        drawers: {
          ...state.drawers,
          [payload.id]: {
            id: payload.id,
            open: false,
          }
        }
      };
    case 'drawer/unregister':
      return {
        ...state,
        drawers: Object.values(state.drawers).reduce((acc, drawer) => {
          if (drawer.id !== payload.id) {
            acc[drawer.id] = drawer;
          }
          return acc;
        }, {} as DrawerState['drawers'])
      };
    case 'drawer/open':
      return {
        ...state,
        drawers: {
          ...state.drawers,
          [payload.id]: {
            ...state.drawers[payload.id],
            open: true,
          }
        }
      };
    case 'drawer/close':
      return {
        ...state,
        drawers: {
          ...state.drawers,
          [payload.id]: {
            ...state.drawers[payload.id],
            open: false,
          }
        }
      };
    default:
      return state;
  }

}

