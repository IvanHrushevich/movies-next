import { Layout } from '../../components';
import { MoviePage } from '../../containers';
import { movieActions } from '../../store/actions';
import { initializeStore } from '../../store/store';
import { fetchMovieAndSimilarMoviesById } from '../../store/utils';

export default function FilmPage() {
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
