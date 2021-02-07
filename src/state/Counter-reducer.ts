import initialStateforValue from '../utils/InitialStateforValue';

export enum ActionTypeName {
  INCREASE_BY_ONE = 'INCREASE_BY_ONE',
  RESET_CURRENT_VALUE = 'RESET_CURRENT_VALUE',
  CHANGE_MAX_VALUE = 'CHANGE_MAX_VALUE',
  CHANGE_START_VALUE = 'CHANGE_START_VALUE',
  CLICK_SET_BUTTON = 'CLICK_SET_BUTTON',
}

export type InitialStateType = {
  currentValue: number;
  maxValue: number;
  startValue: number;
  setButtonDisableStatus: boolean;
  displayStatusForOneDisplay: boolean;
};

type IncreaseByOneActionType = {
  type: ActionTypeName.INCREASE_BY_ONE;
};
type ResetCurrentValueActionType = {
  type: ActionTypeName.RESET_CURRENT_VALUE;
};
type ChangeMaxValueActionType = {
  type: ActionTypeName.CHANGE_MAX_VALUE;
  maxValue: number;
};
type ChangeStartValueActionType = {
  type: ActionTypeName.CHANGE_START_VALUE;
  startValue: number;
};
type ClickSetButtonActionType = {
  type: ActionTypeName.CLICK_SET_BUTTON;
};
type ActionType =
  | IncreaseByOneActionType
  | ResetCurrentValueActionType
  | ChangeMaxValueActionType
  | ChangeStartValueActionType
  | ClickSetButtonActionType;

const initialState: InitialStateType = {
  currentValue: 0,
  maxValue: initialStateforValue('maxValue', 0),
  startValue: initialStateforValue('startValue', 0),
  setButtonDisableStatus: false,
  displayStatusForOneDisplay: true,
};

export const counterReducer = (
  state: InitialStateType = initialState,
  action: ActionType
): InitialStateType => {
  switch (action.type) {
    case ActionTypeName.INCREASE_BY_ONE:
      if (state.currentValue < state.maxValue) {
        return { ...state, currentValue: state.currentValue + 1 };
      }
      return state;
    case ActionTypeName.RESET_CURRENT_VALUE:
      return { ...state, currentValue: state.startValue };
    case ActionTypeName.CHANGE_MAX_VALUE:
      return {
        ...state,
        maxValue: action.maxValue,
        setButtonDisableStatus: false,
      };
    case ActionTypeName.CHANGE_START_VALUE:
      return {
        ...state,
        startValue: action.startValue,
        setButtonDisableStatus: false,
      };
    case ActionTypeName.CLICK_SET_BUTTON: {
      const objForLocalStorage = {
        maxValue: String(state.maxValue),
        startValue: String(state.startValue),
      };
      localStorage.setItem(
        'localStorageValues',
        JSON.stringify(objForLocalStorage)
      );
      return {
        ...state,
        currentValue: state.startValue,
        setButtonDisableStatus: true,
        displayStatusForOneDisplay: !state.displayStatusForOneDisplay,
      };
    }
    default:
      return state;
  }
};

export const increaseByOneAC = (): IncreaseByOneActionType => ({
  type: ActionTypeName.INCREASE_BY_ONE,
});
export const resetCurrentValueAC = (): ResetCurrentValueActionType => ({
  type: ActionTypeName.RESET_CURRENT_VALUE,
});
export const changeMaxValueAC = (
  maxValue: number
): ChangeMaxValueActionType => ({
  type: ActionTypeName.CHANGE_MAX_VALUE,
  maxValue,
});
export const changeStartValueAC = (
  startValue: number
): ChangeStartValueActionType => ({
  type: ActionTypeName.CHANGE_START_VALUE,
  startValue,
});
export const clickSetButtonAC = (): ClickSetButtonActionType => ({
  type: ActionTypeName.CLICK_SET_BUTTON,
});
