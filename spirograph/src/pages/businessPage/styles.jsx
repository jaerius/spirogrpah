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
  background-image: url(${(props) => props.src});
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
  width: 25rem;
  height: 7rem;
  justify-content: center;
  align-items: center;
  display: flex;
  color: #f1f1f1;
  margin: 0 auto;
  position: absolute;
  border-radius: 20px;
  font-size: 2rem;
  font-weight: 700;
`;
