import * as React from "react";
import { ButtonWrapper } from "./Button.styled";

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  className?: string;
}

const Button: React.FC<ButtonProps> = (
  props: ButtonProps
): React.ReactElement => {
  return (
    <ButtonWrapper className={props.className} onClick={props.onClick}>
      {props.children}
    </ButtonWrapper>
  );
};

export default Button;
