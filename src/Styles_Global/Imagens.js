import styled from "styled-components";

export const Img = styled.img`
  height: 155px;
  width: 135px;
  border-radius: 7px;

  @media screen and (min-width: 600px) {
    height: 155px;
    width: 150px;
  }
`;

export const ImgDetails = styled.img`
    width: 200px;
    height: auto;
    margin: 30px 80px;
    border-radius: 10px;

    @media screen and (min-width: 600px){
      width: 300px;
    height: auto;
    margin: 30px 30px;
    border-radius: 10px;
    position: absolute;
    top: 80px;
    }

`;
