import React, {ChangeEvent, KeyboardEvent, useState} from "react";

type EditableSpanType = {
    title: string
    onChange: (newValue: string) => void
}

export function EditableSpan(props: EditableSpanType) {
    const [title, setTitle] = useState<string>('');
    const [editMode, setEditMode] = useState<boolean>(false);

    const activateEditMode = () => {
        setEditMode(true);
        setTitle(props.title);
    };
    const activateViewMode = () => {
        setEditMode(false);
        const trimTitle = title.trim()
        if(trimTitle) {
            props.onChange(trimTitle);
        } else {
            props.onChange(props.title);
        }
    }

    const onEnterPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter') {
            activateViewMode()
        }
    }
    const onChangeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        return setTitle(e.currentTarget.value);
    };


    return editMode ?
        <input
            onBlur={activateViewMode}
            value={title}
            autoFocus
            onChange={onChangeTitleHandler}
            onKeyPress={onEnterPress}
        />
        : <span onDoubleClick={activateEditMode}>{props.title}</span>
}