import React from "react";

type PropsType = {
    counter: number
    name: string
    id: number
    isDisable: boolean
    callback: () => void
}
export const Button = (props: PropsType) => {
    let {counter, name, id, isDisable, callback} = props
    if (id === 1 && counter === 5) {
        isDisable = !isDisable
    }

    if (id === 2 && counter > 0) {
        isDisable = !isDisable
    }

    return (
        <button
            key={id}
            className={name}
            onClick={() => callback()}
            disabled={isDisable}
        >
            {name}
        </button>

    )
}

