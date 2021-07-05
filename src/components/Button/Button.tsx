import React from "react";

type PropsType = {
    name: string
    isDisabled: boolean
    callBack: () => void
}

export const Button = (props: PropsType) => {
    return (
        <>
            <button
                className="Button"
                onClick={props.callBack}
                disabled={props.isDisabled}
            >
                {props.name}
            </button>
        </>
    );
};