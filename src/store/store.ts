import {combineReducers, createStore} from "redux";
import {todoListsReducer} from "./todolists-reducer";
import {tasksReducer} from "./tasks-reducer";

export const rootReducer = combineReducers({
    todolists: todoListsReducer,
    tasks: tasksReducer
})

// type AppRootState = {
//     todolists: TodoListType[]
//     tasks: TasksStateType
// }

export type AppRootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer);

// @ts-ignore
window.store = store;