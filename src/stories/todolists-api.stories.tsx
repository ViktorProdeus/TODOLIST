import React, { useEffect, useState } from 'react'
import { ResponseType, todolistAPI, TodoListType } from "../api/todolist-api";

export default {
    title: 'API-TODOLIST'
}

const titleTodo = "FANTASTIC TODOLIST";
const todolistId = '92b41d9b-c6af-4cdd-b88a-8640c7826c94'

export const GetTodolists = () => {
    const [state, setState] = useState<TodoListType[] | null>(null)
    useEffect(() => {
        todolistAPI.getTodo()
            .then((res) => setState(res.data));
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [todolist, setTodolist] = useState<TodoListType | {} | null>(null)
    const [title, setTitle] = useState<string | null>(null)
    const [error, setError] = useState<boolean>(false)

    useEffect(() => {
        todolistAPI.createTodo(titleTodo)
            .then((res) => {
                setTodolist(res.data.data.item)
                setTitle(res.data.data.item.title)
            })
            .catch(error => {
                setError(true)
                return error
            })
    }, [])

    return !error ?
        <div><b>todolistTitle</b>: {JSON.stringify(title)} <br /><br /> <b>todolist</b>: {JSON.stringify(todolist)}
        </div>
        : <div>you can't add a todolist because the maximum todos is 10</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<TodoListType | {} | null>(null)
    useEffect(() => {
        todolistAPI.deleteTodo(todolistId)
            .then((res) => {
                setState(res.data);
            })

    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<ResponseType<{}> | null>(null)
    useEffect(() => {
        todolistAPI.updateTodolist(todolistId, titleTodo)
            .then((res) => {
                setState(res.data)
            })

    }, [])

    return (
        state !== null ? <div> {JSON.stringify(state)}</div> : <div>null</div>
    )
}
