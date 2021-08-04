import React, {useState} from 'react';
import {FilterValuesType} from './App';
import {Input} from "./Input/Input";
import {Button} from "./Input/Button";

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    AddTask: (title: string) => void
}

export function Todolist(props: PropsType) {

    let [title, setTitle] = useState('')

    return <div>
        <h3>{props.title}</h3>
        <Input AddTask={props.AddTask} title={title} setTitle={setTitle}/>
        <Button title={title} AddTask={props.AddTask} setTitle={setTitle}/>
        <ul>
            {
                props.tasks.map(t => <li key={t.id}>
                    <input type="checkbox" checked={t.isDone} />
                    <span>{t.title}</span>
                    <button onClick={() => {
                        props.removeTask(t.id)
                    }}>x
                    </button>
                </li>)
            }
        </ul>
        <div>
            <button onClick={() => {
                props.changeFilter("all")
            }}>
                All
            </button>
            <button onClick={() => {
                props.changeFilter("active")
            }}>
                Active
            </button>
            <button onClick={() => {
                props.changeFilter("completed")
            }}>
                Completed
            </button>
        </div>
    </div>
}
