import styled from "styled-components";

export const Label = styled.label`
  position: relative;
  display: inline-block;
  width: 3.75rem;
  height: 2.125rem;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  input:checked + span {
    background-color: ${(props) => props.theme.background};
    border: 1px solid #fff;
  }

  input:focus + span {
    box-shadow: 0 0 1px #2196f3;
  }

  input:not(:checked) + span:before {
    padding: 0 5px;
    content: "🌜";
  }
  input:checked + span:before {
    padding: 0 5px;
    content: "🌞";
    transform: translateX(26px);
  }
`;

export const Input = styled.input``;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 34px;

  ::before {
    border-radius: 50%;
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
  }
`;

// export const SliderChecked = styled.input {
//   input:checked + .slider {
//     background-color: #2196F3;
//   }
// }
