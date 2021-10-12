import React, {useCallback} from 'react';
import './App.css';
import TodoList, {TaskType} from "./TodoList";
import {AddItemForm} from "./components/AddItemForm";
import {AppBar, Button, Container, Grid, IconButton, Paper, Toolbar, Typography} from "@material-ui/core";
import {Menu} from "@material-ui/icons";
import {
    AddTodolistAC,
    ChangeTodoLisFiltertAC,
    ChangeTodoListAC,
    RemoveTodoListAC,
} from "./store/todolist-reducer";
import {
    addTaskAC,
    changeTaskStatusAC,
    changeTaskTitlesAC,
    removeTaskAC,
} from "./store/task-reducer";
import {AppRootStateType} from "./store/store";
import {useDispatch, useSelector} from "react-redux";

export type FilterValuesType = "all" | "active" | "completed"

export type TodoListType = {
    id: string
    title: string
    filter: FilterValuesType
}

export type TasksStateType = {
    [key: string]: Array<TaskType>
}

function AppWithRedux() {
    console.log('App is called');

    const todoLists = useSelector<AppRootStateType, Array<TodoListType>>(state => state.todolists);
    const tasks = useSelector<AppRootStateType, TasksStateType>(state => state.tasks);

    const dispatch = useDispatch();

    //BLL:


    const removeTask = useCallback((taskID: string, todoListID: string) => {
        dispatch(removeTaskAC(taskID, todoListID));
    }, [dispatch]);

    const addTask = useCallback((title: string, todoListID: string) => {
        dispatch(addTaskAC(title, todoListID));
    }, [dispatch]);

    const changeTaskStatus = useCallback((taskID: string, isDone: boolean, todoListID: string) => {
        dispatch(changeTaskStatusAC(taskID, isDone, todoListID));
    }, [dispatch]);

    const changeTaskTitle = useCallback((taskID: string, title: string, todoListID: string) => {
        dispatch(changeTaskTitlesAC(taskID, title, todoListID));
    }, [dispatch]);

    const changeFilter = useCallback((filter: FilterValuesType, todoLisId: string) => {
        dispatch(ChangeTodoLisFiltertAC(filter, todoLisId));
    }, [dispatch]);

    const removeTodolist = useCallback((todoListID: string) => {
        let action = RemoveTodoListAC(todoListID);
        dispatch(action);
    }, [dispatch]);

    const addTodoList = useCallback((title: string) => {
        let action = AddTodolistAC(title)
        dispatch(action);
    }, [dispatch]);

    const changeTodoListTitle = useCallback((todoListID: string, title: string) => {
        dispatch(ChangeTodoListAC(todoListID, title));
    }, [dispatch]);


    // GUI (CRUD):

    const todoListsComponents = todoLists.map(tl => {

        return (
            <Grid item key={tl.id}>
                <Paper elevation={10} style={{padding: '15px'}}>
                    <TodoList
                        id={tl.id}
                        filter={tl.filter}
                        title={tl.title}
                        tasks={tasks[tl.id]}
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

export default AppWithRedux;
