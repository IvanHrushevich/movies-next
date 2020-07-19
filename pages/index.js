import { SearchPage } from '../components';
import { movieActions } from '../store/actions';
import { initializeStore } from '../store/store';

export default function Home() {
  return <SearchPage />;
}

export async function getServerSideProps() {
  const reduxStore = initializeStore();
  const { dispatch } = reduxStore;

  dispatch(movieActions.fetchMoviesSuccess([]));

  return { props: { initialReduxState: reduxStore.getState() } };
}
