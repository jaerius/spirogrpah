import styled from "styled-components";

//로고+메뉴바
export const NavBar = styled.div`
  width: 100%;
  background-color: black;
  display: flex;
  flex-direction: row;
  margin-top: 2rem;
`;
//
export const NavMenu = styled.div`
  color: white;
  /* margin-top: 0.5rem; */
  /* margin: 1rem; */
  //원래 폰트 0.875rem인데 너무 작아보여서 일단 1rem으로
  font-size: 1rem;
  font-family: bold;
  /* :hover */
`;
