import React, {ChangeEvent, useState} from "react";

type EditableSpanType = {
    title: string
    onChange: (newValue: string) => void
}

export function EditableSpan(props: EditableSpanType) {
    let [title, setTitle] = useState<string>('');
    let [editMode, setEditMode] = useState<boolean>(false);
    const activateEditMode = () => {
        setEditMode(true);
        setTitle(props.title);
    };
    const activateViewMode = () => {
        setEditMode(false);
        props.onChange(title);
    }
    const onChangeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value);


    return editMode ?
        <input
            onBlur={activateViewMode}
            value={title}
            autoFocus
            onChange={onChangeTitleHandler}
        />
        : <span onDoubleClick={activateEditMode}>{props.title}</span>
}