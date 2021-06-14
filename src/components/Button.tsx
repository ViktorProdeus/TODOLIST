import React from "react";
import {FilterValuesType} from "../App";
import s from './Button.module.css'

type ButtonType = {
    value: FilterValuesType
    callBack: () => void
    filter?: FilterValuesType
}

export const Button: React.FC<ButtonType> = (props) => {
    return (
        <>
            <button
                className={props.filter === props.value ? s.activeFilter : ''}
                onClick={props.callBack}>{props.value}</button>
        </>

    )
}