import React, { ChangeEvent } from 'react';
import {
  createStyles,
  Theme,
  ThemeProvider,
  makeStyles,
  createMuiTheme,
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(1),
    },
    input: {
      color: 'white',
      fontSize: 25,
    },
    label: {
      fontSize: 25,
      fontWeight: 700,
    },
  })
);
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
  },
});

type CustomizedInputPropsType = {
  errorStatus: boolean;
  onChange: (n: number) => void;
  value: number;
  textValue: string;
};
/* eslint-disable react/prop-types */
const CustomizedInputs: React.FC<CustomizedInputPropsType> = ({
  errorStatus,
  onChange,
  value,
  textValue,
}) => {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const valueToNumber = Number.parseInt(e.currentTarget.value, 10) || 0; // приводим value инпута к числу, т.к. возвращает строку
    onChange(valueToNumber);
  };
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <TextField
        error={errorStatus}
        type="number"
        className={classes.margin}
        label={textValue}
        value={value}
        onChange={onChangeHandler}
        inputProps={{
          className: classes.input,
        }}
        InputLabelProps={{
          className: classes.label,
        }}
      />
    </ThemeProvider>
  );
};

export default CustomizedInputs;
