import React, { useReducer } from 'react';
import './App.css';
import { TaskType, Todolist } from './Todolist';
import { v1 } from 'uuid';
import { AddItemForm } from "./AddItemForm";
import { AppBar, Button, Container, Grid, IconButton, Paper, Toolbar, Typography } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import {
    addTodolistAC,
    changeTodoListFilterAC,
    changeTodoListTitleAC,
    removeTodoListAC,
    todoListsReducer
} from "./store/todolists-reducer";
import { addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC, tasksReducer } from "./store/tasks-reducer";

export type FilterValuesType = "all" | "active" | "completed";

export type TodoListType = {
    id: string
    title: string
    filter: FilterValuesType
}

export type TasksStateType = {
    [key: string]: TaskType[]
}

function App() {
    let todolistId1 = v1();
    let todolistId2 = v1();

    let [todoLists, dispatchToTodoLists] = useReducer(todoListsReducer, [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ])

    let [tasks, dispatchToTasks] = useReducer(tasksReducer,{
        [todolistId1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true}
        ],
        [todolistId2]: [
            {id: v1(), title: "Milk", isDone: true},
            {id: v1(), title: "React Book", isDone: true}
        ]
    });

    function removeTask(id: string, todolistId: string) {
        dispatchToTasks(removeTaskAC(id, todolistId));
    }

    function addTask(title: string, todolistId: string) {
        dispatchToTasks(addTaskAC(title, todolistId));
    }

    function changeStatus(id: string, isDone: boolean, todolistId: string) {
        dispatchToTasks(changeTaskStatusAC(id, isDone, todolistId));
    }

    function changeTaskTitle(id: string, title: string, todolistId: string) {
        dispatchToTasks(changeTaskTitleAC(id, title, todolistId));
    }

    function changeFilter(value: FilterValuesType, todolistId: string) {
        dispatchToTodoLists(changeTodoListFilterAC(value, todolistId))
    }

    function removeTodolist(id: string) {
        const action = removeTodoListAC(id)
        dispatchToTasks(action);
        dispatchToTodoLists(action);
    }

    function changeTodolistTitle(id: string, title: string) {
        dispatchToTodoLists(changeTodoListTitleAC(title, id))
    }

    function addTodolist(title: string) {
        const action = addTodolistAC(title)
        dispatchToTodoLists(action);
        dispatchToTasks(action)
    }

    return (
        <div>
            <AppBar position="static">
                <Toolbar style={{justifyContent: "space-between"}}>
                    <IconButton edge="start" color="inherit">
                        <Menu/>
                    </IconButton>
                    <Typography variant="h6">
                        TodoLists
                    </Typography>
                    <Button
                        color="inherit"
                        variant={"outlined"}
                    >Login</Button>
                </Toolbar>
            </AppBar>
            <Container style={{maxWidth: "1920px"}}>
                <Grid container style={{padding: "20px 0"}}>
                    <AddItemForm addItem={addTodolist}/>
                </Grid>

                <Grid container spacing={3}>
                    {
                        todoLists.map(tl => {
                            let allTodolistTasks = tasks[tl.id];
                            let tasksForTodolist = allTodolistTasks;

                            if (tl.filter === "active") {
                                tasksForTodolist = allTodolistTasks.filter(t => !t.isDone);
                            }
                            if (tl.filter === "completed") {
                                tasksForTodolist = allTodolistTasks.filter(t => t.isDone);
                            }

                            return (
                                <Grid key={tl.id} item>
                                    <Paper style={{padding: "20px"}}>
                                        <Todolist
                                            id={tl.id}
                                            title={tl.title}
                                            tasks={tasksForTodolist}
                                            removeTask={removeTask}
                                            changeFilter={changeFilter}
                                            addTask={addTask}
                                            changeTaskStatus={changeStatus}
                                            changeTaskTitle={changeTaskTitle}
                                            filter={tl.filter}
                                            removeTodolist={removeTodolist}
                                            changeTodolistTitle={changeTodolistTitle}
                                        />
                                    </Paper>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Container>
        </div>
    );
}

export default App;