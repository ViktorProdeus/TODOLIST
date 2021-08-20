// import axios from "axios";
//
// const settings = {
//     withCredentials: true,
//     headers: {
//         'API-KEY': 'e12dcb15-1200-4ce1-bb28-bb99ac0ccb98'
//     }
// };
//
// const instance = axios.create({
//     baseURL: 'https://social-network.samuraijs.com/api/1.1',
//     ...settings,
// })


import { instance } from "./instance";

export const todolistAPI = {
    getTodo() {
        return instance.get<TodoListType[]>("/todo-lists");
    },

    createTodo(title: string) {
        return instance.post<ResponseType<{item: TodoListType}>>("/todo-lists", {title})
    },

    deleteTodo(todolistId: string) {
        return instance.delete<ResponseType<{}>>(`/todo-lists/${todolistId}`)
    },

    updateTodolist(todolistId: string, title: string) {
        return instance.put<ResponseType<{}>>(`/todo-lists/${todolistId}`, {title: title})
    },
}

export type TodoListType = {
    id: string,
    title: string,
    addedDate: string,
    order: number
}

// type CreateTodolistResponseType = {
//     data: {
//         item: TodoListType
//     }
//     messages: string[],
//     fieldsErrors: string[],
//     resultCode: number
// }
//
// type UpdateTodolistResponseType = {
//     data: {}
//     fieldsErrors: string[]
//     messages: string[]
//     resultCode: number
// }
//
// type DeleteTodolistResponseType  = {
//     data: {}
//     fieldsErrors: string[]
//     messages: string[]
//     resultCode: number
// }

export type ResponseType<D> = {
    data: D
    messages: string[],
    fieldsErrors: string[],
    resultCode: number
}
