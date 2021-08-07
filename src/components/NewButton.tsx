import React from "react";


type propsButton = {
    callBack: () => void
    title: string
}

export const NewButton = (props: propsButton) => {

    const onClickHandler = () => {
        props.callBack()
    }

    return(
        <button onClick={onClickHandler}>{props.title}</button>
    )
}