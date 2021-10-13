import React, {ChangeEvent} from "react";
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

    const removeTask = () => props.removeTask(props.task.id)
    const changeTaskStatus = (e: ChangeEvent<HTMLInputElement>) => props.changeTaskStatus(props.task.id, e.currentTarget.checked)
    const changeTaskTitle = (title: string) => props.changeTaskTitle(props.task.id, title)

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

