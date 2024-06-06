import React, { useEffect, useState } from "react";
import * as S from "./styles";
import NavBar from "../../components/NavBar2/navBar";
import BlueGradient from "../../assets/brandingImg/blueGradient.png";
import BrownBackground from "../../assets/brandingImg/brownBackground.png";
import Animal from "../../assets/brandingImg/animal.png";
import Person from "../../assets/brandingImg/person.png";
import CaveBackground from "../../assets/brandingImg/caveBackground.png";
import Cave from "../../assets/brandingImg/mural.png";
import DiscoveryOfFireR from "../../assets/brandingImg/DiscoveryOfFire.png";
import DiscoveryOfCivil from "../../assets/brandingImg/DiscoveryOfCivil.png";
import AgriculturalEvolution from "../../assets/brandingImg/EvolutionOfAgriculture.png";
import Gradient1 from "../../assets/brandingImg/Gradient.png";
import Gradient2 from "../../assets/brandingImg/Gradient2.png";
import GraphicMotive from "../../assets/brandingImg/GraphicMotive.png";
import AIEvolution from "../../assets/brandingImg/AI.webp";
import AIEvol from "../../assets/brandingImg/AIEvol.webp";
import Mankind from "../../assets/brandingImg/Mankind.png";
import IndustryEvolution from "../../assets/brandingImg/Industry.png";
import DevelopmentOfSymbol from "../../assets/brandingImg/DevelopmentOfSymbol.png";
import Beauty from "../../assets/brandingImg/BeautyAnd.png";
import BrandEssence from "../../assets/brandingImg/BrandEssence.png";
import BuildASymbol from "../../assets/brandingImg/BuildASymbol.png";

