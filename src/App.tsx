import React, {useState} from 'react';
import './App.css';
import Button from "./Components/button/button";
import Display from "./Components/display/display";

function App() {
    let [valueCounter, setValueCounter] = useState<number>(0);
    const addButtonStatus = valueCounter >= 5;
    const resetButtonStatus = valueCounter === 0;

    const addOneValueCounter = () => {
        if (valueCounter < 5) {
            setValueCounter(valueCounter + 1);
        };
    };
    const resetValueCounter = () => {
        setValueCounter(0)
    };

    return (
        <div className="App">
            <div className="App-header">
                <div className="display">
                    <Display value={valueCounter}/>
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
