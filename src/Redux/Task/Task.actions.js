import {TaskActions} from './Task.types';

export const setTask = task => ({
    type: TaskActions.SET_TASK,
    payload : task
});

export const setTaskDeleted = deletetask => ({
    type: TaskActions.SET_TASK_DELETED,
    payload : deletetask
});

export const setTaskCompleted = completedtask => ({
    type: TaskActions.SET_TASK_COMPLETED,
    payload : completedtask
});