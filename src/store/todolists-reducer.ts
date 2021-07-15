import {FilterValuesType, TodoListType} from "../App";
import {v1} from "uuid";

export type RemoveTodoListAT = {
    type: "REMOVE-TODOLIST"
    todoListID: string
}

export type AddTodolistAT = {
    type: "ADD-TODOLIST"
    title: string
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
            return todoLists.filter(tl => tl.id !== action.todoListID)
        case "ADD-TODOLIST":
            const newTodolistID = v1();

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

export const RemoveTodoListAC = (todoListID: string): RemoveTodoListAT => {
    return {
        type: "REMOVE-TODOLIST",
        todoListID
    }

}

export const AddTodoListAC = (title: string): AddTodolistAT => {
    return {
        type: "ADD-TODOLIST",
        title
    }
}

export const ChangeTodoListTitleAC = (title: string, id: string): ChangeTodolistTitleAT => {
    return {
        type: 'CHANGE-TODOLIST-TITLE',
        id,
        title
    }
}
export const ChangeTodoListFilterAC = (filter: FilterValuesType, todolistId: string): ChangeTodoListFilterAT => {
    return {
        type: 'CHANGE-TODOLIST-FILTER',
        todolistId,
        filter,
    }
}