import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {TextField} from "@material-ui/core";

type EditableSpanType = {
    title: string
    changeTitle: (title: string) => void
}

export const EditableSpan = (props: EditableSpanType) => {
    const [editMode, setEdinMode] = useState<boolean>(false);
    const [title, setTitle] = useState(props.title);

    const changeTitle = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    const onEditMode = () => setEdinMode(true)
    const offEditMode = () => {
        setEdinMode(false)
        props.changeTitle(title);
    }

    return (
        editMode
            ?<TextField
                onBlur={offEditMode}
                onChange={changeTitle}
                value={title}
                autoFocus
            />
            : <span onDoubleClick={onEditMode}>{props.title}</span>
    )
}