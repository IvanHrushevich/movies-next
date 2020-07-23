import { GetServerSideProps } from 'next';
import { FunctionComponent } from 'react';

import { Layout } from '../../components';
import { MoviePage } from '../../containers';
import { movieActions } from '../../store/actions';
import { initializeStore } from '../../store/store';
import { fetchMovieAndSimilarMoviesById } from '../../store/utils';

const FilmPage: FunctionComponent = () => (
  <Layout>
    <MoviePage />
  </Layout>
);

export const getServerSideProps: GetServerSideProps = async ({
  query: { id },
}) => {
  const reduxStore = initializeStore();
  const { dispatch } = reduxStore;

  const {
    selectedMovie,
    moviesWithSameGenres,
  } = await fetchMovieAndSimilarMoviesById(id);

  dispatch(
    movieActions.fetchSelectedMovieSuccess(selectedMovie, moviesWithSameGenres)
  );

  return { props: { initialReduxState: reduxStore.getState() } };
};

export default FilmPage;
