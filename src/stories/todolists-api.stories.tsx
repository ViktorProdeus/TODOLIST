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
    const todolistId = '947810cb-0645-4d5d-af12-9143b411b7ec'
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

    const todolistId = 'fa4c5246-6d30-472f-afd9-4ec68e1ca354'
    todolistAPI.updateTodolist(todolistId, 'TODOLIST')
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
        const taskId = '98971cb6-043b-4515-bb84-0973c5731cf1'
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
        const taskId = '9991b496-6145-4060-ae06-e67434912730'
        const title = 'INCUBATOR'
        todolistAPI.updateTask(todolistId, taskId, title)
            .then((res) => {
                setState(res.data);
            })

    }, [])

    return <div> {JSON.stringify(state)}</div>
}
