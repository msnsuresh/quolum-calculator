import { action } from "typesafe-actions";
import {
  CalculatorActionTypes,
  CALCULATOR_KEYS,
  DoAddActionType,
  DoClearActionType,
  DoDivideActionType,
  DoEqualsActionType,
  DoMultiplyActionType,
  DoSignActionType,
  DoSquareActionType,
  DoSquarerootActionType,
  DoSubtractActionType,
  KeyPressedActionType,
  OPERATION_STATE,
} from "./Calculator.types";

export const keyPressed = (key: CALCULATOR_KEYS): KeyPressedActionType =>
  action(CalculatorActionTypes.KEY_PRESSED, key);

export const doAdd = (): DoAddActionType =>
  action(CalculatorActionTypes.ACTION_PRESSED, OPERATION_STATE.ADD);

export const doSubtract = (): DoSubtractActionType =>
  action(CalculatorActionTypes.ACTION_PRESSED, OPERATION_STATE.SUBTRACT);

export const doMultiply = (): DoMultiplyActionType =>
  action(CalculatorActionTypes.ACTION_PRESSED, OPERATION_STATE.MULTIPLY);

export const doDivide = (): DoDivideActionType =>
  action(CalculatorActionTypes.ACTION_PRESSED, OPERATION_STATE.DIVIDE);

export const doSign = (): DoSignActionType =>
  action(CalculatorActionTypes.ACTION_PRESSED, OPERATION_STATE.SIGN);

export const doSquare = (): DoSquareActionType =>
  action(CalculatorActionTypes.ACTION_PRESSED, OPERATION_STATE.SQUARE);

export const doSquareroot = (): DoSquarerootActionType =>
  action(CalculatorActionTypes.ACTION_PRESSED, OPERATION_STATE.SQAREROOT);

export const doEquals = (): DoEqualsActionType =>
  action(CalculatorActionTypes.DO_EQUALS);

export const doClear = (): DoClearActionType =>
  action(CalculatorActionTypes.DO_CLEAR);
