import { Provider } from 'react-redux';
import { useStore } from '../store/store';

import '../styles/main.scss';

export default function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
