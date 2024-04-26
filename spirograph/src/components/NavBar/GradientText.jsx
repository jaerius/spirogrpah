import styled from "styled-components";

const GradientText = styled.div`
  position: relative; /* 가상 요소를 위치시키기 위해 필요합니다. */
`;

const GradientBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(91deg, #f1f1f1 26.27%, #6d6d6d 105.67%);
  z-index: -1; /* 텍스트 위에 배치되도록 설정합니다. */
  pointer-events: none; /* 마우스 이벤트를 텍스트에 전달합니다. */
`;

// 텍스트의 색상을 설정하는 스타일드 컴포넌트를 만듭니다.
const Text = styled.p`
  /* 텍스트의 색상을 흰색으로 설정합니다. */
  color: white;
`;

// GradientText 컴포넌트 내부에 Text 컴포넌트와 GradientBackground 컴포넌트를 렌더링하여 텍스트를 표시합니다.
export const GradientTextOnly = ({ children }) => (
  <GradientText>
    <GradientBackground />
    <Text>{children}</Text>
  </GradientText>
);

export default GradientTextOnly;
