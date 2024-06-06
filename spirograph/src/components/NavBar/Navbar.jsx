import React, { useState, useEffect } from "react";

import * as S from "./styles";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Horizon from "./horizon";
import Logo from "../../assets/brandingImg/RealSymbol.png";
export const ImageWrapper = styled.div`
  display: flex;
  width: 100%;
  //원래 1.69
  margin-right: 2rem;
  //원래 2.77rem
  margin-left: 2.5rem;
  height: 100%;
`;
export const Image = styled.img`
  display: block;
  width: auto;
`;
export const Group = styled.div`
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
  const [topOffset, setTopOffset] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);

  function handleClick() {
    console.log("NavMenu가 클릭!");
    navigate("/about");
  }

  //NavBar  효과
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY === 0) {
        // 스크롤 위치가 0이면 고정
        setTopOffset(20);
      } else if (currentScrollY > lastScrollY) {
        // 스크롤 다운
        setTopOffset(-60); // navBar를 40px 위로 이동
      } else {
        // 스크롤 업
        setTopOffset(0); // navBar를 맨 위에 붙이기
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  return (
    <S.NavBar style={{ top: `${topOffset}px`, transition: "top 0.3s" }}>
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
        <S.NavMenu
          onClick={handleClick}
          style={{ fontSize: "1.12rem" }}
          hoverColor="#5339FD"
        >
          Model Graphic {">"}{" "}
        </S.NavMenu>
      </Group>
    </S.NavBar>
  );
}

export default Nav;
