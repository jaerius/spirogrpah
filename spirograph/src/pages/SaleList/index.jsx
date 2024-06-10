import React from "react";
import * as S from "./styles";
import Nav from "../../components/NavBar/Navbar";
import BIcon from "../../assets/saleListImg/Bicon.svg";
import HorizonLine from "./horizonLine";
import GraphNew from "../../assets/saleList/1.png";
import GraphNew2 from "../../assets/saleList/2.png";
import GraphNew3 from "../../assets/saleList/3.png";
import GraphNew4 from "../../assets/saleList/4.png";
import GraphNew5 from "../../assets/saleList/5.png";
import GraphNew6 from "../../assets/saleList/6.png";
import GraphNew7 from "../../assets/saleList/7.png";
import GraphNew8 from "../../assets/saleList/8.png";
import GraphNew9 from "../../assets/saleList/9.png";
import GraphNew10 from "../../assets/saleList/10.png";
import GraphNew11 from "../../assets/saleList/11.png";
import GraphNew12 from "../../assets/saleList/12.png";

const cardData = [
  {
    img: GraphNew,
    date: "99.02.24",
    name: "이환희",
    bDate: "99.02.24",
    bValue: "0.000001",
  },
  {
    img: GraphNew2,
    date: "99.05.20",
    name: "심재호",
    bDate: "99.02.24",
    bValue: "0.000001",
  },
  {
    img: GraphNew3,
    date: "99.11.09",
    name: "오관석",
    bDate: "99.02.24",
    bValue: "0.000001",
  },
  {
    img: GraphNew4,
    date: "00.11.27",
    name: "김지인",
    bDate: "99.02.24",
    bValue: "0.000001",
  },
  {
    img: GraphNew5,
    date: "99.11.09",
    name: "이혜림",
    bDate: "99.02.24",
    bValue: "0.000001",
  },
  {
    img: GraphNew6,
    date: "99.11.09",
    name: "박보근",
    bDate: "99.02.24",
    bValue: "0.000001",
  },
];
const cardData2 = [
  {
    img: GraphNew7,
    date: "99.11.09",
    name: "김도희",
    bDate: "99.02.24",
    bValue: "0.000001",
  },
  {
    img: GraphNew8,
    date: "99.11.09",
    name: "강산",
    bDate: "99.02.24",
    bValue: "0.000001",
  },
  {
    img: GraphNew9,
    date: "99.08.19",
    name: "강진석",
    bDate: "99.02.24",
    bValue: "0.000001",
  },
  {
    img: GraphNew10,
    date: "00.03.02",
    name: "문지윤",
    bDate: "99.02.24",
    bValue: "0.000001",
  },
  {
    img: GraphNew11,
    date: "01.02.15",
    name: "이지원",
    bDate: "99.02.24",
    bValue: "0.000001",
  },
  {
    img: GraphNew12,
    date: "00.04.16",
    name: "김성연",
    bDate: "99.02.24",
    bValue: "0.000001",
  },
];
const combinedCardData = [...cardData];
const combinedCardData2 = [...cardData2];

// 두 번 반복된 데이터를 6개씩 자르기
const firstColumn = combinedCardData.slice(0, 6);
const SaleListPage = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Nav />
      {/* <BrowserRouter> */}≈{" "}
      {/* <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/main" element={<Main />} />
        </Routes> */}
      {/* </BrowserRouter> */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          marginBottom: "1.5rem",
        }}
      >
        <S.TitleT>Symbol 아카이빙</S.TitleT>
        <S.SmallTitleT style={{ marginBottom: "0.5rem" }}>
          the Symbol 안에서 자신만의 ai 어시스턴트 그래픽을 제작한 후{" "}
        </S.SmallTitleT>
        <S.SmallTitleT>발행하여 판매해보세요!</S.SmallTitleT>
      </div>
      <S.CardContainer>
        <S.GridContainer>
          {combinedCardData.map((card, index) => (
            <S.Card key={index}>
              <S.ImgWrapper>
                <S.Img src={card.img} alt="main"></S.Img>
              </S.ImgWrapper>
              <S.TextWrapper>
                <S.TextGroup>
                  <S.Text>{card.date}</S.Text>
                  <span
                    style={{
                      color: "#F1F1F1",
                      fontSize: "1.75rem",
                      fontWeight: "bold",
                    }}
                  >
                    {card.name}
                  </span>
                </S.TextGroup>
                <HorizonLine />
                <S.TextGroup>
                  <S.Group>
                    <S.Text>
                      <img src={BIcon} alt="B 로고 아이콘"></img>
                      {card.bValue}
                    </S.Text>
                  </S.Group>
                  <S.Text style={{ color: "#848484", marginBottom: "0.5rem" }}>
                    {card.bDate}
                  </S.Text>
                </S.TextGroup>
              </S.TextWrapper>
            </S.Card>
          ))}
        </S.GridContainer>
      </S.CardContainer>
      <S.CardContainer>
        <S.GridContainer>
          {combinedCardData2.map((card, index) => (
            <S.Card key={index}>
              <S.ImgWrapper>
                <S.Img src={card.img} alt="main"></S.Img>
              </S.ImgWrapper>
              <S.TextWrapper>
                <S.TextGroup>
                  <S.Text>{card.date}</S.Text>
                  <span
                    style={{
                      color: "#F1F1F1",
                      fontSize: "1.75rem",
                      fontWeight: "bold",
                    }}
                  >
                    {card.name}
                  </span>
                </S.TextGroup>
                <HorizonLine />
                <S.TextGroup>
                  <S.Group>
                    <S.Text>
                      <img src={BIcon} alt="B 로고 아이콘"></img>
                      {card.bValue}
                    </S.Text>
                  </S.Group>
                  <S.Text style={{ color: "#848484", marginBottom: "0.5rem" }}>
                    {card.bDate}
                  </S.Text>
                </S.TextGroup>
              </S.TextWrapper>
            </S.Card>
          ))}
        </S.GridContainer>
      </S.CardContainer>
    </div>
  );
};

export default SaleListPage;
