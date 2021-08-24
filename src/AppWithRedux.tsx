import React from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
import {AddItemForm} from "./AddItemForm";
import {AppBar, Button, Container, Grid, IconButton, Paper, Toolbar, Typography} from "@material-ui/core";
import {Menu} from "@material-ui/icons";
import {addTodolistAC} from "./store/todolists-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "./store/store";

export type FilterValuesType = "all" | "active" | "completed";

export type TodoListType = {
    id: string
    title: string
    filter: FilterValuesType
}

export type TasksStateType = {
    [key: string]: TaskType[]
}

function AppWithRedux() {

    const dispatch = useDispatch();
    const todoLists = useSelector<AppRootState, TodoListType[]>(state => state.todolists);

    function addTodolist(title: string) {
        const action = addTodolistAC(title);
        dispatch(action)
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

                            return (
                                <Grid key={tl.id} item>
                                    <Paper style={{padding: "20px"}}>
                                        <Todolist
                                            id={tl.id}
                                            title={tl.title}
                                            filter={tl.filter}
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

export default AppWithRedux;