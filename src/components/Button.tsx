import React from "react";

type PropsType = {
    counter: number
    name: 'inc' | 'reset' | 'set'
    isDisable: boolean
    callback: () => void
    maxValue: number
    startValue: number
}
export const Button = (props: PropsType) => {
    let {counter, name, isDisable, callback} = props
    if (name === 'inc' && counter === props.maxValue) {
        isDisable = !isDisable
    }

    if (name === 'reset' && counter > props.startValue) {
        isDisable = !isDisable
    }

    return (
        <button
            className={name}
            onClick={() => callback()}
            disabled={isDisable}
        >
            {name}
        </button>

    )
}

