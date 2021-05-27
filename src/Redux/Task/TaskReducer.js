
import {TaskActions} from './Task.types';

const INITIAL_STATE = {
   task : []
}

const TaskReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case TaskActions.SET_TASK:
            return {
                ...state,
                task : [...state.task,action.payload]
            }
        default:
            return state;
    }
}

export default TaskReducer;