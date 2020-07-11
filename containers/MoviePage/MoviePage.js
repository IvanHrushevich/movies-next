import classes from './MoviePage.module.scss';
import { Logo, MovieInfo } from '../../components/index';
import Content from '../Content/Content';

const MoviePage = ({ selectedMovie }) => {
  const movieInfo = selectedMovie ? (
    <MovieInfo
      src={selectedMovie.poster_path}
      title={selectedMovie.title}
      vote={selectedMovie.vote_average}
      genre={selectedMovie.genres.join(' ')}
      year={parseInt(selectedMovie.release_date)}
      runtime={selectedMovie.runtime}
      overview={selectedMovie.overview}
    />
  ) : null;

  return (
    <>
      <section className={classes.sectionHeader}>
        <Logo />
        <div className={`container-global`}>{movieInfo}</div>
      </section>
      <Content />
    </>
  );
};

export default MoviePage;
