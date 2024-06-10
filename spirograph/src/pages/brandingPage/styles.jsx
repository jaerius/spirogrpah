import styled, { keyframes } from "styled-components";

export const ImageContainerFull = styled.img`
  //ㅎ화면에 따라 크기 조절하고 싶으면?
  //만약 75vw면 화면 width 3/4가 채워짐
  width: 100vw;
  height: auto;
  /* background-size: cover; */
  /* object-fit: cover; */
  @media only screen and (max-width: 500px) {
    width: 100vw;
  }
`;
export const ImageContainerFullMulH = styled.img`
  //ㅎ화면에 따라 크기 조절하고 싶으면?
  //만약 75vw면 화면 width 3/4가 채워짐
  width: 98vw;
  height: 200vh;
  /* background-size: cover; */
  /* object-fit: cover; */
  @media only screen and (max-width: 500px) {
    width: 100vw;
  }
`;
export const ImageContainerSm = styled.img`
  //ㅎ화면에 따라 크기 조절하고 싶으면?
  //만약 75vw면 화면 width 3/4가 채워짐
  width: 60vw;
  height: 30vw;
  /* background-size: cover; */
  /* object-fit: cover; */
  @media only screen and (max-width: 500px) {
    width: 50vw;
  }
  @media only screen and (max-height: 900px) {
    height: 50vw;
  }
`;

export const FirstPage = styled.div`
  width: 100vw;
  height: 100%;
  background: #181818;
  margin-bottom: 50vh;
  @media only screen and (max-width: 500px) {
    width: 100vw;
  }
`;

export const SecondPage = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 18.19rem;
  @media only screen and (max-width: 500px) {
    width: 100vw;
  }
`;
export const ThirdPage = styled.div`
  width: 100%;
  /* height: 100vw; */
  margin-bottom: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-evenly; */

  @media only screen and (max-width: 500px) {
    width: 100vw;
  }
`;

export const ThirdPerAni = styled.img`
  width: 15vw;
  height: 15vw;
  mix-blend-mode: plus-lighter;
  @media only screen and (max-width: 500px) {
    width: 20vw;
  }
  @media only screen and (max-height: 900px) {
    height: 20vw;
  }
`;
export const ThirdT = styled.span`
  font-size: 1vw;

  @media only screen and (max-width: 500px) {
    font-size: 3vw;
  }
`;
export const FourthPage = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 18.19rem;
  @media only screen and (max-width: 500px) {
    width: 100vw;
  }
`;
export const FifthPage = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  margin-bottom: 18.19rem;
`;
export const SixthPage = styled.div`
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
  margin-bottom: 50vh;
  @media only screen and (max-width: 500px) {
    width: 100vw;
  }
`;
// 문명의 발전
export const SeventhPage = styled.div`
  width: 100vw;
  //요소가 두개면 200vh

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 500px) {
    width: 100vw;
  }
`;
//인류사 발명품
export const EighthPage = styled.div`
  width: 100vw;
  //요소가 두개면 200vh
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 18.19rem;
  @media only screen and (max-width: 500px) {
    width: 100vw;
  }
`;

//상징의 발전
export const NinethPage = styled.div`
  width: 100vw;
  height: 80vh;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 60vh;
  background: #181818;
`;
//산업혁명
export const TenthPage = styled.div`
  margin-top: 20vh;
`;
//AI 발전 그라데이션
export const EleventhPage = styled.div`
  width: 100vw;
  height: 400vh;
  margin-top: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 1;
  position: relative;
  align-items: center;
  @media only screen and (max-width: 500px) {
    width: 390px;
  }
`;
export const BackGradient = styled.div`
  width: 100vw;
  height: 400vh;
  z-index: 5; /* z-index를 낮게 설정*/
  position: relative; //위치를 상대적으로 설정 */
  /* background: conic-gradient(
    from 270deg at 50% 50%,
    #6a25ff 0deg,
    #f523ed 158.389892578125deg,
    #0043f1 234.94101762771606deg,
    #401699 360deg
  ); */

  /* filter: blur(10px); */
  //뿌옇게 블러처리
  /* filter: blur(2px); */
`;
export const ImgContainer = styled.img`
  height: 350vh;
  width: 80vw;
  position: absolute; /* 위치를 절대적으로 설정 */
  top: 0;
  left: 50%;
  transform: translateX(-50%); /* 가운데 정렬 */
  z-index: 10; //z-index를 높게 설정
`;

export const HugeT = styled.div`
  font-size: 7vw;
  color: #fff;
  text-align: center;
  margin-left: 1rem;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 2rem;
`;

export const SmallT = styled.div`
  font-size: 1vw;
  color: #fff;
  text-align: start;
  margin-right: 3rem;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 35vw;
`;
export const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
  `;
