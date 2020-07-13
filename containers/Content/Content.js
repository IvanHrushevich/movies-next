import React from 'react';
import { useSelector } from 'react-redux';

import classes from './Content.module.scss';
import { MovieCard } from '../../components/index';

const Content = () => {
  const movies = useSelector((state) => state.movies);

  const movieCards =
    movies && movies.length
      ? movies.map((movie) => (
          <MovieCard
            src={movie.poster_path}
            title={movie.title}
            genre={movie.genres.join(' ')}
            year={parseInt(movie.release_date)}
            id={movie.id}
            key={movie.id}
          />
        ))
      : null;

  return (
    <main className={classes.section}>
      <div className={classes.cardsWrapper}>{movieCards}</div>
    </main>
  );
};

export default Content;
