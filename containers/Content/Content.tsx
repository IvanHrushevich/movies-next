import { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { List } from 'immutable';

import classes from './Content.module.scss';
import { MovieCard } from '../../components/index';

const Content: FunctionComponent = () => {
  const movies: Array<any> = useSelector((state) => state.movies);
  const moviesList: List<any> = List(movies);

  const movieCards =
    moviesList && !moviesList.isEmpty()
      ? moviesList.map((movie) => (
          <MovieCard
            src={movie.poster_path}
            title={movie.title}
            genre={movie.genres.join(' ')}
            year={parseInt(movie.release_date, 10)}
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
