import { GetServerSideProps } from 'next';
import { FunctionComponent } from 'react';

import { SearchPage } from '../components';
import { movieActions } from '../store/actions';
import { initializeStore } from '../store/store';

const Home: FunctionComponent = () => <SearchPage />;

export const getServerSideProps: GetServerSideProps = async () => {
  const reduxStore = initializeStore();
  const { dispatch } = reduxStore;

  dispatch(movieActions.fetchMoviesSuccess([]));

  return { props: { initialReduxState: reduxStore.getState() } };
};

export default Home;
