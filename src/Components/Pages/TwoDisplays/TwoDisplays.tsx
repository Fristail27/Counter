import {Grid} from "@material-ui/core";
import DisplayWithInputs from "../../displayWithInputs/DisplayWithInputs";
import Display from "../../display/display";
import React from "react";

export type DisplayWithInputsType = {
    maxValue:number
    startValue:number
    maxValueError:boolean
    startValueError:boolean
    disabledStatusForSetBtn: boolean
    actionOnClickForSetBtn: () => void
    onChangeForMaxValue: (i: number) => void
    onChangeForStartValue: (i: number) => void
}

export type DisplayType = {
    maxValue: number
    startValue: number
    valueCounter: number
    value: number | "Введите значения и нажмите SET" | "Введите корректное значение"
    OnClickForAddBtn: () => void
    OnClickForResetBtn: () => void
}

type TwoDisplaysType = DisplayType & DisplayWithInputsType



const TwoDisplays = (props:TwoDisplaysType) => {
    return (

        <Grid style={{height: "90vh"}} container={true} direction="row" alignItems="center" justify="space-evenly">
            <Grid item>
                <DisplayWithInputs
                    startValue={props.startValue}
                    maxValue={props.maxValue}
                    maxValueError={props.maxValueError}
                    startValueError={props.startValueError}
                    disabledStatusForSetBtn={props.disabledStatusForSetBtn}
                    actionOnClickForSetBtn={props.actionOnClickForSetBtn}
                    onChangeForMaxValue={props.onChangeForMaxValue}
                    onChangeForStartValue={props.onChangeForStartValue}
                />
            </Grid>
            <Grid item>
                <Display maxValue={props.maxValue}
                         startValue={props.startValue}
                         valueCounter={props.valueCounter}
                         value={props.value}
                         OnClickForAddBtn={props.OnClickForAddBtn}
                         OnClickForResetBtn={props.OnClickForResetBtn}/>
            </Grid>
        </Grid>)
}

export default TwoDisplays