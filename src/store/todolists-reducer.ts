import {FilterValuesType, TodolistType} from "../App";
import {v1} from "uuid";


export const REMOVE_TODOLIST = "REMOVE-TODOLIST";
export const ADD_TODOLIST = "ADD-TODOLIST";
const CHANGE_TODOLIST_TITLE = "CHANGE-TODOLIST-TITLE";
const CHANGE_TODOLIST_FILTER = "CHANGE-TODOLIST-FILTER";

export type RemoveTodoListAT = {
    type: typeof REMOVE_TODOLIST
    todoListId: string
}

export type AddTodolistAT = {
    type: typeof ADD_TODOLIST
    title: string
    todolistId: string
}

export type ChangeTodolistTitleAT = {
    type: typeof CHANGE_TODOLIST_TITLE
    id: string,
    title: string
}

export type ChangeTodoListFilterAT = {
    type: typeof CHANGE_TODOLIST_FILTER
    filter: FilterValuesType,
    todolistId: string
}
export const todolistId1 = v1();
export const todolistId2 = v1();

const initialState: TodolistType[] = [
    {id: todolistId1, title: "What to learn", filter: "all"},
    {id: todolistId2, title: "What to buy", filter: "all"}
];

export type ActionsType = RemoveTodoListAT | AddTodolistAT | ChangeTodolistTitleAT | ChangeTodoListFilterAT;

export const todoListsReducer = (state: TodolistType[] = initialState, action: ActionsType): TodolistType[] => {
    switch (action.type) {
        case REMOVE_TODOLIST:
            return state.filter(tl => tl.id !== action.todoListId);

        case ADD_TODOLIST:
            const newTodolistID = action.todolistId;

            const newTodolist: TodolistType = {
                id: newTodolistID,
                title: action.title,
                filter: "all",
            };

            return [newTodolist, ...state];

        case CHANGE_TODOLIST_TITLE:
            const todoListTitleToUpdate = state
                .map(tl => (tl.id === action.id)
                    ? {...tl, title: action.title}
                    : tl);

            return [...todoListTitleToUpdate];

        case CHANGE_TODOLIST_FILTER:
            const todoListFilterToUpdate = state
                .map(tl => (tl.id === action.todolistId)
                    ? {...tl, filter: action.filter}
                    : tl);

            return [...todoListFilterToUpdate];

        default:
            return state;
    }
};

export const removeTodoListAC = (todoListId: string): RemoveTodoListAT => {
    return {
        type: REMOVE_TODOLIST,
        todoListId
    }
};

export const addTodolistAC = (title: string): AddTodolistAT => {
    return {
        type: ADD_TODOLIST,
        title,
        todolistId: v1()
    }
};

export const changeTodoListTitleAC = (title: string, id: string): ChangeTodolistTitleAT => {
    return {
        type: CHANGE_TODOLIST_TITLE,
        id,
        title
    }
};

export const changeTodoListFilterAC = (filter: FilterValuesType, todolistId: string): ChangeTodoListFilterAT => {
    return {
        type: CHANGE_TODOLIST_FILTER,
        todolistId,
        filter,
    }
};