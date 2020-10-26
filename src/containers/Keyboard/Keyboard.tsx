import * as React from "react";
import { useDispatch } from "react-redux";
import Button from "../../components/Button/Button";
import { KeyboardWrapper } from "./Keyboard.styled";
import {
  BASIC_KEYS,
  handleKeyPress,
  SCIENTIFIC_KEYS,
  ButtonType,
} from "./Keyboard.util";
import { Dispatch } from "redux";

export enum KeyboardMode {
  SCIENTIFIC = "SCIENTIFIC",
  BASIC = "BASIC",
}

export interface KeyboardProps {
  mode: KeyboardMode;
}

const Keyboard: React.FC<KeyboardProps> = (
  props: KeyboardProps
): React.ReactElement => {
  const dispatch = useDispatch();
  const commonKeypressHandler = (item: ButtonType, dispatch: Dispatch) =>
    handleKeyPress(item, dispatch);
  return (
    <KeyboardWrapper className="test">
      {props.mode === KeyboardMode.SCIENTIFIC && (
        <div className="row">
          {SCIENTIFIC_KEYS.map((item, index) => (
            <div
              className={`p-0 ${
                index === SCIENTIFIC_KEYS.length - 1 ? "col" : "col-3"
              }`}
              key={`col-${item.action}-${index}`}
            >
              <Button
                onClick={() => {
                  commonKeypressHandler(item, dispatch);
                }}
              >
                {item.displayText}
              </Button>
            </div>
          ))}
        </div>
      )}
      {BASIC_KEYS.map((row: ButtonType[], index) => (
        <div className="row" key={`row-${row}-${index}`}>
          {row.map((item, index) => {
            return (
              <div className="col-3 p-0" key={`col-${item.type}-${index}`}>
                <Button
                  className={
                    index === row.length - 1 ? "text-right" : undefined
                  }
                  onClick={() => {
                    commonKeypressHandler(item, dispatch);
                  }}
                >
                  {item.displayText}
                </Button>
              </div>
            );
          })}
        </div>
      ))}
    </KeyboardWrapper>
  );
};

export default Keyboard;
