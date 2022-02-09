import styled from "styled-components";
import { whiteColor, blackColor, sinopColor } from "./Colors";

export const H1 = styled.h1`
  font-size: 24px;

  padding-bottom: 10px;
  display: inline;

  @media screen and (min-width: 600px) {
    font-size: 48px;
    margin: 35px;
    text-align: center;
    color: ${whiteColor};
  }
`;

export const H1b = styled.h1`
  font-size: 24px;
  color: ${blackColor};
  padding-left: 5px;
  @media screen and (min-width: 600px) {
    font-size: 48px;
    margin-top: 5px;
  }
`;

export const H2 = styled.h2`
  font-size: 14px;

  @media screen and (min-width: 600px) {
    font-size: 18px;
  }
`;

export const H3 = styled.h3`
  font-size: 14px;
  color: ${blackColor};

  margin-top: 15px;
  @media screen and (min-width: 600px) {
    font-size: 16px;
  }
`;

export const H4 = styled.h4`
  padding-bottom: 15px;
`;

export const H4Ligth = styled.h4`
  font-size: 14px;
  font-weight: 300;
  @media screen and (min-width: 600px) {
    font-size: 16px;
  }
`;

export const H5 = styled.h5`
  font-weight: 300;
`;

export const P = styled.p`
  font-size: 14px;
  @media screen and (min-width: 600px) {
    font-size: 16px;
  } ;
`;


export const PLight = styled.p`
  font-size: 14px;
  color: ${sinopColor};
  font-weight: 300;
  @media screen and (min-width: 600px) {
    font-size: 16px;
  } ;
`;
