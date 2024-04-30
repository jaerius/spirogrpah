import React from "react";
import * as S from "./styles";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Horizon from "../../components/NavBar/horizon";
import Logo from "../../assets/SymbolLogo.svg";
const ImageWrapper = styled.div`
  display: flex;
  width: 100%;
  //원래 1.69
  margin-right: 2rem;
  //원래 2.77rem
  margin-left: 2.5rem;
  height: 100%;
`;
const Image = styled.img`
  display: block;
  width: auto;
`;
const Group = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-right: 1.25rem;
  margin-bottom: 7.94rem;
  &:hover {
    background-color: #fff;
    transition: background-color 0.8s;
  }
`;
export function Nav() {
  const navigate = useNavigate();

  function handleClick() {
    console.log("NavMenu가 클릭!");
    navigate("/about");
  }
  return (
    <S.NavBar>
      <ImageWrapper>
        <Image src={Logo} alt="logo" />
      </ImageWrapper>
      <Group>
        <Horizon />
        <S.NavMenu onClick={handleClick}>Symbol Logic</S.NavMenu>
      </Group>
      <Group>
        <Horizon />
        <S.NavMenu onClick={handleClick}>About</S.NavMenu>
      </Group>
      <Group>
        <Horizon />
        <S.NavMenu onClick={handleClick}>Business Model</S.NavMenu>
      </Group>
      <Group>
        <Horizon />
        <S.NavMenu onClick={handleClick}>Contact</S.NavMenu>
      </Group>
      <Group>
        <Horizon />
        <S.NavMenu onClick={handleClick}>Shop</S.NavMenu>
      </Group>
      <Group>
        <Horizon />
        <S.NavMenu onClick={handleClick} style={{ fontSize: "1.12rem" }}>
          Model Graphic {">"}{" "}
        </S.NavMenu>
      </Group>

      {/* <Link style={S.NavMenu}>Main</Link>
      <Link style={S.NavMenu}>About</Link> */}
      {/* <Link to={"/"} style={S.NavMenu}>
        Business Model
      </Link>
      <Link to={"/"} style={S.NavMenu}>
        Contact
      </Link>
      <Link to={"/"} style={S.NavMenu}>
        Shop
      </Link>
      <Link to={"/"} style={S.NavMenu}>
        Made Graphic
      </Link> */}
    </S.NavBar>
  );
}

export default Nav;
