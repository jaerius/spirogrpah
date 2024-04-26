import styled from "styled-components";

export const Main = styled.div`
  background: white;
`;

//NFT 판매샵입니다. 글씨 부분
export const TitleT = styled.div`
  background: linear-gradient(91deg, #f1f1f1 26.27%, #6d6d6d 105.67%);
  /* style={{ background: 'linear-gradient(91deg, #f1f1f1 26.27%, #6d6d6d 105.67%)' }}>
  <p style={{ color: 'white' }}>Your text here</p> */
  font-size: 1.75rem;
`;
export const SmallTitleT = styled.div`
  font-size: 1.25rem;
  color: #f1f1f1;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 95vw;
  height: 30vw;
  justify-content: center;
  align-items: center;
  color: #2c2c2c;
  background: #000000;
`;

export const Card = styled.div`
  flex-direction: column;
  display: flex;
  border-radius: 1.25rem 1.25rem 0rem 0rem;
  background: #181818;
  margin-bottom: 4%;
  width: 20rem;
  height: 33rem;
  align-items: flex-start;
  justify-content: center;
  font-size: 1rem;
  text-align: center;
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
  margin-bottom: "0.3rem";
`;
