import React from "react";
import * as S from "./styles";
import Nav from "../../components/NavBar/Navbar";
import BIcon from "../../assets/saleListImg/Bicon.svg";
import HorizonLine from "./horizonLine";
import Graph1 from "../../assets/saleListImg/graphh1.png";

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
        <S.Card>
          <S.ImgWrapper>
            <S.Img src={Graph1} alt="main"></S.Img>
          </S.ImgWrapper>
          <S.TextWrapper>
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
              <S.Text style={{ color: "#848484", marginBottom: "0.5rem" }}>
                99.02.24
              </S.Text>
              {/* <span style={{ color: "#848484" }}>99.02.24</span> */}
            </S.TextGroup>
          </S.TextWrapper>
        </S.Card>

        <S.Card>
          <S.ImgWrapper>
            <S.Img src={Graph1} alt="main"></S.Img>
          </S.ImgWrapper>
          <S.TextWrapper>
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
              <S.Text style={{ color: "#848484", marginBottom: "0.5rem" }}>
                99.02.24
              </S.Text>
              {/* <span style={{ color: "#848484" }}>99.02.24</span> */}
            </S.TextGroup>
          </S.TextWrapper>
        </S.Card>

        <S.Card>
          <S.ImgWrapper>
            <S.Img src={Graph1} alt="main"></S.Img>
          </S.ImgWrapper>
          <S.TextWrapper>
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
              <S.Text style={{ color: "#848484", marginBottom: "0.5rem" }}>
                99.02.24
              </S.Text>
              {/* <span style={{ color: "#848484" }}>99.02.24</span> */}
            </S.TextGroup>
          </S.TextWrapper>
        </S.Card>

        <S.Card>
          <S.ImgWrapper>
            <S.Img src={Graph1} alt="main"></S.Img>
          </S.ImgWrapper>
          <S.TextWrapper>
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
              <S.Text style={{ color: "#848484", marginBottom: "0.5rem" }}>
                99.02.24
              </S.Text>
              {/* <span style={{ color: "#848484" }}>99.02.24</span> */}
            </S.TextGroup>
          </S.TextWrapper>
        </S.Card>

        <S.Card>
          <S.ImgWrapper>
            <S.Img src={Graph1} alt="main"></S.Img>
          </S.ImgWrapper>
          <S.TextWrapper>
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
              <S.Text style={{ color: "#848484", marginBottom: "0.5rem" }}>
                99.02.24
              </S.Text>
              {/* <span style={{ color: "#848484" }}>99.02.24</span> */}
            </S.TextGroup>
          </S.TextWrapper>
        </S.Card>

        <S.Card>
          <S.ImgWrapper>
            <S.Img src={Graph1} alt="main"></S.Img>
          </S.ImgWrapper>
          <S.TextWrapper>
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
              <S.Text style={{ color: "#848484", marginBottom: "0.5rem" }}>
                99.02.24
              </S.Text>
              {/* <span style={{ color: "#848484" }}>99.02.24</span> */}
            </S.TextGroup>
          </S.TextWrapper>
        </S.Card>
      </S.CardContainer>
    </div>
  );
};

export default SaleListPage;
