import React, {ChangeEvent} from 'react';
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
            color:"white",
            fontSize: 25,
        },
        label: {
            fontSize: 25,
            fontWeight: 700,
        }
    }),
);
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#ffffff',
        },
    },
});

export default function CustomizedInputs(props:any) {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const valueToNumber = Number.parseInt(e.currentTarget.value) || 0;//приводим value инпута к числу, т.к. возвращает строку
        props.onChange(valueToNumber)
    }
    const classes = useStyles();
    return (
            <ThemeProvider theme={theme}>
                <TextField
                    error={props.errorStatus}
                    type="number"
                    className={classes.margin}
                    label={props.textValue}
                    value={props.value}
                    onChange={onChangeHandler}
                    inputProps={{
                        className: classes.input
                    }}
                    InputLabelProps={{
                        className: classes.label

                    }}
                />
            </ThemeProvider>
    );
}