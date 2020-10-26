import styled from "styled-components";

export const ButtonWrapper = styled.button`
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  border: 1px solid #b3b3b3;
  width: 100%;
  height: 100%;
  padding: 0.5rem;
  user-select: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out;

  :hover {
    background: ${(props) => props.theme.backgroundHover};
    color: ${(props) => props.theme.colorHover};
  }
  :focus {
    outline: none;
  }
`;
