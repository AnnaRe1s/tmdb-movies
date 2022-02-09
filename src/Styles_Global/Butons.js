import styled from "styled-components";

import { whiteColor, yellowColor, blackColor } from "./Colors";

export const ButtonFilter = styled.button`
  font-size: 14px;
  font-weight: 500;
  background-color: ${(props) => (props.clicked ? yellowColor : whiteColor)};
  color: ${(props) => (props.clicked ? whiteColor : blackColor)};
  padding: 5px;
  border-radius: 5px;
  border: none;
  margin: 5px;

  @media screen and (min-width: 600px) {
    font-size: 16px;
    font-weight: 500;
    padding: 5px 15px;
  }
`;
