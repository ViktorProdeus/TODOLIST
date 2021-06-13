import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';
import {Button} from "./components/Button";

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
    statusChangeTask: (id: string, isDone: boolean) => void
    filter: FilterValuesType
}

export function Todolist(props: PropsType) {

    let [title, setTitle] = useState("")
    let [error, setError] = useState<null | string>(null)

    const addTask = () => {
        const trimTitle = title.trim()
        if (trimTitle) {
            props.addTask(trimTitle);
        } else {
            setError("Title is required!");
        }

        setTitle("");
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null)
        if (e.key === 'Enter') {
            addTask();
        }
    }

    // const onAllClickHandler = () => props.changeFilter("all");
    // const onActiveClickHandler = () => props.changeFilter("active");
    // const onCompletedClickHandler = () => props.changeFilter("completed");

    const onFilterClickHandler = (valueFilter: FilterValuesType) => {
        return () => props.changeFilter(valueFilter);
    }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
                   className={error ? 'error' : ''}
            />
            <button onClick={addTask}>+</button>
            {error && <div className={'error-message'}>{error}</div>}
        </div>
        <ul>
            {
                props.tasks.map(t => {
                    const onClickHandler = () => props.removeTask(t.id)
                    const changeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
                        props.statusChangeTask(t.id, evt.currentTarget.checked)
                    }
                    return <li key={t.id} className={t.isDone? 'is-done' : ''}>
                        <input type="checkbox"
                               checked={t.isDone}
                               onChange={changeHandler}
                        />
                        <span>{t.title}</span>
                        <button onClick={onClickHandler}>x</button>
                    </li>
                })
            }
        </ul>
        <div>
            {/*<button className={props.filter==='all'? 'activeFilter': ''} onClick={onAllClickHandler}>All</button>*/}
            {/*<button className={props.filter==='active'? 'activeFilter': ''} onClick={onActiveClickHandler}>Active</button>*/}
            {/*<button className={props.filter==='completed'? 'activeFilter': ''} onClick={onCompletedClickHandler}>Completed</button>*/}
            <Button filter={props.filter} value={'all'} callBack={onFilterClickHandler("all")} />
            <Button filter={props.filter} value={'active'} callBack={onFilterClickHandler("active")}/>
            <Button filter={props.filter} value={'completed'} callBack={onFilterClickHandler("completed")}/>
        </div>
    </div>
}
