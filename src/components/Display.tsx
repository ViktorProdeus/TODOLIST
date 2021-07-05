import React, {ChangeEvent} from "react";
import {DisplayValue} from "./DisplayValue";
import {DisplaySettings} from "./DisplaySettings";

type PropsType = {
    counter?: boolean
    settings?: boolean
    value?: number
    maxValue: number
    startValue: number
    onChangeInputMIN: (value: number) => void
    onChangeInputMAX: (value: number) => void
}

export const Display = (props: PropsType) => {

    return (
        <div className={'display'}>
            {props.counter && <DisplayValue value={props.value} maxValue={props.maxValue} startValue={props.startValue}/>}
            {props.settings &&
            <DisplaySettings
                maxValue={props.maxValue}
                startValue={props.startValue}
                onChangeInputMIN={props.onChangeInputMIN}
                onChangeInputMAX={props.onChangeInputMAX}
            />}
        </div>
    )
}
