import { BASE_URL } from '../../constants';

export async function fetchMoviesByQueries(queries) {
  try {
    const response = await fetch(`${BASE_URL}/movies${queries}`);
    const fetchedData = await response.json();

    return fetchedData.data;
  } catch (error) {
    console.error('error', error);
  }
}
