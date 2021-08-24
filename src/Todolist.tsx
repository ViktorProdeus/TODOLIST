import React, {ChangeEvent} from 'react';
import {FilterValuesType} from './AppWithRedux';
import {AddItemForm} from "./AddItemForm";
import {EditableSpan} from "./EditableSpan";
import {Button, Checkbox, IconButton} from "@material-ui/core";
import {Delete} from "@material-ui/icons";
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "./store/store";
import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC} from "./store/tasks-reducer";
import {Dispatch} from "redux";
import {changeTodoListFilterAC, changeTodoListTitleAC, removeTodoListAC} from "./store/todolists-reducer";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    id: string
    title: string
    filter: FilterValuesType
}

export function Todolist(props: PropsType) {
    const tasks = useSelector<AppRootState, TaskType[]>(state => state.tasks[props.id]);

    const dispatch = useDispatch<Dispatch>()

    const addTask = (title: string) => {
        const action = addTaskAC(title, props.id);
        dispatch(action);
    }

    const removeTodolist = () => dispatch(removeTodoListAC(props.id));
    const changeTodolistTitle = (title: string) => {
        dispatch(changeTodoListTitleAC(title, props.id));
    }

    let allTodolistTasks = tasks;
    let tasksForTodolist = allTodolistTasks;

    if (props.filter === "active") {
        tasksForTodolist = allTodolistTasks.filter(t => !t.isDone);
    }
    if (props.filter === "completed") {
        tasksForTodolist = allTodolistTasks.filter(t => t.isDone);
    }

    const onAllClickHandler = () => dispatch(changeTodoListFilterAC("all", props.id));
    const onActiveClickHandler = () => dispatch(changeTodoListFilterAC("active", props.id));
    const onCompletedClickHandler = () => dispatch(changeTodoListFilterAC("completed", props.id));

    return <div>
        <h3>
            <EditableSpan onChange={changeTodolistTitle} title={props.title}/>
            <IconButton onClick={removeTodolist}>
                <Delete/>
            </IconButton>
        </h3>

        <AddItemForm addItem={addTask}/>

        <ul style={{listStyle: "none", paddingLeft: 0}}>
            {

                tasksForTodolist.map(t => {
                    const onClickHandler = () => dispatch(removeTaskAC(t.id, props.id));
                    const onChangeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        let newIsDoneValue = e.currentTarget.checked;
                        const action = changeTaskStatusAC(t.id, newIsDoneValue, props.id);
                        dispatch(action);
                    };
                    const onChangeTitleHandler = (newValue: string) => {
                        dispatch(changeTaskTitleAC(t.id, newValue, props.id))
                    }

                    return <li key={t.id} style={t.isDone ? {
                        textDecoration: "line-through",
                        color: "rgba(0,0,0,0.3)"
                    } : {textDecoration: "none"}}>
                        <Checkbox color={"primary"} onChange={onChangeStatusHandler} checked={t.isDone}/>
                        <EditableSpan onChange={onChangeTitleHandler} title={t.title}/>
                        <IconButton onClick={onClickHandler}>
                            <Delete fontSize="small"/>
                        </IconButton>
                    </li>
                })
            }
        </ul>
        <div>
            <Button variant={props.filter === 'all' ? "contained" : "text"}
                    onClick={onAllClickHandler}>All
            </Button>
            <Button variant={props.filter === 'active' ? "contained" : "text"} color={"primary"}
                    onClick={onActiveClickHandler}>Active
            </Button>
            <Button variant={props.filter === 'completed' ? "contained" : "text"} color={"secondary"}
                    onClick={onCompletedClickHandler}>Completed
            </Button>
        </div>
    </div>
}


