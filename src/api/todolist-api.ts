import axios from 'axios'

// TODOLISTS
type TodolistType = {
    id: string
    title: string
    addedDate: string
    order: number
}

// type CreateTodolistResponseType = {
//     fieldsErrors: string[]
//     messages: string[]
//     resultCode: number
//     data: {
//         item: TodolistType
//     }
// }

// type DeleteTodolistResponseType = {
//     fieldsErrors: string[]
//     resultCode: number
//     messages: string[]
//     data: {}
// }
//
// type UpdateTodolistResponseType = DeleteTodolistResponseType

type TodolistsResponseType<D = {}> = {
    fieldsErrors: string[]
    resultCode: number
    messages: string[]
    data: D
}

//TASKS

// items: required(array of Task)
// Items: Task
//
// description: required(string)
// title: required(string)
// completed: required(boolean)
// status: required(integer)
// priority: required(integer)
// startDate: required(datetime)
// deadline: required(datetime)
// id: required(string)
// todoListId: required(string)
// order: required(integer)
// addedDate: required(datetime)
//
// totalCount: (integer)
//
// error: (string)

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

export type GetTasksResponseType = {
    items: TaskType[]
    totalCount: number
    error: string | null
}

// export type CreateTasksResponseType = {
//     resultCode: number
//     messages: string[]
//     data: {
//         item: TaskType
//     }
// }
//
// export type DeleteTasksResponseType = {
//     resultCode: number
//     messages: string[]
//     data: {}
// }
//
// export type UpdateTasksResponseType = DeleteTasksResponseType

export type TasksResponseType<D = {}> = {
    resultCode: number
    messages: string[]
    data: D
}

const settings = {
    withCredentials: true,
    headers: {
        // Не забываем заменить API-KEY на собственный
        'API-KEY': 'e12dcb15-1200-4ce1-bb28-bb99ac0ccb98'
    }
}

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.1/`,
    ...settings
})

const todolistURI = `todo-lists/`
const tasksURI = `/tasks`

export const todolistAPI = {
    // todolists
    getTodolist() {
        return instance.get<TodolistType[]>(todolistURI, settings)
    },

    updateTodolist(todolistId: string, title: string) {
        return instance.put<TodolistsResponseType>(todolistURI + todolistId, {title}, settings)
    },

    deleteTodolist(todolistId: string) {
        return instance.delete<TodolistsResponseType>(todolistURI + todolistId, settings)
    },

    createTodolist(title: string) {
        return instance.post<TodolistsResponseType<{ item: TodolistType }>>(todolistURI, {title}, settings)
    },

    // tasks
    getTasks(todolistId: string) {
        return instance.get<GetTasksResponseType>(todolistURI + todolistId + tasksURI, settings)
    },

    createTask(todolistId: string, title: string) {
        return instance.post<TasksResponseType<{ item: TaskType }>>(todolistURI + todolistId + tasksURI, {title}, settings)
    },

    deleteTask(todolistId: string, taskId: string) {
        return instance.delete<TasksResponseType>(`${todolistURI + todolistId + tasksURI}/${taskId}`, settings)
    },

    updateTask(todolistId: string, taskId: string, title: string) {
        return instance.put<TasksResponseType<{item: {title: string}}>>(`${todolistURI + todolistId + tasksURI}/${taskId}`, {title}, settings)
    },
}

