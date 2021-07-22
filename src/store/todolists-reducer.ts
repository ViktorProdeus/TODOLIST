import {FilterValuesType, TodoListType} from "../App";
import {v1} from "uuid";

export type RemoveTodoListAT = {
    type: "REMOVE-TODOLIST"
    todoListId: string
}

export type AddTodolistAT = {
    type: "ADD-TODOLIST"
    title: string
    todolistId: string
}

export type ChangeTodolistTitleAT = {
    type: "CHANGE-TODOLIST-TITLE"
    id: string,
    title: string
}

export type ChangeTodoListFilterAT = {
    type: "CHANGE-TODOLIST-FILTER"
    filter: FilterValuesType,
    todolistId: string
}

export type ActionsType = RemoveTodoListAT | AddTodolistAT | ChangeTodolistTitleAT | ChangeTodoListFilterAT;

export const todoListsReducer = (todoLists: TodoListType[], action: ActionsType): TodoListType[] => {
    switch (action.type) {
        case "REMOVE-TODOLIST":
            return todoLists.filter(tl => tl.id !== action.todoListId)
        case "ADD-TODOLIST":
            const newTodolistID = action.todolistId;

            const newTodolist: TodoListType = {
                id: newTodolistID,
                title: action.title,
                filter: 'all',
            };
            return [...todoLists, newTodolist];

        case "CHANGE-TODOLIST-TITLE":
            const todoListTitleToUpdate = todoLists.find(tl => tl.id === action.id);
            if (todoListTitleToUpdate) {
                todoListTitleToUpdate.title = action.title;
                return [...todoLists];
            }
            return todoLists;

        case "CHANGE-TODOLIST-FILTER":
            const todoListFilterToUpdate = todoLists.find(tl => tl.id === action.todolistId);

            if(todoListFilterToUpdate) {
                todoListFilterToUpdate.filter = action.filter;
                return [...todoLists];
            }

            return todoLists;

        default:
            return todoLists;
    }
}

export const removeTodoListAC = (todoListId: string): RemoveTodoListAT => {
    return {
        type: "REMOVE-TODOLIST",
        todoListId
    }

}

export const addTodolistAC = (title: string): AddTodolistAT => {
    return {
        type: "ADD-TODOLIST",
        title,
        todolistId: v1()
    }
}

export const changeTodoListTitleAC = (title: string, id: string): ChangeTodolistTitleAT => {
    return {
        type: 'CHANGE-TODOLIST-TITLE',
        id,
        title
    }
}
export const changeTodoListFilterAC = (filter: FilterValuesType, todolistId: string): ChangeTodoListFilterAT => {
    return {
        type: 'CHANGE-TODOLIST-FILTER',
        todolistId,
        filter,
    }
}