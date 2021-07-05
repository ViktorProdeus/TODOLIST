import React from "react";

type PropsType = {
    value: number | undefined
    maxValue: number
    startValue: number
}

export const DisplayValue = (props: PropsType) => {
    const isMaxValueChangeClass = props.value === props.maxValue ? 'value maxValue' : 'value'
    const isIncorrectValue = (props.startValue >= props.maxValue || props.startValue < 0)? 'incorrect value!' : props.value


    return (
        <span className={isMaxValueChangeClass}>{isIncorrectValue}</span>
    )
}
