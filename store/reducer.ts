import { actionTypes } from './actions/index';
import { State } from './models';

const initialState: State = {
  movies: [],
  searchBy: 'title',
  sortBy: 'release_date',
  selectedMovie: null,
};

const reducer: (
  state: State,
  action: { type: string; payload?: any }
) => State = (state = initialState, action) => {
  switch (action.type) {
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

export default reducer;
