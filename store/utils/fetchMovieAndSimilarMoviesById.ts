import { BASE_URL } from '../../constants';
import { Movie } from '../../shared';

async function fetchMovieAndSimilarMoviesById(
  id: string
): Promise<{ selectedMovie: Movie; moviesWithSameGenres: Array<Movie> }> {
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
    return {
      selectedMovie: null,
      moviesWithSameGenres: [],
    };
  }
}

export default fetchMovieAndSimilarMoviesById;
