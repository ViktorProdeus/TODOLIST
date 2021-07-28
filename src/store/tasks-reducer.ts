import {TasksStateType} from "../App";
import {v1} from "uuid";
import {
    ADD_TODOLIST,
    AddTodolistAT,
    REMOVE_TODOLIST,
    RemoveTodoListAT,
    todolistId1,
    todolistId2
} from "./todolists-reducer";

const REMOVE_TASK = "REMOVE-TASK";
const ADD_TASK = "ADD-TASK";
const CHANGE_STATUS_TASK = "CHANGE-STATUS-TASK";
const CHANGE_TITLE_TASK = "CHANGE-TITLE-TASK";

export type RemoveTaskAT = {
    type: typeof REMOVE_TASK
    taskId: string
    todolistId: string
}

export type AddTaskAT = {
    type: typeof ADD_TASK
    title: string
    todolistId: string
}

export type ChangeStatusTaskAT = {
    type: typeof CHANGE_STATUS_TASK
    isDone: boolean
    taskId: string
    todolistId: string
}

export type ChangeTitleTaskAT = {
    type: typeof CHANGE_TITLE_TASK
    title: string
    taskId: string
    todolistId: string
}

export type ActionsType =
    RemoveTaskAT
    | AddTaskAT
    | ChangeStatusTaskAT
    | ChangeTitleTaskAT
    | AddTodolistAT
    | RemoveTodoListAT;

const initialState: TasksStateType = {
    [todolistId1]: [
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true}
    ],
    [todolistId2]: [
        {id: v1(), title: "Milk", isDone: true},
        {id: v1(), title: "React Book", isDone: true}
    ]
}

export const tasksReducer = (state: TasksStateType = initialState, action: ActionsType): TasksStateType => {
    switch (action.type) {
        case REMOVE_TASK: {
            let tasks = state[action.todolistId].filter(t => t.id !== action.taskId);

            return {
                ...state,
                [action.todolistId]: [...tasks]
            }
        }

        case ADD_TASK: {
            const newTask = {id: v1(), title: action.title, isDone: false};
            let todolistTasks = state[action.todolistId];

            return {
                ...state,
                [action.todolistId]: [newTask, ...todolistTasks]
            }
        }

        case CHANGE_STATUS_TASK: {
            const tasks = state[action.todolistId]
                .map(t => (t.id === action.taskId)
                ? {...t, isDone: action.isDone}
                : t);

            return {
                ...state,
                [action.todolistId]: [...tasks]
            }
        }

        case CHANGE_TITLE_TASK: {
            const tasks = state[action.todolistId].map(t => (t.id === action.taskId) ? {...t, title: action.title} : t);

            return {
                ...state,
                [action.todolistId]: [...tasks]
            }
        }

        case ADD_TODOLIST: {

            return {
                ...state,
                [action.todolistId]: []
            }
        }

        case REMOVE_TODOLIST: {

            const copyState = {...state};

            delete copyState[action.todoListId];

            return copyState
        }

        default:
            return state
    }
};

export const removeTaskAC = (taskId: string, todolistId: string): RemoveTaskAT => {
    return {
        type: REMOVE_TASK,
        taskId,
        todolistId
    }
};

export const addTaskAC = (title: string, todolistId: string): AddTaskAT => {
    return {
        type: ADD_TASK,
        title,
        todolistId
    }
};

export const changeTaskStatusAC = (taskId: string, isDone: boolean, todolistId: string): ChangeStatusTaskAT => {
    return {
        type: CHANGE_STATUS_TASK,
        taskId,
        isDone,
        todolistId
    }
};

export const changeTaskTitleAC = (taskId: string, title: string, todolistId: string): ChangeTitleTaskAT => {
    return {
        type: CHANGE_TITLE_TASK,
        taskId,
        title,
        todolistId
    }
};






