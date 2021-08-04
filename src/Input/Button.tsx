import React from "react";

type propsType = {
    AddTask: (title: string) => void
    setTitle: (title: string) => void
    title: string
}

export const Button = (props: propsType) => {

    const AddTaskHandler = () => {
        props.AddTask(props.title);
        props.setTitle('');
    }

    return(
         <button onClick={AddTaskHandler}>+</button>

    )
}