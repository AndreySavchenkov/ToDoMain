import React from "react";

type ButtonType = {
    callback: (id: number)=>void
    id: number
}
export const Button = (props: ButtonType) => {
    return(
        <button onClick={()=>props.callback(props.id)}>x</button>
    )
}