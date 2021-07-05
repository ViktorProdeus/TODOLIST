import React from "react";

export type PropsType = {
    value: number
    max: number
    start: number
    isIncorrectValues: boolean
    isSettingBlockActive: boolean
}

export const InnerValue = (props: PropsType) => {
    return (
        props.isSettingBlockActive
            ? <div
                className={
                    props.isIncorrectValues
                        ? "textValue value error" : "value textValue"
                }
            >
                {
                    props.isIncorrectValues
                        ? "Incorrect value" : "Enter values and press 'set'"
                }
            </div>

            : <div
                className={props.value === props.max ? "value error" : "value"}
            >
                {props.value}
            </div>

    )
};