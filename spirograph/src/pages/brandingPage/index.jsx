import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/navBar";
import styled, { keyframes } from "styled-components";
import BlueGradient from "../../assets/blueGradient.png";
export default function BrandingPage() {
  const [position, setPosition] = useState(0);
  function onScroll() {
    console.log(window.scrollY);

    setPosition(window.scrollY);
  }
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });
  const FirstPage = styled.div`
    height: 20%;
    background: var(--gray-95, #000);
    margin-bottom: 50vh;
  `;
  const SecondPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 18.19rem;
  `;
  const HugeT = styled.div`
    font-size: 7vw;
    color: #fff;
    text-align: center;
    margin-left: 1rem;
    display: flex;
    justify-content: flex-start;
    margin-bottom: 2rem;
  `;

  const SmallT = styled.div`
    font-size: 1vw;
    color: #fff;
    text-align: start;
    margin-right: 3rem;
  `;

  const TextWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 20vw;
  `;
  const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
  `;
  const GradientT = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3.25rem;
    line-height: 180%; /* 5.85rem */
    font-weight: 800;
    color: black;
    visibility: visible;
    /* Text에만 배경 그라데이션 효과를 적용 */
    background: linear-gradient(180deg, #fff 0%, #4d4d4d 100%);
    /* 배경 그라데이션 효과가 텍스트 위에 오버레이되도록 */
    -webkit-background-clip: text;
    background-clip: text;
    /* 텍스트의 배경을 투명으로 */
    color: transparent;
    letter-spacing: -0.0975rem;
    animation: ${fadeInUp} 1s ease-in-out; // 키 프레임 애니메이션 적용

    animation-duration: 1s;
    animation-name: fadeInUp;
    /* transition: opacity 3s all ease-in-out; */
    /* transition: opacity 0.3s ease-in-out; // opacity에 대한 transition을 추가합니다.
 */
  `;

  const Horizon = styled.div`
    // display: "block",

    width: 49.75rem;
    margin-bottom: 1.5rem;
    margin-top: 1.5rem;

    border-bottom: 1px solid #646464;
  `;
  return (
    <>
      <FirstPage>
        <NavBar />
        <TextWrapper>
          <HugeT>
            {" "}
            PROJECT <br />
            OVERVIEW
          </HugeT>

          <SmallT>
            ‘The Symbol’은 곧 다가올 AI혁명을 대비하여 기존 ‘시리’와 ‘빅스비'와
            같은
            <br />
            AI 어시스던트를 개인의 고유의 정보를 토대로 그래픽을 생성하여
            인터페이스
            <br />
            및 이름의 커스터마이징이 가능하다. 이는 AI 어시스턴트가 각
            사용자에게 더욱
            <br />
            친근하게 다가갈 수 있도록 하며, 정교한 맞춤 알고리즘을 통해 편리함을
            제공한다.
            <br />
            <br />
            <br />
            우리의 브랜드는 ‘The Symbol’을 통해 자신만이 가질 수 있는 고유의
            <br />
            AI 어시스던트를 창조하여 삶을 더욱 더 특별하고 놀라운 경험을
            선사한다.
            <br />
            이를 통해 사용자의 일상에 깊이 통합되는 개인화된 동반자를 제공한다.
          </SmallT>
        </TextWrapper>
      </FirstPage>

      {/* =================================================================== */}
      <SecondPage>
        <div style={{ position: "relative" }}>
          <GradientT
            style={{
              opacity: (position - 300) / 200,
              // transition: "ease-in-out",
              animationDuration: "1s",
              animationName: "fadeInUp",
              // transition: "fadeIn opacity 0.5s ease-in-out",
              transition: "opacity .95s all ease-in-out",
              // opacity: (position - 200) / 100,
              // animationDuration: "1s",
              // animationName: "fadeInUp",
              // overflow: "hidden",
            }}
          >
            각 시대정신을 반영하는 ‘상징'은 인류의
          </GradientT>

          <GradientT
            style={{
              opacity: (position - 400) / 200,
              transition: "ease-in-out",
              animationDuration: "2s",
              animationName: "fadeInUp",
              // transition: "fadeIn opacity 0.5s ease-in-out",
              // transition: "opacity .95s all ease-in-out",
              // opacity: (position - 200) / 100,
              // animationDuration: "1s",
              // animationName: "fadeInUp",
              // overflow: "hidden",
            }}
          >
            발전과 함께했다.
          </GradientT>
          <br />
          <br />
          <GradientT
            style={{
              opacity: (position - 600) / 200,
              // transition: "ease-in-out",
              animationDuration: "2s",
              animationName: "fadeInUp",
              // // transition: "fadeIn opacity 0.5s ease-in-out",
              // transition: "opacity .95s all ease-in-out",
              // opacity: (position - 210) / 100,
              // animationDuration: "1s",
              // animationName: "fadeInUp",
              // overflow: "hidden",
            }}
          >
            그것은 기존 가치를 해체하고 새로운 의미를
          </GradientT>
          <GradientT
            style={{
              opacity: (position - 700) / 200,
              // transition: "ease-in-out",
              animationDuration: "2s",
              animationName: "fadeInUp",
            }}
          >
            창출하는 역할을 해왔다.
          </GradientT>
        </div>
        <div style={{ marginTop: "15rem" }}></div>
        <text
          style={{
            fontSize: "1.75rem",
            color: "#fff",
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          상징
          <br />
        </text>
        <Horizon />
        <text
          style={{
            fontSize: "1.125rem",
            color: "#C7C7C7",
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          사회적인 제도나 규약에 따라 추상적인 것을 구체적 사물로 나타내는 일.
          또는, 그렇게 나타낸 표지(標識)·기호·물건 따위. <br />
          <br />
          십자가가 크리스트교를, 태극기가 한국을, 교통 신호가 교통 법규를
          나타내는 따위.
        </text>
        <img
          style={{ width: "100%", height: "auto" }}
          src={BlueGradient}
          alt="그라데이션 이미지"
        ></img>
      </SecondPage>
    </>
  );
}
