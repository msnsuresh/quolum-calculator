import * as React from "react";
import { useSelector } from "react-redux";
import { getDisplayText } from "../../store/Calculator/Calculator.selectors";
import { DisplayWrapper } from "./Display.styled";

const Display: React.FC = (): React.ReactElement => {
  const displayText = useSelector(getDisplayText);
  return <DisplayWrapper>{displayText}</DisplayWrapper>;
};

export default Display;
