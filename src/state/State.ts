import initialStateforValue from "../utils/InitialStateforValue";
import {action, makeObservable, observable} from "mobx";

interface IState {
    currentValue: number
    maxValue: number
    startValue: number
    setButtonDisableStatus: boolean
    displayStatusForOneDisplay: boolean
    increaseValue: ()=> void
    resetCurrentValue: ()=> void
    changeMaxValue: (value:number)=> void
    changeStartValue: (value:number)=> void
    clickSetButton: ()=> void
}

class State implements IState{
    currentValue: number = 0
    maxValue: number = initialStateforValue('maxValue', 0)
    startValue: number = initialStateforValue('startValue', 0)
    setButtonDisableStatus: boolean = false
    displayStatusForOneDisplay: boolean = true

    constructor() {
        makeObservable(this, {
            currentValue: observable,
            maxValue: observable,
            startValue: observable,
            setButtonDisableStatus: observable,
            displayStatusForOneDisplay: observable,
            increaseValue: action,
            resetCurrentValue: action,
            changeMaxValue: action,
            changeStartValue: action,
            clickSetButton: action,
        })
    }
    increaseValue () {
        this.currentValue += 1
    }
    resetCurrentValue () {
        this.currentValue = this.startValue
    }
    changeMaxValue (value:number) {
        this.maxValue = value
    }
    changeStartValue (value:number) {
        this.maxValue = value
    }
    clickSetButton () {
        const objForLocalStorage = {
            maxValue: String(this.maxValue),
            startValue: String(this.startValue),
        };
        localStorage.setItem(
            'localStorageValues',
            JSON.stringify(objForLocalStorage)
        );
        this.currentValue = this.startValue
        this.setButtonDisableStatus = true
        this.displayStatusForOneDisplay = !this.displayStatusForOneDisplay
    }
}

export const appState = new State()