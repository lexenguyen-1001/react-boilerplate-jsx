import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';

import counterReducer, {
  ROOT_STATE_NAME as counter,
} from '../features/Counter/couterSlice';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: { [counter]: counterReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
