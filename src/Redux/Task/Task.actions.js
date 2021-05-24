import {TaskActions} from './Task.types';

export const setTaskDescription = task => ({
    type: TaskActions.SET_TASK_DESCRIPTION,
    payload : task
});

export const setTaskStatus = status => ({
    type: TaskActions.SET_TASK_STATUS,
    payload : status
});

export const setDate = date => ({
    type: TaskActions.SET_DATE,
    payload : date
});

