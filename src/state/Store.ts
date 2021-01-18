import {combineReducers, createStore} from "redux";
import {counterReducer} from "./Counter-reducer";


const rootReducer = combineReducers({
    values: counterReducer,
})

export const store = createStore(rootReducer);


export type AppRootStateType = ReturnType<typeof rootReducer>