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
        <div className={'wrapper'}>
            <div className="block block--settings">
                <Display settings />

                <div className="buttons">
                    <Button name={'set'} callback={() => {}} isDisable={false} counter={counter}/>
                </div>
            </div>
            <div className="block block--counter">
                <Display counter value={counter}/>

                <div className="buttons">
                    <Button name={'inc'} callback={() => increaseCounter()} isDisable={false} counter={counter}/>
                    <Button name={'reset'} callback={() => resetCounter()} isDisable={true} counter={counter}/>
                </div>
            </div>
        </div>
    );
}

export default App;