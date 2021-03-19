/* eslint-disable */
import initialStateforValue from "../utils/InitialStateforValue";
import {makeAutoObservable} from "mobx";

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
        makeAutoObservable(this)
    }
    increaseValue () {
        this.currentValue += 1
    }
    resetCurrentValue () {
        this.currentValue = this.startValue
    }
    changeMaxValue (value:number) {
        this.maxValue = value
        this.setButtonDisableStatus = false
    }
    changeStartValue (value:number) {
        this.startValue = value
        this.setButtonDisableStatus = false
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