import styled from "styled-components";

export const FirstPage = styled.div`
  width: 100vw;
  height: 100%;
  background: var(--gray-95, #000);

  @media only screen and (max-width: 500px) {
    width: 100vw;
  }
`;
export const SecondPage = styled.div`
  width: 100vw;
  height: 100%;
  background: #ebebeb;
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

export const Container = styled.div`
  width: 100vw;
  height: auto;
  border-color: #ebebeb;
`;

export const ImageContainerFullWhite = styled.img`
  width: 100vw;
  height: auto;
  border-color: #ebebeb;
  @media only screen and (max-width: 500px) {
    width: 100vw;
  }
`;

export const LastButton = styled.button`
  background-color: gray 95;
  width: 21rem;
  height: 5rem;
  color: #fff;
  border-radius: 20px;
`;
