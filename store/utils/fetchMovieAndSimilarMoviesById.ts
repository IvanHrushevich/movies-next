import { BASE_URL } from '../../constants';

export async function fetchMovieAndSimilarMoviesById(id) {
  try {
    const response = await fetch(`${BASE_URL}/movies/${id}`);
    const selectedMovie = await response.json();

    const genres = selectedMovie?.genres?.join(',');
    const moviesWithSameGenresResponse = await fetch(
      `${BASE_URL}/movies?searchBy=genres&filter=${genres}`
    );
    const fetchedMoviesWithSameGenres = await moviesWithSameGenresResponse.json();
    const moviesWithSameGenres = fetchedMoviesWithSameGenres.data;

    return {
      selectedMovie,
      moviesWithSameGenres,
    };
  } catch (error) {
    console.error('error', error);
  }
}
