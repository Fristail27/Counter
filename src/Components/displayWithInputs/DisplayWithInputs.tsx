import React from "react";
import s from "./DisplayWithInputs.module.css"
import Button from "../Common/button/button";
import CustomizedInputs from "../Common/Input/CustomizedInput";

export type DisplayWithInputsType = {
    maxValue:number
    startValue:number
    maxValueError:boolean
    startValueError:boolean
    disabledStatusForSetBtn: boolean
    actionOnClickForSetBtn: (bool?:boolean) => void
    onChangeForMaxValue: (i: number) => void
    onChangeForStartValue: (i: number) => void
}

const DisplayWithInputs = (props :DisplayWithInputsType) => {
    return (
        <div className={s.AppLeft}>
            <div className={s.display}>
                <CustomizedInputs errorStatus={props.maxValueError} onChange={props.onChangeForMaxValue} value={props.maxValue}
                                  textValue="Max value:"/>
                <CustomizedInputs errorStatus={props.startValueError} onChange={props.onChangeForStartValue} value={props.startValue}
                                  textValue="Start value:"/>
            </div>
            <div className={s.buttons}>
                <Button name="Set" disabledStatus={props.disabledStatusForSetBtn} actionOnClick={props.actionOnClickForSetBtn}/>
            </div>
        </div>
    )
}

export default DisplayWithInputs;