import styled, { keyframes } from "styled-components";

export const FirstPage = styled.div`
  width: 100vw;
  height: 100%;
  background: var(--gray-95, #000);
  margin-bottom: 50vh;
  @media only screen and (max-width: 500px) {
    width: 100vw;
  }
`;

export const ImageContainerFull = styled.img`
  width: 100vw;
  height: auto;
  @media only screen and (max-width: 500px) {
    width: 100vw;
  }
`;
