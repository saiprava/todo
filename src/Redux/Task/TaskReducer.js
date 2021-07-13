
import {TaskActions} from './Task.types';

const INITIAL_STATE = {
   task : null,
   taskDeleted: [],
   taskCompleted: []
}

const TaskReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case TaskActions.SET_TASK:
            return {
                ...state,
                task : action.payload
            }
        case TaskActions.SET_TASK_DELETED:
            let items= state.task.filter(a => a.title!==action.payload)
            let delitems = state.task.filter(a=> a.title===action.payload)
            console.log(items);
            console.log(...state.taskDeleted);
            return{
            ...state,
            task: items,
            taskDeleted:[...state.taskDeleted,...delitems]
            }
        case TaskActions.SET_TASK_COMPLETED: 
        let item= state.task.filter(a => a.title!==action.payload)
        let compitems = state.task.filter(a=> a.title===action.payload)
        console.log(item);
        return{
        ...state,
        task: item,
        taskCompleted:[...state.taskCompleted,...compitems] 
        }
        default:
            return state;
    }
}

export default TaskReducer;