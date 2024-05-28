import React from "react";
import * as S from "./styles";
import One from "../../assets/1.png";
import Two from "../../assets/2.png";
import Three from "../../assets/3.png";
import Four from "../../assets/4.png";
import Five from "../../assets/5.png";

export default function BrandingPage() {
  return (
    <>
      <S.FirstPage>
        <S.ImageContainerFull
          src={One}
          alt="인류사 발명품"
        ></S.ImageContainerFull>
        <S.ImageContainerFull
          src={Two}
          alt="인류사 발명품"
        ></S.ImageContainerFull>
        <S.ImageContainerFull
          src={Three}
          alt="인류사 발명품"
        ></S.ImageContainerFull>
        <S.ImageContainerFull
          src={Four}
          alt="인류사 발명품"
        ></S.ImageContainerFull>
        <S.ImageContainerFull
          src={Five}
          alt="인류사 발명품"
        ></S.ImageContainerFull>
      </S.FirstPage>
      <div>test</div>
    </>
  );
}
