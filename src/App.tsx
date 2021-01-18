import React from 'react';
import {HashRouter, Redirect, Route, Switch} from 'react-router-dom';
import {AppBar, Toolbar, Typography} from "@material-ui/core";
import SimpleMenu from "./Components/Common/Menu/menu";
import './App.css';
import Error404 from "./Components/Pages/Error404";
import TwoDisplays from "./Components/Pages/TwoDisplays/TwoDisplays";
import OneDisplay from "./Components/Pages/OneDisplay/OneDisplay";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/Store";
import {
    changeMaxValueAC,
    changeStartValueAC, clickSetButtonAC,
    increaseByOneAC,
    InitialStateType,
    resetCurrentValueAC
} from "./state/Counter-reducer";


function App() {
    const values = useSelector<AppRootStateType, InitialStateType> (state => state.values)
    const dispatch = useDispatch()

    const maxValueError = (values.maxValue <= values.startValue) || (values.maxValue < 0) // условие для ошибки для поля с макс значением
    const startValueError = (values.maxValue <= values.startValue) || (values.startValue < 0) // условие для ошибки для поля со стартовым значением
    const setButtonDisableStatus = (values.maxValue < values.startValue) || (values.maxValue < 0) || (values.startValue < 0) || values.maxValue === values.startValue// условия при которых кнопка сет должна гаснуть, если какое то сработает то возвращают false, вставляется в пропсы кнопки сет и перерисовывает при каждом изменении инпутов
    const addOneValueCounter = () => {
        dispatch(increaseByOneAC())
    }; // обработчик кнопки адд
    const resetValueCounter = () => {
        dispatch(resetCurrentValueAC())
    }; // обработчик ресета
    const onChangeForMaxValue = (i: number) => {
        dispatch(changeMaxValueAC(i))
    }; //обработчик изменения макс инпута
    const onChangeForStartValue = (i: number) => {
        dispatch(changeStartValueAC(i))
    }; // обработчик изменения старт инпута
    const onClickSetButtonHandler = () => {
        dispatch(clickSetButtonAC())
    } //обработчик нажатия на SET

    const displayValue = (valueCounter: number) => {
        if (!values.setButtonDisableStatus) {
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
    // надо их как то объединить


    return (
        <div className="App">
            <HashRouter>
                <AppBar position="static">
                    <Toolbar>
                        <SimpleMenu/>
                        <Typography variant="h6">
                            Counter
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Switch>
                    <Route path={"/"} exact render={() => <Redirect to={"/TwoDisplays"}/>}/>
                    <Route path={"/TwoDisplays"} render={() => <TwoDisplays
                        startValue={values.startValue}
                        maxValue={values.maxValue}
                        valueCounter={values.currentValue}
                        value={displayValue(values.currentValue)}
                        maxValueError={maxValueError}
                        startValueError={startValueError}
                        disabledStatusForSetBtn={setButtonDisableStatus || values.setButtonDisableStatus}
                        onClickSet={onClickSetButtonHandler}
                        onChangeForMaxValue={onChangeForMaxValue}
                        onChangeForStartValue={onChangeForStartValue}
                        OnClickForAddBtn={addOneValueCounter}
                        OnClickForResetBtn={resetValueCounter}/>}/>
                    <Route path={"/OneDisplay"} render={() => <OneDisplay
                        startValue={values.startValue}
                        maxValue={values.maxValue}
                        valueCounter={values.currentValue}
                        value={displayValue(values.currentValue)}
                        displayStatus={values.displayStatusForOneDisplay}
                        maxValueError={maxValueError}
                        startValueError={startValueError}
                        disabledStatusForSetBtn={setButtonDisableStatus}
                        onClickSet={onClickSetButtonHandler}
                        onChangeForMaxValue={onChangeForMaxValue}
                        onChangeForStartValue={onChangeForStartValue}
                        OnClickForAddBtn={addOneValueCounter}
                        OnClickForResetBtn={resetValueCounter}/>}/>
                    <Route render={() => <Error404/>}/>
                </Switch>
            </HashRouter>
        </div>
    );
}

export default App;
