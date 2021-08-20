import { instance } from "./instance";

export const tasksAPI = {
    getTasks(todolistId: string) {
        return instance.get<getTasksType>(`/todo-lists/${todolistId}/tasks`);
    },

    createTask(todolistId: string, title: string) {
        return instance.post<ResponseType<DataType>>(`/todo-lists/${todolistId}/tasks`, {
            todolistId,
            title
        })
    },

    deleteTSK(todolistId: string, taskId: string) {
        return instance.delete<ResponseType<{}>>(`/todo-lists/${todolistId}/tasks/${taskId}`)
    },

    updateTask(todolistId: string, taskId: string, title: string) {
        return instance.put<ResponseType<DataType>>(`/todo-lists/${todolistId}/tasks/${taskId}`, {title: title})
    },
}

export type TaskType = {
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


type getTasksType = {
    error: null
    items: TaskType[]
    totalCount: number
}

export type DataType = {
    item: TaskType
}

// type createTasksType = {
//     fieldsErrors: string[]
//     resultCode: 0 | 1
//     messages: string[]
//     data: DataType
// }
//
// type deleteTasksType = {
//     fieldsErrors: string[]
//     resultCode: 0 | 1
//     messages: string[]
//     data: {}
// }
//
// type updateTasksType = {
//     fieldsErrors: string[]
//     resultCode: 0 | 1
//     messages: string[]
//     data: DataType
// }

type ResponseType<D> = {
    fieldsErrors: string[]
    resultCode: 0 | 1
    messages: string[]
    data: D
}

