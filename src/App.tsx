import React, {useEffect, useState} from "react";
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {Settings} from "./components/Settings/Settings";

const App = () => {
    const [start, setStart] = useState<number>(0);
    const [max, setMax] = useState<number>(5);
    let [value, setValue] = useState<number>(start);

    const disable = true;
    const [disableSet, setDisableSet] = useState<boolean>(disable);
    const [disableInc, setDisableInc] = useState<boolean>(!disable);
    const [disableReset, setDisableReset] = useState<boolean>(!disable);

    const isIncorrectValues = (max <= start || max < 0 || start < 0);
    const isIncorrectStartValue = (max <= start || start < 0);
    const isIncorrectMaxValue = (max <= start || max < 0);
    const isIncBtnDisable = value === max ? disable : disableInc;
    const isResetBtnDisable = value === start ? disable : disableReset;
    const isSetBtnDisable = isIncorrectValues ? disable : disableSet;
    const isSettingBlockActive = disableSet === !disable && disableInc === disable && disableReset === disable;


    const getItemFromLocalStorage = (name: string, fn: (value: number) => void) => {
        let valueAsString = localStorage.getItem(name);
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString);
            fn(newValue);
        }
    };


    useEffect(() => {
        getItemFromLocalStorage('startValue', setStart);
        getItemFromLocalStorage('maxValue', setMax);
        getItemFromLocalStorage('counterValue', setValue);
    }, []);


    useEffect(() => {
        localStorage.setItem('maxValue', JSON.stringify(max));
        localStorage.setItem('startValue', JSON.stringify(start));
        localStorage.setItem('counterValue', JSON.stringify(start));
    }, [max, start, value]);


    const increaseValue = () => {
        setValue(value + 1)
    };

    const resetValue = () => {
        setValue(start)
    };

    const changeMinValue = (value: number) => {
        setStart(value)
    };

    const changeMaxValue = (value: number) => {
        setMax(value)
    };

    const disabledBlock = (flag: boolean) => {
        setDisableSet(flag);
        setDisableInc(!flag);
        setDisableReset(!flag);
    }

    const disableSettingBlock = () => {
        disabledBlock(disable)
    };

    const disableCounterBlock = () => {
        disabledBlock(!disable)
    };

    const onChangeInputValue = () => {
        disableCounterBlock();
    };

    const onClickSetBtn = () => {
        changeMinValue(start);
        changeMaxValue(max);
        resetValue();
        disableSettingBlock();
    };

    return (
        <div className="AppWrapper">
            <Settings
                max={max}
                start={start}
                changeMinValue={changeMinValue}
                changeMaxValue={changeMaxValue}
                disableSet={disableSet}
                onClickSetBtn={onClickSetBtn}
                onChangeInputValue={onChangeInputValue}
                isSetBtnDisable={isSetBtnDisable}
                isIncorrectStartValue={isIncorrectStartValue}
                isIncorrectMaxValue={isIncorrectMaxValue}
            />

            <Counter
                value={value}
                max={max}
                start={start}
                increaseValue={increaseValue}
                resetValue={resetValue}
                isIncBtnDisable={isIncBtnDisable}
                isResetBtnDisable={isResetBtnDisable}
                isIncorrectValues={isIncorrectValues}
                isSettingBlockActive={isSettingBlockActive}
            />
        </div>
    )
}

export default App;