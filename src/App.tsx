import React, {useState} from 'react';
import './App.css';
import Button from "./Components/button/button";
import Display from "./Components/display/display";
import Input from "./Components/Input/Input";

function App() {
    const initialStateForMax = () => {
        if (localStorage.getItem("maxValue")) {return Number.parseInt(localStorage.getItem("maxValue") as string)
        } else {
            return 0
        }
    }; //фяк возвращает либо значение из локалСторедж, или если его нет то 0
    const initialStateForStart = () => {
        if (localStorage.getItem("startValue")) {return Number.parseInt(localStorage.getItem("startValue") as string)
        } else {
            return 0
        }
    }; // фяк возвращает либо значение из локалСторедж, или если его нет то 0
    let [valueCounter, setValueCounter] = useState<number>(0); //usestate для значения счетчика
    let [maxValue, setMaxValue] = useState<number>(initialStateForMax())  // usestate для максимального значения
    let [startValue, setStartValue] = useState<number>(initialStateForStart())  // usestate для стартового значения
    let [buttonSetDisableStatus, setButtonSetDisableStatus] = useState<boolean>(false) // // usestate для отображения кнопки сет
    const addButtonStatus = valueCounter >= maxValue; // дисейбл для кнопки адд
    const resetButtonStatus = valueCounter <= startValue; // дисейбл для кн ресет
    const maxValueError = (maxValue < startValue) || (maxValue < 0) // условие для ошибки для поля с макс значением
    const startValueError = (maxValue < startValue) || (startValue < 0) // условие для ошибки для поля со стартовым значением
    const setButtonDisableStatus = (maxValue < startValue) || (maxValue < 0) || (startValue < 0) // условия при которых кнопка сет должна гаснуть, если какое то сработает то возвращают false, вставляется в пропсы кнопки сет и перерисовывает при каждом изменении инпутов
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
        localStorage.setItem("maxValue", String(maxValue))
        localStorage.setItem("startValue", String(startValue))
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
        if (maxValueError) {
            return "Введите корректные значения"
        }
        return valueCounter
    } // фция возвращает или значение счетчика или текст ошибки
    // в пропс кнопки сета передаю отдельно два условия для дизейбла: setButtonDisableStatus реагирует на изменения инпутов и блокирует кнопку при запрещенных условиях, разблокирует если запрещенные условия выполняются, а buttonSetDisableStatus берется из юсстейта и блокирует кнопку при первом нажатии, а разблокирует при изменении инпутов
    // надо их как то объединить но пока не знаю как, знаю что говнокод но пока работает
    return (
        <div className="App">
            <div className="App-left">
                <div className="display">
                    <Input errorStatus={maxValueError} onChange={onChangeForMaxValue} value={maxValue}
                           textValue="Max value:"/>
                    <Input errorStatus={startValueError} onChange={onChangeForStartValue} value={startValue}
                           textValue="Start value:"/>
                </div>
                <div className="buttons">
                    <Button name="Set" disabledStatus={setButtonDisableStatus || buttonSetDisableStatus} actionOnClick={onClickSetButton}/>
                </div>
            </div>
            <div className="App-right">
                <div className="display">
                    <Display maxValue={maxValue} value={displayValue(valueCounter)}/>
                </div>
                <div className="buttons">
                    <Button name="Add" disabledStatus={addButtonStatus} actionOnClick={addOneValueCounter}/>
                    <Button name="Reset" disabledStatus={resetButtonStatus} actionOnClick={resetValueCounter}/>
                </div>
            </div>
        </div>
    );
};

export default App;
