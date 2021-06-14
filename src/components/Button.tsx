import React, { useState } from "react";

type PropsType = {
    counter: number
    name: string
    callback: () => void
}
export const Button = (props: PropsType) => {
    let isDisable = false

    let {counter, name, callback} = props;
    const MAX = 5;
    const MIN = 0;

    if (counter === MAX) {
        name === "inc" ? (isDisable = true): (isDisable = false)
    }

    if (counter === MIN) {
        name === "reset" ? (isDisable = true) : (isDisable = false);
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

