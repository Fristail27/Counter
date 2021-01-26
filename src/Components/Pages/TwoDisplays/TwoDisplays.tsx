import {Grid} from "@material-ui/core";
import DisplayWithInputs from "../../displayWithInputs/DisplayWithInputs";
import Display from "../../display/display";
import React from "react";

const TwoDisplays = () => {
    return (
        <Grid style={{height: "90vh"}} container={true} direction="row" alignItems="center" justify="space-evenly">
            <Grid item>
                <DisplayWithInputs/>
            </Grid>
            <Grid item>
                <Display />
            </Grid>
        </Grid>)
}

export default TwoDisplays