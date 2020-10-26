import { createStore, Store } from "redux";
import { CalculatorState } from "./Calculator/Calculator.types";
import rootReducer from "./rootReducer";

export interface ApplicationState {
  calculator: CalculatorState;
}

export default function configureStore(): Store {
  const store = createStore(
    rootReducer,
    {},
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
}
