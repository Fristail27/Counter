import React from 'react';
import { Button, ButtonGroup, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useObserver } from 'mobx-react';
import CustomizedInputs from '../../Common/Input/CustomizedInput';
import { appState } from '../../../state/State';

const OneDisplay: React.FC = () => {
  const values = appState;
  const maxValueError =
    values.maxValue <= values.startValue || values.maxValue < 0; // условие для ошибки для поля с макс значением
  const startValueError =
    values.maxValue <= values.startValue || values.startValue < 0; // условие для ошибки для поля со стартовым значением
  const setButtonDisableStatus =
    maxValueError ||
    values.startValue < 0 ||
    values.maxValue === values.startValue;
  const setDisableStatus =
    setButtonDisableStatus ||
    values.maxValue === values.startValue ||
    Number.isNaN(values.startValue) ||
    Number.isNaN(values.maxValue);
  const addButtonStatus =
    values.currentValue >= values.maxValue || values.displayStatusForOneDisplay; // дисейбл для кнопки адд
  const resetButtonStatus =
    values.currentValue <= values.startValue ||
    values.displayStatusForOneDisplay; // дисейбл для кн ресет

  const addOneValueCounter = () => {
    appState.increaseValue();
  }; // обработчик кнопки адд
  const resetValueCounter = () => {
    appState.resetCurrentValue();
  }; // обработчик ресета
  const onChangeForMaxValue = (i: number) => {
    appState.changeMaxValue(i);
  }; // обработчик изменения макс инпута
  const onChangeForStartValue = (i: number) => {
    appState.changeStartValue(i);
  }; // обработчик изменения старт инпута
  const onClickSetButtonHandler = () => {
    appState.clickSetButton();
  }; // обработчик нажатия на SET

  const useStyles = makeStyles({
    main: {
      minHeight: '90vh',
    },
    forContainer: {
      border: '3px #0592cd solid',
      borderRadius: 20,
    },
    forInputs: {
      background:
        'linear-gradient(90deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)',
      borderRadius: 20,
      border: '3px #0592cd solid',
      color: 'white',
      marginTop: 20,
    },
    forDisplay: {
      fontSize: 40,
      border: '3px #0592cd solid',
      borderRadius: 20,
      width: '42.5%',
      height: '155px',
      marginTop: 20,
      background:
        'linear-gradient(90deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)',
      color: values.currentValue === values.maxValue ? '#770000' : 'black',
    },
    forButton: {
      margin: 20,
    },
  });
  const classes = useStyles();

  return useObserver(() => (
    <Grid classes={{ root: classes.main }} container>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid classes={{ root: classes.forContainer }} item xs={12} sm={5}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            {values.displayStatusForOneDisplay ? (
              <Grid classes={{ root: classes.forInputs }} item xs={11} sm={8}>
                <div>
                  <Grid item>
                    <CustomizedInputs
                      errorStatus={maxValueError}
                      onChange={onChangeForMaxValue}
                      value={values.maxValue}
                      textValue="Max value:"
                    />
                  </Grid>
                  <Grid item>
                    <CustomizedInputs
                      errorStatus={startValueError}
                      onChange={onChangeForStartValue}
                      value={values.startValue}
                      textValue="Start value:"
                    />{' '}
                  </Grid>
                </div>
              </Grid>
            ) : (
              <Grid
                classes={{ root: classes.forDisplay }}
                container
                direction="column"
                justify="center"
                alignItems="center"
              >
                {values.currentValue}
              </Grid>
            )}
            <Grid item classes={{ root: classes.forButton }}>
              <ButtonGroup
                variant="contained"
                color="primary"
                aria-label="contained primary button group"
              >
                <Button
                  disabled={setDisableStatus}
                  onClick={onClickSetButtonHandler}
                >
                  Set
                </Button>
                <Button disabled={addButtonStatus} onClick={addOneValueCounter}>
                  Add
                </Button>
                <Button
                  disabled={resetButtonStatus}
                  onClick={resetValueCounter}
                >
                  Reset
                </Button>
              </ButtonGroup>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  ));
};

export default OneDisplay;
