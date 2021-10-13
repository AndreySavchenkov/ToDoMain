import React, {ChangeEvent, useCallback} from "react";
import {Checkbox, IconButton} from "@material-ui/core";
import {EditableSpan} from "./components/EditableSpan";
import {Delete} from "@material-ui/icons";
import {TaskType} from "./TodoList";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./store/store";
import {changeTaskStatusAC, changeTaskTitlesAC, removeTaskAC} from "./store/task-reducer";


export type Task1PropsType = {
    // task: TaskType,
    // removeTask: (taskID: string) => void
    // changeTaskStatus: (taskID: string, isDone: boolean) => void
    // changeTaskTitle: (taskID: string, title: string) => void
    todolistId: string
    taskId: string
}


export const Task1 = React.memo((props: Task1PropsType) => {
    console.log('Task1');

    const task = useSelector<AppRootStateType, TaskType>(state => state.tasks[props.todolistId].filter(
        el => el.id === props.taskId)[0])

    const dispatch = useDispatch()

    const onClickHandler = () => dispatch(removeTaskAC(props.taskId, props.todolistId))
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let newIsDoneValue = e.currentTarget.checked;
        dispatch(changeTaskStatusAC(props.taskId, newIsDoneValue, props.todolistId))
    }
    const changeTaskTitle = useCallback((newValue: string) => dispatch(changeTaskTitlesAC(props.taskId, newValue, props.todolistId)),
        [props.taskId, props.todolistId, dispatch])

    return (
        <li>
            <Checkbox
                color={'primary'}
                checked={task.isDone}
                onChange={onChangeHandler}
            />
            <EditableSpan title={task.title} changeTitle={changeTaskTitle}/>
            <IconButton
                size={'small'}
                onClick={onClickHandler}>
                <Delete/>
            </IconButton>
        </li>
    )
});

