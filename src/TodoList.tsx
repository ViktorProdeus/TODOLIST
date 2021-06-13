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
}

export function Todolist(props: PropsType) {
    let [title, setTitle] = useState('');
    const addTask = () => {
        props.addTask(title);
        setTitle('');
    };
    const onChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => setTitle(evt.currentTarget.value);
    const onKeyPressHandler = (evt: KeyboardEvent<HTMLInputElement>) => evt.key === 'Enter' && addTask()
    const onFilterAllClickHandler = () => props.changeFilter("all");
    const onFilterActiveClickHandler = () => props.changeFilter("active");
    const onFilterCompletedClickHandler = () => props.changeFilter("completed");
    const tasks = props.tasks.map(t => <li key={t.id}>
        <input type="checkbox" checked={t.isDone}/>
        <span>{t.title}</span>
        <button onClick={() => props.removeTask(t.id)}>x</button>
    </li>)

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input
                value={title}
                onChange={onChangeHandler}
                onKeyPress={onKeyPressHandler}
            />
            <button onClick={addTask}>+</button>
        </div>
        <ul>
            {tasks}
        </ul>
        <div>
            <button onClick={onFilterAllClickHandler}>All</button>
            <button onClick={onFilterActiveClickHandler}>Active</button>
            <button onClick={onFilterCompletedClickHandler}>Completed</button>
        </div>
    </div>
}
