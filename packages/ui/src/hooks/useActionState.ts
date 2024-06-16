'use client';

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useReducer } from 'react';

// Define types for better type safety
type Action<S, R> = (state: S, ...args: any[]) => Promise<R>;
type StateUpdater<S> = (prevState: S) => S;

// Reducer function
function stateReducer<S>(state: S, action: StateUpdater<S>): S {
  return action(state);
}

// Hook definition
export function useActionState<S, R>(
  action: Action<S, R>,
  initialState: S
): [S, (...args: any[]) => Promise<R>] {
  const [ state, dispatch ] = useReducer(stateReducer, initialState);

  // Wrap the action to dispatch the new state
  const wrappedAction = useCallback(async (...args: any[]): Promise<R> => {
    const result = await action(state as S, ...args);
    if (result !== undefined) {
      dispatch(() => result as S);
    }
    return result;
  }, [ state, action ]);

  return [ state as S, wrappedAction ];
}

export default useActionState;
