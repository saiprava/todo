
import {TaskActions} from './Task.types';

const INITIAL_STATE = {
   task : [],
   taskDeleted: [],
   taskCompleted: []
}

const TaskReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case TaskActions.SET_TASK:
            return {
                ...state,
                task : [...state.task,action.payload]
            }
        case TaskActions.SET_TASK_DELETED:
            let items= state.task.filter(a => a.title!==action.payload)
            let delitems = state.task.filter(a=> a.title===action.payload)
            console.log(items);
            return{
            task: items,
            taskDeleted:delitems 
            }
        case TaskActions.SET_TASK_COMPLETED: 
        let item= state.task.filter(a => a.title!==action.payload)
        let compitems = state.task.filter(a=> a.title===action.payload)
        console.log(item);
        return{
        task: item,
        taskCompleted:compitems 
        }
        default:
            return state;
    }
}

export default TaskReducer;