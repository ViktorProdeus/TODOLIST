import React, {useState} from 'react';
import './App.css';
import { Todolist } from './TodoList';


export type keyType = 'All' | 'Active' | 'Completed';

function App() {

    // let tasks1 = [
    //     {id: 1, title: "HTML&CSS", isDone: true},
    //     {id: 2, title: "JS", isDone: true},
    //     {id: 3, title: "ReactJS", isDone: false},
    //     {id: 4, title: "HTML&CSS", isDone: true},
    //     {id: 5, title: "JS", isDone: true},
    //     {id: 6, title: "ReactJS", isDone: false},
    // ];

    let [tasks1, setTasks1] = useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
        {id: 4, title: "HTML&CSS", isDone: true},
        {id: 5, title: "JS", isDone: true},
        {id: 6, title: "ReactJS", isDone: false},
    ]);

    const changeFilter = (key: keyType) => {
        console.log(key);
        // 1. только те isDone:false
        // 2. только те isDone:true

        setFilter(key)
    }

    let [filter, setFilter] = useState<keyType>('All');

    let filterValue = tasks1;

    if (filter === 'Active') {
        filterValue = tasks1.filter(f => !f.isDone);
    }

    if (filter === 'Completed') {
        filterValue = tasks1.filter(f => f.isDone);
    }

    const removeTasks = (Mid: number) => {
        tasks1 = tasks1.filter(f => f.id !== Mid);
        setTasks1([...tasks1]);
    }

    return (
        <div className="App">
            <Todolist
                title="What to learn"
                tasks={filterValue}
                removeTasks={removeTasks}
                changeFilter={changeFilter}
            />
        </div>
    );
}

export default App;
