import React, {useState} from 'react';
import './App.css';
import Button from "./Components/button/button";
import Display from "./Components/display/display";
import Input from "./Components/Input/Input";

function App() {
    let [valueCounter, setValueCounter] = useState<number>(0); //usestate для значения счетчика
    let [maxValue, setMaxValue] = useState<number | "">("")  // usestate для максимального значения
    let [startValue, setStartValue] = useState<number | "">("")  // usestate для стартового значения
    const addButtonStatus = valueCounter >= maxValue;
    const resetButtonStatus = valueCounter <= startValue;
    const setButtonDisableStatus = !((maxValue !== "") && (startValue !== ""))

    const addOneValueCounter = () => {
        if (valueCounter < maxValue) {
            setValueCounter(valueCounter + 1);
        }
        ;
    };
    const resetValueCounter = () => {
        setValueCounter(startValue as number)
    };
    const onChangeForMaxValue = (i: number) => {
        console.log(i)
        setMaxValue(i)
    };
    const onChangeForStartValue = (i: number) => {
            setStartValue(i)
    };
    const onClickSetButton = () => { // обработчик нажатия на set
        setValueCounter(startValue as number);

    };


    return (
        <div className="App">
            <div className="App-left">
                <div className="display">
                    <Input onChange={onChangeForMaxValue} value={maxValue} textValue="Max value:"/>
                    <Input onChange={onChangeForStartValue} value={startValue} textValue="Start value:"/>
                </div>
                <div className="buttons">
                    <Button name="Set" disabledStatus={setButtonDisableStatus} actionOnClick={onClickSetButton}/>
                </div>
            </div>
            <div className="App-right">
                <div className="display">
                    <Display maxValue={maxValue as number} value={valueCounter}/>
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
