import {TasksStateType} from "../App";
import {v1} from "uuid";
import {AddTodolistAT, RemoveTodoListAT} from "./todolists-reducer";


export type RemoveTaskAT = {
    type: "REMOVE-TASK"
    taskId: string
    todolistId: string
}

export type addTaskAT = {
    type: "ADD-TASK"
    title: string
    todolistId: string
}

export type ChangeTaskStatusAT = {
    type: "CHANGE-STATUS-TASK"
    taskId: string
    isDone: boolean
    todolistId: string
}

export type ChangeTaskTitleAT = {
    type: "CHANGE-TITLE-TASK"
    taskId: string
    title: string
    todolistId: string
}

export type ActionsType =
    RemoveTaskAT
    | addTaskAT
    | ChangeTaskStatusAT
    | ChangeTaskTitleAT
    | AddTodolistAT
    | RemoveTodoListAT;

export const tasksReducer = (state: TasksStateType, action: ActionsType): TasksStateType => {
    switch (action.type) {
        case "REMOVE-TASK": {

            return {
                ...state,
                [action.todolistId]: state[action.todolistId].filter(t => t.id !== action.taskId)
            }
        }

        case "ADD-TASK": {
            const newTask = {id: v1(), title: action.title, isDone: false}
            const tasks = state[action.todolistId]

            return {
                ...state,
                [action.todolistId]: [newTask, ...tasks]
            }
        }

        case "CHANGE-STATUS-TASK": {
            const changedTasks = state[action.todolistId].map(t => (t.id === action.taskId) ? {
                ...t,
                isDone: action.isDone
            } : t)

            return {
                ...state,
                [action.todolistId]: changedTasks
            }
        }

        case "CHANGE-TITLE-TASK": {
            const changedTasks = state[action.todolistId].map(t => (t.id === action.taskId) ? {
                ...t,
                title: action.title
            } : t)

            return {
                ...state,
                [action.todolistId]: changedTasks
            }
        }

        case "ADD-TODOLIST": {

            return {
                ...state,
                [action.todolistId]: []
            }
        }

        case "REMOVE-TODOLIST": {

            const copyState = {...state,}

            delete copyState[action.todoListId]

            return copyState
        }

        default:
            throw new Error('I don`t understand this type');
    }
}

export const removeTaskAC = (taskId: string, todolistId: string): RemoveTaskAT => {
    return {
        type: 'REMOVE-TASK',
        taskId,
        todolistId
    }

}

export const addTaskAC = (title: string, todolistId: string): addTaskAT => {
    return {
        type: "ADD-TASK",
        title,
        todolistId
    }

}

export const changeTaskStatusAC = (taskId: string, isDone: boolean, todolistId: string): ChangeTaskStatusAT => {
    return {
        type: "CHANGE-STATUS-TASK",
        taskId,
        isDone,
        todolistId
    }

}

export const changeTaskTitleAC = (taskId: string, title: string, todolistId: string): ChangeTaskTitleAT => {
    return {
        type: "CHANGE-TITLE-TASK",
        taskId,
        title,
        todolistId
    }

}





