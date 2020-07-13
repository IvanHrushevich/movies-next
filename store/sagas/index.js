import { takeLatest } from 'redux-saga/effects';

import { fetchMovies, fetchSelectedMovie } from './movies';
import { actionTypes } from '../actions/index';

export function* watchMovies() {
  yield takeLatest(actionTypes.FETCH_MOVIES, fetchMovies);
  yield takeLatest(actionTypes.FETCH_SELECTED_MOVIE, fetchSelectedMovie);
}
