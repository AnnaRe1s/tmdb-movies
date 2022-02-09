import styled from "styled-components";
import { whiteColor, backgroundColor, shadowColor } from "./Colors";

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

export const BackgroundDetails = styled.div`
  background-color: ${backgroundColor};
  color: ${whiteColor};
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 600px) {
    display: flex;
    flex-direction: row;
    height: 400px;
  }
`;

// Cards

export const Cards = styled.div`
  margin: 20px 5px;
  padding: 5px;
  box-shadow: 2px 2px 3px ${shadowColor};
  border-radius: 10px;
  @media screen and (min-width: 600px) {
    margin: 5px;
    padding: 5px;
    box-shadow: 2px 2px 3px ${shadowColor};
    border-radius: 10px;
  }
`;

export const InformationCard = styled.div`
  padding: 15px;

  @media screen and (min-width: 600px) {
    position: relative;
    top: 33px;
    left: 23%;
    padding: 0px;
    width: 50%;
  }
`;

export const ReccomendCard = styled.div`

box-shadow: 3px 3px 3px rgba(150, 150, 150, 0.692);
  border-radius: 5px;
  width: 140px;
  padding: 5px;
  margin: 5px;
}
@media screen and (min-width: 600px) {
  box-shadow: 3px 3px 3px rgba(150, 150, 150, 0.692);
    border-radius: 5px;
    width: 240px;
    height: 200px;
    padding: 10px;
    margin: 10px;
}

`;

export const SinopseDetails = styled.div`
  padding: 15px 0;

  @media screen and (min-width: 600px) {
    padding: 10px 0;
    position: relative;
    top: 5%;
    
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
    align-items: ${(props) => (props.center ? "center" : "left")};
    padding: 10px;
  }
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;

// Margin

export const Castdiv = styled.div`
  margin: 10px;

  @media screen and (min-width: 600px) {
    margin-top: 118px;
  }
`;

// Scroll horizontal

export const HorizontalCards = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;

  @media screen and (min-width: 600px) {
    display: flex;
    flex-direction: row;
    width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
  }
`;
