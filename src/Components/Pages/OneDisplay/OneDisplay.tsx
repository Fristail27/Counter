import React, {useState} from "react";
import {Button, ButtonGroup, Grid} from "@material-ui/core";
import CustomizedInputs from "../../Common/Input/CustomizedInput";
import {makeStyles} from "@material-ui/core/styles";
import {DisplayType} from "../../display/display";
import {DisplayWithInputsType} from "../../displayWithInputs/DisplayWithInputs";

type OneDisplaysType = DisplayType & DisplayWithInputsType


const OneDisplay = (props: OneDisplaysType) => {
    const [displayStatus, setDisplayStatus] = useState<boolean>(true)
    const useStyles = makeStyles({
        main: {
            minHeight: "90vh",
        },
        forContainer: {
            border: "3px #0592cd solid",
            borderRadius: 20,
        },
        forInputs: {
            background: 'linear-gradient(90deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)',
            borderRadius: 20,
            border: '3px #0592cd solid',
            color: 'white',
            marginTop: 20,
        },
        forDisplay: {
            fontSize: 40,
            border: '3px #0592cd solid',
            borderRadius: 20,
            width: "42.5%",
            height: "155px",
            marginTop: 20,
            background: 'linear-gradient(90deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)',
            color: (props.valueCounter === props.maxValue) ? "#770000" : "black"
        },
        forButton: {
            margin: 20,
        },
    });
    const onClickSet = () => {
        props.actionOnClickForSetBtn(displayStatus)
        setDisplayStatus(!displayStatus)
    };
    const setDisableStatus = props.disabledStatusForSetBtn || props.maxValue===props.startValue || Number.isNaN(props.startValue) || Number.isNaN(props.maxValue)
    const addButtonStatus = props.valueCounter >= props.maxValue || displayStatus; // дисейбл для кнопки адд
    const resetButtonStatus = props.valueCounter <= props.startValue || displayStatus; // дисейбл для кн ресет
    const classes = useStyles();

    return (
        <Grid classes={{root: classes.main,}} container>
            <Grid container direction="row" justify="center" alignItems="center">
                <Grid classes={{root: classes.forContainer,}} item xs={12} sm={5}>
                    <Grid container direction="column" justify="center" alignItems="center">
                        { displayStatus
                            ? <Grid classes={{root: classes.forInputs,}} item xs={11} sm={8}>
                             <div><Grid item><CustomizedInputs errorStatus={props.maxValueError}
                                                                    onChange={props.onChangeForMaxValue}
                                                                    value={props.maxValue}
                                                                    textValue="Max value:"/></Grid>
                                    <Grid item><CustomizedInputs errorStatus={props.startValueError}
                                                                 onChange={props.onChangeForStartValue}
                                                                 value={props.startValue}
                                                                 textValue="Start value:"/> </Grid></div>
                                </Grid>
                            : <Grid classes={{root: classes.forDisplay,}} container direction="column" justify="center" alignItems="center" >
                                {props.valueCounter}
                        </Grid>}
                        <Grid item classes={{root: classes.forButton,}}>
                            <ButtonGroup variant="contained" color="primary"
                                         aria-label="contained primary button group">
                                <Button disabled={setDisableStatus}
                                        onClick={onClickSet}>Set</Button>
                                <Button disabled={addButtonStatus} onClick={props.OnClickForAddBtn}>Add</Button>
                                <Button disabled={resetButtonStatus} onClick={props.OnClickForResetBtn}>Reset</Button>
                            </ButtonGroup>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default OneDisplay