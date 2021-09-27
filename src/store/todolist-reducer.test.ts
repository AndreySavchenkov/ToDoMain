import {v1} from 'uuid';
import {FilterValuesType, TodoListType} from '../App';
import {
    AddTodolistAC,
    ChangeTodoLisFiltertAC,
    ChangeTodoListAC,
    RemoveTodoListAC,
    todoListReducer
} from "./todolist-reducer";


let todoListId1: string;
let todoListId2: string;

let startState: Array<TodoListType>;

beforeEach(() => {
    todoListId1 = v1();
    todoListId2 = v1();

    startState = [
        {id: todoListId1, title: "What to learn", filter: "all"},
        {id: todoListId2, title: "What to buy", filter: "all"}
    ]
})

test('correct todolist should be removed', () => {


    const endState = todoListReducer(startState, RemoveTodoListAC(todoListId1))

    expect(endState.length).toBe(1);
    expect(endState[0].id).toBe(todoListId2);
});

test('correct todolist should be added', () => {

    let newTodolistTitle = "New Todolist";

    const endState = todoListReducer(startState, AddTodolistAC(newTodolistTitle))

    expect(endState.length).toBe(3);
    expect(endState[2].title).toBe(newTodolistTitle);
});

test('correct todolist should change its name', () => {

    let newTodolistTitle = "New Todolist";

    const endState = todoListReducer(startState, ChangeTodoListAC(newTodolistTitle, todoListId2));

    expect(endState[0].title).toBe("What to learn");
    expect(endState[1].title).toBe(newTodolistTitle);
});

test('correct filter of todolist should be changed', () => {

    let newFilter: FilterValuesType = "completed";

    const endState = todoListReducer(startState, ChangeTodoLisFiltertAC(newFilter, todoListId2));

    expect(endState[0].filter).toBe("all");
    expect(endState[1].filter).toBe(newFilter);
});




