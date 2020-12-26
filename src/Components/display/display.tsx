import React from "react";
import s from "./display.module.css"
import Button from "../Common/button/button";

export type DisplayType = {
    maxValue: number
    startValue: number
    valueCounter: number
    value: number | "Введите значения и нажмите SET" | "Введите корректное значение"
    OnClickForAddBtn: () => void
    OnClickForResetBtn: () => void
}

const Display = (props :DisplayType) => {
    const addButtonStatus = props.valueCounter >= props.maxValue || props.value === "Введите значения и нажмите SET"; // дисейбл для кнопки адд
    const resetButtonStatus = props.valueCounter <= props.startValue || props.value === "Введите значения и нажмите SET"; // дисейбл для кн ресет

    let red = "";
    if (props.value === props.maxValue) {
        red = s.red
    }
    return (
        <div className={s.AppRight}>
            <div className={s.display}>
                <div className={red}>
                    <div>{props.value}</div>
                </div>
            </div>
            <div className={s.buttons}>
                <Button name="Add" disabledStatus={addButtonStatus} actionOnClick={props.OnClickForAddBtn}/>
                <Button name="Reset" disabledStatus={resetButtonStatus} actionOnClick={props.OnClickForResetBtn}/>
            </div>
        </div>
    )
}

export default Display;

