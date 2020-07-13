import { useMemo } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { actionTypes } from './actions/index';

let store;

const initialState = {
  movies: [],
  searchBy: 'title',
  sortBy: 'release_date',
  searchStr: '',
  selectedMovie: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_SEARCH_STR:
      return {
        ...state,
        searchStr: action.payload,
      };

    case actionTypes.FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.payload.movies,
      };

    case actionTypes.CHANGE_SEARCH_BY:
      return {
        ...state,
        searchBy: action.payload,
      };

    case actionTypes.CHANGE_SORT_BY:
      return {
        ...state,
        sortBy: action.payload,
      };

    case actionTypes.FETCH_SELECTED_MOVIE_SUCCESS:
      return {
        ...state,
        selectedMovie: action.payload.selectedMovie,
        movies: action.payload.movies,
      };

    default:
      return state;
  }
};
function initStore(preloadedState = initialState) {
  return createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware())
  );
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}
