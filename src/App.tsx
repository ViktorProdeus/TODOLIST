import React, { useEffect, useState } from "react";
import './App.css';
import { Display } from "./components/Display";
import { Button } from "./components/Button";


function App() {
    const [counter, setCounter] = useState<number>(0);

    const setToLocalStorage = (value: number) => {
        localStorage.setItem('counter', JSON.stringify(value));
    };

    const getlocalStorage = () => {
        const stringValue = localStorage.getItem('counter');

        stringValue && setCounter(JSON.parse(stringValue))
    };

    const increaseCounter = () => {
        if (counter < 5) {
            setCounter(counter + 1)
        }
    };

    const resetCounter = () => {
        setCounter(0);
    };

    const buttons = [
        {name: "inc", callback: increaseCounter},
        {name: "reset", callback: resetCounter},
    ];

    useEffect(() => {
        getlocalStorage();
    }, []);

    useEffect(() => {
        setToLocalStorage(counter);
    }, [counter]);

    return (
        <div className="App">
            <Display value={counter} />

            <div className="buttons">
                {
                    buttons.map(button =>
                        <Button
                            key={button.name}
                            name={button.name}
                            callback={button.callback}
                            counter={counter}
                        />)
                }
            </div>
        </div>
    );
}

export default App;