import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';
import  styles from './App.module.css'

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
    addTask: (title: string) => void
    changeCheckBox: (myEvent: boolean, Newid: string) => void
    filter: FilterValuesType
}

export function Todolist(props: PropsType) {

    let [title, setTitle] = useState("");
    let [error,setError] = useState(false);

    const addTask = () => {
        props.addTask(title);
        setTitle("");
        setError(true);
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setError(false);
        setTitle(e.currentTarget.value);
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            setError(true);
            addTask();
        }
    }

    const onAllClickHandler = () => props.changeFilter("all");
    const onActiveClickHandler = () => props.changeFilter("active");
    const onCompletedClickHandler = () => props.changeFilter("completed");

    const onChangeHandlerCheckBox = (event: ChangeEvent<HTMLInputElement>, tID: string) => {
        props.changeCheckBox(event.currentTarget.checked, tID)
    }


    return <div>
        <h3>{props.title}</h3>
        <div>
            <input className={error ? styles.error : ''} value={title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
            />
            <button onClick={addTask}>+</button>
            {error && <div className={styles.errorMessage}>Title is required</div>}
        </div>
        <ul>
            {
                props.tasks.map(t => {

                    const onClickHandler = () => props.removeTask(t.id)


                    return <li  key={t.id}>
                        <input type="checkbox" checked={t.isDone} onChange={(event)=>{onChangeHandlerCheckBox(event,t.id)}}/>
                        <span className={t.isDone ? styles.isDone : ''}>{t.title}</span>
                        <button onClick={onClickHandler}>x</button>
                    </li>
                })
            }
        </ul>
        <div>
            <button className={props.filter==='all' ? styles.activeFilter : ''} onClick={onAllClickHandler}>All</button>
            <button className={props.filter==='active' ? styles.activeFilter : ''} onClick={onActiveClickHandler}>Active</button>
            <button className={props.filter==='completed' ? styles.activeFilter : ''} onClick={onCompletedClickHandler}>Completed</button>
        </div>
    </div>
}
