import React, {useState} from 'react';
import './App.css';
import Display from "./Components/display/display";
import DisplayWithInputs from "./Components/displayWithInputs/DisplayWithInputs";
import {AppBar, Grid, Toolbar, Typography} from "@material-ui/core";
import SimpleMenu from "./Components/Menu/menu";

const initialState = (keyValue: string, defaultValue: number) => {
    const fromLocStor = JSON.parse(localStorage.getItem("localStorageValues") || "{}")
    if (fromLocStor[keyValue]) {
        return Number.parseInt(fromLocStor[keyValue])
    } else {
        return defaultValue
    }
}; //фяк принимает строку с названием ключа объекта и возвращает либо значение из локалСторедж, или если его нет то 0/

function App() {
    let [valueCounter, setValueCounter] = useState<number>(0); //usestate для значения счетчика
    let [maxValue, setMaxValue] = useState<number>(initialState("maxValue", 0))  // usestate для максимального значения
    let [startValue, setStartValue] = useState<number>(initialState("startValue", 0))  // usestate для стартового значения
    let [buttonSetDisableStatus, setButtonSetDisableStatus] = useState<boolean>(false) // // usestate для отображения кнопки сет
    const maxValueError = (maxValue <= startValue) || (maxValue < 0) // условие для ошибки для поля с макс значением
    const startValueError = (maxValue <= startValue) || (startValue < 0) // условие для ошибки для поля со стартовым значением
    const setButtonDisableStatus = (maxValue < startValue) || (maxValue < 0) || (startValue < 0)// условия при которых кнопка сет должна гаснуть, если какое то сработает то возвращают false, вставляется в пропсы кнопки сет и перерисовывает при каждом изменении инпутов
    const addOneValueCounter = () => {
        if (valueCounter < maxValue) {
            setValueCounter(valueCounter + 1);
        }
    }; // обработчик кнопки адд
    const resetValueCounter = () => {
        setValueCounter(startValue)
    }; // обработчик ресета
    const onClickSetButton = () => {
        setValueCounter(startValue); // устанавливаем значение в дисплей
        setButtonSetDisableStatus(true) // делаем кнопку после нажатия неактивной, потом активность возвращаем при изменении инпутов
        const locStora = {
            maxValue: String(maxValue),
            startValue: String(startValue),
        } // объект со старт. макс. и текущим значением

        localStorage.setItem("localStorageValues", JSON.stringify(locStora))
    }; // обработчик нажатия на set
    const onChangeForMaxValue = (i: number) => {
        setMaxValue(i)
        setButtonSetDisableStatus(false) // возвращаем активность кнопки сет
    }; //обработчик изменения макс инпута
    const onChangeForStartValue = (i: number) => {
        setStartValue(i)
        setButtonSetDisableStatus(false) // возвращаем активность кнопки сет
    }; // обработчик изменения старт инпута
    const displayValue = (valueCounter: number) => {
        if (!buttonSetDisableStatus) {
            return "Введите значения и нажмите SET"
        }
        if (isNaN(valueCounter)) {
            return "Введите корректное значение"
        }
        if (maxValueError || startValueError) {
            return "Введите корректное значение"
        }
        return valueCounter
    } // фция возвращает или значение счетчика или текст ошибки
    // в пропс кнопки сета передаю отдельно два условия для дизейбла: setButtonDisableStatus реагирует на изменения инпутов и блокирует кнопку при запрещенных условиях, разблокирует если запрещенные условия выполняются, а buttonSetDisableStatus берется из юсстейта и блокирует кнопку при первом нажатии, а разблокирует при изменении инпутов
    // надо их как то объединитьs

    return (
        <div className="App">
            <AppBar position="static">
                <Toolbar>
                    <SimpleMenu/>
                    <Typography variant="h6">
                        Counter
                    </Typography>
                </Toolbar>
            </AppBar>
            <Grid style={{height: "90vh"}} container={true} direction="row" alignItems="center" justify="space-evenly">
                <Grid item>
                <DisplayWithInputs
                    startValue={startValue}
                    maxValue={maxValue}
                    maxValueError={maxValueError}
                    startValueError={startValueError}
                    disabledStatusForSetBtn={setButtonDisableStatus || buttonSetDisableStatus}
                    actionOnClickForSetBtn={onClickSetButton}
                    onChangeForMaxValue={onChangeForMaxValue}
                    onChangeForStartValue={onChangeForStartValue}
                />
                </Grid>
                <Grid item>
                <Display maxValue={maxValue}
                         startValue={startValue}
                         valueCounter={valueCounter}
                         value={displayValue(valueCounter)}
                         OnClickForAddBtn={addOneValueCounter}
                         OnClickForResetBtn={resetValueCounter}/>
                </Grid>
            </Grid>

        </div>
    );
}

export default App;
