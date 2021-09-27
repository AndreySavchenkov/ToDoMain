import React, {useReducer, useState} from 'react';
import './App.css';
import TodoList, {TaskType} from "./TodoList";
import {v1} from "uuid";
import {AddItemForm} from "./components/AddItemForm";
import {AppBar, Button, Container, Grid, IconButton, Paper, Toolbar, Typography} from "@material-ui/core";
import {Menu} from "@material-ui/icons";
import {
    AddTodolistAC,
    ChangeTodoLisFiltertAC,
    ChangeTodoListAC,
    RemoveTodoListAC,
    RemoveTodoListAT,
    todoListReducer
} from "./store/todolist-reducer";
import {
    addTaskAC,
    changeTaskStatusAC,
    changeTaskTitlesAC,
    removeTaskAC,
    RemoveTaskActionType,
    tasksReducer
} from "./store/task-reducer";

export type FilterValuesType = "all" | "active" | "completed"

export type TodoListType = {
    id: string
    title: string
    filter: FilterValuesType
}

export type TasksStateType = {
    [key: string]: Array<TaskType>
}

function AppWithReducer() {
//new BLL;
    let todoListID_1 = v1();
    let todoListID_2 = v1();

    let [todoLists, dispatchTodoLists] = useReducer(todoListReducer,[
        {id: todoListID_1, title: 'What to learn', filter: 'all'},
        {id: todoListID_2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, dispatchToTasks] = useReducer(tasksReducer,{
        [todoListID_1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "React", isDone: false},
        ],
        [todoListID_2]: [
            {id: v1(), title: "Bear", isDone: true},
            {id: v1(), title: "Fish", isDone: true},
            {id: v1(), title: "Meat", isDone: false},
        ],
    })

    //BLL:


    const removeTask = (taskID: string, todoListID: string) => {
        dispatchToTasks(removeTaskAC(taskID,todoListID));
    }

    const addTask = (title: string, todoListID: string) => {
        dispatchToTasks(addTaskAC(title,todoListID));
    }

    const changeTaskStatus = (taskID: string, isDone: boolean, todoListID: string) => {
        dispatchToTasks(changeTaskStatusAC(taskID,isDone,todoListID));
    }

    const changeTaskTitle = (taskID: string, title: string, todoListID: string) => {
        dispatchToTasks(changeTaskTitlesAC(taskID,title,todoListID));
    }

    const changeFilter = (filter: FilterValuesType, todoLisId: string) => {
        dispatchTodoLists(ChangeTodoLisFiltertAC(filter,todoLisId));
    }

    const removeTodolist = (todoListID: string) => {
        let action = RemoveTodoListAC(todoListID);
        dispatchTodoLists(action);
        dispatchToTasks(action);
    }

    const addTodoList = (title: string) => {
        let action = AddTodolistAC(title)
        dispatchTodoLists(action);
        dispatchToTasks(action);

    }

    const changeTodoListTitle = (todoListID: string, title: string) => {
        dispatchTodoLists(ChangeTodoListAC(todoListID, title ));
    }


    // GUI (CRUD):

    const todoListsComponents = todoLists.map(tl => {

        let tasksForTodoList = tasks[tl.id]
        if (tl.filter === "active") {
            tasksForTodoList = tasks[tl.id].filter(t => !t.isDone)
        }
        if (tl.filter === "completed") {
            tasksForTodoList = tasks[tl.id].filter(t => t.isDone)
        }

        return (
            <Grid item key={tl.id}>
                <Paper elevation={10} style={{padding: '15px'}}>
                    <TodoList
                        id={tl.id}
                        filter={tl.filter}
                        title={tl.title}
                        tasks={tasksForTodoList}
                        removeTask={removeTask}
                        changeFilter={changeFilter}
                        changeTaskStatus={changeTaskStatus}
                        addTask={addTask}
                        removeTodoList={removeTodolist}
                        changeTaskTitle={changeTaskTitle}
                        changeTodoListTitle={changeTodoListTitle}
                    />
                </Paper>
            </Grid>


        )
    })


    return (
        <div className="App">
            <AppBar position="sticky">
                <Toolbar style={{justifyContent: "space-between"}}>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <Menu/>
                    </IconButton>
                    <Typography variant="h6">
                        Todolists
                    </Typography>
                    <Button
                        variant={"outlined"}
                        color="inherit"
                    >
                        Login
                    </Button>
                </Toolbar>
            </AppBar>
            <Container fixed>
                <Grid container style={{padding: '15px 0'}}>
                    <AddItemForm addItem={addTodoList}/>
                </Grid>
                <Grid container spacing={5}>
                    {todoListsComponents}
                </Grid>
            </Container>

        </div>
    );
}

export default AppWithReducer;
