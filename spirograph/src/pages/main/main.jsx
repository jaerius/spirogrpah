import * as React from "react";
import './main.css';
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header/Header";


export default function Main() {

  const navigate = useNavigate();

  return (
    <div className="bg-black font-pretendard">
     <Header/>


    <div className="flex justify-center items-center mt-5 w-full text-sm font-semibold leading-4 text-center text-white whitespace-nowrap bg-black max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-4 w-full max-w-[1589px] max-md:flex-wrap max-md:max-w-full">

        <img
          loading="lazy"
          src="/assets/images/background.png"
          className="w-full  max-md:max-w-full"
        />
      </div>
    </div>

    <div className="text-left text-custom leading-custom self-start mt-24 ml-5 md:w-1/3 text-sm font-medium text-neutral-400  max-md:mt-10 max-md:max-w-full">
    농업에서 인터넷에 이르는 기술의 발전은 인류에게 생존과 편의의 혁명적 변화를 가져왔다. 바퀴의 '속도', 인쇄술의 '지식', 전구의 '빛', 컴퓨터와 인터넷의 '연결'은 우리 문명을 전례 없이 도약시키는 계기가 되었다. 그리고 2024년 현재, 인공지능은 '지능'의 혁명을 예고하며 산업, 의료, 교육 등 삶의 전 영역에 대변혁을 몰고 오고 있다.

    </div>


    <div className="flex justify-end mt-12 w-full max-w-full ml-20">
      <div className="w-2/3">
        <div className="flex justify-between mt-3.5 ml-10">
          <div className="text-custom text-left w-1/2 text-sm font-medium leading-custom text-white">
            <p>
              기하학에서 하이포사이클로이드(hypocycloid)는 큰 
              <span className="underline">원</span> 안에서 작은 원을
              굴렸을 때 작은 원 위의 정점이 그리는 궤적을 말한다. 직선 위에서 원을
              굴렸을 때 얻어지는{" "} 
              <span className="underline">사이클로이드</span>와
              비교된다.
            </p>
          </div>
          <div className="w-1/2 circle-gradient flex items-center justify-center ml-10">
            <p className="text-2xl font-bold underline">
              원 이야기 보러가기 &gt;
            </p>
          </div>
          <div className="w-1/3">
            {/* 또 다른 컨텐츠가 필요하다면 여기에 추가 */}
          </div>
        </div>
      </div>
    </div>

    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/fb52233e6caca20b63d8280ddc250736a21e9ce7751130483c5771b7a598e09b?"
      className="mt-20 w-full stroke-[2px] stroke-white max-md:mt-10 max-md:max-w-full"
    />

    <div className="max-w-0 min-h-0" />

<div className="flex gap-0 self-start mt-2 font-medium leading-4">
      <div className="text-rose-300">
        INCHEON Metropolitan City, <br />
        South KOREA
      </div>
      <div className="text-yellow-100">
        INCHEON Metropolitan City, <br />
        South KOREA
      </div>
      <div className="text-lime-200">
        INCHEON Metropolitan City, <br />
        South KOREA
      </div>
      <div className="text-indigo-300">
        INCHEON Metropolitan City, <br />
        South KOREA
      </div>
      <div className="text-violet-500">
        INCHEON Metropolitan City, <br />
        South KOREA
      </div>
    </div>


      
      <div className="gradient-text">
      <div className="font-black text-center bg-clip-text text-[220px] max-md:text-2xl">
        <div className="gradient-texttext">
        ‘상징‘생성해
        <br />
        드립니다.
        </div>
      </div>
      <button className="gotosymbol" onClick={()=>{navigate('/sketch')}}>
          클릭하여 상징 생성하러 가기 &gt;
        </button>
      </div>
   
      <div className="button-text-main-class">
  <div className="flex gap-5 justify-between self-center px-5 mt-20 w-full text-2xl font-bold max-w-[1512px] text-zinc-100 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
    <div className="button-text-main">
    <div className="button-text justify-center items-center px-16 py-7 whitespace-nowrap rounded-3xl max-md:px-5" style={{ color: '#b4acac' }}>
        브랜드 보러가기 &gt;
      </div>
    </div>
    <div className="button-text-main">
    <div className="button-text justify-center items-center px-16 py-7 whitespace-nowrap rounded-3xl max-md:px-5" style={{ color: '#b4acac' }}>
        브랜드 비지니스 모델 &gt;
    </div>
    </div>
    <div className="button-text-main">
    <div className="button-text justify-center items-center px-16 py-7 whitespace-nowrap rounded-3xl max-md:px-5" style={{ color: '#b4acac' }}>
        상징 판매장
     </div>
    </div>
    <div className="button-text-main">
      <div className="button-text justify-center items-center px-16 py-7 whitespace-nowrap rounded-3xl max-md:px-5" style={{ color: '#b4acac' }}>
        CONTACT
      </div>
    </div>
  </div>
</div>

    

    <div className="flex justify-center items-center px-16 py-1.5 mt-20 w-full text-xs font-bold whitespace-nowrap bg-neutral-900 text-zinc-500 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 justify-between items-center w-full max-w-[1688px] max-md:flex-wrap max-md:max-w-full">
        <div className="self-stretch my-auto text-neutral-400">Cooperation</div>
        <img
          loading="lazy"
          src="/assets/images/underbar6.png"
          className="shrink-0 self-stretch my-auto max-w-full aspect-[5.56] w-[108px]"
        />
        <div
          className="shrink-0 self-stretch my-auto aspect-[2.7] w-[38px] text-neutral-400"
        >PBG</div>
        <img
          loading="lazy"
          src="/assets/images/underbar3.png"
          className="shrink-0 self-stretch my-auto w-11 aspect-[1.3]"
        />
        <img
          loading="lazy"
          src="/assets/images/underbar8.png"
          className="shrink-0 self-stretch my-auto w-11 aspect-[1.22]"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a42bfc30eb6305c7456a0f42dd7fbe1f7ca1ec10490ed4b86f4050ba7559cc0?"
          className="shrink-0 self-stretch my-auto w-10 aspect-[1.59]"
        />
        <img
          loading="lazy"
          src="/assets/images/underbar5.png"
          className="shrink-0 self-stretch my-auto aspect-[0.88] w-[23px]"
        />
        <img
          loading="lazy"
          src="/assets/images/underbar7.png"
          className="shrink-0 self-stretch my-auto aspect-[2.56] w-[66px]"
        />
        <img
          loading="lazy"
          src="/assets/images/underbar4.png"
          className="shrink-0 self-stretch my-auto aspect-[0.93] w-[30px]"
        />
        <img
          loading="lazy"
          src="/assets/images/underbar111.svg"
          className="shrink-0 self-stretch bg-blend-multiply aspect-square w-[41px]"
        />
        <img
          loading="lazy"
          src="/assets/images/underbar12.png"
          className="shrink-0 self-stretch my-auto aspect-[3.85] w-[84px]"
        />
        <img
          loading="lazy"
          src="/assets/images/underbar2.png"
          className="shrink-0 self-stretch my-auto aspect-[1.75] w-[51px]"
        />
      </div>
    </div>

    </div>
  );
}

