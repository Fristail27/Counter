import React from "react";
import s from "./DisplayWithInputs.module.css"
import Button from "../button/button";
import Input from "../Input/Input";

type DisplayWithInputsType = {
    nameForSetBtn: string
    disabledStatusForSetBtn: boolean
    actionOnClickForSetBtn: () => void
    errorStatusForMaxValue: boolean
    onChangeForMaxValue: (i: number) => void
    valueForMaxValue: number
    textValueForMaxValue: string
    errorStatusForStartValue: boolean
    onChangeForStartValue: (i: number) => void
    valueForStartValue: number
    textValueForStartValue: string
}

const DisplayWithInputs = (props :DisplayWithInputsType) => {
    return (
        <div className={s.AppLeft}>
            <div className={s.display}>
                <Input errorStatus={props.errorStatusForMaxValue} onChange={props.onChangeForMaxValue} value={props.valueForMaxValue}
                       textValue={props.textValueForMaxValue}/>
                <Input errorStatus={props.errorStatusForStartValue} onChange={props.onChangeForStartValue} value={props.valueForStartValue}
                       textValue={props.textValueForStartValue}/>
            </div>
            <div className={s.buttons}>
                <Button name={props.nameForSetBtn} disabledStatus={props.disabledStatusForSetBtn} actionOnClick={props.actionOnClickForSetBtn}/>
            </div>
        </div>
    )
}

export default DisplayWithInputs;