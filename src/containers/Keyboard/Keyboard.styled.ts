import styled from "styled-components";

export const KeyboardWrapper = styled.div`
  .row {
    .col:last-child {
      button {
        border-right: none;
      }
    }
    button {
      border-left: none;
    }
  }
  .row:not(:first-child) {
    button {
      border-top: none;
    }
  }
  .row:last-child {
    .col:first-child > button {
      border-bottom-left-radius: 3px;
    }
    .col:last-child > button {
      border-bottom-right-radius: 3px;
    }
    button {
      border-bottom: none;
    }
  }
`;
