import { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';

import classes from './MoviePage.module.scss';
import { Logo, MovieInfo } from '../../components/index';
import Content from '../Content/Content';

const MoviePage: FunctionComponent = () => {
  const selectedMovie = useSelector((state) => state.selectedMovie);

  const movieInfo = selectedMovie ? (
    <MovieInfo
      src={selectedMovie.poster_path}
      title={selectedMovie.title}
      vote={selectedMovie.vote_average}
      genre={selectedMovie.genres.join(' ')}
      year={parseInt(selectedMovie.release_date, 10)}
      runtime={selectedMovie.runtime}
      overview={selectedMovie.overview}
    />
  ) : null;

  return (
    <>
      <section className={classes.sectionHeader}>
        <Link href="/">
          <a href="/#">
            <Logo />
          </a>
        </Link>
        <div className="containerGlobal">{movieInfo}</div>
      </section>
      <Content />
    </>
  );
};

export default MoviePage;
