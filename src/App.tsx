import React, {useState} from "react";
import './App.css';
import {Display} from "./components/Display";
import {Button} from "./components/Button";


function App() {

    const [counter, setCounter] = useState<number>(0);

    const increaseCounter = () => {
        if (counter < 5) {
            setCounter(counter + 1)
        }
    }

    const resetCounter = () => {
        setCounter(0)
    }

    return (
        <div className="App">
            <Display value={counter}/>

            <div className="buttons">
                <Button id={1} name={'inc'} callback={() => increaseCounter()} isDisable={false} counter={counter}/>
                <Button id={2} name={'reset'} callback={() => resetCounter()} isDisable={true} counter={counter}/>
            </div>
        </div>
    );
}

export default App;