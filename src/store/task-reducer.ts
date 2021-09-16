import {TasksStateType} from "../App";
import {v1} from "uuid";
import {AddTodolistAT, RemoveTodoListAT} from "./todolist-reducer";


export type RemoveTaskActionType = {
    type: 'REMOVE-TASK'
    taskId: string
    todolistId: string

}
export type AddTaskActionType = {
    type: 'ADD-TASK'
    title: string
    todolistId: string

}
export type ChangeStatusTaskActionType = {
    type: 'CHANGE-STATUS-TASK'
    isDone: boolean
    todolistId: string
    taskId: string

}
export type ChangeTitleTaskActionType = {
    type: 'CHANGE-TITLE-TASK'
    title: string
    todolistId: string
    taskId: string

}


type ActionType = RemoveTaskActionType
    | AddTaskActionType
    | ChangeStatusTaskActionType
    | ChangeTitleTaskActionType
    | AddTodolistAT
    | RemoveTodoListAT;

export const tasksReducer = (state: TasksStateType, action: ActionType): TasksStateType => {
    switch (action.type) {
        case 'REMOVE-TASK':
            return {...state, [action.todolistId]: state[action.todolistId].filter(task => task.id !== action.taskId)}
        case 'ADD-TASK':
            return {
                ...state,
                [action.todolistId]: [{id: v1(), title: action.title, isDone: false}, ...state[action.todolistId]]
            }
        case 'CHANGE-STATUS-TASK':
            return {
                ...state, [action.todolistId]: state[action.todolistId].map(task => {
                    if (action.taskId === task.id) {
                        return {...task, isDone: action.isDone}
                    } else {
                        return task
                    }
                })
            }
        case 'CHANGE-TITLE-TASK':
            return {...state, [action.todolistId]: state[action.todolistId].map(t => t.id === action.taskId ? {...t, title: action.title} : t)}
        case 'ADD-TODOLIST':
            return {...state, [action.todolistId]: []}
        case 'REMOVE-TODOLIST':
            let copyState = {...state}
            delete copyState[action.id]
            return copyState

        default:
            throw new Error('I don\'t understand')
    }
}

export const removeTaskAC = (taskId: string, todolistId: string): RemoveTaskActionType => {
    return {type: 'REMOVE-TASK', taskId, todolistId}
};

export const addTaskAC = (title: string, todolistId: string): AddTaskActionType => {
    return {type: 'ADD-TASK', title, todolistId}
};

export const changeTaskStatusAC = (taskId: string, isDone: boolean, todolistId: string): ChangeStatusTaskActionType => {
    return {type: 'CHANGE-STATUS-TASK', taskId, isDone, todolistId}
};

export const changeTaskTitlesAC = (taskId: string, title: string, todolistId: string): ChangeTitleTaskActionType => {
    return {type: 'CHANGE-TITLE-TASK', taskId, title, todolistId}
};


