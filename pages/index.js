import { SearchPage } from '../components';
import { wrapper } from '../store/store';
import { movieActions } from '../store/actions';

export default function Home() {
  return <SearchPage />;
}

// test
// export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
//   store.dispatch(movieActions.fetchSelectedMovie('447365'));

//   await store.sagaTask.toPromise();
// });
