import * as S from "../pages/brandingPage/styles";
import React, { useEffect, useRef, useState } from "react";
import useOnScreen from "../pages/useOnScreen";

export default function BrandingPage() {
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const textRef3 = useRef(null);

  const isVisible1 = useOnScreen(textRef1);
  const isVisible2 = useOnScreen(textRef2);
  const isVisible3 = useOnScreen(textRef3);
  console.log("isVisible1:", isVisible1);
  console.log("isVisible2:", isVisible2);
  console.log("isVisible3:", isVisible3);

  // const handleIntersection = (entries, observer) => {
  //   entries.forEach((entry) => {
  //     if (entry.isIntersecting) {
  //       entry.target.classList.add("fade-in-out");
  //       observer.unobserve(entry.target); // 애니메이션 후 더 이상 관찰하지 않음
  //     }
  //   });
  // };

  // useEffect(() => {
  //   const observer = new IntersectionObserver(handleIntersection, {
  //     threshold: 0.3,
  //   });

  //   if (textRef1.current) observer.observe(textRef1.current);
  //   if (textRef2.current) observer.observe(textRef2.current);
  //   if (textRef3.current) observer.observe(textRef3.current);

  //   // Clean-up function
  //   return () => {
  //     if (textRef1.current) observer.unobserve(textRef1.current);
  //     if (textRef2.current) observer.unobserve(textRef2.current);
  //     if (textRef3.current) observer.unobserve(textRef3.current);
  //   };
  // }, []);

  // const [position, setPosition] = useState(0);

  // const onScroll = () => {
  //   setPosition(window.scrollY);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", onScroll);
  //   return () => {
  //     window.removeEventListener("scroll", onScroll);
  //   };
  // }, []);

  return (
    <>
      <S.SecondPage>
        <div>
          <S.GradientT ref={textRef1} isVisible={isVisible1}>
            각 시대정신을 반영하는 ‘상징'은 인류의
          </S.GradientT>

          <S.GradientT ref={textRef2} isVisible={isVisible2}>
            발전과 함께했다.
          </S.GradientT>

          <br />
          <br />

          <S.GradientT
            ref={textRef3}
            isVisible={isVisible3}
            style={{ opacity: isVisible3 ? 1 : 0 }}
          >
            그것은 기존 가치를 해체하고 새로운 의미를
          </S.GradientT>
        </div>
      </S.SecondPage>
      <S.SecondPage>
        <div>
          <S.GradientT ref={textRef1} isVisible={isVisible1}>
            각 시대정신을 반영하는 ‘상징'은 인류의
          </S.GradientT>

          <S.GradientT ref={textRef2} isVisible={isVisible2}>
            발전과 함께했다.
          </S.GradientT>

          <br />
          <br />

          <S.GradientT
            ref={textRef3}
            isVisible={isVisible3}
            style={{ opacity: isVisible3 ? 1 : 0 }}
          >
            그것은 기존 가치를 해체하고 새로운 의미를
          </S.GradientT>
        </div>
      </S.SecondPage>
      <S.SecondPage>
        <div>
          <S.GradientT ref={textRef1} isVisible={isVisible1}>
            각 시대정신을 반영하는 ‘상징'은 인류의
          </S.GradientT>

          <S.GradientT ref={textRef2} isVisible={isVisible2}>
            발전과 함께했다.
          </S.GradientT>

          <br />
          <br />

          <S.GradientT
            ref={textRef3}
            isVisible={isVisible3}
            style={{ opacity: isVisible3 ? 1 : 0 }}
          >
            그것은 기존 가치를 해체하고 새로운 의미를
          </S.GradientT>
        </div>
      </S.SecondPage>
    </>
  );
}
