export enum CALCULATOR_STATE {
  KEY = "KEY",
  ACTION = "ACTION",
}

export enum OPERATION_STATE {
  ADD = "ADD",
  SUBTRACT = "SUBTRACT",
  MULTIPLY = "MULTIPLY",
  DIVIDE = "DIVIDE",
  SIGN = "SIGN",
  SQUARE = "SQUARE",
  SQAREROOT = "SQUAREROOT",
}

export interface CalculatorState {
  currentValue: number;
  previousValue: number;
  lastKeyPressType?: CALCULATOR_STATE;
  currentOperationState?: OPERATION_STATE;
}

export enum CALCULATOR_KEYS {
  "KEY_0" = "0",
  "KEY_1" = "1",
  "KEY_2" = "2",
  "KEY_3" = "3",
  "KEY_4" = "4",
  "KEY_5" = "5",
  "KEY_6" = "6",
  "KEY_7" = "7",
  "KEY_8" = "8",
  "KEY_9" = "9",
}

export enum CalculatorActionTypes {
  KEY_PRESSED = "@@QUOLUM/KEY_PRESSED",
  ACTION_PRESSED = "@@AUOLUM/ACTION_PRESSED",
  DO_CLEAR = "@@QUOLUM/DO_CLEAR",
  DO_EQUALS = "@@QUOLUM/DO_EQUALS",
}

export interface KeyPressedActionType {
  type: CalculatorActionTypes.KEY_PRESSED;
  payload: CALCULATOR_KEYS;
}

export interface DoAddActionType {
  type: CalculatorActionTypes.ACTION_PRESSED;
  payload: OPERATION_STATE.ADD;
}

export interface DoSubtractActionType {
  type: CalculatorActionTypes.ACTION_PRESSED;
  payload: OPERATION_STATE.SUBTRACT;
}

export interface DoMultiplyActionType {
  type: CalculatorActionTypes.ACTION_PRESSED;
  payload: OPERATION_STATE.MULTIPLY;
}

export interface DoDivideActionType {
  type: CalculatorActionTypes.ACTION_PRESSED;
  payload: OPERATION_STATE.DIVIDE;
}

export interface DoSignActionType {
  type: CalculatorActionTypes.ACTION_PRESSED;
  payload: OPERATION_STATE.SIGN;
}

export interface DoSquarerootActionType {
  type: CalculatorActionTypes.ACTION_PRESSED;
  payload: OPERATION_STATE.SQAREROOT;
}

export interface DoSquareActionType {
  type: CalculatorActionTypes.ACTION_PRESSED;
  payload: OPERATION_STATE.SQUARE;
}

export interface DoClearActionType {
  type: CalculatorActionTypes.DO_CLEAR;
}

export interface DoEqualsActionType {
  type: CalculatorActionTypes.DO_EQUALS;
}
