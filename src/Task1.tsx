import React, {ChangeEvent, useCallback} from "react";
import {Checkbox, IconButton} from "@material-ui/core";
import {EditableSpan} from "./components/EditableSpan";
import {Delete} from "@material-ui/icons";
import {TaskType} from "./TodoList";


export type TaskPropsType = {
    task: TaskType,
    removeTask: (taskID: string) => void
    changeTaskStatus: (taskID: string, isDone: boolean) => void
    changeTaskTitle: (taskID: string, title: string) => void
}


export const Task = React.memo((props: TaskPropsType) => {
    console.log('Task');
    const removeTask = () => props.removeTask(props.task.id)
    const changeTaskStatus = (e: ChangeEvent<HTMLInputElement>) => props.changeTaskStatus(props.task.id, e.currentTarget.checked)
    const changeTaskTitle = useCallback((title: string) => props.changeTaskTitle(props.task.id, title), [props.task.id, props.changeTaskTitle])

    return (
        <li>
            <Checkbox
                color={'primary'}
                checked={props.task.isDone}
                onChange={changeTaskStatus}
            />
            <EditableSpan title={props.task.title} changeTitle={changeTaskTitle}/>
            <IconButton
                size={'small'}
                onClick={removeTask}>
                <Delete/>
            </IconButton>
        </li>
    )
});

