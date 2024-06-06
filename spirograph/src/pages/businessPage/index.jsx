import React from "react";
import * as S from "./styles";
import One from "../../assets/businessImg/1.png";
import Two from "../../assets/businessImg/2.png";
import Three from "../../assets/businessImg/3.png";
import Four from "../../assets/businessImg/4.png";
import Five from "../../assets/businessImg/5.png";
import Six from "../../assets/businessImg/6.png";
import Seven from "../../assets/businessImg/7.png";
import Eight from "../../assets/businessImg/8.png";
import Nine from "../../assets/businessImg/9.png";
import Ten from "../../assets/businessImg/10.png";
import Eleven from "../../assets/businessImg/11.png";
import Twelve from "../../assets/businessImg/12.png";
import Thirteen from "../../assets/businessImg/13.png";
import Fourteen from "../../assets/businessImg/14.png";
import Nav from "../../components/NavBar/navBar";
export default function BrandingPage() {
  return (
    <>
      <Nav />
      <S.FirstPage>
        <S.ImageContainerFull src={One} alt="1"></S.ImageContainerFull>
        <S.ImageContainerFull src={Two} alt="2"></S.ImageContainerFull>
        <S.ImageContainerFull src={Three} alt="3"></S.ImageContainerFull>
        <S.ImageContainerFull src={Four} alt="4"></S.ImageContainerFull>
        <S.ImageContainerFull src={Five} alt="5"></S.ImageContainerFull>
        <S.ImageContainerFull src={Six} alt="6"></S.ImageContainerFull>
        <S.ImageContainerFull src={Seven} alt="7"></S.ImageContainerFull>
      </S.FirstPage>
      <S.SecondPage>
        <S.ImageContainerFullWhite
          src={Eight}
          alt="8"
        ></S.ImageContainerFullWhite>
        <S.ImageContainerFullWhite
          src={Nine}
          alt="9HowToUse"
        ></S.ImageContainerFullWhite>
        <S.ImageContainerFullWhite
          src={Ten}
          alt="10"
        ></S.ImageContainerFullWhite>
        <S.ImageContainerFullWhite
          src={Eleven}
          alt="11"
        ></S.ImageContainerFullWhite>
        <S.ImageContainerFullWhite
          src={Twelve}
          alt="12"
        ></S.ImageContainerFullWhite>
        <S.ImageContainerFullWhite
          src={Thirteen}
          alt="13"
        ></S.ImageContainerFullWhite>
        <S.ImageContainerFullWhite
          src={Fourteen}
          alt="14"
        ></S.ImageContainerFullWhite>
      </S.SecondPage>
    </>
  );
}
