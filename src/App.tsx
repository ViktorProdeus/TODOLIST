import React, {ChangeEvent, useState} from "react";
import './App.css';
import {Display} from "./components/Display";
import {Button} from "./components/Button";


function App() {


    const [maxValue, setMaxValue] = useState<number>(5);
    const [startValue, setStartValue] = useState<number>(0);
    const [counter, setCounter] = useState<number>(0);

    const increaseCounter = () => {
        if (counter < maxValue) {
            setCounter(counter + 1)
        }
    }

    const resetCounter = () => {
        setCounter(+startValue)
    }

    const onChangeInputMAX = (value: number) => {
        setMaxValue(value)
    };

    const onChangeInputMIN = (value: number) => {
        setStartValue(value)
    };

    return (
        <div className={'wrapper'}>
            <div className="block block--settings">
                <Display
                    settings
                    maxValue={+maxValue}
                    startValue={+startValue}
                    onChangeInputMAX={onChangeInputMAX}
                    onChangeInputMIN={onChangeInputMIN}
                />

                <div className="buttons">
                    <Button name={'set'} callback={() => {
                    }} isDisable={false} counter={counter} startValue={+startValue} maxValue={+maxValue}/>
                </div>
            </div>
            <div className="block block--counter">
                <Display counter value={counter} maxValue={+maxValue} startValue={+startValue}
                         onChangeInputMAX={onChangeInputMAX}
                         onChangeInputMIN={onChangeInputMIN}/>

                <div className="buttons">
                    <Button name={'inc'} callback={() => increaseCounter()} isDisable={false} counter={counter}
                            maxValue={+maxValue} startValue={+startValue}/>
                    <Button name={'reset'} callback={() => resetCounter()} isDisable={true} counter={counter}
                            startValue={+startValue} maxValue={+maxValue}/>
                </div>
            </div>
        </div>
    );
}

export default App;