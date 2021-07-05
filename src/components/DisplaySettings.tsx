import React, {ChangeEvent} from "react";

type PropsType = {
    // settings?: boolean
    // value?: number
    maxValue: number
    startValue: number
    onChangeInputMIN: (value: number) => void
    onChangeInputMAX: (value: number) => void
}

export const DisplaySettings = (props: PropsType) => {

    return (
        <div className={'settings'}>
            <label>
                <span>max value</span>
                <input type="number" value={props.maxValue}
                       onChange={
                           (e:ChangeEvent<HTMLInputElement>)=> {
                               props.onChangeInputMAX(+e.currentTarget.value)}
                       }/>
            </label>
<br/>
            <label>
                <span>start value</span>
                <input type="number" value={props.startValue}  onChange={(e:ChangeEvent<HTMLInputElement>)=> props.onChangeInputMIN(+e.currentTarget.value)}/>
            </label>
        </div>
    )
}
