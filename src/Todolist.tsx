import React, {useCallback} from 'react'
import {AddItemForm} from './AddItemForm'
import {EditableSpan} from './EditableSpan'
import {Button, IconButton} from '@material-ui/core'
import {Delete} from '@material-ui/icons'
import {Task} from './Task'
import {FilterValuesType} from './App';

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
    changeTaskTitle: (taskId: string, newTitle: string, todolistId: string) => void
    removeTask: (taskId: string, todolistId: string) => void
    removeTodolist: (id: string) => void
    changeTodolistTitle: (id: string, newTitle: string) => void
    filter: FilterValuesType

}

export const Todolist = React.memo(function (props: PropsType) {
    console.log('Todolist called')

    const {
        id,
        title: titleTodo,
        tasks,
    changeFilter,
        addTask,
        changeTaskStatus,
        changeTaskTitle,
        removeTask,
        removeTodolist,
        changeTodolistTitle,
        filter,
    } = props

    const addTaskHandler = useCallback((title: string) => {
        addTask(title, id)
    }, [addTask, id])

    const removeTodolistHahdler = () => {
        removeTodolist(id)
    }
    const changeTodolistTitleHandler = useCallback((title: string) => {
        changeTodolistTitle(id, title)
    }, [id, changeTodolistTitle])

    const onAllClickHandler = useCallback(() => changeFilter('all', id), [id, changeFilter])
    const onActiveClickHandler = useCallback(() => changeFilter('active', id), [id, changeFilter])
    const onCompletedClickHandler = useCallback(() => changeFilter('completed', id), [id, changeFilter])


    let tasksForTodolist = tasks

    if (filter === 'active') {
        tasksForTodolist = tasks.filter(t => t.isDone === false)
    }
    if (filter === 'completed') {
        tasksForTodolist = tasks.filter(t => t.isDone === true)
    }

    return <div>
        <h3><EditableSpan value={titleTodo} onChange={changeTodolistTitleHandler}/>
            <IconButton onClick={removeTodolistHahdler}>
                <Delete/>
            </IconButton>
        </h3>
        <AddItemForm addItem={addTaskHandler}/>
        <div>
            {
                tasksForTodolist.map(t => <Task key={t.id} task={t} todolistId={id}
                                          removeTask={removeTask}
                                          changeTaskTitle={changeTaskTitle}
                                          changeTaskStatus={changeTaskStatus}
                    />)
            }
        </div>
        <div style={{paddingTop: '10px'}}>
            <Button variant={filter === 'all' ? 'outlined' : 'text'}
                    onClick={onAllClickHandler}
                    color={'default'}
            >All
            </Button>
            <Button variant={filter === 'active' ? 'outlined' : 'text'}
                    onClick={onActiveClickHandler}
                    color={'primary'}>Active
            </Button>
            <Button variant={filter === 'completed' ? 'outlined' : 'text'}
                    onClick={onCompletedClickHandler}
                    color={'secondary'}>Completed
            </Button>
        </div>
    </div>
})


