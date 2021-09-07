import {FilterValuesType, TodoListType} from "../App";
import {v1} from "uuid";

type RemoveTodoListAT = {
    type: 'REMOVE-TODOLIST'
    id: string
}
type AddTodoListAT = {
    type: 'ADD-TODOLIST'
    title: string
}
export type ChangeTodoListAT = {
    type: 'CHANGE-TODOLIST-TITLE'
    title: string
    id: string
}
export type ChangeTodoLisFiltertAT = {
    type: 'CHANGE-TODOLIST-FILTER'
    filter: FilterValuesType
    id: string
}

type ActionType = RemoveTodoListAT | AddTodoListAT | ChangeTodoListAT | ChangeTodoLisFiltertAT

export const todoListReducer = (todoLists: Array<TodoListType>, action: ActionType) => {
    switch (action.type) {
        case 'REMOVE-TODOLIST':
            return todoLists.filter(tl => tl.id !== action.id)
        case 'ADD-TODOLIST':
            const newTodoListID = v1();
            return [...todoLists, {id: newTodoListID, title: action.title, filter: 'all'}]
        case 'CHANGE-TODOLIST-TITLE':
            return todoLists.map(tl => tl.id === action.id ? {...tl, title: action.title} : tl)
        case 'CHANGE-TODOLIST-FILTER':
            return todoLists.map(tl => tl.id === action.id ? {...tl, filter: action.filter} : tl)
        default:
            return todoLists
    }
}

export const RemoveTodoListAC = (id: string): RemoveTodoListAT => ({type: 'REMOVE-TODOLIST', id: id});

export const AddTodoListAC = (title: string):AddTodoListAT => ({type: 'ADD-TODOLIST', title: title});

export const ChangeTodoListAC = (title: string, id: string):ChangeTodoListAT => ({type: 'CHANGE-TODOLIST-TITLE', title, id});

export const ChangeTodoLisFiltertAC = (filter: FilterValuesType, id: string):ChangeTodoLisFiltertAT => ({type: 'CHANGE-TODOLIST-FILTER', filter, id});

