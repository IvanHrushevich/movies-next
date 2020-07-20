import { SearchPage } from '../../../components';
import { movieActions } from '../../../store/actions';
import { initializeStore } from '../../../store/store';
import { fetchMoviesByQueries } from '../../../store/utils';

export default function SearchMoviesPage(props) {
  return <SearchPage />;
}

export async function getServerSideProps({ query }) {
  const reduxStore = initializeStore();
  const { dispatch } = reduxStore;

  let queries = `?sortBy=${
    reduxStore.getState().sortBy
  }&sortOrder=desc&searchBy=${query.searchBy}&search=${query.searchStr}`;

  const movies = await fetchMoviesByQueries(queries);
  dispatch(movieActions.fetchMoviesSuccess(movies));

  return { props: { initialReduxState: reduxStore.getState() } };
}
