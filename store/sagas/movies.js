import { put, select } from 'redux-saga/effects';

import { movieActions } from '../actions/index';

const BASE_URL = 'http://reactjs-cdp.herokuapp.com';

export function* fetchMovies({ payload }) {
  const state = yield select();

  let queries = `?sortBy=${state.sortBy}&sortOrder=desc`;

  queries += payload
    ? `&searchBy=${payload.searchBy}&search=${payload.searchStr}`
    : `&searchBy=${state.searchBy}&search=${state.searchStr}`;

  try {
    const response = yield fetch(`${BASE_URL}/movies${queries}`);
    const fetchedData = yield response.json();
    const movies = yield fetchedData.data;

    yield put(movieActions.fetchMoviesSuccess(movies));
  } catch (error) {
    console.error('error', error);
  }
}

export function* fetchSelectedMovie(action) {
  try {
    const response = yield fetch(`${BASE_URL}/movies/${action.payload.id}`);
    const selectedMovie = yield response.json();

    const genres = selectedMovie.genres.join(',');
    const moviesWithSameGenresResponse = yield fetch(
      `${BASE_URL}/movies?searchBy=genres&filter=${genres}`
    );
    const fetchedMoviesWithSameGenres = yield moviesWithSameGenresResponse.json();
    const moviesWithSameGenres = yield fetchedMoviesWithSameGenres.data;

    yield put(
      movieActions.fetchSelectedMovieSuccess(
        selectedMovie,
        moviesWithSameGenres
      )
    );
  } catch (error) {
    console.error('error', error);
  }
}
