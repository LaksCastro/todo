import { createStore } from 'redux';
//import { createStore, applyMiddleware } from 'redux';
//import  createSagaMiddleware from "redux-saga";

import reducers from './ducks';

//import rootSaga from "./saga_ducks/sagas"

//const sagaMiddleware = createSagaMiddleware();

//const store = createStore(reducers, applyMiddleware(sagaMiddleware));
const store = createStore(reducers);

//sagaMiddleware.run(rootSaga);

export default store;