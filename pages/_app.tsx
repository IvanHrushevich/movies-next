import { FunctionComponent } from 'react';
import { Provider } from 'react-redux';

import { useStore } from '../store/store';
import '../styles/main.scss';

const MyApp: FunctionComponent<any> = ({ Component, pageProps }) => {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
