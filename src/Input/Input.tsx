import React, {ChangeEvent, KeyboardEvent, useState} from "react";

type InputPropsType = {
    AddTask: (title: string) => void
    setTitle: (title: string) => void
    title: string
}


export const Input = (props: InputPropsType) => {

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.currentTarget.value)
        props.setTitle(event.currentTarget.value)
        console.log(props.title)
    }

    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {

        if(event.key === 'Enter') {
            props.AddTask(props.title);
            props.setTitle('');
        }
    }

    return (
        <div>
            <input value={props.title} onChange={onChangeHandler} onKeyPress={onKeyPressHandler}/>
        </div>
    )
}