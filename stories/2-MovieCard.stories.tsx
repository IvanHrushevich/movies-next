import React, { FunctionComponent } from 'react';
import MovieCard from '../components/MovieCard/MovieCard';
import { Movie } from '../shared';

export default {
  title: 'MovieCard',
  component: MovieCard,
};

const movie: Movie = {
  src: 'https://image.tmdb.org/t/p/w500/432BowXw7a4fWXSONxBaFKqvW4f.jpg',
  title: 'Transformers 7',
  genre: 'Science Fiction, Action ,Adventure',
  year: 2010,
  id: 424785,
};

export const basic: FunctionComponent = () => (
  <MovieCard
    src={movie.src}
    title={movie.title}
    genre={movie.genre}
    year={movie.year}
    id={movie.id}
  />
);
