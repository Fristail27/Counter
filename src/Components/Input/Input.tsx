import React, {ChangeEvent} from "react";
import s from "./Input.module.css"

const Input = (props:any) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChange(Number.parseInt(e.currentTarget.value)) //приводим value инпута к числу, т.к. возвращает строку
    }
    return (
        <div className={s.displayElement}>
            <span className={s.displayText}>{props.textValue}</span>
            <input value={props.value} onChange={onChangeHandler} className={s.input} type="number"/>
        </div>
    )
};

export default Input