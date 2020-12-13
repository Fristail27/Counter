import React, {ChangeEvent} from "react";
import s from "./Input.module.css"

const Input = (props:any) => {
    let errorStatus = props.errorStatus ? s.inputError : ""
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const valueToNumber = Number.parseInt(e.currentTarget.value);//приводим value инпута к числу, т.к. возвращает строку
        props.onChange(valueToNumber)
    }

    return (
        <div className={s.displayElement}>
            <span className={s.displayText}>{props.textValue}</span>
            <input value={props.value} onChange={onChangeHandler} className={s.input + " " + errorStatus} type="number"/>
        </div>
    )
};

export default Input