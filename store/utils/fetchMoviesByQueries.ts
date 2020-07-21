import { BASE_URL } from '../../constants';
import { Movie } from '../../shared';

async function fetchMoviesByQueries(queries: string): Promise<Array<Movie>> {
  try {
    const response = await fetch(`${BASE_URL}/movies${queries}`);
    const fetchedData = await response.json();

    return fetchedData.data;
  } catch (error) {
    return [];
  }
}

export default fetchMoviesByQueries;
