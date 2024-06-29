import { reducer as drawerReducer } from './reducers/drawer.reducer';
import type { DrawerState } from './reducers/drawer.reducer';
import type { DrawerAction } from './reducers/drawer.actions';

export interface State {
  drawer: DrawerState;
}

export type Action = DrawerAction;

export const initialState: State = {
  drawer: drawerReducer()
};

export function reducer(state: State = initialState, action: unknown = {}) {
  return {
    drawer: drawerReducer(state.drawer, action as DrawerAction),
  };
}
