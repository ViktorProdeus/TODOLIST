import React from "react";
import {Button} from "../Button/Button";
import {InputComponent} from "../InputComponent/InputComponent";

type PropsType = {
    max: number
    start: number
    isSetBtnDisable: boolean
    isIncorrectStartValue: boolean
    isIncorrectMaxValue: boolean
    changeMinValue: (value: number) => void
    changeMaxValue: (value: number) => void
    disableSet: boolean

    onClickSetBtn: () => void
    changeStatusButtons: () => void
}

export const Settings = (props: PropsType) => {

    return (
        <div className="Block Settings">
            <div className="Display">
                <div>
                    <InputComponent
                        isIncorrectValue={props.isIncorrectMaxValue}
                        name="max value"
                        inputValue={props.max}
                        changeValue={props.changeMaxValue}
                        changeStatusButtons={props.changeStatusButtons}
                    />
                    <br/>
                    <InputComponent
                        isIncorrectValue={props.isIncorrectStartValue}
                        name="start value"
                        inputValue={props.start}
                        changeValue={props.changeMinValue}
                        changeStatusButtons={props.changeStatusButtons}
                    />
                </div>

            </div>
            <div className="BlockWrapper">
                <Button callBack={() => {
                    props.onClickSetBtn()
                }} isDisabled={props.isSetBtnDisable} name="set"/>
            </div>
        </div>
    );
};