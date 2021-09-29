import {tasksReducer} from './task-reducer';
import {todoListReducer} from './todolist-reducer';
import {combineReducers, createStore} from 'redux';
import {v1} from "uuid";

// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
const rootReducer = combineReducers({
    tasks: tasksReducer,
    todolists: todoListReducer
})
// непосредственно создаём store
export const store = createStore(rootReducer, {
    tasks: {
        'todoListId1': [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "React", isDone: false},
        ],
        'todoListId2': [
            {id: v1(), title: "Bear", isDone: true},
            {id: v1(), title: "Fish", isDone: true},
            {id: v1(), title: "Meat", isDone: false},
        ],
    },
    todolists: [
        {id: 'todoListId1', title: 'What to learn', filter: 'all'},
        {id: 'todoListId2', title: 'What to buy', filter: 'all'}
    ],
});
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;

