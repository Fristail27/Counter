import React, {useState} from 'react';
import './App.css';
import Button from "./Components/button/button";
import Display from "./Components/display/display";
import Input from "./Components/Input/Input";
import s from "./Components/Input/Input.module.css";

function App() {
    let [valueCounter, setValueCounter] = useState<number>(0); //usestate для значения счетчика
    let [maxValue, setMaxValue] = useState<number>(0)  // usestate для максимального значения
    let [startValue, setStartValue] = useState<number>(0)  // usestate для стартового значения
    const addButtonStatus = valueCounter >= maxValue;
    const resetButtonStatus = valueCounter <= startValue;
    const maxValueError = (maxValue < startValue) || (maxValue < 0)
    const startValueError = (maxValue < startValue) || (startValue < 0)
    const setButtonDisableStatus = (maxValue < startValue) || (maxValue < 0) || (startValue < 0 || (maxValue === startValue) )

    const addOneValueCounter = () => {
        if (valueCounter < maxValue) {
            setValueCounter(valueCounter + 1);
        }
    };
    const resetValueCounter = () => {
        setValueCounter(startValue)
    };
    const onChangeForMaxValue = (i: number) => {
        setMaxValue(i)
    };
    const onChangeForStartValue = (i: number) => {
            setStartValue(i)
    };
    const onClickSetButton = () => { // обработчик нажатия на set
        setValueCounter(startValue);
    };
    const displayValue = (valueCounter:number) => {
        if(maxValueError) {
            return "Введите корректные значения"
        }
        return valueCounter
    } // фция возвращает или значение счетчика или текст ошибки


    return (
        <div className="App">
            <div className="App-left">
                <div className="display">
                    <Input errorStatus={maxValueError} onChange={onChangeForMaxValue} value={maxValue} textValue="Max value:"/>
                    <Input errorStatus={startValueError} onChange={onChangeForStartValue} value={startValue} textValue="Start value:"/>
                </div>
                <div className="buttons">
                    <Button name="Set" disabledStatus={setButtonDisableStatus} actionOnClick={onClickSetButton}/>
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
