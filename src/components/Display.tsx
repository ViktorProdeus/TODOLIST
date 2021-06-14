import React from "react";

type PropsType = {
    value: number
}

export const Display = (props: PropsType) => {
    const isMaxValueChangeClass = props.value === 5 ? 'maxValue': ''

    return (
        <div className={'display'}>
            <span className={isMaxValueChangeClass}>{props.value}</span>
        </div>
    )
}
