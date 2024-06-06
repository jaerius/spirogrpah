import { useMediaQuery } from "react-responsive";
import React from "react";
// 반응형 구현을 위한 페이지
export const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({
    query: "(max-width:768px)",
  });

  return <>{isMobile && children}</>;
};
export const PC = ({ children }) => {
  const isPc = useMediaQuery({
    query: "(min-width:769px)",
  });
  return <>{isPc && children}</>;
};
