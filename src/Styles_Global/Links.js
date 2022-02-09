import styled from "styled-components";
import { shadowColor, blackColor} from "./Colors";

export const Links = styled.a`
  box-shadow: 3px 3px 3px ${shadowColor};
  border-radius: 5px;
  padding: 5px;
  margin: 5px;
  display: flex;
  flex-direction: column;
  width: 140px;
  height: 215px;
  textdecoration: none;
  fontsize: 10px;
  color: ${blackColor};

  @media screen and (min-width: 600px) {
    margin: 18px;
    width: 160px;
    height: 215px;
  }
`;
