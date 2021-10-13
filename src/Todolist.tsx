import React, {ChangeEvent, useCallback} from "react";
import {FilterValuesType} from "./App";
import {AddItemForm} from "./components/AddItemForm";
import {EditableSpan} from "./components/EditableSpan";
import {Button, Checkbox, IconButton} from "@material-ui/core";
import {Delete} from "@material-ui/icons";
import {Task} from "./Task";

type TodoListPropsType = {
    id: string
    title: string
    filter: FilterValuesType
    tasks: Array<TaskType>
    removeTask: (taskID: string, todoListID: string) => void
    changeFilter: (filter: FilterValuesType, todoListID: string) => void
    changeTaskStatus: (taskID: string, isDone: boolean, todoListID: string) => void
    addTask: (title: string, todoListID: string) => void
    removeTodoList: (todoListID: string) => void
    changeTaskTitle: (taskID: string, title: string, todoListID: string) => void
    changeTodoListTitle: (todoListID: string, title: string) => void
}

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export const TodoList = React.memo((props: TodoListPropsType) => {
    console.log('TodoList');

    const addTask = (title: string) => props.addTask(title, props.id)

    const removeTodoList = () => props.removeTodoList(props.id)

    const changeTodoListTitle = (title: string) => props.changeTodoListTitle(props.id, title)

    let tasksForTodoList = props.tasks;

    if (props.filter === "active") {
        tasksForTodoList = props.tasks.filter(t => !t.isDone)
    }
    if (props.filter === "completed") {
        tasksForTodoList = props.tasks.filter(t => t.isDone)
    }

    const setAllFilterValue = useCallback(() => props.changeFilter("all", props.id), [props.id, props.changeFilter]);
    const setActiveFilterValue = useCallback(() => props.changeFilter("active", props.id), [props.id, props.changeFilter]);
    const setCompletedFilterValue = useCallback(() => props.changeFilter("completed", props.id), [props.id, props.changeFilter]);

    const onClickHandler = () => props.removeTask(t.id, props.id)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let newIsDoneValue = e.currentTarget.checked;
        props.changeTaskStatus(t.id, newIsDoneValue, props.id);
    }
    const onTitleChangeHandler = (newValue: string) => {
        props.changeTaskTitle(t.id, newValue, props.id)
    }


    // JSX
    return (
        <div>
            <h3>
                <EditableSpan title={props.title} changeTitle={changeTodoListTitle}/>
                <IconButton
                    size={'small'}
                    onClick={removeTodoList}>
                    <Delete/>
                </IconButton>
            </h3>
            <AddItemForm addItem={addTask}/>
            <ul style={{padding: '0', listStyle: 'none'}}>
                {
                    tasksForTodoList.map(t => {

                        return <Task
                            key={t.id}
                            task={t}
                            removeTask={onClickHandler}
                            changeTaskStatus={onChangeHandler}
                            changeTaskTitle={onTitleChangeHandler}
                        />
                    })
                }
            </ul>
            <div>
                <Button
                    size={'small'}
                    variant={'contained'}
                    color={props.filter === "all" ? "secondary" : "primary"}
                    // className={allBtnClass}
                    onClick={setAllFilterValue}
                >All
                </Button>
                <Button
                    size={'small'}
                    variant={'contained'}
                    color={props.filter === "active" ? "secondary" : "primary"}
                    // className={activeBtnClass}
                    onClick={setActiveFilterValue}
                    style={{margin: '0 3px'}}
                >Active
                </Button>
                <Button
                    size={'small'}
                    variant={'contained'}
                    color={props.filter === "completed" ? "secondary" : "primary"}
                    // className={completedBtnClass}
                    onClick={setCompletedFilterValue}
                >Completed
                </Button>
            </div>
        </div>
    )
});

export default TodoList;