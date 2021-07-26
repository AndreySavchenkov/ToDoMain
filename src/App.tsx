import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';

export  type filterType = 'All' | 'Active' | 'Completed'


function App() {

    let [tasks1, setTasks1] = useState ([
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false },
        { id: 4, title: "ReactJS", isDone: false },
        { id: 5, title: "JS", isDone: true },
        { id: 6, title: "ReactJS", isDone: false }
    ])

    let [filter, setFilter] = useState<filterType>('All')

    const setFilterFoo = (filterValue: filterType) => {
        console.log(filterValue)
        setFilter(filterValue)
        console.log(filter)

    }

    let drushlack = tasks1;

    if(filter==='Active') {
        drushlack = tasks1.filter(ft => !ft.isDone)
    }
    if(filter==='Completed') {
        drushlack = tasks1.filter(ft => ft.isDone)
    }



    const removeTask = (id: number) => {
        tasks1 = tasks1.filter(ftasks=>ftasks.id!==id);
        setTasks1(tasks1);
        console.log(tasks1);
    }


    return (
        <div className="App">
            <Todolist
                title="What to learn"
                tasks={drushlack}
                removeTask={removeTask}
                setFilterFoo = {setFilterFoo}
            />
        </div>
    );
};

export default App;
