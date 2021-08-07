import React from "react";

type ButtonPropsType = {
    AddTask: (title: string) => void
    setTitle: (title: string) => void
    title: string
}

export const Button = (props: ButtonPropsType) => {

    const AddTaskHandler = () => {
        props.AddTask(props.title);
        props.setTitle('');
    }

    return (
        <button onClick={AddTaskHandler}>+</button>
    )
}