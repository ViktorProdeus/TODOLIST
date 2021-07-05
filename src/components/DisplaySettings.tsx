import React from "react";

type PropsType = {
    // settings?: boolean
    // value?: number
}

export const DisplaySettings = (props: PropsType) => {

    return (
        <div className={'settings'}>
            <label>
                <span>max value</span>
                <input type="number" value={10}/>
            </label>
<br/>
            <label>
                <span>start value</span>
                <input type="number" value={0} />
            </label>
        </div>
    )
}
