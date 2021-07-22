import {FilterValuesType, TodoListType} from "../App";
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

export type ActionsType = RemoveTodoListAT | AddTodolistAT | ChangeTodolistTitleAT | ChangeTodoListFilterAT;

export const todoListsReducer = (todoLists: TodoListType[], action: ActionsType): TodoListType[] => {
    switch (action.type) {
        case REMOVE_TODOLIST:
            return todoLists.filter(tl => tl.id !== action.todoListId);

        case ADD_TODOLIST:
            const newTodolistID = action.todolistId;

            const newTodolist: TodoListType = {
                id: newTodolistID,
                title: action.title,
                filter: "all",
            };

            return [...todoLists, newTodolist];

        case CHANGE_TODOLIST_TITLE:
            const todoListTitleToUpdate = todoLists
                .map(tl => (tl.id === action.id)
                    ? {...tl, title: action.title}
                    : tl);

            return [...todoListTitleToUpdate];

        case CHANGE_TODOLIST_FILTER:
            const todoListFilterToUpdate = todoLists
                .map(tl => (tl.id === action.todolistId)
                    ? {...tl, filter: action.filter}
                    : tl);

            return [...todoListFilterToUpdate];

        default:
            return todoLists;
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