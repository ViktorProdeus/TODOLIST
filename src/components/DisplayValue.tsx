import React from "react";

type PropsType = {
    value?: number
}

export const DisplayValue = (props: PropsType) => {
    const isMaxValueChangeClass = props.value === 5 ? 'value maxValue' : 'value'

    return (
        <span className={isMaxValueChangeClass}>{props.value}</span>
    )
}
