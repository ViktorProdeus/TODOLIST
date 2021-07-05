import React from "react";

type PropsType = {
    counter: number
    name: 'inc' | 'reset' | 'set'
    isDisable: boolean
    callback: () => void
}
export const Button = (props: PropsType) => {
    let {counter, name, isDisable, callback} = props
    if (name === 'inc' && counter === 5) {
        isDisable = !isDisable
    }

    if (name === 'reset' && counter > 0) {
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

