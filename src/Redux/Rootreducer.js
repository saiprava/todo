import { combineReducers } from 'redux';
import Taskreducer from './Task/TaskReducer';

const rootReducer = combineReducers({
    task : Taskreducer
});

export default rootReducer;