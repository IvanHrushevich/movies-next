import { Movie } from '../../shared';
import { fetchMovieAndSimilarMoviesById, fetchMoviesByQueries } from '../utils';
import * as actionTypes from './actionTypes';

interface Action<T> {
  type: string;
  payload?: T;
}

// action creators
export const fetchSelectedMovieSuccess: (
  selectedMovie: Movie,
  movies: Array<Movie>
) => Action<{ selectedMovie: Movie; movies: Array<Movie> }> = (
  selectedMovie,
  movies
) => ({
  type: actionTypes.FETCH_SELECTED_MOVIE_SUCCESS,
  payload: { selectedMovie, movies },
});

export const fetchMoviesSuccess: (
  movies: Array<Movie>
) => Action<{ movies: Array<Movie> }> = (movies) => ({
  type: actionTypes.FETCH_MOVIES_SUCCESS,
  payload: { movies },
});

export const changeSortBy: (value: string) => Action<string> = (value) => ({
  type: actionTypes.CHANGE_SORT_BY,
  payload: value,
});

export const changeSearchBy: (value: string) => Action<string> = (value) => ({
  type: actionTypes.CHANGE_SEARCH_BY,
  payload: value,
});

// redux-thunk
export const fetchMovies: (searchBy: string, searchStr: string) => any = (
  searchBy,
  searchStr
) => async (dispatch, getState) => {
  const state = getState();
  const queries = `?sortBy=${state.sortBy}&sortOrder=desc&searchBy=${searchBy}&search=${searchStr}`;

  const movies = await fetchMoviesByQueries(queries);
  dispatch(fetchMoviesSuccess(movies));
};

export const fetchSelectedMovie: (id: string) => any = (id) => async (
  dispatch
) => {
  const {
    selectedMovie,
    moviesWithSameGenres,
  } = await fetchMovieAndSimilarMoviesById(id);

  dispatch(fetchSelectedMovieSuccess(selectedMovie, moviesWithSameGenres));
};
