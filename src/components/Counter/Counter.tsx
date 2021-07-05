import {InnerValue} from "../InnerValue/InnerValue";
import {Button} from "../Button/Button";
import React from "react";

type PropsType = {
    value: number
    max: number
    start: number

    increaseValue: () => void
    resetValue: () => void
    isIncBtnDisable: boolean
    isResetBtnDisable: boolean
    isIncorrectValues: boolean
    isSettingBlockActive: boolean
}

export const Counter = (props: PropsType) => {

    return (
        <div className="Block Counter">
            <div className="Display">
                <InnerValue
                    value={props.value}
                    max={props.max} start={props.start}
                    isIncorrectValues={props.isIncorrectValues}
                    isSettingBlockActive={props.isSettingBlockActive}
                />
            </div>
            <div className="BlockWrapper">
                <Button callBack={props.increaseValue} isDisabled={props.isIncBtnDisable}
                        name="inc"/>
                <Button callBack={props.resetValue} isDisabled={props.isResetBtnDisable}
                        name="reset"/>
            </div>
        </div>
    );
};