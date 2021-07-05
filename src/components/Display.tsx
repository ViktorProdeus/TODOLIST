import React from "react";
import {DisplayValue} from "./DisplayValue";
import {DisplaySettings} from "./DisplaySettings";

type PropsType = {
    counter?: boolean
    settings?: boolean
    value?: number
}

export const Display = (props: PropsType) => {

    return (
        <div className={'display'}>
            {props.counter && <DisplayValue value={props.value}/>}
            {props.settings && <DisplaySettings/>}
        </div>
    )
}
