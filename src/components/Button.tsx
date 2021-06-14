import React from "react";

type PropsType = {
    counter: number
    name: string
    isDisable: boolean
    callback: () => void
}
export const Button = (props: PropsType) => {
    let {counter, name, isDisable, callback} = props;
    const MAX = 5;
    const MIN = 0;

    if (name === "inc" && counter === MAX) {
        isDisable = !isDisable
    }

    if (name === "reset" && counter > MIN) {
        isDisable = !isDisable
    }

    return (
        <button
            key={name}
            className={name}
            onClick={() => callback()}
            disabled={isDisable}
        >
            {name}
        </button>

    )
}

