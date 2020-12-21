import React from "react";
import s from "./display.module.css"
import Button from "../button/button";

type DisplayType = {
    maxValue: number
    value: number | "Введите значения и нажмите SET"
    nameForResetBtn: string
    nameForAddBtn: string
    disabledStatusForAddBtn: boolean
    disabledStatusResetBtn: boolean
    actionOnClickForAddBtn: () => void
    actionOnClickForResetBtn: () => void
}

const Display = (props :DisplayType) => {
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
                <Button name={props.nameForAddBtn} disabledStatus={props.disabledStatusForAddBtn} actionOnClick={props.actionOnClickForAddBtn}/>
                <Button name={props.nameForResetBtn} disabledStatus={props.disabledStatusResetBtn} actionOnClick={props.actionOnClickForResetBtn}/>
            </div>
        </div>
    )
}

export default Display;

