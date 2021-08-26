import React, {useEffect} from "react";
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {Settings} from "./components/Settings/Settings";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./redux/store";
import {
    changeMax,
    changeStart,
    changeStatusIncBtn, changeStatusResetBtn,
    changeStatusSetBtn,
    changeValue,
    initialStateType
} from "./redux/counter-reducer";

const App = () => {
    const dispatch = useDispatch();
    const counter = useSelector<AppStateType, initialStateType>(state => state.counterReducer)

    const disable = true;

    const isIncorrectValues = (counter.max <= counter.start || counter.max < 0 || counter.start < 0);
    const isIncorrectStartValue = (counter.max <= counter.start || counter.start < 0);
    const isIncorrectMaxValue = (counter.max <= counter.start || counter.max < 0);
    const isIncBtnDisable = counter.value === counter.max ? disable : counter.incBtnStatus;
    const isResetBtnDisable = counter.value === counter.start ? disable : counter.resetBtnStatus;
    const isSetBtnDisable = isIncorrectValues ? disable : counter.setBtnStatus;
    const isSettingBlockActive = counter.setBtnStatus === !disable && counter.incBtnStatus === disable && counter.resetBtnStatus === disable;


    const getItemFromLocalStorage = (name: string, fn: (value: number) => void) => {
        let valueAsString = localStorage.getItem(name);
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString);
           
            dispatch(fn(newValue));
        }
    };


    useEffect(() => {
        getItemFromLocalStorage('startValue', changeStart);
        getItemFromLocalStorage('maxValue', changeMax);
        getItemFromLocalStorage('counterValue', changeValue);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    useEffect(() => {
        localStorage.setItem('maxValue', JSON.stringify(counter.max));
        localStorage.setItem('startValue', JSON.stringify(counter.start));
        localStorage.setItem('counterValue', JSON.stringify(counter.start));
    }, [counter.max, counter.start, counter.value]);


    const increaseValue = () => {
        dispatch(changeValue(counter.value + 1))
    };

    const resetValue = () => {
        dispatch(changeValue(counter.start))
    };

    const changeMinValue = (value: number) => {
        dispatch(changeStart(value))
    };

    const changeMaxValue = (value: number) => {
        dispatch(changeMax(value))
    };

    const disabledBlock = (flag: boolean) => {
        dispatch(changeStatusSetBtn(flag))
        dispatch(changeStatusIncBtn(!flag))
        dispatch(changeStatusResetBtn(!flag))
    }

    const disableSettingBlock = () => {
        disabledBlock(disable)
    };

    const disableCounterBlock = () => {
        disabledBlock(!disable)
    };

    const changeStatusButtons = () => {
        disableCounterBlock();
    };

    const onClickSetBtn = () => {
        changeMinValue(counter.start);
        changeMaxValue(counter.max);
        resetValue();
        disableSettingBlock();
    };

    return (
        <div className="AppWrapper">
            <Settings
                max={counter.max}
                start={counter.start}
                changeMinValue={changeMinValue}
                changeMaxValue={changeMaxValue}
                disableSet={counter.setBtnStatus}
                onClickSetBtn={onClickSetBtn}
                changeStatusButtons={changeStatusButtons}
                isSetBtnDisable={isSetBtnDisable}
                isIncorrectStartValue={isIncorrectStartValue}
                isIncorrectMaxValue={isIncorrectMaxValue}
            />

            <Counter
                value={counter.value}
                max={counter.max}
                start={counter.start}
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