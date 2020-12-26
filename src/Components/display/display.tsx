import React from "react";
import s from "./display.module.css"
import Button from "../Common/button/button";
import {DisplayType} from "../Pages/TwoDisplays/TwoDisplays";


const Display = (props :DisplayType) => {
    const addButtonStatus = props.valueCounter >= props.maxValue; // дисейбл для кнопки адд
    const resetButtonStatus = props.valueCounter <= props.startValue; // дисейбл для кн ресет

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

