import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/todo-lists/',
    withCredentials: true,
    headers: {
        'API-KEY': '8dabf8d5-133c-401a-b761-a0dd6d5b8f9a'
    }
})

export const tasksAPI = {
    getTasks(todolistId: string) {
        return instance.get<Array<TaskType>>(`${todolistId}/tasks`)
    },
    createTask(todolistId: string, title: string){
        return instance.post<CommonResponseType<{item: TaskType}>>(`${todolistId}/tasks`, {title})
    },
    deleteTask(todolistId: string, taskId: string){
        return instance.delete<CommonResponseType>(`${todolistId}/tasks/${taskId}`)
    },
    updateTask(todolistId: string, taskId: string, title: string){
        return instance.put<CommonResponseType>(`${todolistId}/tasks/${taskId}`, {title})
    }
}


type CommonResponseType<T = {}> = {
    fieldsErrors: Array<string>
    messages: Array<string>
    resultCode: number
    data: T
}

type TaskType = {
    description: string
    title: string
    completed: boolean
    status: number
    priority: number
    startDate: string
    deadline: string
    id: string
    todoListId: string
    order: number
    addedDate: string
}
