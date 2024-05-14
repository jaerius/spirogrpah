import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/navBar";
import styled, { keyframes } from "styled-components";
import BlueGradient from "../../assets/blueGradient.png";
import BrownBackground from "../../assets/brownBackground.png";
import Animal from "../../assets/animal.png";
import Person from "../../assets/person.png";
import CaveBackground from "../../assets/caveBackground.png";
import Cave from "../../assets/mural.png";
import DiscoveryOfFirePerson from "../../assets/DiscoveryOfFire.png";
import DiscoveryOfFireBackground from "../../assets/Background_DiscoveryOfFire.png";
import DiscoveryOfFireText from "../../assets/DiscoveryOfFireText.png";
import DiscoveryOfCivil from "../../assets/DiscoveryOfCivil.png";
import PreImage from "../../assets/Pre.png";
import AgriculturalEvolution from "../../assets/AgriculturalEvolution.png";
import Gradient1 from "../../assets/Gradient.png";
import Gradient2 from "../../assets/Gradient2.png";
import GraphicMotive from "../../assets/GraphicMotive.png";
// import colors from "../../fonts/color";
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

  const DivWrapper = styled.div`
    flex-direction: column;
    display: flex;
    justify-content: center;
  `;
  const ImageContainer = styled.img`
    //ㅎ화면에 따라 크기 조절하고 싶으면?
    //만약 75vw면 화면 width 3/4가 채워짐
    width: 100vw;
    height: auto;
    background-size: cover;
  `;

  const FirstPage = styled.div`
    width: 100%;
    height: 20%;
    background: var(--gray-95, #000);
    margin-bottom: 50vh;
  `;
  const SecondPage = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 18.19rem;
  `;
  const ThirdPage = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    justify-content: space-evenly;
    margin-bottom: 18.19rem;
  `;
  const FourthPage = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    justify-content: space-evenly;
    margin-bottom: 18.19rem;
  `;
  const FifthPage = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    margin-bottom: 18.19rem;
  `;
  const SixthPage = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-bottom: 18.19rem;
  `;
  const SeventhPage = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-bottom: 18.19rem;
  `;
  const EighthPage = styled.div`
    width: 100%;
    height: 100%;
    //window 크기 다 채우는 거
    //background-size:cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: flex-start;
    margin-bottom: 18.19rem;
  `;
  const TextGradientPurple = styled.text`
    background: linear-gradient(99deg, #c7acff 2.03%, #6a25ff 92.54%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    font-family: bold;
    font-size: 10rem;
  `;
  const TextGradientGray = styled.text`
    color: #848484;
    font-family: bold;
    font-size: 6rem;
  `;
  const NinethPage = styled.div`
    height: 100rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 1000px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    background: conic-gradient(
      from 270deg at 50% 50%,
      #6a25ff 0deg,
      #f523ed 158.389892578125deg,
      #0043f1 234.94101762771606deg,
      #401699 360deg
    );
    filter: blur(310px);
    margin-bottom: 18.19rem;
  `;
  const TenthPage = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: flex-start;
    margin-bottom: 18.19rem;
  `;
  const BrandEssence = styled.text`
    color: #f1f1f1;
    font-family: bold;
    font-size: 5.6rem;
  `;
  const UnderBrandEssence = styled.text`
    color: #c7c7c7;
    font-family: bold;
    font-size: 1.2rem;
  `;
  const EleventhPage = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
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
      <ThirdPage>
        <div
          style={{
            width: "46rem",
            height: "23rem",
            backgroundImage: `url(${BrownBackground})`,
            backgroundPosition: "center",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            marginBottom: "4rem",
          }}
          alt="갈색 배경"
        >
          <img src={Person} alt="사람"></img>
          <img src={Animal} alt="동물"></img>
        </div>
        <div>
          <span style={{ color: "#848484" }}>
            그들은 도구를 통해 사냥을 하여 그들의
          </span>
          <span style={{ color: "#fff" }}>생존</span>
          <span style={{ color: "#848484" }}>과 </span>
          <span style={{ color: "#fff" }}>안전</span>
          <span style={{ color: "#848484" }}>을 책임졌다.</span>
        </div>
      </ThirdPage>
      <FourthPage>
        <div
          style={{
            width: "100%",
            height: "100vh",
            flexDirection: "column",
            // backgroundPosition: "center",
            display: "flex",
            backgroundSize: "cover", //이미지를 화면에 꽉 채우기
            justifyContent: "center",
            alignItems: "center",
            backgroundImage: `url(${CaveBackground})`,
          }}
        >
          <img src={Cave} alt="벽화"></img>
          <span style={{ color: "#848484" }}>그리고 그들은 그 현장을 </span>
          <span style={{ color: "#fff" }}>예술적</span>
        </div>
      </FourthPage>
      <FifthPage>
        <div
          style={{ width: "100%", height: "100%", backgroundColor: "#181818" }}
        >
          <div
            style={{
              width: "50%",
              height: "100vh",
              flexDirection: "column",
              display: "flex",
              justifyContent: "flex-start", // 화면 왼쪽에 배치
              backgroundImage: `url(${DiscoveryOfFireBackground})`,
            }}
          >
            <div style={{ flexDirection: "row", display: "flex" }}>
              <img
                src={DiscoveryOfFirePerson}
                alt="불의 사람"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "22rem",
                  height: "30rem",
                }}
              ></img>
              <img src={DiscoveryOfFireText} alt="텍스트 이미지"></img>
            </div>
          </div>
        </div>
      </FifthPage>
      <SixthPage>
        <div
          style={{
            flexDirection: "column",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "120rem",
          }}
        >
          {/* <img
                src={AgriculturalEvolution}
                alt="농업혁명"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "22rem",
                  height: "30rem",
                }}
              ></img> */}

          {/* <ImageContainer
            src={AgriculturalEvolution}
            alt="농업혁명"
          ></ImageContainer> */}
        </div>
      </SixthPage>

      <SeventhPage>
        <div
          style={{
            flexDirection: "column",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={DiscoveryOfCivil} alt="문명의 발전"></img>
        </div>
      </SeventhPage>
      <NinethPage>
        <div style={{ flexDirection: "column", display: "flex" }}>
          <span style={{ color: "red", fontSize: "3rem" }}>
            바야흐로 2024 인류는 인공지능이라는 <br />
            새로운 국면을 맞이했다.
          </span>
        </div>
      </NinethPage>
      <EighthPage>
        <div
          style={{
            flexDirection: "column",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ImageContainer src={Gradient1} alt="그라데이션1"></ImageContainer>
          <div
            style={{
              backgroundColor: "#fff",
              height: "50rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <TextGradientGray>
              우리는 새로운{"\u00A0"}
              {"\u00A0"}
              {"\u00A0"}
              {"\u00A0"}
              {"\u00A0"}
              {"\u00A0"}
              {"\u00A0"}
              시대의
            </TextGradientGray>

            <TextGradientPurple>
              우리만의 상징을 <br />
              창조한다
            </TextGradientPurple>
          </div>
          <ImageContainer src={Gradient2} alt="그라데이션2"></ImageContainer>
          <ImageContainer
            src={Gradient1}
            alt="임시이고 이미지가 들어갈 것"
          ></ImageContainer>
        </div>
      </EighthPage>
      <ImageContainer src={PreImage} alt="예비"></ImageContainer>

      <TenthPage>
        <DivWrapper>
          <BrandEssence>BRAND ESSENCE</BrandEssence>
          <UnderBrandEssence>
            개인의 고유 정보를 토대로 그래픽형태의 새로운 상징을 누구나 쉽게
            생성 가능하게 하여 사용자에게 특별한
            <br />
            경험을 이끌어가고자 하는 ‘The Symbol’의 브랜드 에센스는 ‘build a
            symbol’로 정의한다. 이는 사용자의
            <br />
            취향과 성향을 반영하는 알고리즘을 통해, 개인의 아이덴티티를 표현하는
            자산들이 적층되어 각자의 상징을
            <br /> 더욱 입체적이고 깊이 있는 방식으로 풍부하게 발전시키는 것을
            나타낸다.
          </UnderBrandEssence>
        </DivWrapper>
      </TenthPage>
      <elevenPage>
        <ImageContainer
          src={GraphicMotive}
          alt="GraphicMotive"
        ></ImageContainer>
      </elevenPage>
    </>
  );
}
