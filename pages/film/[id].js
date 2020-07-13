import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

import { Layout } from '../../components/Layout/Layout';
import { MoviePage } from '../../containers';
import { wrapper } from '../../store/store';
import { movieActions } from '../../store/actions';

function FilmPage() {
  const {
    query: { id },
  } = useRouter();

  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(movieActions.fetchSelectedMovie(id));
    }
  }, [dispatch, id]);

  return (
    <Layout>
      <MoviePage />
    </Layout>
  );
}

// export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
//   store.dispatch(movieActions.fetchSelectedMovie(false));

//   await store.sagaTask.toPromise();
// });

export default FilmPage;
