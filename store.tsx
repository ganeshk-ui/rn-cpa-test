//Location: src/store.js

import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './reducers/root_reducer';

// Importing Redux Saga middleware and the root saga
import createSagaMiddleWare from 'redux-saga';
import rootSaga from './saga/saga';

// Creating an instance of Redux Saga middleware
const sagaMiddleware = createSagaMiddleWare();

// Configuring the Redux store with the root reducer and middleware
const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(sagaMiddleware)
});

sagaMiddleware.run(rootSaga);
export default store;
