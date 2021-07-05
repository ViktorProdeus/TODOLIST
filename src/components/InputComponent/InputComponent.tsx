import React from "react";

type inputValueType = {
    name: string
    inputValue: number
    changeValue: (value: number) => void
    onChangeInputValue: () => void
    isIncorrectValue: boolean
}

export const InputComponent = (props: inputValueType) => {

    const onChangeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.value) {
            props.changeValue(+e.currentTarget.value)
            props.onChangeInputValue && props.onChangeInputValue();
        }
    }

    return (
        <>
            <label
                className={
                    props.isIncorrectValue ? "inputValue error" : "inputValue"
                }
            >
                <span>{props.name}</span>
                <input
                    type="number"
                    value={props.inputValue}
                    onChange={onChangeInputHandler}
                />
            </label>
        </>
    );
};