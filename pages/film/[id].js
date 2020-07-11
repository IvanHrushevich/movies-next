import { useState, useEffect } from 'react';

import { Layout } from '../../components/Layout/Layout';
import { MoviePage } from '../../containers';

export default function Film({ movie, moviesWithSameGenres }) {
  const [selectedMovie, setSelectedMovie] = useState(movie);
  const [movies, setMovies] = useState(moviesWithSameGenres);

  return (
    <Layout>
      <MoviePage selectedMovie={selectedMovie} movies={movies} />
    </Layout>
  );
}

Film.getInitialProps = async ({ query, req }) => {
  if (!req) {
    return { movie: null };
  }

  const response = await fetch(`${process.env.API_URL}/movies/${query.id}`);
  const movie = await response.json();

  const genres = movie.genres.join(',');
  const moviesWithSameGenresResponse = await fetch(
    `${process.env.API_URL}/movies?searchBy=genres&filter=${genres}`
  );
  const fetchedMoviesWithSameGenres = await moviesWithSameGenresResponse.json();
  const moviesWithSameGenres = fetchedMoviesWithSameGenres.data;

  return { movie, moviesWithSameGenres };
};
