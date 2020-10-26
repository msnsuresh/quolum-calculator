import * as React from "react";
import { Slider, Label, Input } from "./Toggle.styled";

export interface ToggleProps {
  checked: boolean;
  onClick: () => void;
}

const Toggle: React.FC<ToggleProps> = (
  props: ToggleProps
): React.ReactElement => {
  return (
    <Label>
      <Input type="checkbox" checked={props.checked} onClick={props.onClick} />
      <Slider />
    </Label>
  );
};

export default Toggle;
