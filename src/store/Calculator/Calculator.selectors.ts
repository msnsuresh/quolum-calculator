import { ApplicationState } from "../store";
import {
  CALCULATOR_KEYS,
  CALCULATOR_STATE,
  CalculatorState,
  OPERATION_STATE,
} from "./Calculator.types";

export const getCalculatorState = (state: ApplicationState) => state.calculator;

export const getDisplayText = (state: ApplicationState): number => {
  return getCalculatorState(state).currentValue;
};

export const getCurrentValue = (
  calculatorState: CalculatorState,
  key: CALCULATOR_KEYS
) => {
  if (
    (calculatorState.lastKeyPressType &&
      calculatorState.lastKeyPressType === CALCULATOR_STATE.ACTION) ||
    (calculatorState.lastKeyPressType === undefined &&
      calculatorState.currentOperationState === undefined)
  )
    return +key.toString();

  if (calculatorState.currentValue === 0 && key === CALCULATOR_KEYS.KEY_0)
    return calculatorState.currentValue;

  return +(calculatorState.currentValue.toString() + key.toString());
};

export const getPreviousValue = (
  calculatorState: CalculatorState,
  key: CALCULATOR_KEYS
) => {
  if (
    calculatorState.lastKeyPressType &&
    calculatorState.lastKeyPressType === CALCULATOR_STATE.ACTION
  )
    return calculatorState.currentValue;

  return calculatorState.previousValue;
};

export const getPreviousValueForAction = (
  calculatorState: CalculatorState,
  currentOperation: OPERATION_STATE
) => {
  if (
    [
      OPERATION_STATE.SIGN,
      OPERATION_STATE.SQAREROOT,
      OPERATION_STATE.SQUARE,
    ].includes(currentOperation)
  ) {
    return 0;
  }

  return calculatorState.currentValue;
};

export const getCurrentValueForAction = (
  calculatorState: CalculatorState,
  currentOperation?: OPERATION_STATE
) => {
  if (calculatorState.currentOperationState) {
    switch (calculatorState.currentOperationState) {
      case OPERATION_STATE.ADD: {
        return calculatorState.previousValue + calculatorState.currentValue;
      }
      case OPERATION_STATE.SUBTRACT: {
        return calculatorState.previousValue - calculatorState.currentValue;
      }
      case OPERATION_STATE.MULTIPLY: {
        return calculatorState.previousValue * calculatorState.currentValue;
      }
      case OPERATION_STATE.DIVIDE: {
        return calculatorState.previousValue / calculatorState.currentValue;
      }
    }
  }
  if (currentOperation) {
    switch (currentOperation) {
      case OPERATION_STATE.SIGN: {
        if (calculatorState.currentValue === 0)
          return calculatorState.currentValue;

        return -calculatorState.currentValue;
      }
      case OPERATION_STATE.SQUARE: {
        if (calculatorState.currentValue === 0)
          return calculatorState.currentValue;

        return Math.pow(calculatorState.currentValue, 2);
      }
      case OPERATION_STATE.SQAREROOT: {
        if (calculatorState.currentValue === 0)
          return calculatorState.currentValue;

        return Math.sqrt(calculatorState.currentValue);
      }
    }
  }

  return calculatorState.currentValue;
};
