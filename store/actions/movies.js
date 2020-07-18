import * as actionTypes from './actionTypes';

import { fetchMoviesByQueries, fetchMovieAndSimilarMoviesById } from '../utils';

export const fetchMovies = (searchBy, searchStr) => async (
  dispatch,
  getState
) => {
  const state = getState();
  let queries = `?sortBy=${state.sortBy}&sortOrder=desc&searchBy=${searchBy}&search=${searchStr}`;

  const movies = await fetchMoviesByQueries(queries);
  dispatch(fetchMoviesSuccess(movies));
};

export const fetchSelectedMovie = (id) => async (dispatch) => {
  const {
    selectedMovie,
    moviesWithSameGenres,
  } = await fetchMovieAndSimilarMoviesById(id);

  dispatch(fetchSelectedMovieSuccess(selectedMovie, moviesWithSameGenres));
};

// action creators

export const fetchSelectedMovieSuccess = (selectedMovie, movies) => ({
  type: actionTypes.FETCH_SELECTED_MOVIE_SUCCESS,
  payload: { selectedMovie, movies },
});

export const fetchMoviesSuccess = (movies) => ({
  type: actionTypes.FETCH_MOVIES_SUCCESS,
  payload: { movies },
});

export const changeSortBy = (value) => ({
  type: actionTypes.CHANGE_SORT_BY,
  payload: value,
});

export const changeSearchBy = (value) => ({
  type: actionTypes.CHANGE_SEARCH_BY,
  payload: value,
});
