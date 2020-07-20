import { useMemo } from 'react';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import { State } from './models';
import reducer from './reducer';

let store;

function initStore(initialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
}

export const initializeStore: (preloadedState?: State) => any = (
  preloadedState
) => {
  let newStore = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    newStore = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return newStore;
  // Create the store once in the client
  if (!store) store = newStore;

  return newStore;
};

export function useStore(initialState: State): any {
  const storeMemo: any = useMemo(() => initializeStore(initialState), [
    initialState,
  ]);
  return storeMemo;
}
