import { Movie } from '../../shared';
import { fetchMovieAndSimilarMoviesById, fetchMoviesByQueries } from '../utils';
import * as actionTypes from './actionTypes';

// action creators
export const fetchSelectedMovieSuccess = (selectedMovie, movies) => ({
  type: actionTypes.FETCH_SELECTED_MOVIE_SUCCESS,
  payload: { selectedMovie, movies },
});

export const fetchMoviesSuccess = (movies: Array<Movie>) => ({
  type: actionTypes.FETCH_MOVIES_SUCCESS,
  payload: { movies },
});

export const changeSortBy = (value: string) => ({
  type: actionTypes.CHANGE_SORT_BY,
  payload: value,
});

export const changeSearchBy = (value: string) => ({
  type: actionTypes.CHANGE_SEARCH_BY,
  payload: value,
});

// redux-thunk
export const fetchMovies = (searchBy: string, searchStr: string) => async (
  dispatch,
  getState
) => {
  const state = getState();
  const queries = `?sortBy=${state.sortBy}&sortOrder=desc&searchBy=${searchBy}&search=${searchStr}`;

  const movies = await fetchMoviesByQueries(queries);
  dispatch(fetchMoviesSuccess(movies));
};

export const fetchSelectedMovie = (id: string) => async (dispatch) => {
  const {
    selectedMovie,
    moviesWithSameGenres,
  } = await fetchMovieAndSimilarMoviesById(id);

  dispatch(fetchSelectedMovieSuccess(selectedMovie, moviesWithSameGenres));
};
