
import {TaskActions} from './Task.types';

const INITIAL_STATE = {
    taskdescription : null,
    taskstatus : false,
    taskcomplete: null
}

const TaskReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case TaskActions.SET_TASK_DESCRIPTION :
            return {
                ...state,
                taskdescription : action.payload
            }
        case TaskActions.SET_TASK_STATUS :
            return {
                ...state,
                taskstatus : action.payload
            }    
        case TaskActions.SET_DATE :
            return {
                ...state,
                taskcomplete : action.payload
            }    
    }
}

export default TaskReducer;