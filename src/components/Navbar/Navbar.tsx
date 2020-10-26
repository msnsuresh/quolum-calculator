import * as React from "react";
import Toggle from "../Toggle/Toggle";
import { NavbarWrapper } from "./Navbar.styled";

interface NavbarProps {
  isLightTheme: boolean;
  onToggle: () => void;
}

const Navbar: React.FC<NavbarProps> = (
  props: NavbarProps
): React.ReactElement => {
  return (
    <NavbarWrapper>
      <nav
        className={`navbar justify-content-between ${
          props.isLightTheme ? "navbar-dark bg-dark" : "navbar-light bg-light"
        }`}
      >
        <a className="navbar-brand" href="#">
          Quolum Calculator
        </a>
        <Toggle checked={props.isLightTheme} onClick={props.onToggle} />
      </nav>
    </NavbarWrapper>
  );
};

export default Navbar;
