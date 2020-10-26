import { combineReducers } from "redux";
import { CalculatorReducer } from "./Calculator/Calculator.reducers";

export default combineReducers({
  calculator: CalculatorReducer,
});
