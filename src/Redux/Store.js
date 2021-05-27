
import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import rootReducer from './Rootreducer';

const middlewares = [logger];

export const Store = createStore(rootReducer , applyMiddleware(...middlewares));