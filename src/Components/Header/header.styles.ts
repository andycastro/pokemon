import styled from "styled-components";

import { DebounceInput } from "react-debounce-input";

export const Title = styled.h1`
  font-weight: 900;
  letter-spacing: -2px;
`;

export const InputCustom = styled(DebounceInput)`
  padding: 10px 20px;
  outline: none;
  min-width: 240px;
  width: 100%;
  box-sizing: border-box;
  border-radius: 5px;
  border: none;
  height: 40px;
  font-size: 1em;
  background-color: #f2f2f2;
`;
