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
  border-radius: 10px;
  border: none;
  height: 60px;
  font-size: 1em;
  background-color: #f2f2f2;
  margin: 20px 0 0 0;
`;

export const Description = styled.p`
  font-weight: 100;
  margin: 10px 0;
`;
