import styled from "styled-components";

//로고+메뉴바
export const NavBar = styled.nav`
  width: 100%;
  /* background-color: black; */
  display: flex;
  flex-direction: row;
  /* margin-top: 2rem; */
  height: 5vh;
  position: fixed;
  top: 0;
  width: 100%;
  transition: top 0.3s;
`;
//
export const NavMenu = styled.div`
  color: white;
  /* margin-top: 0.5rem; */
  /* margin: 1rem; */
  //원래 폰트 0.875rem인데 너무 작아보여서 일단 1rem으로
  cursor: pointer;
  font-size: 1rem;
  font-family: "Pretendard-Regular";
  height: 1rem;
  padding: 0.5rem 0;
  &:hover {
    background-color: #fff;
    color: ${(props) => props.hoverColor || "#000"};

    transition: color 0.8s, background-color 0.8s;
  }
`;
