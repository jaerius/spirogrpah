import styled from "styled-components";

export const Main = styled.div`
  background: white;
`;

//NFT 판매샵입니다. 글씨 부분
export const TitleT = styled.div`
  font-size: 1.75rem;
  color: black;
  /* Text에만 배경 그라데이션 효과를 적용 */
  background: linear-gradient(91deg, #f1f1f1 26.27%, #6d6d6d 105.67%);
  /* 배경 그라데이션 효과가 텍스트 위에 오버레이되도록 */
  -webkit-background-clip: text;
  background-clip: text;
  /* 텍스트의 배경을 투명으로 */
  color: transparent;
  font-weight: bold;
  margin-bottom: 2.31rem;
  margin-top: 8rem;
`;
export const SmallTitleT = styled.div`
  font-size: 1.25rem;
  color: #f1f1f1;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 36.4rem;
  justify-content: center;
  align-items: center;
  color: #2c2c2c;
  background: #000000;

  margin: 0 1rem 3rem 1rem;
`;

export const Card = styled.div`
  transition: opacity 0.3s ease;
  &:hover {
    opacity: 0.7;
    background-color: #4d4d4d;
  }

  flex-direction: column;
  display: flex;
  border-radius: 1.25rem;
  background: #000;
  /* 원래는 아래 색이 맞음 */
  /* background: #181818; */
  /* margin-bottom: 4%; */
  width: auto;
  height: auto;
  align-items: flex-start;
  justify-content: center;
  font-size: 1rem;
  text-align: center;
`;

export const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex: "1 0 auto";
`;
export const Img = styled.img`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const TextWrapper = styled.div`
  text-align: start;
`;
export const TextGroup = styled.div`
  padding-left: 1.5rem;
`;
//B로고와 0.0000001
export const Group = styled.div`
  flex-direction: column;
`;
export const Text = styled.div`
  font-size: 0.875rem;
  font-weight: bold;
  color: var(--gray-30, #f1f1f1);
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
`;
