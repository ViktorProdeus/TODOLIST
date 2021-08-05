import React, {useCallback} from 'react';
import {FilterValuesType} from './App';
import {AddItemForm} from "./AddItemForm";
import {EditableSpan} from "./EditableSpan";
import {Button, IconButton} from "@material-ui/core";
import {Delete} from "@material-ui/icons";
import Task from "./Task";
import {useSelector} from "react-redux";
import {AppRootState} from "./store/store";
import {TodoListType} from "./AppWithRedux";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    id: string
    title: string
    tasks: Array<TaskType>
    changeFilter: (value: FilterValuesType, todolistId: string) => void
    addTask: (title: string, todolistId: string) => void
    changeTaskStatus: (id: string, isDone: boolean, todolistId: string) => void
    changeTaskTitle: (id: string, newTitle: string, todolistId: string) => void
    removeTask: (taskId: string, todolistId: string) => void
    removeTodolist: (id: string) => void
    changeTodolistTitle: (id: string, title: string) => void
    filter: FilterValuesType
}

export const Todolist = React.memo(((props: PropsType) => {
    const {
        id,
        // title,
        tasks,
        changeFilter,
        addTask,
        changeTaskStatus,
        changeTaskTitle,
        removeTask,
        removeTodolist,
        changeTodolistTitle,
        filter
    } = props;

    console.log("Todolist called")
    // для оптимизации через хук useSelector
    const todo = useSelector<AppRootState, TodoListType>(state => state.todolists.filter(todo => todo.id === id)[0]);

    const addTaskHandler = useCallback((title: string) => {
        addTask(title, id)
    }, [addTask, id])

    const removeTodolistHandler = useCallback(() => removeTodolist(id), [removeTodolist, id]);
    const changeTodolistTitleHandler = useCallback((title: string) => {
        changeTodolistTitle(id, title);
    }, [changeTodolistTitle, id])

    const onAllClickHandler = useCallback(() => changeFilter("all", id), [changeFilter, id]);
    const onActiveClickHandler = useCallback(() => changeFilter("active", id), [changeFilter, id]);
    const onCompletedClickHandler = useCallback(() => changeFilter("completed", id), [changeFilter, id]);

    let tasksForTodolist = tasks;

    if (props.filter === "active") {
        tasksForTodolist = tasks.filter(t => !t.isDone);
    }
    if (props.filter === "completed") {
        tasksForTodolist = tasks.filter(t => t.isDone);
    }

    return (
        <div>
            <h3>
                <EditableSpan onChange={changeTodolistTitleHandler} title={todo.title}/> {/*для оптимизации через хук useSelector*/}
                <IconButton onClick={removeTodolistHandler}>
                    <Delete/>
                </IconButton>
            </h3>

            <AddItemForm addItem={addTaskHandler}/>

            <ul style={{listStyle: "none", paddingLeft: 0}}>
                {
                    tasksForTodolist.map(t => {

                        return <Task
                            key={t.id}
                            todolistId={id}
                            task={t}
                            changeTaskStatus={changeTaskStatus}
                            changeTaskTitle={changeTaskTitle}
                            removeTask={removeTask}
                        />
                    })
                }
            </ul>
            <div>
                <Button variant={filter === 'all' ? "contained" : "text"}
                        onClick={onAllClickHandler}>All
                </Button>
                <Button variant={filter === 'active' ? "contained" : "text"} color={"primary"}
                        onClick={onActiveClickHandler}>Active
                </Button>
                <Button variant={filter === 'completed' ? "contained" : "text"} color={"secondary"}
                        onClick={onCompletedClickHandler}>Completed
                </Button>
            </div>
        </div>
    )
}))


