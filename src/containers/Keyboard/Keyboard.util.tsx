import * as React from "react";
import {
  keyPressed,
  doAdd,
  doClear,
  doSubtract,
  doMultiply,
  doDivide,
  doEquals,
  doSign,
  doSquare,
  doSquareroot,
} from "../../store/Calculator/Calculator.actions";
import { CALCULATOR_KEYS } from "../../store/Calculator/Calculator.types";
import { Dispatch } from "redux";

export interface ButtonType {
  type: "number" | "action";
  action: string;
  displayText: React.ReactNode;
}

export const BASIC_KEYS: ButtonType[][] = [
  [
    {
      type: "number",
      action: "1",
      displayText: "1",
    },
    {
      type: "number",
      action: "2",
      displayText: "2",
    },
    {
      type: "number",
      action: "3",
      displayText: "3",
    },
    {
      type: "action",
      action: "add",
      displayText: "Add (+)",
    },
  ],
  [
    {
      type: "number",
      action: "4",
      displayText: "4",
    },
    {
      type: "number",
      action: "5",
      displayText: "5",
    },
    {
      type: "number",
      action: "6",
      displayText: "6",
    },
    {
      type: "action",
      action: "subtract",
      displayText: "Subtract (-)",
    },
  ],
  [
    {
      type: "number",
      action: "7",
      displayText: "7",
    },
    {
      type: "number",
      action: "8",
      displayText: "8",
    },
    {
      type: "number",
      action: "9",
      displayText: "9",
    },
    {
      type: "action",
      action: "multiply",
      displayText: "Multiply (*)",
    },
  ],
  [
    {
      type: "action",
      action: "clear",
      displayText: "Clear",
    },
    {
      type: "number",
      action: "0",
      displayText: "0",
    },
    {
      type: "action",
      action: "equal",
      displayText: "=",
    },
    {
      type: "action",
      action: "divide",
      displayText: "Divide (/)",
    },
  ],
];

export const SCIENTIFIC_KEYS: ButtonType[] = [
  {
    type: "action",
    action: "sign",
    displayText: "+/-",
  },
  {
    type: "action",
    action: "square",
    displayText: (
      <>
        x<sup>2</sup>
      </>
    ),
  },
  {
    type: "action",
    action: "sqareroot",
    displayText: <>&#8730;(x)</>,
  },
];

export const KEY_MAPPER: { [x: number]: CALCULATOR_KEYS } = {
  0: CALCULATOR_KEYS.KEY_0,
  1: CALCULATOR_KEYS.KEY_1,
  2: CALCULATOR_KEYS.KEY_2,
  3: CALCULATOR_KEYS.KEY_3,
  4: CALCULATOR_KEYS.KEY_4,
  5: CALCULATOR_KEYS.KEY_5,
  6: CALCULATOR_KEYS.KEY_6,
  7: CALCULATOR_KEYS.KEY_7,
  8: CALCULATOR_KEYS.KEY_8,
  9: CALCULATOR_KEYS.KEY_9,
};

export const handleActionKey = (key: ButtonType, dispatch: Dispatch) => {
  switch (key.action) {
    case "add": {
      dispatch(doAdd());
      return;
    }
    case "subtract": {
      dispatch(doSubtract());
      return;
    }
    case "multiply": {
      dispatch(doMultiply());
      return;
    }
    case "divide": {
      dispatch(doDivide());
      return;
    }
    case "equal": {
      dispatch(doEquals());
      return;
    }
    case "clear": {
      dispatch(doClear());
      return;
    }
    case "sign": {
      dispatch(doSign());
      return;
    }
    case "square": {
      dispatch(doSquare());
      return;
    }
    case "sqareroot": {
      dispatch(doSquareroot());
      return;
    }
  }
};

export const handleKeyPress = (key: ButtonType, dispatch: Dispatch) => {
  if (key.type === "number") {
    dispatch(keyPressed(KEY_MAPPER[key.displayText as number]));
  } else {
    handleActionKey(key, dispatch);
  }
};
