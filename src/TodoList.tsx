import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (title: string) => void
    filter: FilterValuesType
    changeTaskStatus: (taskId: string, isDone: boolean) => void
}

export function Todolist(props: PropsType) {
    let [title, setTitle] = useState('');
    let [error, setError] = useState<boolean>(false);
    const addTask = () => {
        const validatedTitle = title.trim();
        (validatedTitle && props.addTask(validatedTitle)) ||
        (!validatedTitle && setError(true));
        setTitle('');
    };

    const onChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
        setTitle(evt.currentTarget.value);
        setError(false);
    };
    const onKeyPressHandler = (evt: KeyboardEvent<HTMLInputElement>) => evt.key === 'Enter' && addTask()
    const onFilterAllClickHandler = () => props.changeFilter("all");
    const onFilterActiveClickHandler = () => props.changeFilter("active");
    const onFilterCompletedClickHandler = () => props.changeFilter("completed");

    const isAllBtnActive = (props.filter === "all") ? 'active' : '';
    const isActiveBtnActive = (props.filter === "active") ? 'active' : '';
    const isCompletedBtnActive = (props.filter === "completed") ? 'active' : '';
    const errorMessage = error ? <div style={{color: 'red'}}>Title is required!</div> : null;

    const tasks = props.tasks.map(t => {
        let styleTask = 'activeTasks';
        t.isDone && (styleTask = 'completedTasks');

        return (
            <li className={styleTask} key={t.id}>
                <input
                    type="checkbox"
                    checked={t.isDone}
                    onChange={(e) => props.changeTaskStatus(t.id, e.currentTarget.checked)}
                />
                <span>{t.title}</span>
                <button onClick={() => props.removeTask(t.id)}>x</button>
            </li>
        )
    });
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input
                    value={title}
                    onChange={onChangeHandler}
                    onKeyPress={onKeyPressHandler}
                    className={error ? 'error' : ''}
                />
                <button onClick={addTask}>+</button>
                {errorMessage}
            </div>
            <ul>
                {tasks}
            </ul>
            <div>
                <button className={isAllBtnActive} onClick={onFilterAllClickHandler}>All</button>
                <button className={isActiveBtnActive} onClick={onFilterActiveClickHandler}>Active</button>
                <button className={isCompletedBtnActive} onClick={onFilterCompletedClickHandler}>Completed</button>
            </div>
        </div>
    );
}
