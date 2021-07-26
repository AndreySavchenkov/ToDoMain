import React from 'react';
import {Button} from "./components/Buttton";
import {filterType} from "./App";

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (id: number)=>void
    setFilterFoo: (filterValue: filterType) => void
}

export function Todolist(props: PropsType) {
    return <div>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            {props.tasks.map((mTasks) => {

                return (
                    <li key={mTasks.id}>
                        <Button callback={props.removeTask} id={mTasks.id}/>
                        <input type="checkbox" checked={mTasks.isDone}/>
                        <span>{mTasks.title}</span>
                    </li>
                )
            })}
        </ul>
        <div>
            <button onClick={()=>props.setFilterFoo("All")}>All</button>
            <button onClick={()=>props.setFilterFoo("Active")}>Active</button>
            <button onClick={()=>props.setFilterFoo("Completed")}>Completed</button>
        </div>
    </div>

}
