import React, { useState, useEffect } from "react";
import * as S from "./styles";
import NavBar from "../../components/NavBar/navBar";
import BlueGradient from "../../assets/blueGradient.png";
import BrownBackground from "../../assets/brownBackground.png";
import Animal from "../../assets/animal.png";
import Person from "../../assets/person.png";
import CaveBackground from "../../assets/caveBackground.png";
import Cave from "../../assets/mural.png";
import DiscoveryOfFirePerson from "../../assets/DiscoveryOfFire.png";
import DiscoveryOfFireBackground from "../../assets/Background_DiscoveryOfFire.png";
import DiscoveryOfFireText from "../../assets/DiscoveryOfFireText.png";
import DiscoveryOfFireR from "../../assets/DiscoveryOfFireR.png";
import DiscoveryOfCivil from "../../assets/DiscoveryOfCivil.png";
import PreImage from "../../assets/Pre.png";
import AgriculturalEvolution from "../../assets/EvolutionOfAgriculture.png";
import Gradient1 from "../../assets/Gradient.png";
import Gradient2 from "../../assets/Gradient2.png";
import GraphicMotive from "../../assets/GraphicMotive.png";
import AIEvolution from "../../assets/AIEvolution.png";
import Mankind from "../../assets/MankindInvention.png";
import IndustryEvolution from "../../assets/IndustryEvolution.png";
import DevelopmentOfSymbol1 from "../../assets/DevelopmentOfSymbol1.png";
import DevelopmentOfSymbol2 from "../../assets/DevelopmentOfSymbol2.png";
import Beauty from "../../assets/BeautyAnd.png";
import BrandEssence from "../../assets/BrandEssence.png";
import DesignConcept from "../../assets/DesignConcept.png";
import ShapeAnalydid from "../../assets/Analydid.png";
import Interaction from "../../assets/Interaction.png";
import GradientBackground from "../../assets/GradientBackground.png";
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
          </S.GradientT>

          <S.GradientT
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
          </S.GradientT>
          <br />
          <br />
          <S.GradientT
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
          </S.GradientT>
          <S.GradientT
            style={{
              opacity: (position - 700) / 200,
              // transition: "ease-in-out",
              animationDuration: "2s",
              animationName: "fadeInUp",
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
            fontSize: window.innerWidth <= 500 ? "2vw" : "0.5vw",

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
        <div
          style={{
            width: "100vw",
            height: "100vh",
            // backgroundColor: "#181818",
          }}
        >
          <img src={DiscoveryOfFireR} alt="불의 발견"></img>
        </div>
      </S.FifthPage>
      {/* <div
            style={{
              width: "50%",
              height: "100vh",
              flexDirection: "column",
              display: "flex",
              // justifyContent: "flex-start", // 화면 왼쪽에 배치
              // backgroundImage: `url(${DiscoveryOfFireBackground})`,
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
                  width: "100vw",
                  height: "30vh",
                }}
              ></img> */}
      {/* </div>
          </div> */}

      <S.SixthPage>
        {/* SixthPage에 width,height 반응형 설정했는데 여기 div에 또 해준 이유:여기ImageContainerFull에
        height:auto로 설정되어 있기 때문-다른 애들이 heightAuto가 필요해 */}
        {/* <div style={{ width: "100vw", height: "100vh" }}> */}
        <S.ImageContainerFull
          src={AgriculturalEvolution}
          alt="농업혁명"
        ></S.ImageContainerFull>
      </S.SixthPage>
      <S.SeventhPage>
        {/* <div style={{ width: "100vw", height: "100vh" }}> */}
        <img
          style={{ height: "200vh", width: "100vw", marginBottom: "50vh" }}
          src={DiscoveryOfCivil}
          alt="문명의 발전"
        ></img>
        {/* </div> */}
      </S.SeventhPage>

      {/* 인류사 발명품-Yet */}
      <S.EighthPage>
        <img
          style={{ height: "200vh", width: "100vw" }}
          src={Mankind}
          alt="인류사 발명품"
        ></img>
      </S.EighthPage>
      {/* 상징의 발전-Yet */}
      <S.NinethPage>
        <img src={DevelopmentOfSymbol1} alt="상징의 발전1"></img>
        <img src={DevelopmentOfSymbol2} alt="상징의 발전2"></img>
      </S.NinethPage>
      {/* 산업혁명-Yet */}
      <S.TenthPage>
        {" "}
        <img src={IndustryEvolution} alt="산업혁명"></img>
      </S.TenthPage>
      {/* AI발전-ing */}
      <S.EleventhPage>
        <S.BackGradient>
          <S.ImgContainer src={AIEvolution} alt="AI혁명"></S.ImgContainer>
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
            <S.TextGradientGray>
              우리는 새로운{"\u00A0"}
              {"\u00A0"}
              {"\u00A0"}
              {"\u00A0"}
              {"\u00A0"}
              {"\u00A0"}
              {"\u00A0"}
              시대의
            </S.TextGradientGray>

            <S.TextGradientPurple>
              우리만의 상징을 <br />
              창조한다
            </S.TextGradientPurple>
            <S.ImageContainerFull
              src={Gradient2}
              alt="그라데이션2"
            ></S.ImageContainerFull>
            <S.ImageContainerFull
              src={Gradient1}
              alt="임시이고 이미지가 들어갈 것"
            ></S.ImageContainerFull>
          </div>
        </div>
      </S.TwelvePage>
      {/* brandEssence+Images-ing */}
      <S.ThirteenPage>
        <div>
          <img src={BrandEssence} alt="BrandEssence"></img>
        </div>
        {/* <S.DivWrapper>
          
          <S.BrandEssence>BRAND ESSENCE</S.BrandEssence>
          <S.UnderBrandEssence>
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
          </S.UnderBrandEssence>
        </S.DivWrapper> */}
      </S.ThirteenPage>
      {/* co-creative 효과 */}
      <S.FourteenPage>
        <S.TestAnimation bgColor="#fff">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: "10vh",

              // spaceBtween이 안먹어 왜
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

              // spaceBtween이 안먹어 왜
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
      <S.FifteenPage>
        <S.ImageContainerFull src={DesignConcept} alt="DesignConcept" />
      </S.FifteenPage>
      <S.SixteenthPage>
        <S.ImageContainerFull src={Beauty} alt="각자의 아름다움" />
      </S.SixteenthPage>

      {/* Graphic Motive-물방울 */}
      <S.SeventeenthPage>
        <S.ImageContainerFull
          src={GraphicMotive}
          alt="GraphicMotive"
        ></S.ImageContainerFull>
        <S.ImageContainerFull src={ShapeAnalydid} alt="ShapeAnalydid" />
      </S.SeventeenthPage>
      <S.EighteenthPage>
        <S.ImageContainerFull src={PreImage} alt="예비" />
      </S.EighteenthPage>
      <div>
        <S.ImageContainerFull src={PreImage} alt="예비"></S.ImageContainerFull>
        <S.ImageContainerFull src={Interaction} alt="Interaction" />

        <S.ImageContainerFull src={GradientBackground} alt="ShapeAnalydid" />
      </div>
    </>
  );
}
