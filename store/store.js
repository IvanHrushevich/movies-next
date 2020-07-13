import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createWrapper } from 'next-redux-wrapper';

import reducer from './reducer';
import { watchMovies } from './sagas';

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

export const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(reducer, bindMiddleware([sagaMiddleware]));

  store.sagaTask = sagaMiddleware.run(watchMovies);

  return store;
};

export const wrapper = createWrapper(makeStore, { debug: true });
