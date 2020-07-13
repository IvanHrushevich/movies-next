import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { SearchPage } from '../../../components';
import { movieActions } from '../../../store/actions';

export default function SearchMoviesPage() {
  const dispatch = useDispatch();
  const {
    query: { searchBy, searchStr },
  } = useRouter();

  useEffect(() => {
    dispatch(movieActions.fetchMovies(searchBy, searchStr));
  }, [dispatch, searchBy, searchStr]);

  return <SearchPage />;
}
