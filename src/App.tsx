import React from 'react';
import './App.css';
import TodoList from "./TodoList";

function App() {
    const headings = ['What to learn', 'Song', 'Books'];

    const tasks1 = [
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'ReactJS', isDone: false},
    ];

    const tasks2 = [
        {id: 1, title: 'Hello world', isDone: false},
        {id: 2, title: 'I am happy', isDone: true},
        {id: 3, title: 'Yo', isDone: false},
    ]

    const tasks3 = [
        {id: 1, title: 'Animal', isDone: false},
        {id: 2, title: 'nature', isDone: false},
        {id: 3, title: 'People', isDone: true},
    ]

    return (
        <div>
            <TodoList title={headings[0]} tasks={tasks1}/>
            <TodoList title={headings[1]} tasks={tasks2}/>
            <TodoList title={headings[2]} tasks={tasks3}/>
        </div>
    );
}

export default App;
