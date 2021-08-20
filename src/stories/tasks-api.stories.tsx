import React, { useEffect, useState } from 'react'
import { DataType, tasksAPI, TaskType } from "../api/tasks-api";

export default {
    title: 'API-TASKS'
}

const todolistId = '83433b0b-dc45-4f8b-accf-46efa411fa0c';

export const GetAllTasks = () => {
    const [state, setState] = useState<TaskType[]>([])
    const [count, setCount] = useState<number>(0)
    useEffect(() => {
        tasksAPI.getTasks(todolistId)
            .then((res) => {
                setState(res.data.items)
                setCount(res.data.totalCount)
            });
    }, [])

    return <div>{JSON.stringify(state)} <br /><br /> totalTasks: {JSON.stringify(count)}</div>
}
export const CreateTask = () => {
    const [state, setState] = useState<DataType | {} | null>(null)
    useEffect(() => {
        tasksAPI.createTask(todolistId, 'NEW_TASK')
            .then((res) => setState(res.data.data.item));
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

export const DeleteTask = () => {
    const [state, setState] = useState<DataType | {} >({})
    useEffect(() => {
        const taskId = '76408f2a-70f2-44c7-99b5-93354f5d9d50';
        tasksAPI.deleteTSK(todolistId, taskId)
            .then( (res) => {
            setState(res.data);
        })

    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const UpdateTaskTitle = () => {
    const [title, setTitle] = useState<string>("not found")
    const [id, setId] = useState<string>("not found")
    useEffect(() => {
        const taskId = 'ef8b94f1-6529-4651-a648-b18a1ea53fb0';
        tasksAPI.updateTask(todolistId, taskId, "SUPER TITLE!!!")
            .then((res) => {
                setTitle(res.data.data.item.title);
                setId(res.data.data.item.id);
            })

    }, [])

    return <div> new-task-title: {JSON.stringify(title)} <br/> task-id: {JSON.stringify(id)}</div>
}
