import React from "react";
import s from "./button.module.css"

type ButtonType = {
    actionOnClick: () => void,
    disabledStatus: boolean,
    name: string,
}

const Button = (props: ButtonType) => {

    const onClickHandler = () => {
        props.actionOnClick();
    }

    return (
        <button
            onClick={onClickHandler}
            className={s.btn}
            disabled={props.disabledStatus}>
            {props.name}
        </button>
    )
}

export default Button;