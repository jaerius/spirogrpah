import React from "react";
import * as S from "./styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "../../components/NavBar/navBar";
// const LoginPage: React.FC = () => {
import cardphoto from "../../assets/cardphoto.png";
import BIcon from "../../assets/Bicon.svg";
import HorizonLine from "./horizonLine";
import About from "../NavBarDetailPage/About";
import Main from "../NavBarDetailPage/Main";
import GradientText from "../../components/NavBar/GradientText";

const SaleListPage = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </BrowserRouter>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <GradientText>NFT 편집샵입니다.</GradientText>
        <S.SmallTitleT>
          the Symbol 안에서 자신만의 ai 어시스턴트 그래픽을 제작한 후 <br />
          발행하여 판매해보세요!
        </S.SmallTitleT>
      </div>
      <S.CardContainer>
        <S.Card>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={cardphoto}
              alt="main"
              style={{
                width: "18rem",
                height: "20rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            ></img>
          </div>
          <S.TextGroup>
            <S.Text>99.11.09</S.Text>
            <span
              style={{
                color: "#F1F1F1",
                fontSize: "1.75rem",
                fontWeight: "bold",
              }}
            >
              이현진
            </span>
          </S.TextGroup>
          <HorizonLine />
          <S.TextGroup>
            <S.Group>
              <S.Text>
                <img src={BIcon} alt="B 로고 아이콘"></img>
                0.000001
              </S.Text>
            </S.Group>
            <S.Text style={{ color: "#848484" }}>99.02.24</S.Text>
            {/* <span style={{ color: "#848484" }}>99.02.24</span> */}
          </S.TextGroup>
        </S.Card>
        <S.Card>
          <img src={cardphoto} alt="main" style={{ width: "20rem" }}></img>
          hihelloHi
        </S.Card>
        <S.Card>
          <img src={cardphoto} alt="main" style={{ width: "20rem" }}></img>
          hihelloHi
        </S.Card>
        <S.Card>
          <img src={cardphoto} alt="main" style={{ width: "20rem" }}></img>
          hihelloHi
        </S.Card>
        <S.Card>
          <img src={cardphoto} alt="main" style={{ width: "20rem" }}></img>
          hihelloHi
        </S.Card>
        <S.Card>
          <img src={cardphoto} alt="main" style={{ width: "20rem" }}></img>
          hihelloHi
        </S.Card>
      </S.CardContainer>

      <S.CardContainer>
        <S.Card>
          <img src={cardphoto} alt="main" style={{ width: "20rem" }}></img>
          hihelloHi
        </S.Card>
        <S.Card>
          <img src={cardphoto} alt="main" style={{ width: "20rem" }}></img>
          hihelloHi
        </S.Card>
        <S.Card>
          <img src={cardphoto} alt="main" style={{ width: "20rem" }}></img>
          hihelloHi
        </S.Card>
        <S.Card>
          <img src={cardphoto} alt="main" style={{ width: "20rem" }}></img>
          hihelloHi
        </S.Card>
        <S.Card>
          <img src={cardphoto} alt="main" style={{ width: "20rem" }}></img>
          hihelloHi
        </S.Card>
        <S.Card>
          <img src={cardphoto} alt="main" style={{ width: "20rem" }}></img>
          hihelloHi
        </S.Card>
      </S.CardContainer>
    </div>
  );
};

export default SaleListPage;
