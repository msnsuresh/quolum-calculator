import { Reducer } from "redux";
import {
  getCurrentValue,
  getCurrentValueForAction,
  getPreviousValue,
  getPreviousValueForAction,
} from "./Calculator.selectors";
import {
  CalculatorActionTypes,
  CalculatorState,
  CALCULATOR_STATE,
} from "./Calculator.types";

const initialState: CalculatorState = {
  currentValue: 0,
  previousValue: 0,
};

const reducer: Reducer<CalculatorState> = (
  state: CalculatorState = initialState,
  action
) => {
  switch (action.type) {
    case CalculatorActionTypes.KEY_PRESSED: {
      return {
        ...state,
        lastKeyPressType: CALCULATOR_STATE.KEY,
        previousValue: getPreviousValue(state, action.payload),
        currentValue: getCurrentValue(state, action.payload),
      };
    }

    case CalculatorActionTypes.ACTION_PRESSED: {
      return {
        ...state,
        lastKeyPressType: CALCULATOR_STATE.ACTION,
        currentOperationState: action.payload,
        previousValue: getPreviousValueForAction(state, action.payload),
        currentValue: getCurrentValueForAction(state, action.payload),
      };
    }

    case CalculatorActionTypes.DO_EQUALS: {
      return {
        ...state,
        currentValue: getCurrentValueForAction(state),
        previousValue: 0,
        lastKeyPressType: undefined,
        currentOperationState: undefined,
      };
    }

    case CalculatorActionTypes.DO_CLEAR: {
      return {
        ...initialState,
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
};

export { reducer as CalculatorReducer };
