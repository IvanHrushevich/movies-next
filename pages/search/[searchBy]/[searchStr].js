import { SearchPage } from '../../../components';

export default function SearchMoviesPage({ movies }) {
  return <SearchPage movies={movies} />;
}

SearchMoviesPage.getInitialProps = async ({ query, req }) => {
  if (!req) {
    return { movies: null };
  }

  const queries = `?sortBy=release_date&sortOrder=desc&searchBy=${query.searchBy}&search=${query.searchStr}`;

  const response = await fetch(`${process.env.API_URL}/movies${queries}`);
  const fetchedMovies = await response.json();
  const movies = fetchedMovies.data;

  return { movies };
};
