import { GetServerSideProps } from 'next';
import { FunctionComponent } from 'react';

import { SearchPage } from '../../../components';
import { movieActions } from '../../../store/actions';
import { initializeStore } from '../../../store/store';
import { fetchMoviesByQueries } from '../../../store/utils';

const SearchMoviesPage: FunctionComponent = () => <SearchPage />;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const reduxStore = initializeStore();
  const { dispatch } = reduxStore;

  const queries = `?sortBy=${
    reduxStore.getState().sortBy
  }&sortOrder=desc&searchBy=${query.searchBy}&search=${query.searchStr}`;

  const movies = await fetchMoviesByQueries(queries);
  dispatch(movieActions.fetchMoviesSuccess(movies));

  return { props: { initialReduxState: reduxStore.getState() } };
};

export default SearchMoviesPage;
