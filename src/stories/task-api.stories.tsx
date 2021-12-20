import React, {useEffect, useState} from "react";
import {tasksAPI} from "../api/tasks-api";


export default {
    title: 'tasks API'
}

export const  GetTasks = () => {

    const [state, setState] = useState<any>(null)

    useEffect(() => {
        tasksAPI.getTasks('67298797-3b0c-4c53-b2a3-eca3b3541776')
            .then((res) => {
                setState(res.data)
            })

    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const  CreateTask = () => {

    const [state, setState] = useState<any>(null)

    useEffect(() => {
        tasksAPI.createTask('67298797-3b0c-4c53-b2a3-eca3b3541776', 'change site')
            .then((res) => {
                setState(res.data)
            })

    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const  DeleteTask = () => {

    const [state, setState] = useState<any>(null)

    useEffect(() => {
        tasksAPI.deleteTask('67298797-3b0c-4c53-b2a3-eca3b3541776', '66a8d944-d9a2-4580-857d-a7f1b804e88c')
            .then((res) => {
                setState(res.data)
            })

    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const  UpdateTask = () => {

    const [state, setState] = useState<any>(null)

    useEffect(() => {
        tasksAPI.updateTask(
            '67298797-3b0c-4c53-b2a3-eca3b3541776',
            'e00a008a-86a3-48b6-8ec8-10477e44be1b',
            'I want to sleep'
        )
            .then((res) => {
                setState(res.data)
            })

    }, [])

    return <div> {JSON.stringify(state)}</div>
}