import React, {ChangeEvent, useCallback} from 'react';
import {TaskType} from "./Todolist";
import {Checkbox, IconButton} from "@material-ui/core";
import {EditableSpan} from "./EditableSpan";
import {Delete} from "@material-ui/icons";


export type TaskPropsType = {
    todolistId: string
    task: TaskType
    changeTaskStatus: (id: string, isDone: boolean, todolistId: string) => void
    changeTaskTitle: (id: string, newTitle: string, todolistId: string) => void
    removeTask: (taskId: string, todolistId: string) => void
}

const Task = React.memo((props: TaskPropsType) => {
    const {
        todolistId,
        task,
        changeTaskStatus,
        changeTaskTitle,
        removeTask,
    } = props;

    const onClickHandler = useCallback(() => removeTask(task.id, todolistId), [removeTask, task.id, todolistId])
    const onChangeStatusHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        let newIsDoneValue = e.currentTarget.checked;
        changeTaskStatus(task.id, newIsDoneValue, todolistId);
    }, [task.id, todolistId, changeTaskStatus]);
    const onChangeTitleHandler = useCallback((newValue: string) => {
        changeTaskTitle(task.id, newValue, todolistId);
    }, [changeTaskTitle, task.id, todolistId]);

    return (
        <li key={task.id} style={task.isDone ? {
            textDecoration: "line-through",
            color: "rgba(0,0,0,0.3)"
        } : {textDecoration: "none"}}>
            <Checkbox
                color={"primary"}
                onChange={onChangeStatusHandler}
                checked={task.isDone}
            />

            <EditableSpan onChange={onChangeTitleHandler} title={task.title}/>
            <IconButton onClick={onClickHandler}>
                <Delete fontSize="small"/>
            </IconButton>
        </li>
    );
});

export default Task;