export const GradientT = styled.div`
  /* transition: opacity 0.95s ease-in-out; */
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transition: opacity 0.95s ease-in-out; /* 투명도 변화에 따라 애니메이션 효과 적용 */

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4vw;
  @media only screen and (max-width: 500px) {
    font-size: 5vw;
  }
  line-height: 180%; /* 5.85rem */
  font-weight: 800;
  color: black;
  /* visibility: visible; */
  /* Text에만 배경 그라데이션 효과를 적용 */
  background: linear-gradient(180deg, #fff 0%, #4d4d4d 100%);
  /* 배경 그라데이션 효과가 텍스트 위에 오버레이되도록 */
  -webkit-background-clip: text;
  background-clip: text;
  /* 텍스트의 배경을 투명으로 */
  color: transparent;
  letter-spacing: -0.0975rem;
  /* 작동은 하는데 잠시 주석처리 */
  /* animation: ${fadeInUp} 1s ease-in-out; // 키 프레임 애니메이션 적용

  animation-duration: 1s;
  animation-name: fadeInUp; */
`;

export const Horizon = styled.div`
  // display: "block",

  width: 100vw;
  margin-bottom: 1.5rem;
  margin-top: 1.5rem;

  border-bottom: 1px solid #646464;
`;
export const TwelvePage = styled.div`
  width: 100vw;
  height: auto;
  //window 크기 다 채우는 거
  //background-size:cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: flex-start;
  margin-bottom: 18.19rem;
  @media only screen and (max-width: 500px) {
    width: 100vw;
  }
`;
export const TextGradientPurple = styled.span`
  background: linear-gradient(99deg, #c7acff 2.03%, #6a25ff 92.54%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-weight: bold;
  font-size: 17rem;
  text-align: start;
  margin-bottom: 5rem;
  @media only screen and (max-width: 500px) {
    font-size: 2.6rem;
  }
`;
export const TextGradientGray = styled.span`
  color: #848484;
  font-weight: bold;
  font-size: 9rem;
  text-align: start;
  margin-top: 10rem;

  @media only screen and (max-width: 500px) {
    font-size: 1.56rem;
  }
`;

export const ThirteenPage = styled.div`
  width: 100vw;
  height: auto;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: flex-start;
  margin-bottom: 18.19rem;
  margin-left: 1rem;
  margin-right: 1rem;
`;
export const DivWrapper = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
`;
export const BrandEssence = styled.span`
  color: #f1f1f1;
  font-family: bold;
  font-size: 3vh;
  margin-bottom: 1.2vh;
  margin-top: 3vh;
`;
export const UnderBrandEssence = styled.span`
  color: #c7c7c7;
  font-family: bold;
  font-size: 1vh;
`;

export const FourteenPage = styled.div`
  margin-bottom: 30vh;
`;

export const flowText = keyframes`
     0%{
     
        transform: translateX(100%);
      }
      100%{
 

        transform: translateX(-100%);
      }
 
`;

export const BrandVisionT = styled.div`
  flex: 1; // Flexbox에서 공간을 차지하도록 설정
  text-align: left; // 왼쪽 정렬
  color: #6a25ff;
  font-size: 4vw;

  /* color적용 안되다가 위에 flex,text-align 추가하니까 됐다..
  뭐 때문인지는 정확히 모륵겠다; */
`;

export const BrandVisionT2 = styled.div`
  flex: 1; // Flexbox에서 공간을 차지하도록 설정
  text-align: right; // 오른쪽 정렬
  color: ${(props) => props.bgColor};
  font-size: 1vw;
`;

export const TestAnimation = styled.div`
  white-space: nowrap;
  overflow: hidden;
  display: flex; // inline-block 대신 flex 사용
  background-color: ${(props) => props.bgColor};
  width: 100vw;
  height: 50vh;
`;

export const AnimatedText1 = styled.span`
  display: inline-block; // 텍스트를 블록 요소로
  //option : 10s linear(혹은 ease-in,ease-out,ease-in-out)
  animation: ${flowText} 10s infinite;
  color: #000;
  font-size: 10vw;

  margin-top: 9rem;
  //text를 맨 밑으로
  align-self: end;
`;
export const AnimatedText2 = styled.span`
  display: inline-block; // 텍스트를 블록 요소로
  animation: ${flowText} 8s infinite;
  color: #fff;
  font-size: 10vw;
  animation-delay: 2s;
  margin-top: 9rem;
  //text를 맨 밑으로
  align-self: end;
`;
export const FifteenPage = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  margin-bottom: 18.19rem;
`;
export const SixteenthPage = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  margin-bottom: 18.19rem;
`;
export const SeventeenthPage = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  margin-bottom: 18.19rem;
`;

export const EighteenthPage = styled.div`
  width: 100vw;
  height: auto;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  margin-bottom: 18.19rem;
`;