import BrandCoreValues from "../../assets/brandingImg/BrandCoreValues.png";
import DesignConcept from "../../assets/brandingImg/DesignConcept.png";
import ShapeAnalydid from "../../assets/brandingImg/Analydid.png";
import GradientBackground from "../../assets/brandingImg/GradientBackground.png";
import Typography from "../../assets/brandingImg/Typography.png";
import Sym1 from "../../assets/brandingImg/sym1.webp";
import Sym2 from "../../assets/brandingImg/sym2.webp";
import Sym3 from "../../assets/brandingImg/sym3.webp";
import Sym4 from "../../assets/brandingImg/sym4.webp";
import Sym5 from "../../assets/brandingImg/sym5.webp";
import Sym6 from "../../assets/brandingImg/sym6.webp";
// import Sym7 from "../../assets/brandingImg/sym7.webp";
// import Sym8 from "../../assets/brandingImg/last.webp";

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

  return (
    <>
      <S.FirstPage>
        <NavBar />
        <S.TextWrapper>
          <S.HugeT>
            {" "}
            PROJECT <br />
            OVERVIEW
          </S.HugeT>

          <S.SmallT>
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
          </S.SmallT>
        </S.TextWrapper>
      </S.FirstPage>
      {/* =================================================================== */}
      <S.SecondPage>
        <div style={{ position: "relative" }}>
          <S.GradientT
            style={{
              opacity: (position - 200) / 200,
              transition: "opacity 0.95s all  ease-in-out",
            }}
          >
            각 시대정신을 반영하는 ‘상징'은 인류의
          </S.GradientT>

          <S.GradientT
            style={{
              opacity: (position - 300) / 200,
              transition: "opacity 0.95s all  ease-in-out",
            }}
          >
            발전과 함께했다.
          </S.GradientT>
          <br />
          <br />
          <S.GradientT
            style={{
              opacity: (position - 400) / 200,
              transition: "opacity .95s all ease-in-out",
            }}
          >
            그것은 기존 가치를 해체하고 새로운 의미를
          </S.GradientT>
          <S.GradientT
            style={{
              opacity: (position - 500) / 200,
              transition: "opacity .95s all ease-in-out",
            }}
          >
            창출하는 역할을 해왔다.
          </S.GradientT>
        </div>
        <div style={{ marginTop: "15rem" }}></div>
        <span
          style={{
            // vw로 설정해도 너무 커보이거나 작아보일 수 있어. 그럴 때 쓰는게 window.innerWidth
            fontSize: window.innerWidth <= 500 ? "5vw" : "2vw",
            color: "#fff",
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          상징
          <br />
        </span>
        <S.Horizon />
        <span
          style={{
            // fontSize: window.innerWidth <= 500 ? "2vw" : "0.5vw",
            fontSize: "1vw",
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
        </span>
        <img
          style={{ width: "100%", height: "auto" }}
          src={BlueGradient}
          alt="그라데이션 이미지"
        ></img>
      </S.SecondPage>
      <S.ThirdPage>
        <div
          style={{
            width: "50vw",
            backgroundImage: `url(${BrownBackground})`,
            backgroundPosition: "center",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",

            marginBottom: "5vh",
            height: window.innerHeight <= 900 ? "40vw" : "50vh",
          }}
          alt="갈색 배경"
        >
          <S.ThirdPerAni src={Person} alt="사람"></S.ThirdPerAni>
          <S.ThirdPerAni src={Animal} alt="동물"></S.ThirdPerAni>
        </div>
        <div style={{ display: "flex" }}>
          <S.ThirdT style={{ color: "#848484" }}>
            그들은 도구를 통해 사냥을 하여 그들의
          </S.ThirdT>
          <S.ThirdT style={{ color: "#fff" }}>
            {"\u00A0"}
            생존
          </S.ThirdT>
          <S.ThirdT style={{ color: "#848484" }}>과 </S.ThirdT>
          <S.ThirdT style={{ color: "#fff" }}>
            {"\u00A0"}
            안전
          </S.ThirdT>
          <S.ThirdT style={{ color: "#848484" }}>을 책임졌다.</S.ThirdT>
        </div>
      </S.ThirdPage>
      <S.FourthPage>
        <div
          style={{
            width: "100%",
            // height: "100vh",
            flexDirection: "column",
            // backgroundPosition: "center",
            display: "flex",
            backgroundSize: "cover", //이미지를 화면에 꽉 채우기
            justifyContent: "center",
            alignItems: "center",
            backgroundImage: `url(${CaveBackground})`,
            // marginBottom: "18.19rem",
          }}
        >
          <S.ImageContainerSm
            src={Cave}
            alt="벽화"
            style={{ marginBottom: "5vh" }}
          ></S.ImageContainerSm>
          <div>
            <span style={{ color: "#848484" }}>그리고 그들은 그 현장을 </span>
            <span style={{ color: "#fff" }}> {"\u00A0"}예술적</span>
            <span style={{ color: "#848484" }}> {"\u00A0"}목적과</span>
            <span style={{ color: "#fff" }}> {"\u00A0"}영적</span>
            <span style={{ color: "#848484" }}> {"\u00A0"}목적으로</span>
          </div>
          <br />
          <div style={{ color: "#848484" }}>또한 어떠한 목적으로 기록했다.</div>
        </div>
      </S.FourthPage>
      <S.FifthPage>
        <S.ImageContainerFull
          src={DiscoveryOfFireR}
          alt="불의 발견"
        ></S.ImageContainerFull>
      </S.FifthPage>
      <S.SixthPage>
        {/* SixthPage에 width,height 반응형 설정했는데 여기 div에 또 해준 이유:여기ImageContainerFull에
        height:auto로 설정되어 있기 때문-다른 애들이 heightAuto가 필요해 */}
        <div style={{ width: "100vw", height: "100vh" }}>
          <S.ImageContainerFull
            src={AgriculturalEvolution}
            alt="농업혁명"
          ></S.ImageContainerFull>
        </div>
      </S.SixthPage>
      <S.SeventhPage>
        {/* <div style={{ width: "100vw", height: "100vh" }}> */}
        <S.ImageContainerFull
          // style={{ height: "200vh", marginBottom: "50vh" }}
          src={DiscoveryOfCivil}
          alt="문명의 발전"
        ></S.ImageContainerFull>
        {/* </div> */}
      </S.SeventhPage>
      {/* 인류사 발명품 */}
      <S.EighthPage>
        <S.ImageContainerFull
          // style={{ height: "200vh", width: "100vw" }}
          src={Mankind}
          alt="인류사 발명품"
        ></S.ImageContainerFull>
      </S.EighthPage>
      {/* 상징의 발전 */}
      <S.NinethPage>
        <S.ImageContainerFull
          src={DevelopmentOfSymbol}
          alt="상징의 발전"
        ></S.ImageContainerFull>
      </S.NinethPage>
      {/* 산업혁명*/}
      <S.TenthPage>
        <S.ImageContainerFull
          src={IndustryEvolution}
          alt="산업혁명"
        ></S.ImageContainerFull>
      </S.TenthPage>
      {/* AI발전 */}
      <S.EleventhPage>
        <S.BackGradient>
          <S.ImageContainerFull
            src={AIEvolution}
            alt="AI혁명"
          ></S.ImageContainerFull>
          <S.ImageContainerFull
            src={AIEvol}
            alt="AI혁명 밑 글씨"
          ></S.ImageContainerFull>
        </S.BackGradient>
      </S.EleventhPage>
      {/* black-> white 그라데이션-Done */}
      <S.TwelvePage>
        <div
          style={{
            flexDirection: "column",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <S.ImageContainerFull
            src={Gradient1}
            alt="그라데이션1"
          ></S.ImageContainerFull>
          <div
            style={{
              backgroundColor: "#fff",
              // height: "50rem",
              width: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              textAlign: "start",
            }}
          >
            <div style={{ marginTop: "5rem", marginBottom: "5rem" }}>
              <S.TextGradientGray>
                {"\u00A0"}
                {"\u00A0"}우리는{"\u00A0"}
                {"\u00A0"}
                {"\u00A0"}
                {"\u00A0"} 새로운
                {"\u00A0"}
                {"\u00A0"}
                시대의
                <br />
              </S.TextGradientGray>

              <S.TextGradientPurple>
                우리만의 상징을 <br />
              </S.TextGradientPurple>
              <S.TextGradientPurple>창조한다</S.TextGradientPurple>
            </div>
            <S.ImageContainerFull
              src={Gradient2}
              alt="그라데이션2"
            ></S.ImageContainerFull>
          </div>
        </div>
      </S.TwelvePage>
      {/* brandEssence+Images-ing */}
      <S.ThirteenPage>
        <img
          style={{ width: "95vw", height: "auto" }}
          src={BrandEssence}
          alt="BrandEssence"
        ></img>
        <S.ImageContainerFull
          style={{ marginTop: "5rem", marginBottom: "10rem" }}
          src={BuildASymbol}
          alt="BuildASymbol"
        ></S.ImageContainerFull>
        <img
          style={{ width: "95vw", height: "auto" }}
          src={BrandCoreValues}
          alt="brandcorevalues"
        ></img>
      </S.ThirteenPage>
      {/* co-creative 효과 */}
      <S.FourteenPage>
        <S.TestAnimation bgColor="#fff">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: "10vh",

              // spaceBetween이 안먹어 왜
            }}
          >
            <S.BrandVisionT style={{ marginLeft: "5vw", marginRight: "40vw" }}>
              BRAND VISION
            </S.BrandVisionT>
            <S.BrandVisionT2 bgColor="#000" style={{ marginRight: "5vw" }}>
              우리는 개개인의 유일무이한 특성을 존중하고 발전시키며, <br />
              이를 통해 보다 만족스럽고 충족된 삶을 누릴 수 있도록 돕는다
            </S.BrandVisionT2>
          </div>
          <S.AnimatedText1>
            Co-Creating Identities,Enriching Lives
          </S.AnimatedText1>
        </S.TestAnimation>
        {/* ========================================= */}
        <S.TestAnimation bgColor="#333333">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: "10vh",

              // spaceBetween이 안먹어 왜
            }}
          >
            <S.BrandVisionT style={{ marginLeft: "5vw", marginRight: "55vw" }}>
              BRAND VISION
            </S.BrandVisionT>
            <S.BrandVisionT2 bgColor="#fff">
              당신의 인생을 창조하라
            </S.BrandVisionT2>
          </div>
          <S.AnimatedText2>Create your Life</S.AnimatedText2>
        </S.TestAnimation>
      </S.FourteenPage>
      {/* Design Concept */}
      <div>
        <S.ImageContainerFull
          style={{ marginRight: "0.5rem", marginLeft: "0.5rem" }}
          src={DesignConcept}
          alt="DesignConcept"
        />

        <S.ImageContainerFull src={Beauty} alt="각자의 아름다움" />
      </div>{" "}
      {/* Graphic Motive-물방울 */}
      <S.SeventeenthPage>
        <S.ImageContainerFull
          src={GraphicMotive}
          alt="GraphicMotive"
        ></S.ImageContainerFull>
        <S.ImageContainerFull src={ShapeAnalydid} alt="ShapeAnalydid" />
      </S.SeventeenthPage>
      <div>
        <S.ImageContainerFull src={Sym1} alt="Sym1" />
        <S.ImageContainerFull src={Sym2} alt="Sym2" />
      </div>
      <div style={{ backgroundColor: "#fff" }}>
        <S.ImageContainerFull
          style={{ marginBottom: "5rem" }}
          src={Sym3}
          alt="Sym3"
        />
        <S.ImageContainerFull src={Sym4} alt="Sym4" />
      </div>
      <div>
        <S.ImageContainerFull src={Sym5} alt="Sym5" />

        <S.ImageContainerFull src={Sym6} alt="Sym6" />
        {/* <S.ImageContainerFull src={Sym7} alt="Sym7" />
        <S.ImageContainerFull src={Sym8} alt="last" /> */}
        <S.ImageContainerFull src={Typography} alt="Typography" />

        <S.ImageContainerFull
          src={GradientBackground}
          alt="GradientBackground"
        />
      </div>
    </>
  );
}
