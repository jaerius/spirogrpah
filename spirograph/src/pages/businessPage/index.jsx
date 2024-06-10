import React from "react";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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
import Nav from "../../components/NavBar/Navbar";
import Bar from "../../components/UnderBar/Bar";

const images = [
  { src: One, alt: "1" },
  { src: Two, alt: "2" },
  { src: Three, alt: "3" },
  { src: Four, alt: "4" },
  { src: Five, alt: "5" },
  { src: Six, alt: "6" },
  { src: Seven, alt: "7" },
];
const whiteImages = [
  { src: Eight, alt: "8" },
  { src: Nine, alt: "9HowToUse" },
  { src: Ten, alt: "10" },
  { src: Eleven, alt: "11" },
  { src: Twelve, alt: "12" },
  { src: Thirteen, alt: "13" },
  { src: Fourteen, alt: "14" },
];
export default function BusinessPage() {
  const navigate = useNavigate();

  const Container = styled.div`
    width: 100vw;
    height: auto;
    border-color: #ebebeb;
    background-image: url(${(props) => props.src});
  `;

  return (
    <div style={{ backgroundColor: "#f1f1f1" }}>
      <Nav />
      <S.FirstPage>
        {images.map((image, index) => (
          <S.ImageContainerFull key={index} src={image.src} alt={image.alt} />
        ))}
      </S.FirstPage>
      <S.SecondPage>
        {whiteImages.map((image, index) => (
          <S.ImageContainerFullWhite
            key={index}
            src={image.src}
            alt={image.alt}
          />
        ))}
        <Container src={Fourteen}></Container>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <S.LastButton
            style={{ backgroundColor: "#000" }}
            onClick={() => {
              navigate("/sketch");
            }}
          >
            AI 비서 생성하기
          </S.LastButton>
        </div>
      </S.SecondPage>
      <Bar />
    </div>
  );
}
