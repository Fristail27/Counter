import React from 'react';
import { Grid } from '@material-ui/core';
import DisplayWithInputs from '../../displayWithInputs/DisplayWithInputs';
import Display from '../../display/display';
/* eslint-disable react/jsx-boolean-value */
const TwoDisplays: React.FC = () => {
  return (
    <Grid
      container={true}
      style={{ height: '90vh' }}
      direction="row"
      alignItems="center"
      justify="space-evenly"
    >
      <Grid item>
        <DisplayWithInputs />
      </Grid>
      <Grid item>
        <Display />
      </Grid>
    </Grid>
  );
};

export default TwoDisplays;
