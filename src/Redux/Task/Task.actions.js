import {TaskActions} from './Task.types';

export const setTask = task => ({
    type: TaskActions.SET_TASK,
    payload : task
});