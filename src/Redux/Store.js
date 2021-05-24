
import {applyMiddleware, createStore} from 'redux';
import rootreducer from './Rootreducer';
import logger from 'redux-logger';

const middlewares = [logger];

export const store = createStore(rootreducer , applyMiddleware(...middlewares));