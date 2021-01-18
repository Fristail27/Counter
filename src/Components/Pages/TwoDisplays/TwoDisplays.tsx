import {Grid} from "@material-ui/core";
import DisplayWithInputs, {DisplayWithInputsType} from "../../displayWithInputs/DisplayWithInputs";
import Display, {DisplayType} from "../../display/display";
import React from "react";


type TwoDisplaysType = DisplayType & DisplayWithInputsType

const TwoDisplays = (props: TwoDisplaysType) => {
    return (
        <Grid style={{height: "90vh"}} container={true} direction="row" alignItems="center" justify="space-evenly">
            <Grid item>
                <DisplayWithInputs
                    startValue={props.startValue}
                    maxValue={props.maxValue}
                    maxValueError={props.maxValueError}
                    startValueError={props.startValueError}
                    disabledStatusForSetBtn={props.disabledStatusForSetBtn}
                    onClickSet={props.onClickSet}
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