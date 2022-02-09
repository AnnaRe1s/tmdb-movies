import styled from "styled-components";
import { whiteColor, backgroundColor } from "./Colors";

// Background

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${backgroundColor};
  color: ${whiteColor};
  text-align: center;
  padding: 15px;

  @media screen and (min-width: 600px) {
    padding: 10px 80px;
  }
`;

// Flex

export const Flexwrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;

  @media screen and (min-width: 600px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 600px) {
    align-items: center;
  }
`;
