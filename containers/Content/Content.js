import React from 'react';
import PropTypes from 'prop-types';

import classes from './Content.module.scss';
import { MovieCard } from '../../components/index';

const Content = ({ movies }) => {
  const movieCards = movies
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

Content.propTypes = {
  movies: PropTypes.array,
};

export default Content;
