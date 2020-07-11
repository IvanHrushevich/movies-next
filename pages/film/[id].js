import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { Layout } from '../../components/Layout/Layout';
import { MoviePage } from '../../containers';
import { API_URL } from '../../constants';

export default function FilmPage({ movie, moviesWithSameGenres }) {
  const [selectedMovie, setSelectedMovie] = useState(movie);
  const [movies, setMovies] = useState(moviesWithSameGenres);

  const {
    query: { id },
  } = useRouter();

  useEffect(() => {
    async function loadMovies() {
      const { movie, moviesWithSameGenres } = await fetchMovies(id);
      setSelectedMovie(movie);
      setMovies(moviesWithSameGenres);
    }
    if (!movie) {
      loadMovies();
    }
  }, [id]);

  return (
    <Layout>
      <MoviePage selectedMovie={selectedMovie} movies={movies} />
    </Layout>
  );
}

async function fetchMovies(id) {
  const response = await fetch(`${API_URL}/movies/${id}`);
  const movie = await response.json();

  const genres = movie.genres.join(',');
  const moviesWithSameGenresResponse = await fetch(
    `${API_URL}/movies?searchBy=genres&filter=${genres}`
  );
  const fetchedMoviesWithSameGenres = await moviesWithSameGenresResponse.json();
  const moviesWithSameGenres = fetchedMoviesWithSameGenres.data;

  return { movie, moviesWithSameGenres };
}

FilmPage.getInitialProps = async ({ query, req }) => {
  if (!req) {
    return { movie: null };
  }

  return await fetchMovies(query.id);
};
