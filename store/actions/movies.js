import * as actionTypes from './actionTypes';

const BASE_URL = 'http://reactjs-cdp.herokuapp.com';

export const fetchMovies = (searchBy, searchStr) => async (
  dispatch,
  getState
) => {
  const state = getState();
  let queries = `?sortBy=${state.sortBy}&sortOrder=desc&searchBy=${searchBy}&search=${searchStr}`;

  try {
    const response = await fetch(`${BASE_URL}/movies${queries}`);

    const fetchedData = await response.json();
    const movies = await fetchedData.data;

    dispatch(fetchMoviesSuccess(movies));
  } catch (error) {
    console.error('error', error);
  }
};

export const fetchSelectedMovie = (id) => async (dispatch, getState) => {
  try {
    const response = await fetch(`${BASE_URL}/movies/${id}`);
    const selectedMovie = await response.json();

    const genres = selectedMovie.genres.join(',');
    const moviesWithSameGenresResponse = await fetch(
      `${BASE_URL}/movies?searchBy=genres&filter=${genres}`
    );
    const fetchedMoviesWithSameGenres = await moviesWithSameGenresResponse.json();
    const moviesWithSameGenres = await fetchedMoviesWithSameGenres.data;

    dispatch(fetchSelectedMovieSuccess(selectedMovie, moviesWithSameGenres));
  } catch (error) {
    console.error('error', error);
  }
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
