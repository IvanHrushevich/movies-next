// import { useEffect } from 'react';
// import { useRouter } from 'next/router';
// import { useDispatch } from 'react-redux';

import { Layout } from '../../components/Layout/Layout';
import { MoviePage } from '../../containers';
import { movieActions } from '../../store/actions';
import { initializeStore } from '../../store/store';
import { fetchMovieAndSimilarMoviesById } from '../../store/utils';

export default function FilmPage() {
  // const {
  //   query: { id },
  // } = useRouter();

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   if (id) {
  //     dispatch(movieActions.fetchSelectedMovie(id));
  //   }
  // }, [dispatch, id]);

  return (
    <Layout>
      <MoviePage />
    </Layout>
  );
}

export async function getServerSideProps({ query: { id } }) {
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
}
