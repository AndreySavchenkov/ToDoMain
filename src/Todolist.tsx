import React, {useState} from 'react';
import {FilterValuesType} from './App';
import {Input} from "./Input/Input";
import {NewButton} from "./components/NewButton";


type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (tId: string) => void
    changeFilter: (value: FilterValuesType) => void
    AddTask: (title: string) => void
}

export function Todolist(props: PropsType) {

    let [title, setTitle] = useState('')


    const setFileterHandler = (value: FilterValuesType) => {
        props.changeFilter(value)
    }

    const removeTaskHandler = (tId: string) => {
            props.removeTask(tId)
    }


    return <div>
        <h3>{props.title}</h3>
        <Input AddTask={props.AddTask} title={title} setTitle={setTitle}/>
        <ul>
            {
                props.tasks.map(t => <li key={t.id}>
                    <input type="checkbox" checked={t.isDone}/>
                    {/*<NewButton/>*/}
                    <span>{t.title}</span>
                    <NewButton callBack={()=>removeTaskHandler(t.id)} title={'x'} />
                </li>)
            }
        </ul>
        <div>
            <NewButton callBack={() => setFileterHandler('all') } title={'all'}/>
            <NewButton callBack={() => setFileterHandler('active') } title={'active'}/>
            <NewButton callBack={() => setFileterHandler('completed') } title={'completed'}/>
        </div>
    </div>
}


