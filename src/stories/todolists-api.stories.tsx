import React, {useEffect, useState} from 'react';
import {todolistAPI} from "../api/todolist-api";

export default {
  title: 'API'
}

// todolists
export const GetTodolists = () => {
  const [state, setState] = useState<any>(null)
  useEffect(() => {
      todolistAPI.getTodolist()
        .then((res) => {
          setState(res.data);
        })

  }, [])

  return <div> {JSON.stringify(state)}</div>
}

export const CreateTodolist = () => {
  const [state, setState] = useState<any>(null)
  useEffect(() => {
    todolistAPI.createTodolist('newTodo')
        .then((res) => {
          setState(res.data);
        })
  }, [])

  return <div> {JSON.stringify(state)}</div>
}

export const DeleteTodolist = () => {
  const [state, setState] = useState<any>(null)
  useEffect(() => {
    const todolistId = '6720cdc9-4ee3-49aa-996b-1bc114c945d8'
    todolistAPI.deleteTodolist(todolistId)
        .then( (res) => {
          setState(res.data);
        })
  }, [])

  return <div> {JSON.stringify(state)}</div>
}

export const UpdateTodolistTitle = () => {
  const [state, setState] = useState<any>(null)
  useEffect(() => {

    const todolistId = '359cee32-89e3-4f25-979a-524d68179644'
    todolistAPI.updateTodolist(todolistId, 'HTML')
        .then((res) => {
          setState(res.data)
        })

  }, [])

  return <div> {JSON.stringify(state)}</div>
}


// tasks
export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = 'fa4c5246-6d30-472f-afd9-4ec68e1ca354'
        todolistAPI.getTasks(todolistId)
            .then((res) => {
                setState(res.data);
            })

    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const CreateTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = 'fa4c5246-6d30-472f-afd9-4ec68e1ca354'
        todolistAPI.createTask(todolistId, 'REACT')
            .then((res) => {
                setState(res.data);
            })

    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const DeleteTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = 'fa4c5246-6d30-472f-afd9-4ec68e1ca354'
        const taskId = 'd147c5ee-12da-4b4e-ba74-48912fc83c76'
        todolistAPI.deleteTask(todolistId, taskId)
            .then((res) => {
                setState(res.data);
            })

    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const UpdateTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = 'fa4c5246-6d30-472f-afd9-4ec68e1ca354'
        const taskId = '6db19ca6-97bd-47a6-a506-0688663d3518'
        const title = 'TODO SOMETHING'
        todolistAPI.updateTask(todolistId, taskId, title)
            .then((res) => {
                setState(res.data);
            })

    }, [])

    return <div> {JSON.stringify(state)}</div>
}