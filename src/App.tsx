import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';
import styles from './App.module.css'

export type FilterValuesType = "all" | "active" | "completed";

function App() {

    let [tasks, setTasks] = useState([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false},
        {id: v1(), title: "Rest API", isDone: false},
        {id: v1(), title: "GraphQL", isDone: false},
    ]);


    function removeTask(id: string) {
        let filteredTasks = tasks.filter(t => t.id != id);
        setTasks(filteredTasks);
    }

    function addTask(title: string) {
        if(title.trim()!==''){
            let task = {id: v1(), title: title.trim(), isDone: false};
            let newTasks = [task, ...tasks];
            setTasks(newTasks);
        }

    }

    let [filter, setFilter] = useState<FilterValuesType>("all");

    let tasksForTodolist = tasks;

    if (filter === "active") {
        tasksForTodolist = tasks.filter(t => t.isDone === false);
    }
    if (filter === "completed") {
        tasksForTodolist = tasks.filter(t => t.isDone === true);
    }

    function changeFilter(value: FilterValuesType) {
        setFilter(value);
    }

    const changeCheckBox = (myEvent: boolean, Newid: string) => {
        // let currentTask=tasks.find(ft=>ft.id);
        // if(currentTask){
        //     currentTask.isDone=myEvent
        //     setTasks([...tasks])
        // }
        setTasks(tasks.map(mID => mID.id === Newid ? {...mID, isDone: myEvent} : mID))
    }

    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={tasksForTodolist}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
                      addTask={addTask}
                      changeCheckBox={changeCheckBox}
                      filter={filter}

            />

        </div>
    );
}

export default App;
